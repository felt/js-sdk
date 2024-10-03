// src/types/interface.ts
function listener(feltWindow, eventName) {
  return (callback) => {
    const messageChannel = new MessageChannel();
    const id = crypto.randomUUID();
    feltWindow.postMessage(
      { type: `felt.addListener`, event: { eventName, id } },
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
      feltWindow.postMessage({ type: `felt.removeListener`, id }, "*");
    };
  };
}
function command(feltWindow, type) {
  return (params) => {
    feltWindow.postMessage({ type, params }, "*");
  };
}
function query(feltWindow, type) {
  return (params) => {
    const messageChannel = new MessageChannel();
    feltWindow.postMessage({ type, params }, "*", [messageChannel.port2]);
    return new Promise((resolve) => {
      messageChannel.port1.onmessage = (event) => {
        resolve(event.data);
        messageChannel.port1.close();
        messageChannel.port2.close();
      };
    });
  };
}

// src/utils.ts
var entries = Object.entries;

// src/client.ts
var Felt = {
  embed(container, mapId, options) {
    const defaultOptions = {
      uiControls: {
        showLegend: true,
        cooperativeGestures: true,
        fullScreenButton: true,
        geolocation: false,
        zoomControls: true,
        scaleBar: true
      },
      initialViewport: void 0,
      origin: "https://felt.com"
    };
    const propToUrlParam = {
      showLegend: "legend",
      cooperativeGestures: "cooperativeGestures",
      fullScreenButton: "link",
      geolocation: "geolocation",
      zoomControls: "zoomControls",
      scaleBar: "scaleBar"
    };
    const uiControlsOptions = {
      ...defaultOptions.uiControls,
      ...options?.uiControls
    };
    const origin = options?.origin ?? defaultOptions.origin;
    const url = new URL(`${origin}/embed/map/${mapId}`);
    for (const [key, value] of entries(uiControlsOptions)) {
      if (value == null) continue;
      url.searchParams.set(propToUrlParam[key], value ? "1" : "0");
    }
    if (options?.initialViewport) {
      const vp = options.initialViewport;
      url.searchParams.set(
        "loc",
        `${vp.center.latitude},${vp.center.longitude},${vp.zoom}z`
      );
    }
    const containerIsIframe = container instanceof HTMLIFrameElement;
    const iframe = containerIsIframe ? container : document.createElement("iframe");
    iframe.src = url.toString();
    if (!containerIsIframe) {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.style.margin = "0";
      container.appendChild(iframe);
    }
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    return new Promise((resolve, reject) => {
      iframe.onload = () => {
        if (iframe.contentWindow == null) {
          reject(new Error("Failed to load Felt map"));
        } else {
          resolve(iframe.contentWindow);
        }
      };
    }).then(Felt.control).then((controller) => {
      const iframeController = controller;
      Object.defineProperties(iframeController, {
        iframe: {
          value: iframe,
          writable: false,
          configurable: false
        }
      });
      return iframeController;
    });
  },
  /**
   * Binds to an existing Felt map iframe.
   *
   * @param feltWindow - The iframe element containing the Felt map.
   * @returns
   */
  control(feltWindow) {
    const controller = makeController(feltWindow);
    return new Promise((resolve, reject) => {
      const failureTimeout = setTimeout(() => {
        reject(new Error("Failed to load Felt map"));
        clearInterval(interval);
      }, 5e3);
      const messageChannel = new MessageChannel();
      const interval = setInterval(() => {
        feltWindow.postMessage({ type: "felt.ready" }, "*", [
          messageChannel.port2
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
  }
};
function makeController(feltWindow) {
  return {
    viewport: {
      goto: command(feltWindow, "viewport.goto"),
      get: query(feltWindow, "viewport.get"),
      onMove: listener(feltWindow, "viewport.move")
    },
    ui: {
      update: command(feltWindow, "ui_controls.update")
    }
  };
}
export {
  Felt
};
