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
   * Use this method when you know the specific ID of an element and want to retrieve
   * its current state. This is more efficient than getting all elements and filtering.
   *
   * @param id - The id of the element you want to get.
   * @returns A promise that resolves to the requested element, or `null` if not found.
   *
   * @example
   * ```typescript
   * const element = await felt.getElement("element-1");
   * ```
   */
  getElement(
    /**
     * The id of the element you want to get.
     */
    id: string,
  ): Promise<Element | null>;

  /**
   * Get the geometry of an element in GeoJSON geometry format.
   *
   * For most element types, the geometry returned is based on the `coordinates`
   * property of the element, with some differences:
   *
   * - For Circle elements, the geometry is a Polygon drawn from the `center` and
   * `radius` properties.
   *
   * - Path elements become MultiLineString geometries.
   *
   * - Marker elements return a MultiLineString of the path traced by the user
   * as they drew the marker. Note that this is not the polygon formed by filled-in
   * "pen" stroke, which doesn't exactly follow the path traced by the user as it
   * is smoothed and interpolated to create a continuous line.
   *
   * - Text, Note and Image elements do not return geometry, so will return `null`.
   *
   * Use this method when you need the geometric representation of an element for
   * spatial analysis or visualization purposes.
   *
   * @param id - The id of the element you want to get the geometry of.
   * @returns A promise that resolves to the element's geometry in GeoJSON format, or `null` if the element has no geometry.
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
   * Use this method to retrieve multiple elements, optionally filtered by constraints.
   * This is useful for bulk operations or when you need to analyze all elements on the map.
   *
   * @param constraint - Optional constraints to apply to the elements returned from the map.
   * @returns A promise that resolves to an array of elements, ordered by the order specified in Felt.
   *
   * @remarks The elements in the map, ordered by the order specified in Felt. This is not
   * necessarily the order that they are drawn in, as Felt draws points above
   * lines and lines above polygons, for instance.
   *
   * @example
   * ```typescript
   * const elements = await felt.getElements();
   * ```
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
   * Element groups allow you to organize related elements together and control
   * their visibility as a unit.
   *
   * @param id - The id of the element group you want to get.
   * @returns A promise that resolves to the requested element group, or `null` if not found.
   *
   * @example
   * ```typescript
   * const elementGroup = await felt.getElementGroup("element-group-1");
   * ```
   */
  getElementGroup(id: string): Promise<ElementGroup | null>;

  /**
   * Gets element groups from the map, according to the filters supplied. If no
   * constraints are supplied, all element groups will be returned in rendering order.
   *
   * Use this method to retrieve multiple element groups, optionally filtered by constraints.
   * This is useful for bulk operations on element groups.
   *
   * @param constraint - Optional constraints to apply to the element groups returned from the map.
   * @returns A promise that resolves to an array of element groups in rendering order.
   *
   * @example
   * ```typescript
   * const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
   * ```
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
   * Use this method to control the visibility of multiple element groups at once.
   * This is more efficient than hiding/showing individual elements.
   *
   * @param visibility - The visibility configuration for element groups.
   * @returns A promise that resolves when the visibility changes are applied.
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
   * This will fire when elements are created programmatically, or when the
   * user starts creating an element with a drawing tool.
   *
   * When the user creates an element with a drawing tool, it can begin in
   * an invalid state, such as if you've just placed a single point in a polygon.
   *
   * You can use the `isBeingCreated` property to determine if the element is
   * still being created by a drawing tool.
   *
   * If you want to know when the element is finished being created, you can
   * use the {@link ElementsController.onElementCreateEnd | `onElementCreateEnd`} listener.
   *
   * @returns A function to unsubscribe from the listener.
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onElementCreate({
   *   handler: ({isBeingCreated, element}) => console.log(element.id),
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
     * This will fire when elements are created programmatically, or when the
     * user starts creating an element with a drawing tool.
     *
     * When the user creates an element with a drawing tool, it can begin in
     * an invalid state, such as if you've just placed a single point in a polygon.
     *
     * You can use the `isBeingCreated` property to determine if the element is
     * still being created by a drawing tool.
     *
     * If you want to know when the element is finished being created, you can
     * use the {@link ElementsController.onElementCreateEnd | `onElementCreateEnd`} listener.
     *
     * @param change - An object describing the change that occurred.
     */
    handler: (change: ElementChangeCallbackParams) => void;
  }): VoidFunction;

  /**
   * Listens for when a new element is finished being created by a drawing tool.
   *
   * This differs from the {@link ElementsController.onElementCreate | `onElementCreate`} listener, which fires whenever an
   * element is first created. This fires when the user finishes creating an element
   * which could be after a series of interactions.
   *
   * For example, when creating a polygon, the user places a series of points then
   * finishes by pressing Enter or Escape. Or when creating a Place element, they
   * add the marker, type a label, then finally deselect the element.
   *
   * @returns A function to unsubscribe from the listener.
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onElementCreateEnd({
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
   * or programmatically.
   *
   * Like the {@link ElementsController.onElementCreate | `onElementCreate`} listener, this will fire when an element is
   * still being created by a drawing tool.
   *
   * You can check the {@link ElementChangeCallbackParams.isBeingCreated | `isBeingCreated`} property to determine if the element is
   * still being created by a drawing tool.
   *
   * @returns A function to unsubscribe from the listener.
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
   * Use this to react to element deletions, such as cleaning up related data
   * or updating your application state.
   *
   * @returns A function to unsubscribe from the listener.
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
   * Use this to react to changes in element groups, such as when elements are
   * added to or removed from groups.
   *
   * @returns A function to unsubscribe from the listener.
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
   * Use this method to programmatically create elements on the map. Elements created
   * via the SDK are only available to the current session and are not persisted.
   *
   * @param element - The element configuration to create.
   * @returns A promise that resolves to the created element.
   *
   * @example
   * ```typescript
   * const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
   * ```
   */
  createElement(element: ElementCreate): Promise<Element>;

  /**
   * Update an element on the map. The element type must be specified.
   *
   * Use this method to modify existing elements. You can update properties like
   * coordinates, styling, and metadata.
   *
   * @param element - The element update configuration.
   * @returns A promise that resolves to the updated element.
   *
   * @example
   * ```typescript
   * // Update a place element's coordinates
   * await felt.updateElement({
   *   id: "element-1",
   *   type: "Place",
   *   coordinates: [10, 20]
   * });
   *
   * // Update a polygon's style
   * await felt.updateElement({
   *   id: "element-2",
   *   type: "Polygon",
   *   color: "#ABC123",
   *   fillOpacity: 0.5
   * });
   * ```
   */
  updateElement(element: ElementUpdate): Promise<Element>;

  /**
   * Delete an element from the map.
   *
   * Use this method to remove elements from the map. This operation cannot be undone.
   *
   * @param id - The id of the element to delete.
   * @returns A promise that resolves when the element is deleted.
   *
   * @example
   * ```typescript
   * await felt.deleteElement("element-1");
   * ```
   */
  deleteElement(id: string): Promise<void>;
}
