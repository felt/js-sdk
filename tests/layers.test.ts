import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Felt } from "~/client";

import { createMessageHandler } from "~/handler";
import type { LayerCapability } from "~/modules/layers/types";
import { createWindow } from "./window";

type Methods = Parameters<typeof createMessageHandler>[1]["methods"];
type Listeners = Parameters<typeof createMessageHandler>[1]["listeners"];

describe("Layer tests", () => {
  let window: Window;
  let tearDown: VoidFunction;

  let methods: Partial<Methods>;
  let listeners: Partial<Listeners>;

  const onInvalidMessage = vi.fn();
  const onUnknownMessage = vi.fn();

  beforeEach(() => {
    window = createWindow();

    methods = {};
    listeners = {};

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

  test("getLayerCapabilities passes the layer id and returns the capabilities", async () => {
    const capabilities: Array<LayerCapability> = [
      "serverPersistence",
      "serverQuery",
      "serverStats",
    ];
    const handler = vi.fn(() => capabilities);
    methods.getLayerCapabilities = handler;

    const client = await Felt.connect(window);

    await expect(client.getLayerCapabilities("layer-1")).resolves.toEqual(
      capabilities,
    );
    expect(handler).toHaveBeenCalledWith("layer-1");
    expect(onUnknownMessage).not.toHaveBeenCalled();
    expect(onInvalidMessage).not.toHaveBeenCalled();
  });

  test("getLayerCapabilities requires a layer id", async () => {
    const client = await Felt.connect(window);

    await expect(
      // @ts-expect-error -- the layer id must be a string
      client.getLayerCapabilities(1),
    ).rejects.toThrowError("Expected string, received number");
    expect(onInvalidMessage).toHaveBeenCalledOnce();
  });

  test("getLayerCapabilities surfaces handler errors as rejections", async () => {
    methods.getLayerCapabilities = () => {
      throw new Error("Layer layer-1 does not support serverQuery");
    };

    const client = await Felt.connect(window);

    await expect(client.getLayerCapabilities("layer-1")).rejects.toThrow(
      "Layer layer-1 does not support serverQuery",
    );
  });
});
