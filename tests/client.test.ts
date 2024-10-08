import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Felt, type FeltController } from "../src/client.js";
import { createWindow } from "./window.js";

describe("Embedding an iframe with theFelt SDK", () => {
  let container: HTMLElement;
  let window: Window;
  let document: Document;

  beforeEach(() => {
    window = createWindow();

    document = window.document as unknown as Document;
    container = document.createElement("div");

    // Clear the document body before each test
    document.body.innerHTML = "";

    // Mock createElement to intercept iframe creation
    const originalCreateElement = document.createElement;
    vi.spyOn(document, "createElement").mockImplementation((tagName) => {
      if (tagName.toLowerCase() === "iframe") {
        const mockIframe = originalCreateElement.call(document, tagName);

        Object.defineProperty(mockIframe, "contentWindow", {
          value: window,
        });

        // prevents the iframe from trying to load real windows
        let src: string;
        Object.defineProperty(mockIframe, "src", {
          get() {
            return src;
          },

          set(value: string) {
            src = value;
          },
        });

        return mockIframe;
      }
      return originalCreateElement.call(document, tagName);
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("embed", () => {
    test("should create an iframe and return a controller", async () => {
      const embedPromise = Felt.embed(container, "test-map-id", {
        uiControls: {},
      });

      // Simulate iframe load
      const iframe = container.querySelector("iframe");
      expect(iframe?.src).toContain("https://felt.com/embed/map/test-map-id");

      window.addEventListener("message", (event) => {
        if (event.data.type === "felt.ready") {
          event.ports[0]?.postMessage(true);
        }
      });

      iframe?.dispatchEvent(new Event("load"));

      const controller = await embedPromise;
      expect(controller).toBeTruthy();
      expect(controller.viewport).toBeTruthy();
      expect(controller.ui).toBeTruthy();
    });

    test("should set correct iframe attributes", async () => {
      Felt.embed(container, "test-map-id");

      const iframe = container.querySelector("iframe") as HTMLIFrameElement;
      expect(iframe.style.width).toBe("100%");
      expect(iframe.style.height).toBe("100%");
      expect(iframe.style.border).toBe("none none");
      expect(iframe.style.margin).toBe("0px");
      expect(iframe.referrerPolicy).toBe("strict-origin-when-cross-origin");
    });

    test("should handle custom options", async () => {
      const options = {
        uiControls: {
          showLegend: false,
          zoomControls: false,
        },
        initialViewport: {
          center: { latitude: 40, longitude: -74 },
          zoom: 10,
        },
        origin: "https://example.com",
      };

      Felt.embed(container, "test-map-id", options);

      const iframe = container.querySelector("iframe") as HTMLIFrameElement;
      const url = new URL(iframe.src);

      expect(url.origin).toBe("https://example.com");
      expect(url.searchParams.get("legend")).toBe("0");
      expect(url.searchParams.get("zoomControls")).toBe("0");
      expect(url.searchParams.get("loc")).toBe("40,-74,10z");
    });
  });

  describe("controller types", () => {
    // These tests don't do anything in runtime, but they make sure that the types
    // are correct. Errors should be caught by the TypeScript compiler, ensuring
    // that the types are strict.
    test("incorrect params are caught by the compiler", async () => {
      const controller = {
        viewport: {
          goto: () => {},
          get: async () => ({}),
          onMove(args: unknown) {
            return () => {};
          },
        },
      } as unknown as FeltController;

      // @ts-expect-error whatever is not a module
      controller.whatever;

      const viewportController = controller.viewport;

      // @ts-expect-error missing params entirely
      viewportController.goto();

      // @ts-expect-error missing params fields
      viewportController.goto({});

      // @ts-expect-error incorrect param type
      viewportController.goto({ type: "wrong" });

      viewportController.goto({
        type: "center",
        location: {
          zoom: 10,
          // @ts-expect-error - this is an extraneous param
          lat: 0,
        },
      });

      // @ts-expect-error method does not exist
      viewportController.foo?.();

      const r = await viewportController.get();

      // @ts-expect-error it's not an array
      r[0];

      // @ts-expect-error checking non-existent property
      r.foo?.["some-id"];

      // @ts-expect-error missing params
      viewportController.onMove({});

      // @ts-expect-error handler is not a function
      viewportController.onMove({ handler: "not a function" });

      // @ts-expect-error extraneous params
      viewportController.onMove({ handler: () => {}, extra: "stuff" });
    });
  });
});
