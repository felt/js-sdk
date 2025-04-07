import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Felt } from "~/client";

import { createMessageHandler } from "~/handler";
import { createWindow } from "./window";

type Methods = Parameters<typeof createMessageHandler>[1]["methods"];
type Listeners = Parameters<typeof createMessageHandler>[1]["listeners"];

describe("Element tests", () => {
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

  test("Paths must have at least two coordinates", async () => {
    const client = await Felt.connect(window);
    await expect(
      client.createElement({
        type: "Path",
        coordinates: [[[0, 0]]],
      }),
    ).rejects.toThrowError("must contain at least 2 element(s)");
  });

  test("Polygons must have at least 4 coordinates", async () => {
    const client = await Felt.connect(window);
    await expect(
      client.createElement({
        type: "Polygon",
        coordinates: [
          [
            [0, 0],
            [0, 0],
            [0, 0],
          ],
        ],
      }),
    ).rejects.toThrowError("must contain at least 4 element(s)");
  });

  test("Polygons must be closed", async () => {
    const client = await Felt.connect(window);
    await expect(
      client.createElement({
        type: "Polygon",
        coordinates: [
          [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 0],
          ],
        ],
      }),
    ).rejects.toThrowError(
      "The last point of each ring must be identical to the first",
    );
  });
});
