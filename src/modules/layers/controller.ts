import { listener, method } from "~/lib/interface";
import type { SetVisibilityRequest } from "~/modules/shared/types";
import type { Filters, LayerFilters } from "./filter.types";
import type {
  Feature,
  GetLayerGroupsConstraint,
  GetLayersConstraint,
  GetRenderedFeaturesConstraint,
  Layer,
  LayerChangeCallbackParams,
  LayerGroup,
  LayerGroupChangeCallbackParams,
  LegendItem,
  LegendItemChangeCallbackParams,
  LegendItemIdentifier,
  LegendItemsConstraint,
} from "./types";

/**
 * @ignore
 */
export const layersController = (feltWindow: Window): LayersController => ({
  // layers
  getLayer: method(feltWindow, "getLayer"),
  getLayers: method(feltWindow, "getLayers"),
  setLayerVisibility: method(feltWindow, "setLayerVisibility"),
  setLayerStyle: method(feltWindow, "setLayerStyle"),
  onLayerChange: listener(feltWindow, "onLayerChange"),

  // groups
  getLayerGroup: method(feltWindow, "getLayerGroup"),
  getLayerGroups: method(feltWindow, "getLayerGroups"),
  setLayerGroupVisibility: method(feltWindow, "setLayerGroupVisibility"),
  onLayerGroupChange: listener(feltWindow, "onLayerGroupChange"),

  // legend items
  getLegendItem: method(feltWindow, "getLegendItem"),
  getLegendItems: method(feltWindow, "getLegendItems"),
  setLegendItemVisibility: method(feltWindow, "setLegendItemVisibility"),
  onLegendItemChange: listener(feltWindow, "onLegendItemChange"),

  // filters
  getLayerFilters: method(feltWindow, "getLayerFilters"),
  setLayerFilters: method(feltWindow, "setLayerFilters"),

  // rendered features
  getRenderedFeatures: method(feltWindow, "getRenderedFeatures"),
});

/**
 * The Layers controller allows you to get information about the layers on the
 * map, and make changes to their visibility.
 *
 * Layers can be organised into groups, and their groups can also have their
 * visibility toggled.
 *
 * @group Controller
 * @public
 */
export interface LayersController {
  // LAYERS

  /**
   * Get a single layer from the map by its id.
   *
   * @example
   * ```typescript
   * const layers = await felt.getLayer({ ids: ["layer-1", "layer-2"] });
   * ```
   * @returns The requested layer.
   */
  getLayer(
    /**
     * The id of the layer you want to get.
     */
    id: string,
  ): Promise<Layer | null>;

  /**
   * Gets layers from the map, according to the constraints supplied. If no
   * constraints are supplied, all layers will be returned.
   *
   * @remarks The layers in the map, ordered by the order specified in Felt. This is not
   * necessarily the order that they are drawn in, as Felt draws points above
   * lines and lines above polygons, for instance.
   *
   * @example
   * ```typescript
   * const layers = await felt.getLayers();
   * ```
   * @returns All layers on the map.
   */
  getLayers(
    /**
     * The constraints to apply to the layers returned from the map.
     */
    constraint?: GetLayersConstraint,
  ): Promise<Array<Layer | null>>;

  /**
   * Hide or show layers with the given ids.
   *
   * @example
   * ```typescript
   * felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
   * ```
   */
  setLayerVisibility(visibility: SetVisibilityRequest): Promise<void>;

  /**
   * Set the style for a layer using FSL, the Felt Style Language.
   *
   * Changes are only for this session, and not persisted. This is useful to make
   * temporary changes to a layer's style, such as to highlight a particular layer
   * or feature.
   *
   * See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
   * on how to read and write styles.
   *
   * If the style you set is invalid, you will receive an error explaining the problem
   * in the rejected promise value.
   *
   * @example
   * ```typescript
   * // first get the current style
   * const oldStyle = (await felt.getLayer("layer-1")).style;
   *
   * felt.setLayerStyle({ id: "layer-1", style: {
   *   ...oldStyle,
   *   paint: {
   *     ...oldStyle.paint,
   *     color: "red",
   *   },
   * } });
   * ```
   */
  setLayerStyle(params: {
    /**
     * The id of the layer to set the style for.
     */
    id: string;

    /**
     * The style to set for the layer.
     */
    style: object;
  }): Promise<void>;

