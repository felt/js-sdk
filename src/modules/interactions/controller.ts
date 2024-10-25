import { listener } from "~/lib/types/interface";
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
 * @internal
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
   * const unsubscribe = felt.onPointerMove({
   *   handler: (event) => console.log(event.center, event.features),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onPointerMove(params: {
    handler: (event: MapInteractionEvent) => void;
  }): VoidFunction;
}
