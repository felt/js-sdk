// src/index.ts
var Felt = {
  embed(container, mapId, options) {
    const defaultOptions = {
      showLegend: true,
      cooperativeGestures: true,
      fullScreenButton: true,
      geolocation: false,
      zoomControls: true,
      scaleBar: true,
      defaultViewport: void 0,
      origin: "https://felt.com",
    };
    const propToUrlParam = {
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
          const viewport = value;
          urlParams.set(
            propToUrlParam[key],
            `${viewport.latitude},${viewport.longitude},${viewport.zoom}z`
          );
        } else {
          urlParams.set(propToUrlParam[key], value ? "1" : "0");
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
async function makeFeltMap(iframe) {
  const result = {
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
export { Felt };