  /**
   * Adds a listener for when a layer changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onLayerChange({
   *   options: { id: "layer-1" },
   *   handler: ({layer}) => console.log(layer.bounds),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onLayerChange(args: {
    options: {
      /**
       * The id of the layer to listen for changes to.
       */
      id: string;
    };

    /**
     * The handler that is called when the layer changes.
     */
    handler: (
      /**
       * An object describing the change that occurred.
       */
      change: LayerChangeCallbackParams,
    ) => void;
  }): VoidFunction;

  // GROUPS

  /**
   * Get a layer group from the map by its id.
   *
   * @example
   * ```typescript
   * felt.getLayerGroup("layer-group-1");
   * ```
   * @returns The requested layer group.
   */
  getLayerGroup(id: string): Promise<LayerGroup | null>;

  /**
   * Gets layer groups from the map, according to the constraints supplied. If no
   * constraints are supplied, all layer groups will be returned in rendering order.
   *
   * @example
   * ```typescript
   * const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
   * ```
   * @returns The requested layer groups.
   */
  getLayerGroups(
    /**
     * The constraints to apply to the layer groups returned from the map.
     */
    constraint?: GetLayerGroupsConstraint,
  ): Promise<Array<LayerGroup | null>>;

  /**
   * Hide or show layer groups with the given ids.
   *
   * @example
   * ```typescript
   * felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
   * ```
   */
  setLayerGroupVisibility(visibility: SetVisibilityRequest): Promise<void>;

  /**
   * Adds a listener for when a layer group changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onLayerGroupChange({
   *   options: { id: "layer-group-1" },
   *   handler: ({layerGroup}) => console.log(layerGroup.id),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onLayerGroupChange(args: {
    options: {
      id: string;
    };
    handler: (change: LayerGroupChangeCallbackParams) => void;
  }): VoidFunction;

  // LEGEND ITEMS

  /**
   * Allows you to get the state of a single legend item.
   *
   * @example
   * ```typescript
   * const legendItem = await felt.getLegendItem({
   *   id: "legend-item-1",
   *   layerId: "layer-1",
   * })
   * ```
   */
  getLegendItem(id: LegendItemIdentifier): Promise<LegendItem | null>;

  /**
   * Allows you to obtain the state of several legend items, by passing in
   * constraints describing which legend items you want.
   *
   * If you do not pass any constraints, you will receive all legend items.
   *
   * @example
   * ```typescript
   * const legendItems = await felt.getLegendItems({layerId: "layer-1"});
   * ```
   */
  getLegendItems(
    constraint?: LegendItemsConstraint,
  ): Promise<Array<LegendItem | null>>;

  /**
   * Hide or show legend items with the given identifiers.
   *
   * @example
   * ```typescript
   * felt.setLegendItemVisibility({
   *   show: [{layerId: "layer-group-1", id: "item-1-0"}],
   *   hide: [{layerId: "layer-group-2", id: "item-2-0"}],
   * })
   * ```
   */
  setLegendItemVisibility(visibility: {
    show?: Array<LegendItemIdentifier>;
    hide?: Array<LegendItemIdentifier>;
  }): Promise<void>;

  /**
   * Adds a listener for when a legend item changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onLegendItemChange({
   *   options: { layerId: "layer-1", id: "item-1-0" },
   *   handler: ({legendItem}) => console.log(legendItem.visible),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onLegendItemChange(args: {
    options: LegendItemIdentifier;
    handler: (change: LegendItemChangeCallbackParams) => void;
  }): VoidFunction;

  // FILTERS
  /**
   * Get the filters for a layer.
   *
   * @remarks
   * The return type gives you the filters split up into the various sources
   * that make up the overall filters for a layer.
   *
   * @example
   * ```typescript
   * const filters = await felt.getLayerFilters("layer-1");
   * console.log(filters.combined, filters.style, filters.ephemeral, filters.components);
   * ```
   */
  getLayerFilters(layerId: string): Promise<LayerFilters | null>;

  /**
   * Sets the **ephemeral** filters for a layer.
   *
   * @example
   * ```typescript
   * felt.setLayerFilters({
   *   layerId: "layer-1",
   *   filters: ["AREA", "gt", 30_000],
   * });
   * ```
   */
  setLayerFilters(params: {
    /**
     * The layer that you want to set the filters for.
     */
    layerId: string;

    /**
     * The filters to set for the layer. This will replace any ephemeral filters
     * that are currently set for the layer.
     */
    filters: Filters;

    /**
     * A note to display on the layer legend when this filter is applied. When the
     * note is shown, a reset button will also be shown, allowing the user to clear
     * the filter.
     */
    note?: string;
  }): Promise<void>;

  /**
   * Get the features that are currently **rendered** on the map in the viewport.
   *
   * Note that this is explicitly about the features that are rendered, which isn't
   * necessarily a complete list of all the features in the viewport. This is because
   * of the way features are tiled: at low zoom levels or high feature densities, many
   * features are omitted from what is rendered on the screen.
   *
   * @example
   * ```typescript
   * const features = await felt.getRenderedFeatures();
   * ```
   */
  getRenderedFeatures(
    /**
     * The constraints to apply to the features returned from the map.
     */
    params?: GetRenderedFeaturesConstraint,
  ): Promise<Array<Feature>>;
}
