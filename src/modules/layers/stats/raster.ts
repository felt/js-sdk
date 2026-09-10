import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  LineStringGeometrySchema,
  MultiLineStringGeometrySchema,
  type LineStringGeometry,
  type MultiLineStringGeometry,
} from "~/modules/shared/types";
import type { LayersController } from "../controller";
import {
  FiltersSchema,
  GeometryFilterSchema,
  type Filters,
  type GeometryFilter,
} from "../filters/types";
import { EqualIntervalShortcutSchema } from "./types";

const RasterAggregationMethodSchema = z.enum([
  "avg",
  "min",
  "max",
  "sum",
  "median",
  "stddev",
  "majority",
  "area",
]);

/**
 * A statistic that can be calculated for a raster band.
 *
 * `area` is the ground area of the selected pixels, in square metres.
 *
 * `majority`, the most common value, needs a band holding whole numbers.
 *
 * @group Stats
 */
export type RasterAggregationMethod = z.infer<
  typeof RasterAggregationMethodSchema
>;

const RasterBandScopeSchema = z.object({
  layerId: z.string(),
  bandId: z.string(),
  boundary: GeometryFilterSchema.optional(),
  filters: FiltersSchema.optional(),
});

const RasterAggregationConfigSchema = z.object({
  methods: z.array(RasterAggregationMethodSchema),
  percentiles: z.array(z.number()).optional(),
});

export const GetRasterAggregatesParamsSchema = RasterBandScopeSchema.extend({
  aggregation: RasterAggregationConfigSchema,
});

/**
 * The parameters for calculating statistics for a raster band, passed to the
 * {@link LayersController.getRasterAggregates} method.
 *
 * @group Stats
 */
export interface GetRasterAggregatesParams<T extends RasterAggregationMethod>
  extends zInfer<typeof GetRasterAggregatesParamsSchema> {
  /**
   * The ID of the band to calculate statistics for, read from the `bands` on a
   * raster layer's source.
   */
  bandId: string;

  /**
   * The spatial boundary for the pixels to include. Omit this to cover the whole
   * raster.
   */
  boundary?: GeometryFilter;

  /**
   * Filters on band values for the pixels to include, such as
   * `["band:1", "gt", 100]`.
   */
  filters?: Filters;

  /**
   * Which statistics to calculate for the band.
   */
  aggregation: {
    /**
     * The statistics to calculate for the band.
     */
    methods: T[];

    /**
     * Percentile ranks between 0 and 100 to calculate, such as `[10, 50, 90]`.
     */
    percentiles?: number[];
  };
}

const RasterPercentileSchema = z.object({
  /**
   * The percentile rank that was requested.
   */
  rank: z.number(),

  /**
   * The band value at this rank.
   */
  value: z.number().nullable(),
});

/**
 * One percentile from the response to the
 * {@link LayersController.getRasterAggregates} method.
 *
 * @group Stats
 */
export interface RasterPercentile
  extends zInfer<typeof RasterPercentileSchema> {}

/**
 * The response from the {@link LayersController.getRasterAggregates} method.
 *
 * @group Stats
 */
export interface GetRasterAggregatesResult<T extends RasterAggregationMethod> {
  /**
   * The value calculated for each requested statistic.
   *
   * `null` is returned when the boundary and filters selected no pixels, as
   * opposed to zero, so as not to confuse an empty selection with a real zero.
   */
  stats: Record<T, number | null>;

  /**
   * The requested percentiles, in the order they were requested. Present only
   * when percentile ranks were requested.
   */
  percentiles?: Array<RasterPercentile>;
}

export const GetRasterHistogramParamsSchema = RasterBandScopeSchema.extend({
  steps: z.union([EqualIntervalShortcutSchema, z.array(z.number())]),
});

/**
 * The parameters for requesting a histogram of a raster band's values, passed to
 * the {@link LayersController.getRasterHistogramData} method.
 *
 * @group Stats
 */
export interface GetRasterHistogramParams
  extends zInfer<typeof GetRasterHistogramParamsSchema> {
  /**
   * The ID of the band to bin, read from the `bands` on a raster layer's source.
   */
  bandId: string;

  /**
   * The spatial boundary for the pixels to include. Omit this to cover the whole
   * raster.
   */
  boundary?: GeometryFilter;

  /**
   * Filters on band values for the pixels to include.
   */
  filters?: Filters;

  /**
   * How to divide the band's values into bins, either as a number of equal
   * intervals or as the bin edges themselves.
   */
  steps: { type: "equal-intervals"; count: number } | number[];
}

