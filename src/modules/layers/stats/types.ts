import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  FeltBoundarySchema,
  LngLatTupleSchema,
  PolygonGeometrySchema,
  type FeltBoundary,
  type LngLatTuple,
  type PolygonGeometry,
} from "~/modules/shared/types";
import type { LayersController } from "../controller";
import { FiltersSchema, type Filters } from "../filters/types";

const AggregateMethodSchema = z.enum(["avg", "max", "min", "sum", "median"]);

const AggregationConfigSchema = z.object({
  /**
   * The operation to use on the values from the features in the layer
   */
  method: AggregateMethodSchema,

  /**
   * The attribute to use for the aggregation. This must be a numeric attribute.
   */
  attribute: z.string(),
});

const MutliAggregationConfigSchema = z.object({
  /**
   * The operations to use on the values from the features in the layer
   */
  methods: z.array(z.union([AggregateMethodSchema, z.literal("count")])),

  /**
   * The attribute to use for the aggregation. This must be a numeric attribute.
   */
  attribute: z.string().optional(),
});

/**
 * Defines how to aggregate a value across features in a layer.
 */
export interface AggregationConfig
  extends zInfer<typeof AggregationConfigSchema> {
  /**
   * The method to use for the aggregation.
   */
  method: AggregationMethod;
}

/**
 * The method to use for the aggregation.
 */
export type AggregationMethod = z.infer<typeof AggregateMethodSchema>;

/**
 * Defines how to aggregate a value across features in a layer with multiple aggregations
 * returned at once.
 */
export interface MultiAggregationConfig<T extends AggregationMethod | "count">
  extends zInfer<typeof MutliAggregationConfigSchema> {
  methods: T[];

  /**
   * The attribute to use for the aggregation when aggregations other than "count" are used.
   *
   * This can be omitted if the only aggregation is "count", but must be a numeric attribute
   * otherwise.
   */
  attribute?: string;
}

const GeometryFilterSchema = z.union([
  FeltBoundarySchema,
  PolygonGeometrySchema,
  z.array(LngLatTupleSchema),
]);

const ValueConfigurationSchema = z.object({
  boundary: GeometryFilterSchema.optional(),
  filters: FiltersSchema.optional(),
  aggregation: AggregationConfigSchema.optional(),
});

/**
 * Configuration for filtering and aggregating values across features.
 *
 * This can be used to restrict the features considered for aggregation via the `boundary`
 * and `filters` properties.
 *
 * It can also be used to specify how to aggregate the values via the `aggregation` property.
 */
export interface ValueConfiguration
  extends zInfer<typeof ValueConfigurationSchema> {
  /**
   * A spatial boundary to filter what gets counted or aggregated, while still including
   * all possible categories or bin ranges in the results.
   */
  boundary?: PolygonGeometry | LngLatTuple[] | FeltBoundary;

  /**
   * Attribute filters to determine what gets counted or aggregated, while still including
   * all possible categories or bin ranges in the results.
   */
  filters?: Filters;

  /**
   * Specifies how to aggregate values within each category or bin. When omitted,
   * features are counted. When specified, the chosen calculation (avg, sum, etc.)
   * is performed on the specified attribute.
   *
   * For example, instead of counting buildings in each category, you might want
   * to sum their square footage or average their assessed values.
   */
  aggregation?: AggregationConfig;
}

export const GetLayerCategoriesParamsSchema = z.object({
  /**
   * The ID of the layer to get categories from.
   */
  layerId: z.string(),

  /**
   * The attribute to use for categorization.
   */
  attribute: z.string(),

  /**
   * The maximum number of categories to return.
   */
  limit: z.number().optional(),

  boundary: GeometryFilterSchema.optional(),
  filters: FiltersSchema.optional(),
  values: ValueConfigurationSchema.optional(),
});

/**
 * The parameters for getting categories from a layer, passed to
 * the {@link LayersController.getCategoryData} method.
 */
export interface GetLayerCategoriesParams
  extends zInfer<typeof GetLayerCategoriesParamsSchema> {
  /**
   * Attribute filters to determine what gets counted or aggregated.
   */
  filters?: Filters;

  /**
   * A spatial boundary to filter what gets counted or aggregated. This can be either
   * a [w, s, e, n] bounding box, a GeoJSON Polygon geometry, or a list of coordinates
   * that form a polyline.
   */
  boundary?: PolygonGeometry | LngLatTuple[] | FeltBoundary;

  /**
   * Configuration for filtering and aggregating values while preserving the full set of
   * categories in the results.
   *
   * This is particularly useful when you want to compare different subsets of data while
   * maintaining consistent categories. For example:
   *
   * - Show all building types in a city, but only count recent buildings in each type
   * - Keep all neighborhood categories but only sum up residential square footage
   *
   * Unlike top-level filters which affect both what categories appear AND their values,
   * filters in this configuration only affect the values while keeping all possible
   * categories in the results.
   */
  values?: ValueConfiguration;
}

