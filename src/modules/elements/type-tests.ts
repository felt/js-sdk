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

    // @ts-expect-error: options are missing
    sdk.onElementDelete({
      handler: () => {},
    });

    sdk.onElementDelete({
      handler: () => {},
      // @ts-expect-error: id should be a string
      options: { id: 5 },
    });

    sdk.onElementDelete({
      // @ts-expect-error: there are no args to onElementDelete handler
      handler: (arg) => {},
      // @ts-expect-error: id is missing
      options: {},
    });
  },
};