const RasterHistogramBinSchema = z.object({
  /**
   * The left edge of the bin.
   */
  min: z.number(),

  /**
   * The right edge of the bin.
   */
  max: z.number(),

  /**
   * The number of pixels in the bin.
   */
  value: z.number(),
});

/**
 * One bin from the response to the
 * {@link LayersController.getRasterHistogramData} method.
 *
 * @group Stats
 */
export interface RasterHistogramBin
  extends zInfer<typeof RasterHistogramBinSchema> {}

/**
 * The response from the {@link LayersController.getRasterHistogramData} method.
 *
 * @group Stats
 */
export interface GetRasterHistogramResult {
  /**
   * The bins, in ascending order of value.
   */
  bins: Array<RasterHistogramBin>;
}

export const GetRasterCategoriesParamsSchema = RasterBandScopeSchema.extend({
  limit: z.number().optional(),
});

/**
 * The parameters for counting the distinct values of a raster band, passed to the
 * {@link LayersController.getRasterCategoryData} method.
 *
 * @group Stats
 */
export interface GetRasterCategoriesParams
  extends zInfer<typeof GetRasterCategoriesParamsSchema> {
  /**
   * The ID of the band to count values for, read from the `bands` on a raster
   * layer's source.
   */
  bandId: string;

  /**
   * The spatial boundary for the pixels to include. Omit this to cover the whole
   * raster.
   */
  boundary?: GeometryFilter;

  /**
   * Filters on band values for the pixels to include.
   */
  filters?: Filters;

  /**
   * The maximum number of categories to return. The most frequent categories are
   * kept.
   */
  limit?: number;
}

const RasterCategorySchema = z.object({
  /**
   * The band value this category counts.
   */
  key: z.number(),

  /**
   * The number of pixels holding this value.
   */
  value: z.number(),

  /**
   * The ground area of this category's pixels, in square metres. Absent for a
   * line boundary, which samples points and so has no area.
   */
  areaM2: z.number().optional(),
});

/**
 * One category from the response to the
 * {@link LayersController.getRasterCategoryData} method.
 *
 * @group Stats
 */
export interface RasterCategory extends zInfer<typeof RasterCategorySchema> {}

/**
 * The response from the {@link LayersController.getRasterCategoryData} method.
 *
 * @group Stats
 */
export interface GetRasterCategoriesResult {
  /**
   * The categories, most frequent first.
   */
  categories: Array<RasterCategory>;

  /**
   * How many distinct values the band holds within the scope, which is larger
   * than the number of categories returned when `limit` drops some.
   */
  total: number;
}

export const GetRasterProfileParamsSchema = z.object({
  layerId: z.string(),
  bandId: z.string(),
  boundary: z.union([LineStringGeometrySchema, MultiLineStringGeometrySchema]),
});

/**
 * The parameters for sampling a raster band along a line, passed to the
 * {@link LayersController.getRasterProfile} method.
 *
 * @group Stats
 */
export interface GetRasterProfileParams
  extends zInfer<typeof GetRasterProfileParamsSchema> {
  /**
   * The ID of the band to sample, read from the `bands` on a raster layer's
   * source.
   */
  bandId: string;

  /**
   * The line to sample the band along. The band is sampled at roughly one sample
   * per pixel along the line's length.
   */
  boundary: LineStringGeometry | MultiLineStringGeometry;
}

const RasterProfileSampleSchema = z.object({
  /**
   * How far along the line this sample was taken, in ground metres from the
   * line's start.
   */
  distanceM: z.number(),

  /**
   * The band's value at this sample, or `null` where the raster holds no data or
   * the line runs outside the raster.
   */
  value: z.number().nullable(),
});

/**
 * One sample from the response to the {@link LayersController.getRasterProfile}
 * method.
 *
 * @group Stats
 */
export interface RasterProfileSample
  extends zInfer<typeof RasterProfileSampleSchema> {}

/**
 * The response from the {@link LayersController.getRasterProfile} method.
 *
 * @group Stats
 */
export interface GetRasterProfileResult {
  /**
   * The samples, ordered from the line's start.
   */
  samples: Array<RasterProfileSample>;
}
