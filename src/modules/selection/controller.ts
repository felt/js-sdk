import { listener, method } from "~/lib/types/interface";
import type { EntityIdentifier, SelectionChangeParams } from "./types";

/**
 * @ignore
 */
export const selectionController = (
  feltWindow: Window,
): SelectionController => ({
  onSelectionChange: listener(feltWindow, "onSelectionChange"),
  getSelection: method(feltWindow, "getSelection"),
});

/**
 * The Selection controller allows you to listen for changes to the selection on the map.
 *
 * @group Selection
 * @public
 */
export interface SelectionController {
  /**
   * Gets the current selection as a list of entity identifiers.
   *
   * @example
   * ```typescript
   * const selection = await felt.getSelection();
   * ```
   */
  getSelection(): Promise<EntityIdentifier[]>;

  /**
   * Adds a listener for when the selection changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onSelectionChange({
   *   handler: ({selection}) => console.log(selection),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onSelectionChange(params: SelectionChangeParams): VoidFunction;
}
