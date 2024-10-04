import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Felt } from "../src/client.js";
import { createMessageHandler } from "../src/handler.js";
import { createWindow } from "./window.js";

type Methods = Parameters<typeof createMessageHandler>[1]["methods"];
type Listeners = Parameters<typeof createMessageHandler>[1]["listeners"];

describe("Felt SDK integration", () => {
  let window: Window;
  let tearDown: VoidFunction;

  // Allow partial sets of methods and listeners because otherwise we would need to
  // keep adding more methods and listeners as we add more functionality to the SDK.
  // We really want to test that the messaging protocol works - if we know that it
  // works for each type of message then we can trust that it will work for the
  // functionality that we build on top of it.
  let methods: Methods;
  let listeners: Partial<Listeners>;

  const onInvalidMessage = vi.fn();
  const onUnknownMessage = vi.fn();

  beforeEach(() => {
    window = createWindow();

    methods = {
      "ui_controls.update": () => {},
      "viewport.goto": () => {},
      "viewport.get": async () => {
        return {
          center: {
            latitude: 0,
            longitude: 0,
          },
          zoom: 0,
          bounds: [0, 0, 0, 0],
        };
      },
    };

    listeners = {
      "viewport.move": (callback) => {
        function handleClick() {
          callback({
            center: {
              latitude: 0,
              longitude: 0,
            },
            zoom: 0,
            bounds: [0, 0, 0, 0],
          });
        }

        window.addEventListener("click", handleClick);

        return () => {
          window.removeEventListener("click", handleClick);
        };
      },
    };

    tearDown = createMessageHandler(
      window,
      {
        methods: methods as Methods,
        listeners: listeners as Listeners,
      },
      {
        onInvalidMessage,
        onUnknownMessage,
      },
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
    tearDown();
  });

  test("queries work", async () => {
    const client = await Felt.control(window);

    expect(client.viewport.get()).resolves.toEqual({
      center: {
        latitude: 0,
        longitude: 0,
      },
      zoom: 0,
      bounds: [0, 0, 0, 0],
    });
  });

  test("commands work", async () => {
    const client = await Felt.control(window);

    vi.spyOn(methods, "viewport.goto");

    await client.viewport.goto({
      type: "center",
      location: {
        center: {
          latitude: 1,
          longitude: 1,
        },
        zoom: 1,
      },
    });

    expect(methods["viewport.goto"]).toHaveBeenCalledWith({
      type: "center",
      location: {
        center: {
          latitude: 1,
          longitude: 1,
        },
        zoom: 1,
      },
    });
  });

  test("listeners work", async () => {
    const client = await Felt.control(window);

    const spy = vi.fn();

    const unsub = client.viewport.onMove(spy);

    window.dispatchEvent(new Event("click"));
    // Wait for the event to be processed
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });

    window.dispatchEvent(new Event("click"));

    // Wait for the event to be processed
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });

    expect(spy).toHaveBeenCalledTimes(2);

    unsub();

    window.dispatchEvent(new Event("click"));
    // Wait for the event to be processed
    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });

    // The listener should not be called again because we unsubscribed
    expect(spy).toHaveBeenCalledTimes(2);
  });

  // Because window.postMessage is "public", messages of all types are possible.
  // We get messages from webpack, react-dev-tools, etc. which we don't want to
  // report in the same way as messages that are Felt SDK messages that have
  // invalid payloads.
  test("Unknown messages are handled", async () => {
    await Felt.control(window);
    window.postMessage({ type: "foo" });

    expect(onUnknownMessage).toHaveBeenCalledOnce();
    expect(onInvalidMessage).not.toHaveBeenCalled();
  });

  test("Invalid messages are handled", async () => {
    await Felt.control(window);

    window.postMessage({
      // the type field is correct but other fields are wrong
      type: "viewport.goto",
      params: {},
    });

    expect(onUnknownMessage).not.toHaveBeenCalled();
    expect(onInvalidMessage).toHaveBeenCalledOnce();
  });

  test("All client messages are handled", async () => {
    const client = await Felt.control(window);

    // iterate through all the functions in the client, calling them
    // and making sure that we don't get any unknown messages
    Object.values(client).forEach((namespace) => {
      Object.values(namespace).forEach((fn) => {
        (fn as VoidFunction)();
      });
    });

    expect(onUnknownMessage).not.toHaveBeenCalled();
  });
});
