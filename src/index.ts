type FeltEmbedOptions = {
  origin?: string;
  showLegend?: boolean;
  cooperativeGestures?: boolean;
  fullScreenButton?: boolean;
  geolocation?: boolean;
  zoomControls?: boolean;
  scaleBar?: boolean;
  defaultViewport?: {
    zoom: number;
    latitude: number;
    longitude: number;
  };
};

export const Felt = {
  embed(
    container: HTMLElement,
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
      defaultViewport: undefined,
      origin: "https://felt.com",
    };

    const propToUrlParam: Record<keyof FeltEmbedOptions, string> = {
      origin: "origin",
      showLegend: "legend",
      cooperativeGestures: "cooperativeGestures",
      fullScreenButton: "link",
      geolocation: "geolocation",
      zoomControls: "zoomControls",
      scaleBar: "scaleBar",
      defaultViewport: "loc",
    };

    const urlParams = new URLSearchParams();

    const finalOptions = { ...defaultOptions, ...options };
    for (const [key, value] of Object.entries(finalOptions)) {
      if (value != null && key !== "origin") {
        if (key === "defaultViewport") {
          const viewport = value as NonNullable<
            FeltEmbedOptions["defaultViewport"]
          >;
          urlParams.set(
            propToUrlParam[key as keyof FeltEmbedOptions],
            `${viewport.latitude},${viewport.longitude},${viewport.zoom}z`
          );
        } else {
          urlParams.set(
            propToUrlParam[key as keyof FeltEmbedOptions],
            value ? "1" : "0"
          );
        }
      }
    }

    const iframe = document.createElement("iframe");
    iframe.src = `${finalOptions.origin}/embed/map/${mapId}?${urlParams.toString()}`;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.margin = "0";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    container.appendChild(iframe);

    return makeFeltMap(iframe);
  },
};

type FeltControl = {
  viewport: {
    goto: (params: {
      type: "center";
      center?: {
        latitude: number;
        longitude: number;
      };
      zoom?: number;
    }) => void;

    get: () => Promise<{
      center: {
        latitude: number;
        longitude: number;
      };
      zoom: number;
      bounds: [number, number, number, number];
    }>;

    onMove: (
      callback: (params: {
        center: {
          latitude: number;
          longitude: number;
        };
        zoom: number;
      }) => void
    ) => void;
  };
};

async function makeFeltMap(iframe: HTMLIFrameElement): Promise<FeltControl> {
  const result: FeltControl = {
    viewport: {
      goto: (params: {
        type: "center";
        center?: {
          latitude: number;
          longitude: number;
        };
        zoom?: number;
      }) => {
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

      onMove: (
        callback: (params: {
          center: {
            latitude: number;
            longitude: number;
          };
          zoom: number;
        }) => void
      ) => {
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
