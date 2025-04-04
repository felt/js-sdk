import { listener, method } from "~/lib/interface";
import type {
  GeoJsonGeometry,
  SetVisibilityRequest,
} from "~/modules/shared/types";

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
export const elementsController = (
  feltWindow: Pick<Window, "postMessage">,
): ElementsController => ({
  getElement: method(feltWindow, "getElement"),
  getElementGeometry: method(feltWindow, "getElementGeometry"),
  getElements: method(feltWindow, "getElements"),
  setElementGroupVisibility: method(feltWindow, "setElementGroupVisibility"),
  getElementGroup: method(feltWindow, "getElementGroup"),
  getElementGroups: method(feltWindow, "getElementGroups"),

  onElementChange: listener(feltWindow, "onElementChange"),
  onElementCreate: listener(feltWindow, "onElementCreate"),
  onElementCreateEnd: listener(feltWindow, "onElementCreateEnd"),
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
  ): Promise<GeoJsonGeometry | null>;

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
   * const elementGroup = await felt.getElementGroup("element-group-1");
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
     * This will fire when elements are created programatically, or when the
     * user starts creating an element with a drawing tool.
     *
     * When the user creates an element with a drawing tool, it can begin in
     * an invalid state, such as if you've just placed a single point in a polygon.
     *
     * You can use the `isBeingCreated` property to determine if the element is
     * still being created by a drawing tool.
     *
     * If you want to know when the element is finished being created, you can
     * use the `onElementCreateEnd` listener.
     *
     * @param change - An object describing the change that occurred.
     */
    handler: (change: ElementChangeCallbackParams) => void;
  }): VoidFunction;

  /**
   * Listens for when a new element is finished being created by a drawing tool.
   *
  * This differs from the`onElementCreate` listener, which fires whenever an
   * element is first created. This fires when the user finishes creating an element
   * which could be after a series of interactions.
   *
   * For example, when creating a polygon, the user places a series of points then
   * finishes by pressing Enter or Escape. Or when creating a Place element, they
   * add the marker, type a label, then finally deselect the element.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onToolCreatedElement({
   *   handler: (params) => console.log(params),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onElementCreateEnd(args: {
    /**
     * The handler to call whenever this event fires.
     *
     * @param params - An object containing the element that was created.
     */
    handler: (params: { element: Element }) => void;
  }): VoidFunction;

  /**
   * Adds a listener for when an element changes.
   *
   * This will fire when an element is being edited, either on the map by the user
   * or programatically.
   *
   * Like the `onElementCreate` listener, this will fire when an element is
   * still being created by a drawing tool.
   *
   * You can check the `isBeingCreated` property to determine if the element is
   * still being created by a drawing tool.
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
   *   handler: () => console.log("element-1 deleted"),
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
   *
   * @example
   * ```typescript
   * // Update a place element's coordinates
   * await felt.updateElement({
   *   id: "element-1",
   *   coordinates: [10, 20]
   * });
   *
   * // Update a polygon's style
   * await felt.updateElement({
   *   id: "element-2",
   *   color: "#FF0000",
   *   fillOpacity: 0.5
   * });
   * ```
   */
  updateElement(element: ElementUpdate): Promise<Element>;

  /**
   * Delete an element from the map.
   *
   * @example
   * ```typescript
   * await felt.deleteElement("element-1");
   * ```
   */
  deleteElement(id: string): Promise<void>;
}
