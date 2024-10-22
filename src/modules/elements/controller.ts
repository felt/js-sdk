import { listener, method } from "../../types/interface";
import type { SetVisibilityRequest } from "../../types/visibility";
import type {
  Element,
  ElementChangeCallbackParams,
  ElementGroup,
  ElementGroupChangeCallbackParams,
  GetElementGroupsFilter,
  GetElementsFilter,
} from "./types";

/**
 * @ignore
 */
export const elementsController = (feltWindow: Window): ElementsController => ({
  getElement: method(feltWindow, "getElement"),
  getElements: method(feltWindow, "getElements"),
  setElementGroupVisibility: method(feltWindow, "setElementGroupVisibility"),
  getElementGroup: method(feltWindow, "getElementGroup"),
  getElementGroups: method(feltWindow, "getElementGroups"),
  onElementChange: listener(feltWindow, "onElementChange"),
  onElementGroupChange: listener(feltWindow, "onElementGroupChange"),
});

/**
 * The Elements controller allows you to get information about the elements on the
 * map, and make changes to their visibility.
 *
 * @category Elements
 * @public
 */
export interface ElementsController {
  /**
   * Get a single element from the map by its id.
   *
   * @example
   * ```typescript
   * const element = await felt.getElement("element-1");
   * ```
   * @returns The requested element.
   */
  getElement(
    /**
     * The id of the element you want to get.
     */
    id: string,
  ): Promise<Element | null>;

  /**
   * Gets elements from the map, according to the filters supplied. If no
   * filters are supplied, all elements will be returned.
   *
   * @remarks The elements in the map, ordered by the order specified in Felt. This is not
   * necessarily the order that they are drawn in, as Felt draws points above
   * lines and lines above polygons, for instance.
   *
   * @example
   * ```typescript
   * const elements = await felt.getElements();
   * ```
   * @returns All elements on the map.
   */
  getElements(
    /**
     * The filters to apply to the elements returned from the map.
     */
    filter?: GetElementsFilter,
  ): Promise<Array<Element | null>>;

  /**
   * Get an element group from the map by its id.
   *
   * @example
   * ```typescript
   * felt.getElementGroup("element-group-1");
   * ```
   * @returns The requested element group.
   */
  getElementGroup(id: string): Promise<ElementGroup | null>;

  /**
   * Gets element groups from the map, according to the filters supplied. If no
   * filters are supplied, all element groups will be returned in rendering order.
   *
   * @example
   * ```typescript
   * const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
   * ```
   * @returns The requested element groups.
   */
  getElementGroups(
    /**
     * The filters to apply to the element groups returned from the map.
     */
    filter?: GetElementGroupsFilter,
  ): Promise<Array<ElementGroup | null>>;

  /**
   * Hide or show element groups with the given ids.
   *
   * @example
   * ```typescript
   * felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
   * ```
   */
  setElementGroupVisibility(visibility: SetVisibilityRequest): Promise<void>;

  /**
   * Adds a listener for when an element changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onElementChange({
   *   options: { id: "element-1" },
   *   handler: ({element}) => console.log(element.id),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onElementChange(args: {
    options: {
      /**
       * The id of the element to listen for changes to.
       */
      id: string;
    };

    /**
     * The handler that is called when the element changes.
     */
    handler: (
      /**
       * An object describing the change that occurred.
       */
      change: ElementChangeCallbackParams,
    ) => void;
  }): VoidFunction;

  /**
   * Adds a listener for when an element group changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onElementGroupChange({
   *   options: { id: "element-group-1" },
   *   handler: elementGroup => console.log(elementGroup.id),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onElementGroupChange(args: {
    options: {
      id: string;
    };
    handler: (change: ElementGroupChangeCallbackParams) => void;
  }): VoidFunction;
}
