import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { Felt, type IsochroneParams } from "~/client";

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

  const isochrone: IsochroneParams = {
    origin: [-122.27, 37.8],
    mode: "driving",
    minutes: 15,
  };

  test("Isochrone polygons are created without coordinates", async () => {
    const createElement = vi.fn().mockResolvedValue(null);
    (methods as any).createElement = createElement;
    const client = await Felt.connect(window);

    await client.createElement({ type: "Polygon", isochrone });

    expect(createElement).toHaveBeenCalledWith({ type: "Polygon", isochrone });
  });

  test("Polygons need coordinates or an isochrone", async () => {
    const client = await Felt.connect(window);
    await expect(
      // @ts-expect-error: a Polygon needs coordinates or an isochrone
      client.createElement({ type: "Polygon" }),
    ).rejects.toThrowError(
      "A Polygon needs either coordinates or an isochrone",
    );
  });

  test("Polygons can't have both coordinates and an isochrone", async () => {
    const client = await Felt.connect(window);
    await expect(
      client.createElement({
        type: "Polygon",
        coordinates: [
          [
            [0, 0],
            [0, 1],
            [1, 1],
            [0, 0],
          ],
        ],
        // @ts-expect-error
        isochrone,
      }),
    ).rejects.toThrowError(
      "A Polygon needs either coordinates or an isochrone",
    );
  });

  test("Isochrone minutes must be at most 120", async () => {
    const client = await Felt.connect(window);
    await expect(
      client.createElement({
        type: "Polygon",
        isochrone: { ...isochrone, minutes: 121 },
      }),
    ).rejects.toThrowError("less than or equal to 120");
  });
});
