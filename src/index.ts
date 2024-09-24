import type {
  FeltEmbedOptions,
  GeoPoint,
  ReadViewport,
  ZoomCenterViewport,
} from "./types.js";

/**
 * The Felt SDK is a library for embedding Felt maps into your website,
 * allowing you to control and inspect the map programmatically.
 *
 * @public
 */
export const Felt = {
  /**
   * Embeds a Felt map into the provided container.
   *
   * @param container - The container element to embed the map into.
   * @param mapId - The ID of the map to embed.
   * @param options - The options to configure the map.
   * @returns
   */
  embed(
    container: Exclude<HTMLElement, HTMLIFrameElement>,
    mapId: string,
    options?: FeltEmbedOptions
  ): Promise<FeltControl> {
    const defaultOptions: FeltEmbedOptions = {
      showLegend: true,
      cooperativeGestures: true,
      fullScreenButton: true,
      geolocation: false,
      zoomControls: true,
      scaleBar: true,
      initialViewport: undefined,
      origin: "https://felt.com",
    };

    const propToUrlParam: Record<keyof FeltEmbedOptions, string> = {
      origin: "",
      showLegend: "legend",
      cooperativeGestures: "cooperativeGestures",
      fullScreenButton: "link",
      geolocation: "geolocation",
      zoomControls: "zoomControls",
      scaleBar: "scaleBar",
      initialViewport: "loc",
    };

    const finalOptions = { ...defaultOptions, ...options };
    const url = new URL(`${finalOptions.origin}/embed/map/${mapId}`);

    for (const [key, value] of Object.entries(finalOptions)) {
      if (key === "origin") continue;
      if (value == null) continue;

      if (key === "defaultViewport") {
        const viewport = value as NonNullable<
          FeltEmbedOptions["initialViewport"]
        >;
        url.searchParams.set(
          propToUrlParam[key as keyof FeltEmbedOptions],
          `${viewport.center.latitude},${viewport.center.longitude},${viewport.zoom}z`
        );
      } else {
        url.searchParams.set(
          propToUrlParam[key as keyof FeltEmbedOptions],
          value ? "1" : "0"
        );
      }
    }

    const containerIsIframe = container instanceof HTMLIFrameElement;
    const iframe = containerIsIframe
      ? container
      : document.createElement("iframe");
    iframe.src = url.toString();
    if (!containerIsIframe) {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.style.margin = "0";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      container.appendChild(iframe);
    }

    return Felt.control(iframe);
  },

  /**
   * Binds to an existing Felt map iframe.
   *
   * @param iframe - The iframe element containing the Felt map.
   * @returns
   */
  control(iframe: HTMLIFrameElement): Promise<FeltControl> {
    return makeFeltMap(iframe);
  },
};

/**
 * The FeltControl object allows you to control and inspect the map. The various ways
 * to interact with the map are namespaced within the object for clarity.
 *
 * @public
 */
type FeltControl = {
  /**
   * The iframe element containing the Felt map.
   */
  iframe: HTMLIFrameElement;

  /**
   * The viewport controller allows you to control the viewport of the map.
   */
  viewport: ViewportController;
};

type ViewportController = {
  /**
   /**
   * Moves the viewport to the specified location and zoom level.
   *
   * @param params - The parameters for the viewport move.
   * @param params.type - The type of move, which is "center" in this case.
   * @param params.viewport - The viewport settings including the center point and zoom level.
   * @returns void
   */
  goto: (params: {
    type: "center";
    viewport: Partial<ZoomCenterViewport>;
  }) => void;

  /**
   * Retrieves the current viewport of the map.
   *
   * @returns A promise that resolves to the current viewport settings.
   */
  get: () => Promise<ReadViewport>;

  /**
   * Registers a callback function to be called when the viewport moves.
   *
   * @example
   * ```ts
   * const unsub = felt.viewport.onMove((viewport) => {
   *   console.log(viewport);
   * });
   *
   * // later
   * unsub();
   * ```
   *
   * @param callback - The callback function to be called when the viewport moves.
   * @returns A function to remove the event listener.
   */
  onMove: (callback: (params: ReadViewport) => void) => void;
};

async function makeFeltMap(iframe: HTMLIFrameElement): Promise<FeltControl> {
  const result: FeltControl = {
    get iframe() {
      return iframe;
    },

    viewport: {
      goto: (params) => {
        iframe.contentWindow?.postMessage(
          { type: "viewport.goto", params },
          "*"
        );
      },

      get: () => {
        const messageChannel = new MessageChannel();
        iframe.contentWindow?.postMessage({ type: "viewport.get" }, "*", [
          messageChannel.port2,
        ]);

        return new Promise((resolve) => {
          messageChannel.port1.onmessage = (event) => {
            resolve(event.data);
          };
        });
      },

      onMove: (callback) => {
        const messageChannel = new MessageChannel();

        const id = crypto.randomUUID();
        iframe.contentWindow?.postMessage(
          { type: "addListener", event: "viewport.move", id },
          "*",
          [messageChannel.port2]
        );

        messageChannel.port1.onmessage = (event) => {
          callback(event.data);
        };

        return () => {
          messageChannel.port1.onmessage = null;
          messageChannel.port1.close();
          messageChannel.port2.close();
          iframe.contentWindow?.postMessage(
            { type: "removeListener", id },
            "*"
          );
        };
      },
    },
  };

  return new Promise((resolve, reject) => {
    iframe.onload = () => {
      const failureTimeout = setTimeout(() => {
        reject(new Error("Failed to load Felt map"));
        clearInterval(interval);
      }, 5_000);

      const messageChannel = new MessageChannel();
      const interval = setInterval(() => {
        iframe.contentWindow?.postMessage({ type: "ready?" }, "*", [
          messageChannel.port2,
        ]);
      }, 100);

      messageChannel.port1.onmessage = (event) => {
        if (event.data === true) {
          clearInterval(interval);
          clearTimeout(failureTimeout);
          resolve(result);
        }
      };
    };
  });
}

export type {
  FeltControl,
  FeltEmbedOptions,
  GeoPoint,
  ReadViewport,
  ZoomCenterViewport,
};
