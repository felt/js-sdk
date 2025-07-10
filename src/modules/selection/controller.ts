import { listener, method } from "~/lib/interface";
import type { EntityNode, FeatureSelection } from "./types";

/**
 * @ignore
 */
export const selectionController = (
  feltWindow: Pick<Window, "postMessage">,
): SelectionController => ({
  onSelectionChange: listener(feltWindow, "onSelectionChange"),
  getSelection: method(feltWindow, "getSelection"),
  selectFeature: method(feltWindow, "selectFeature"),
  clearSelection: method(feltWindow, "clearSelection"),
});

/**
 * The Selection controller allows you to listen for changes to the selection on the map.
 *
 * @group Controller
 * @public
 */
export interface SelectionController {
  /**
   * Gets the current selection as a list of entity identifiers.
   *
   * Use this method to retrieve the current selection state, which can include
   * features, elements, or both types of entities.
   *
   * @returns A promise that resolves to an array of selected entity nodes.
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
   * Use this to react to selection changes, such as updating your UI to reflect
   * what is currently selected on the map.
   *
   * @returns A function to unsubscribe from the listener.
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

  /**
   * Selects a feature on a layer. This will show the feature's popup, modal or
   * sidebar (if configured) and highlight the feature.
   *
   * Use this method to programmatically select features, which can be useful for
   * highlighting specific data points or triggering feature-specific UI.
   *
   * @returns A promise that resolves when the feature is selected.
   *
   * @example
   * ```typescript
   * felt.selectFeature({
   *   id: 123,
   *   layerId: "my-layer",
   *   showPopup: true,
   *   fitViewport: { maxZoom: 15 },
   * });
   * ```
   */
  selectFeature(params: FeatureSelection): Promise<void>;

  /**
   * Clears the current selection (elements, features or both).
   *
   * Use this method to programmatically clear the current selection, which can
   * be useful for resetting the map state or preparing for new selections.
   *
   * @param params - The parameters to clear the selection. If this is not provided,
   * both features and elements will be cleared.
   * @returns A promise that resolves when the selection is cleared.
   *
   * @example
   * ```typescript
   *
   * // Removes all features and elements from the selection
   * felt.clearSelection();
   *
   * // Removes only features from the selection
   * felt.clearSelection({ features: true });
   *
   * // Removes only elements from the selection
   * felt.clearSelection({ elements: true });
   * ```
   *
   * @default
   * ```typescript
   * { features: true, elements: true }
   * ```
   */
  clearSelection(params?: {
    /**
     * Whether to clear the features from the selection.
     */
    features?: boolean;

    /**
     * Whether to clear the elements from the selection.
     */
    elements?: boolean;
  }): Promise<void>;
}
