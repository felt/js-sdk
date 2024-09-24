import type {
  FeltEmbedOptions,
  ReadViewport,
  ZoomCenterViewport,
} from "./types.js";

export const Felt = {
  embed(
    container: HTMLElement | HTMLIFrameElement,
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

    const isCreatingIframe = container instanceof HTMLIFrameElement;
    const iframe = isCreatingIframe
      ? container
      : document.createElement("iframe");
    iframe.src = url.toString();
    if (isCreatingIframe) {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.style.margin = "0";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      container.appendChild(iframe);
    }

    return Felt.bind(iframe);
  },

  bind(iframe: HTMLIFrameElement): Promise<FeltControl> {
    return makeFeltMap(iframe);
  },
};

type FeltControl = {
  viewport: {
    goto: (params: {
      type: "center";
      viewport: Partial<ZoomCenterViewport>;
    }) => void;

    get: () => Promise<ReadViewport>;

    onMove: (callback: (params: ReadViewport) => void) => void;
  };
};

async function makeFeltMap(iframe: HTMLIFrameElement): Promise<FeltControl> {
  const result: FeltControl = {
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

  return new Promise((resolve) => {
    iframe.onload = () => {
      const messageChannel = new MessageChannel();
      const interval = setInterval(() => {
        iframe.contentWindow?.postMessage({ type: "ready?" }, "*", [
          messageChannel.port2,
        ]);
      }, 100);

      messageChannel.port1.onmessage = (event) => {
        if (event.data === true) {
          clearInterval(interval);
          resolve(result);
        }
      };
    };
  });
}
