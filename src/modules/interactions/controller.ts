import { listener } from "~/lib/interface";
import type { MapInteractionEvent } from "./types";

/**
 * @ignore
 */
export const interactionsController = (
  feltWindow: Window,
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
   * Allows you to be notified the user clicks on the map.
   *
   * @returns A function to unsubscribe from the listener
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
   * Allows you to be notified the user moves the mouse over the map.
   *
   * @returns A function to unsubscribe from the listener
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