const GetLayerCategoriesGroupSchema = z.object({
  /**
   * The category for which the value was calculated.
   */
  key: z.union([z.number(), z.string(), z.boolean()]),

  /**
   * The value calculated for the category, whether a count, sum, average, etc.
   *
   * `null` is returned if there are no features in the category as opposed to zero,
   * so as not to confuse with a real zero value from some aggregation.
   */
  value: z.number().nullable(),
});

/**
 * A single category from the response from the {@link LayersController.getCategoryData} method.
 */
export interface GetLayerCategoriesGroup
  extends zInfer<typeof GetLayerCategoriesGroupSchema> {}

const EqualIntervalShortcutSchema = z.object({
  type: z.literal("equal-intervals"),
  count: z.number(),
});

const TimeSeriesIntervalSchema = z.object({
  type: z.literal("time-interval"),
  interval: z.enum(["hour", "day", "week", "month", "year"]),
});

export const GetLayerHistogramParamsSchema = z.object({
  layerId: z.string(),
  attribute: z.string(),
  steps: z.union([
    EqualIntervalShortcutSchema,
    TimeSeriesIntervalSchema,
    z.array(z.number()),
  ]),

  boundary: GeometryFilterSchema.optional(),

  filters: FiltersSchema.optional(),

  /**
   * Configuration for filtering and aggregating values while preserving the full set of
   * bin ranges in the results.
   *
   * This is particularly useful when you want to compare different subsets of data while
   * maintaining consistent ranges. For example:
   *
   * - Use the same height ranges for comparing old vs new buildings
   *
   * Unlike top-level filters which affect both what ranges appear AND their values,
   * filters in this configuration only affect the values while keeping all possible
   * ranges in the results.
   */
  values: ValueConfigurationSchema.optional(),
});

/**
 * The params used to request a histogram of values from a layer, passed to
 * the {@link LayersController.getHistogramData} method.
 */
export interface GetLayerHistogramParams
  extends zInfer<typeof GetLayerHistogramParamsSchema> {
  /**
   * Attribute filters to determine what gets counted or aggregated.
   */
  filters?: Filters;

  /**
   * A spatial boundary to filter what gets counted or aggregated. This can be either
   * a [w, s, e, n] bounding box, a GeoJSON Polygon geometry, or a list of coordinates
   * that form a polyline.
   */
  boundary?: PolygonGeometry | LngLatTuple[] | FeltBoundary;
}

const GetLayerHistogramBinSchema = z.object({
  /**
   * The left edge of the bin.
   */
  min: z.number(),

  /**
   * The right edge of the bin.
   */
  max: z.number(),

  /**
   * The number of features in the bin.
   */
  value: z.number(),
});

/**
 * One bin from the response from the {@link LayersController.getHistogramData} method.
 */
export interface GetLayerHistogramBin
  extends zInfer<typeof GetLayerHistogramBinSchema> {}

export const GetLayerCalculationParamsSchema = z.object({
  /**
   * The ID of the layer to calculate an aggregate value for.
   */
  layerId: z.string(),

  boundary: GeometryFilterSchema.optional(),

  filters: FiltersSchema.optional(),

  aggregation: MutliAggregationConfigSchema,
});

/**
 * The parameters for calculating a single aggregate value for a layer, passed to
 * the {@link LayersController.getAggregates} method.
 */
export interface GetLayerCalculationParams<
  T extends AggregationMethod | "count",
> extends z.infer<typeof GetLayerCalculationParamsSchema> {
  /**
   * Attribute filters to determine what gets counted or aggregated.
   */
  filters?: Filters;

  /**
   * A spatial boundary to filter what gets counted or aggregated. This can be either
   * a [w, s, e, n] bounding box, a GeoJSON Polygon geometry, or a list of coordinates
   * that form a polyline.
   */
  boundary?: PolygonGeometry | LngLatTuple[] | FeltBoundary;

  /**
   * Specifies how to aggregate values within each category or bin. When omitted,
   * features are counted. When specified, the chosen calculation (avg, sum, etc.)
   * is performed on the specified attribute.
   */
  aggregation: MultiAggregationConfig<T>;
}
