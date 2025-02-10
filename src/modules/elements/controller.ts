import { listener, method } from "~/lib/interface";
import type { Geometry, SetVisibilityRequest } from "~/modules/shared/types";

import type {
  Element,
  ElementChangeCallbackParams,
  ElementCreate,
  ElementGroup,
  ElementGroupChangeCallbackParams,
  ElementUpdate,
  GetElementGroupsConstraint,
  GetElementsConstraint,
} from "./types";

/**
 * @ignore
 */
export const elementsController = (feltWindow: Window): ElementsController => ({
  getElement: method(feltWindow, "getElement"),
  getElementGeometry: method(feltWindow, "getElementGeometry"),
  getElements: method(feltWindow, "getElements"),
  setElementGroupVisibility: method(feltWindow, "setElementGroupVisibility"),
  getElementGroup: method(feltWindow, "getElementGroup"),
  getElementGroups: method(feltWindow, "getElementGroups"),

  onElementChange: listener(feltWindow, "onElementChange"),
  onElementCreate: listener(feltWindow, "onElementCreate"),
  onElementDelete: listener(feltWindow, "onElementDelete"),

  onElementGroupChange: listener(feltWindow, "onElementGroupChange"),

  createElement: method(feltWindow, "createElement"),
  updateElement: method(feltWindow, "updateElement"),
  deleteElement: method(feltWindow, "deleteElement"),
});

/**
 * The Elements controller allows you to get information about the elements on the
 * map, and make changes to their visibility.
 *
 * @group Controller
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
   * Get the geometry of an element.
   *
   * @example
   * ```typescript
   * const geometry = await felt.getElementGeometry("element-1");
   * console.log(geometry?.type, geometry?.coordinates);
   * ```
   */
  getElementGeometry(
    /**
     * The id of the element you want to get the geometry of.
     */
    id: string,
  ): Promise<Geometry | null>;

  /**
   * Gets elements from the map, according to the constraints supplied. If no
   * constraints are supplied, all elements will be returned.
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
     * The constraints to apply to the elements returned from the map.
     */
    constraint?: GetElementsConstraint,
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
   * constraints are supplied, all element groups will be returned in rendering order.
   *
   * @example
   * ```typescript
   * const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
   * ```
   * @returns The requested element groups.
   */
  getElementGroups(
    /**
     * The constraints to apply to the element groups returned from the map.
     */
    constraint?: GetElementGroupsConstraint,
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
   * Adds a listener for when an element is created.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onElementCreate({
   *   handler: (element) => console.log(element.id),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onElementCreate(args: {
    /**
     * The handler that is called when an element is created.
     *
     * @param change - An object describing the change that occurred.
     */
    handler: (change: ElementChangeCallbackParams) => void;
  }): VoidFunction;

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
   * Adds a listener for when an element is deleted.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onElementDelete({
   *   options: { id: "element-1" },
   *   handler: (element) => console.log(element.id),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onElementDelete(args: {
    options: {
      /**
       * The id of the element to listen for deletions of.
       */
      id: string;
    };

    /**
     * The handler that is called when the element is deleted.
     */
    handler: () => void;
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

  /**
   * Create a new element on the map.
   *
   * @example
   * ```typescript
   * const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
   * ```
   */
  createElement(element: ElementCreate): Promise<Element>;

  /**
   * Update an element on the map.
   */
  updateElement(element: ElementUpdate): Promise<Element>;

  /**
   * Delete an element from the map.
   */
  deleteElement(id: string): Promise<void>;
}
