import { listener } from "~/lib/interface";
import type { MapInteractionEvent } from "./types";

/**
 * @ignore
 */
export const interactionsController = (
  feltWindow: Pick<Window, "postMessage">,
): InteractionsController => ({
  onPointerClick: listener(feltWindow, "onPointerClick"),
  onPointerMove: listener(feltWindow, "onPointerMove"),
});

/**
 * The Interactions controller allows you to observe interactions with the map
 *
 * @group Controller
 * @public
 */
export interface InteractionsController {
  /**
   * Allows you to be notified when the user clicks on the map.
   *
   * Use this to react to user clicks on the map, such as triggering custom
   * actions or collecting interaction data.
   *
   * @returns A function to unsubscribe from the listener.
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onPointerClick({
   *   handler: (event) => console.log(event.center, event.features),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onPointerClick(params: {
    handler: (event: MapInteractionEvent) => void;
  }): VoidFunction;

  /**
   * Allows you to be notified when the user moves the mouse over the map.
   *
   * Use this to track mouse movement and detect features under the cursor,
   * such as for hover effects or real-time data display.
   *
   * @returns A function to unsubscribe from the listener.
   *
   * @event
   * @example
   * ```typescript
   * // Track mouse movement and features under cursor
   * const unsubscribe = felt.onPointerMove({
   *   handler: (event) => {
   *     console.log("Mouse position:", event.center);
   *     console.log("Features under cursor:", event.features);
   *   }
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onPointerMove(
    /**
     * Params for the listener
     */
    params: {
      /**
       * The handler function
       */
      handler: (event: MapInteractionEvent) => void;
    },
  ): VoidFunction;
}
