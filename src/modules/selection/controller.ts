import { listener, method } from "~/lib/types/interface";
import type { EntityNode } from "./types";

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
 * @internal
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
  getSelection(): Promise<EntityNode[]>;

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
  onSelectionChange(params: {
    handler: (change: {
      /**
       * The new selection. In the case where there are multiple entities selected,
       * the array describes the chronological and semeantic order of the selection.
       *
       * Entities of the same type that are selected later will appear later in the
       * list, but there are cases where multiple entity types can be selected at once,
       * such as elements and features. In this case, the order of the _types_ of entities
       * tells you which are considered more semantically important.
       *
       * For example, if a feature and element are selected, the feature will be at the
       * tail of the list because pressing Escape will deselect the feature first, then
       * pressing Escape again will deselect the element.
       */
      selection: EntityNode[];
    }) => void;
  }): VoidFunction;
}
