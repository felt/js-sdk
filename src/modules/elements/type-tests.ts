import type { ElementsController } from "./controller";

const sdk = {} as ElementsController;

export const elementsControllerTypeTests = {
  onElementCreate() {
    const unsub = sdk.onElementCreate({
      handler: (change) => {
        if (change.element?.type === "Circle") {
          // @ts-expect-error: type has narrowed to Circle where zoom doesn't exist
          change.element.zoom;

          // Circles have a radius
          change.element.radius;
        }

        // @ts-expect-error: Rectangle is not a type of Element
        if (change.element?.type === "Rectangle") {
        }
      },
      // @ts-expect-error: options not required
      options: {},
    });
    unsub();

    // @ts-expect-error: handler is missing
    sdk.onElementCreate({});
  },

  onDeleteElement() {
    const unsub = sdk.onElementDelete({
      handler: () => {},
      options: { id: "123" },
    });
    unsub();

    // without options is allowed
    sdk.onElementDelete({
      handler: (_arg: { id: string }) => {},
    });

    sdk.onElementDelete({
      handler: () => {},
      // @ts-expect-error: id should be a string
      options: { id: 5 },
    });

    sdk.onElementDelete({
      // @ts-expect-error: id should be a string
      handler: (_arg: { id: number }) => {},

      // without ID is ok
      options: {
        // @ts-expect-error: egg is not a valid option
        egg: "bacon",
      },
    });
  },
};
