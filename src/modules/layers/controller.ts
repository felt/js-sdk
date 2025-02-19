import { listener, method } from "~/lib/interface";
import type { SetVisibilityRequest } from "~/modules/shared/types";
import type { Filters, LayerFilters } from "./filter.types";
import type {
  AggregationMethod,
  GetLayerCalculationParams,
  GetLayerCategoriesGroup,
  GetLayerCategoriesParams,
  GetLayerHistogramBin,
  GetLayerHistogramParams,
} from "./stats/types";
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
  setLayerLegendVisibility: method(feltWindow, "setLayerLegendVisibility"),
  onLayerChange: listener(feltWindow, "onLayerChange"),

  // groups
  getLayerGroup: method(feltWindow, "getLayerGroup"),
  getLayerGroups: method(feltWindow, "getLayerGroups"),
  setLayerGroupVisibility: method(feltWindow, "setLayerGroupVisibility"),
  setLayerGroupLegendVisibility: method(
    feltWindow,
    "setLayerGroupLegendVisibility",
  ),
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

  // stats
  getLayerCategories: method(feltWindow, "getLayerCategories"),
  getLayerHistogram: method(feltWindow, "getLayerHistogram"),
  getLayerCalculation: method(feltWindow, "getLayerCalculation"),
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
   * Hide or show layers with the given ids from the legend.
   *
   * @example
   * ```typescript
   * felt.setLayerLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
   * ```
   */
  setLayerLegendVisibility(params: SetVisibilityRequest): Promise<void>;

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
   * Hide or show layer groups with the given ids from the legend.
   *
   * @example
   * ```typescript
   * felt.setLayerGroupLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
   * ```
   */
  setLayerGroupLegendVisibility(params: SetVisibilityRequest): Promise<void>;

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

  // STATS
  /**
   * Gets values from a layer grouped by a given attribute.
   *
   * @remarks
   * Groups features in your layer by unique values in the specified attribute and calculates
   * a value for each group. By default, this value is the count of features in each group.
   *
   * You can apply filters in two ways:
   * 1. At the top level (using `boundary` and `filters`), which affects both what categories
   *    are included and how values are calculated
   * 2. In the `values` configuration, which only affects the values but keeps all categories
   *
   * This two-level filtering is particularly useful when you want to compare subsets of data
   * while maintaining consistent categories. For example, you might want to show the distribution
   * of all building types in a city, but only count buildings built after 2000 in each category.
   *
   * @example
   * ```typescript
   * // Basic grouping: Count of buildings by type
   * const buildingsByType = await felt.getLayerCategories({
   *   layerId: "buildings",
   *   attribute: "type"
   * });
   *
   * // Filtered grouping: Only count buildings in downtown
   * const downtownBuildingsByType = await felt.getLayerCategories({
   *   layerId: "buildings",
   *   attribute: "type",
   *   boundary: [-122.43, 47.60, -122.33, 47.62]  // downtown boundary
   * });
   *
   * // Advanced: Show all building types, but only sum floor area of recent buildings
   * const recentBuildingAreaByType = await felt.getLayerCategories({
   *   layerId: "buildings",
   *   attribute: "type",
   *   values: {
   *     filters: ["year_built", "gte", 2000],
   *     aggregation: {
   *       method: "sum",
   *       attribute: "floor_area"
   *     }
   *   }
   * });
   *
   * // Compare residential density across neighborhoods while only counting recent buildings
   * const newBuildingDensityByNeighborhood = await felt.getLayerCategories({
   *   layerId: "buildings",
   *   attribute: "neighborhood",
   *   values: {
   *     filters: ["year_built", "gte", 2000],
   *     aggregation: {
   *       method: "avg",
   *       attribute: "units_per_acre"
   *     }
   *   }
   * });
   * ```
   */
  getLayerCategories(
    params: GetLayerCategoriesParams,
  ): Promise<Array<GetLayerCategoriesGroup>>;

  /**
   * Gets a histogram of values from a layer for a given attribute.
   *
   * @remarks
   * Creates bins (ranges) for numeric data and counts how many features fall into each bin,
   * or returns aggregated values for each bin.
   *
   * You can control how the bins are created using the `steps` parameter, choosing from
   * several methods like equal intervals, quantiles, or natural breaks (Jenks), or passing
   * in the step values directly if you know how you want to bin the data.
   *
   * Like getLayerCategories, you can apply filters in two ways:
   * 1. At the top level (using `boundary` and `filters`), which affects both how the bins
   *    are calculated and what features are counted in each bin
   * 2. In the `values` configuration, which only affects what gets counted but keeps the
   *    bin ranges the same
   *
   * This is particularly useful when you want to compare distributions while keeping
   * consistent bin ranges. For example, you might want to compare the distribution of
   * building heights in different years while using the same height ranges.
   *
   * @example
   * ```typescript
   * // Basic histogram: Building heights in 5 natural break bins
   * const buildingHeights = await felt.getLayerHistogram({
   *   layerId: "buildings",
   *   attribute: "height",
   *   steps: { type: "jenks", count: 5 }
   * });
   *
   * // Compare old vs new buildings using the same height ranges
   * const oldBuildingHeights = await felt.getLayerHistogram({
   *   layerId: "buildings",
   *   attribute: "height",
   *   steps: [0, 20, 50, 100, 200, 500],
   *   values: {
   *     filters: ["year_built", "lt", 1950]
   *   }
   * });
   *
   * const newBuildingHeights = await felt.getLayerHistogram({
   *   layerId: "buildings",
   *   attribute: "height",
   *   steps: [0, 20, 50, 100, 200, 500],  // Same ranges as above
   *   values: {
   *     filters: ["year_built", "gte", 1950]
   *   }
   * });
   * ```
   */
  getLayerHistogram(
    params: GetLayerHistogramParams,
  ): Promise<Array<GetLayerHistogramBin>>;

  /**
   * Calculates a single aggregate value for a layer based on the provided configuration.
   *
   * @remarks
   * Performs statistical calculations on your data, like counting features or computing
   * averages, sums, etc. You can focus your calculation on specific areas or subsets
   * of your data using boundaries and filters.
   *
   * When no aggregation is specified, it counts features. When an aggregation is provided,
   * it performs that calculation (average, sum, etc.) on the specified attribute.
   *
   * @example
   * ```typescript
   * // Count all residential buildings
   * const residentialCount = await felt.getLayerCalculation({
   *   layerId: "buildings",
   *   filters: ["type", "eq", "residential"]
   * });
   *
   * // Calculate average home value in a specific neighborhood
   * const avgHomeValue = await felt.getLayerCalculation({
   *   layerId: "buildings",
   *   boundary: [-122.43, 47.60, -122.33, 47.62],  // neighborhood boundary
   *   aggregation: {
   *     method: "avg",
   *     attribute: "assessed_value"
   *   }
   * });
   *
   * // Find the maximum building height for buildings built after 2000
   * const maxNewBuildingHeight = await felt.getLayerCalculation({
   *   layerId: "buildings",
   *   filters: ["year_built", "gte", 2000],
   *   aggregation: {
   *     method: "max",
   *     attribute: "height"
   *   }
   * });
   * ```
   */
  getLayerCalculation<T extends AggregationMethod | "count">(
    params: GetLayerCalculationParams<T>,
  ): Promise<Record<T, number>>;
}
