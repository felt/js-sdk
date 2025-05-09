import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Felt } from "~/client";

import { createMessageHandler } from "~/handler";
import type { ViewportState } from "~/modules/viewport/types";
import { createWindow } from "./window";

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
  let methods: Partial<Methods>;
  let listeners: Partial<Listeners>;

  const onInvalidMessage = vi.fn();
  const onUnknownMessage = vi.fn();

  const fakeViewportState: ViewportState = {
    center: {
      latitude: 0,
      longitude: 0,
    },
    zoom: 0,
    bounds: [0, 0, 0, 0],
  };

  beforeEach(() => {
    window = createWindow();

    methods = {
      updateUiControls: () => {},
      setViewport: () => {},
      getViewport: () => fakeViewportState,
    };

    listeners = {
      onViewportMove: ({ handler }) => {
        function handleClick() {
          handler(fakeViewportState);
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
        methods: methods as unknown as Methods,
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

  test("sync methods work", async () => {
    const client = await Felt.connect(window);

    expect(client.getViewport()).resolves.toEqual(fakeViewportState);
  });

  test("async methods work", async () => {
    methods.getViewport = () => Promise.resolve(fakeViewportState);
    const client = await Felt.connect(window);

    expect(client.getViewport()).resolves.toEqual(fakeViewportState);
  });

  test("void methods work", async () => {
    const client = await Felt.connect(window);

    // this "any" prevents TypeScript "excessively deep or possibly infinite" error
    vi.spyOn(methods as any, "setViewport");

    await client.setViewport({
      center: {
        latitude: 1,
        longitude: 1,
      },
      zoom: 1,
    });

    expect(methods.setViewport).toHaveBeenCalledWith({
      center: {
        latitude: 1,
        longitude: 1,
      },
      zoom: 1,
    });
  });

  test("listeners work", async () => {
    const client = await Felt.connect(window);

    const spy = vi.fn();

    const unsub = client.onViewportMove({ handler: spy });

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
    await Felt.connect(window);
    window.postMessage({ type: "foo" });

    expect(onUnknownMessage).toHaveBeenCalledOnce();
    expect(onInvalidMessage).not.toHaveBeenCalled();
  });

  test("Invalid messages are handled", async () => {
    await Felt.connect(window);

    window.postMessage({
      type: "setViewport",
      // longitude is missing
      params: { center: { latitude: 0 } },
    });

    expect(onUnknownMessage).not.toHaveBeenCalled();
    expect(onInvalidMessage).toHaveBeenCalledOnce();
  });

  test("No client messages are considered unknown", async () => {
    const client = await Felt.connect(window);

    // iterate through all the functions in the client, calling them
    // and making sure that we don't get any unknown messages
    Object.values(client).forEach(async (fn) => {
      try {
        // @ts-expect-error -- we need to pass some object that can be destructured in
        // our handlers - we don't actually need to do anything with it, but we need to
        // pass **something**.
        await (fn as VoidFunction)?.({});
      } catch (e) {}
    });

    expect(onUnknownMessage).not.toHaveBeenCalled();
  });

  test("Errors in method handlers turn into promise rejections", async () => {
    methods.getViewport = () => {
      throw new Error("test error");
    };

    const client = await Felt.connect(window);
    await expect(client.getViewport()).rejects.toThrow("test error");
  });
});
