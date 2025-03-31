/**
 * Use the {@link Felt} object to embed a new iframe, or connect to an existing embedded
 * iframe.
 *
 * Once you have connected to a Felt map (either by embedding or connecting to an existing
 * iframe), you can use the {@link FeltController} object to control the map.
 *
 * To see what you can do with the map, see the documentation for the {@link FeltController}
 * interface and its constituent controllers.
 *
 * @example
 * ```typescript
 * // embed the map
 * const map = await Felt.embed(container, "felt-map-abc-123");
 *
 * // now the map is loaded and connected, you can use the FeltController interface
 * // to control the map. For instance, to get information about the layers
 * const layers = await map.getLayers();
 *
 * // Or to set the viewport to a specific location and zoom level
 * await map.setViewport({
 *   center: { latitude: 37.8113, longitude: -122.2682 },
 *   zoom: 10,
 * });
 * ```
 *
 * @module Main
 */

import { type FeltController, makeController } from "./controller";
import type { FeltEmbedOptions } from "./types";

/**
 * The Felt SDK is a library for embedding Felt maps into your website,
 * allowing you to control and inspect the map programmatically.
 *
 * @public
 *
 * @group Instantiation
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
  embed(container: HTMLElement, mapId: string, options?: FeltEmbedOptions) {
    const defaultOptions: FeltEmbedOptions = {
      uiControls: {
        showLegend: true,
        cooperativeGestures: true,
        fullScreenButton: true,
        geolocation: false,
        zoomControls: true,
        scaleBar: true,
      },
      initialViewport: undefined,
      origin: "https://felt.com",
    };

    const origin = options?.origin ?? defaultOptions.origin;
    const url = new URL(`${origin}/embed/map/${mapId}`);

    // add uiControls params to the URL
    const propToUrlParam: Record<
      keyof NonNullable<FeltEmbedOptions["uiControls"]>,
      string
    > = {
      showLegend: "legend",
      cooperativeGestures: "cooperativeGestures",
      fullScreenButton: "link",
      geolocation: "geolocation",
      zoomControls: "zoomControls",
      scaleBar: "scaleBar",
    };

    const uiControlsOptions = {
      ...defaultOptions.uiControls,
      ...options?.uiControls,
    };
    for (const [key, value] of entries(uiControlsOptions)) {
      if (value == null) continue;
      url.searchParams.set(propToUrlParam[key], value ? "1" : "0");
    }

    // add auth token param to the URL
    if (options?.token) {
      url.searchParams.set("token", options.token);
    }

    // add initial viewport param to the URL
    if (options?.initialViewport) {
      const vp = options.initialViewport;
      url.searchParams.set(
        "loc",
        `${vp.center.latitude},${vp.center.longitude},${vp.zoom}z`,
      );
    }

    const containerIsIframe = container.tagName === "IFRAME";
    const iframe = (
      containerIsIframe
        ? container
        : container.ownerDocument.createElement("iframe")
    ) as HTMLIFrameElement;
    iframe.src = url.toString();

    if (!containerIsIframe) {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.style.margin = "0";
      container.appendChild(iframe);
    }

    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    return new Promise<Window>((resolve, reject) => {
      iframe.addEventListener(
        "load",
        () => {
          if (iframe.contentWindow == null) {
            reject(new Error("Failed to load Felt map"));
          } else {
            resolve(iframe.contentWindow);
          }
        },
        { once: true },
      );
    })
      .then(Felt.connect)
      .then((controller) => {
        Object.defineProperties(controller, {
          iframe: {
            value: iframe,
            writable: false,
            configurable: false,
          },
        });

        return controller;
      });
  },

  /**
   * Binds to an existing Felt map iframe.
   *
   * @param feltWindow - The iframe element containing the Felt map.
   * @returns
   */
  connect(feltWindow: Pick<Window, "postMessage">): Promise<FeltController> {
    const controller = makeController(feltWindow);

    return new Promise((resolve, reject) => {
      const failureTimeout = setTimeout(() => {
        reject(new Error("Failed to load Felt map"));
        clearInterval(interval);
      }, 5_000);

      const messageChannel = new MessageChannel();
      const interval = setInterval(() => {
        feltWindow.postMessage({ type: "felt.ready" }, "*", [
          messageChannel.port2,
        ]);
      }, 100);

      messageChannel.port1.onmessage = (event) => {
        if (event.data === true) {
          clearInterval(interval);
          clearTimeout(failureTimeout);
          messageChannel.port1.close();
          messageChannel.port2.close();
          resolve(controller);
        }
      };
    });
  },
};

export type { FeltController, FeltEmbedOptions };

/**
 * A stricter, more type-safe version of Object.entries that preserves the
 * type of the Object's keys instead of widening them to string.
 */
const entries = Object.entries as <T extends object>(
  obj: T,
) => Array<[Exclude<keyof T, number>, T[keyof T]]>;
