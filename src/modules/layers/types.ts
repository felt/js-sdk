import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  FeltBoundarySchema,
  LatLngSchema,
  type FeltBoundary,
  type LatLng,
} from "~/modules/shared/types";
import type { LayersController } from "./controller";

export type { LayerFeature, RasterValue } from "./features/types";

/**
 * This describes the processing status of a layer.
 *
 * The various values are:
 * - `processing`: The layer has been uploaded or updated and is still processing.
 * - `completed`: The layer has been processed and can be viewed on the map.
 * - `failed`: The layer failed to process and cannot be viewed on the map.
 * - `incomplete`: The layer has not been processed.
 *
 * @group Layers
 */
export type LayerProcessingStatus = z.infer<typeof LayerProcessingStatusSchema>;
const LayerProcessingStatusSchema = z.enum([
  "processing",
  "completed",
  "failed",
  "incomplete",
]);

/**
 * The common properties for all layers.
 *
 * @group Layers
 */
export interface LayerCommon {
  /**
   * A string identifying the layer
   */
  id: string;

  /**
   * The ID of the layer group that the layer belongs to.
   *
   * Layers that appear at the root level in Felt will not have a group ID.
   */
  groupId: string | null;

  /**
   * The name of the layer can be displayed in the Legend, depending
   * on how the layer's legend is configured in its style.
   */
  name: string;

  /**
   * The layer's caption is shown in the legend.
   */
  caption: string | null;

  /**
   * The layer description forms part of the layer's metadata. This is visible
   * to users via the layer info button in the legend.
   */
  description: string | null;

  /**
   * Whether the layer is visible or not.
   */
  visible: boolean;

  /**
   * Whether the layer is shown in the legend or not.
   */
  shownInLegend: boolean;

  /**
   * The display mode for the layer's legend.
   *
   * See {@link LayerLegendDisplay} for more details.
   */
  legendDisplay: LayerLegendDisplay;

  /**
   * The FSL style for the layer.
   *
   * See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
   * on how to read and write styles.
   *
   * As the types of the styles are very complex, we return `object` here and advise that you
   * program defensively while reading the styles.
   */
  style: object;

  /**
   * The current processing status of the layer.
   */
  status: LayerProcessingStatus;

  /**
   * The bounding box of the layer in [west, south, east, north] order
   *
   * There are cases where the bounds are not available, such as for layers added to the map
   * from URL sources, as these are not (depending on their type) processed and analyzed by
   * Felt.
   *
   * {@link FeltBoundary}
   */
  bounds: FeltBoundary | null;
}

/**
 * @group Layers
 */
export type Layer = RasterLayer | VectorLayer | DataOnlyLayer;

/**
 * A raster layer is a layer that contains raster data that can be rendered on the map
 *
 * @group Layers
 */
export interface RasterLayer extends LayerCommon {
  /**
   * Identifies the type of geometry in the layer.
   */
  geometryType: "Raster";

  /**
   * The source of the raster layer's data.
   */
  source: RasterLayerSource;
}

/**
 * The source of a raster layer's data.
 *
 * @group Layer sources
 */
export interface RasterLayerSource {
  /**
   * A URL template for fetching image tiles for the raster.
   */
  imageTileTemplateUrl: string;

  /**
   * A URL template for fetching encoded tiles for the raster.
   *
   * The encoded raster value can be calculated from the red, green, and blue values of the pixel
   * using the following formula:
   *
   * ```
   * base + ((RED << 16) + (GREEN <<8) + BLUE) * interval
   * ```
   * or
   * ```
   * base + (RED * 256 * 256 + GREEN * 256 + BLUE) * interval
   * ```
   */
  encodedTileTemplateUrl: string;

  /**
   * List of encoded raster bands
   */
  bands: Array<RasterBand>;
}

/**
 * The RasterBand interface describes the metadata for a raster band, necessary for
 * calculating the encoded raster value from the red, green, and blue values of the pixel.
 *
 * @group Layer sources
 */
export interface RasterBand {
  /**
   * Encoding base value as a floating point number
   */
  base: number;

  /**
   * Encoding interval as a floating point number
   */
  interval: number;

  /**
   * 1-based index of the band in the raster
   */
  bandIndex: number;
}

/**
 * A vector layer is a layer that contains vector data that can be rendered on the map
 *
 * @group Layers
 */
export interface VectorLayer extends LayerCommon {
  /**
   * Identifies the type of geometry in the layer.
   */
  geometryType: "Point" | "Line" | "Polygon";

  /**
   * The source of the vector layer's data.
   */
  source:
    | FeltTiledVectorSource
    | GeoJsonUrlVectorSource
    | Omit<GeoJsonDataVectorSource, "data">;
}

/**
 * A tiled vector source is a layer that is populated from data the has been uploaded
 * to Felt, and processed into vector tiles.
 *
 * @group Layer sources
 */
export type FeltTiledVectorSource = {
  /**
   * Identifies this as a tiled vector source. Typically, these tiles will have been
   * uploaded to and processed by Felt.
   */
  type: "felt";

  /**
   * The template URL used for fetching tiles.
   */
  tileTemplateUrl: string;
};

const GeoJsonUrlVectorSourceSchema = z.object({
  /**
   * Identifies this as a GeoJSON URL source.
   */
  type: z.literal("geoJsonUrl"),

  /**
   * The remote URL of the GeoJSON file used to populate the layer.
   */
  url: z.string().url(),

  /**
   * The interval in milliseconds between automatic refreshes of the GeoJSON.
   *
   * The value must be in the range of 250ms - 5 minutes (300,000ms).
   *
   * If the value is `null`, the GeoJSON will not be refreshed automatically.
   */
  refreshInterval: z
    .number()
    .min(250)
    .max(5 * 60 * 1000)
    .nullable()
    .optional(),
});

/**
 * A GeoJSON URL source is a layer that is populated from a GeoJSON file at a remote URL.
 *
 * These sources are ones that have not been uploaded to and processed by Felt, and as such
 * their capabilities are limited.
 *
 * For instance, they cannot be filtered, nor can statistics be fetched for them.
 *
 * @group Layer sources
 */
export interface GeoJsonUrlVectorSource
  extends zInfer<typeof GeoJsonUrlVectorSourceSchema> {}

// this isn't used for derived types because z.object({}) documents horribly
const GeoJsonDataVectorSourceSchema = z.object({
  type: z.literal("geoJsonData"),
  data: z.object({}).passthrough().or(z.instanceof(ArrayBuffer)),
});

/**
 * A GeoJSON data source is a layer that is populated from GeoJSON data, such as
 * from a local file, or programmatically-created data.
 *
 * @group Layer sources
 */
export interface GeoJsonDataVectorSource {
  /**
   * Identifies this as a GeoJSON data source.
   */
  type: "geoJsonData";

  /**
   * The GeoJSON data for the layer.
   *
   * This must be a GeoJSON FeatureCollection.
   */
  data: object;
}

const GeoJsonFileVectorSourceSchema = z.object({
  /**
   * Identifies this as a GeoJSON file source.
   */
  type: z.literal("geoJsonFile"),

  /**
   * The GeoJSON file for the layer.
   */
  file: z.instanceof(File),
});

/**
 * A GeoJSON file source is a layer that is populated from a GeoJSON file
 * on your local machine.
 *
 * This is an input-only type. It is converted to a {@link GeoJsonDataVectorSource}
 * when passed to {@link LayersController.createLayersFromGeoJson}.
 *
 * @group Layer sources
 */
export interface GeoJsonFileVectorSource
  extends zInfer<typeof GeoJsonFileVectorSourceSchema> {}

const LayerLegendDisplaySchema = z.enum(["standard", "nameOnly"]);

/**
 * Describes how the layer is displayed in the legend.
 *
 * There are two display modes:
 *
 * 1. Standard (default):
 *    - Shows layer name and caption
 *    - Shows visual representation of the layer's style (e.g. color swatches, proportional symbols)
 *    - Shows associated layer components
 *
 * <figure>
 * <img src="./img/legend-standard.png" alt="Standard layer legend" />
 * <figcaption>Standard layer legend</figcaption>
 * </figure>
 *
 * 2. Name Only (compact display):
 *    - Shows only layer name and caption
 *    - Hides visual representation of the layer's style
 *
 * <figure>
 * <img src="./img/legend-name-only.png" alt="Name only layer legend" />
 * <figcaption>Name only layer legend</figcaption>
 * </figure>
 *
 * @group Layers
 */
export type LayerLegendDisplay = z.infer<typeof LayerLegendDisplaySchema>;

/**
 * The parameters for the {@link LayersController.updateLayer} method.
 */
export const UpdateLayerSchema = z.object({
  /**
   * The id of the layer to update.
   */
  id: z.string(),

  style: z.object({}).passthrough().optional(),

  /**
   * Changes whether the layer is shown in the legend.
   */
  shownInLegend: z.boolean().optional(),

  /**
   * Changes the layer's legend display mode.
   *
   * See {@link LayerLegendDisplay} for more details.
   */
  legendDisplay: LayerLegendDisplaySchema.optional(),

  /**
   * Changes the name of the layer.
   */
  name: z.string().optional(),

  /**
   * Changes the caption of the layer.
   */
  caption: z.string().optional(),

  /**
   * Changes the description of the layer.
   */
  description: z.string().optional(),

  /**
   * Changes the bounds of the layer.
   */
  bounds: FeltBoundarySchema.optional(),

  source: z
    .union([
      GeoJsonUrlVectorSourceSchema,
      GeoJsonDataVectorSourceSchema,
      GeoJsonFileVectorSourceSchema,
    ])
    .optional(),
});

/**
 * The value you need to pass to {@link LayersController.updateLayer}
 *
 * @group Layers
 */
export interface UpdateLayerParams
  extends Omit<zInfer<typeof UpdateLayerSchema>, "style" | "source"> {
  /**
   * The style of the layer.
   */
  style?: object;

  /**
   * Updates the source of the layer.
   *
   * Only layers that have a GeoJSON source can have their source udpated.
   *
   * For URL sources, if you pass the same URL again it will cause the data to be
   * refreshed.
   */
  source?:
    | GeoJsonUrlVectorSource
    | GeoJsonDataVectorSource
    | GeoJsonFileVectorSource;
}

/**
 * A data-only layer doesn't have any geometry, but can be used to join with other layers
 *
 * @group Layers
 */
export interface DataOnlyLayer extends LayerCommon {
  /**
   * Indicates that this layer has no geometry.
   */
  geometryType: null;

  /**
   * This is always null for data-only layers.
   */
  bounds: null;
}

/**
 * @group Layer Groups
 */
export interface LayerGroup {
  /**
   * A string identifying the layer group.
   */
  id: string;

  /**
   * The name of the layer group. This is shown in the legend.
   */
  name: string;

  /**
   * The caption of the layer group. This is shown in the legend.
   */
  caption: string | null;

  /**
   * The ids of the layers in the layer group.
   *
   * @remarks
   * You can use these ids to get the full layer objects via the {@link LayersController.getLayers | `getLayers`} method.
   */
  layerIds: Array<string>;

  /**
   * Whether the layer group is visible or not.
   */
  visible: boolean;

  /**
   * Whether the layer group is shown in the legend or not.
   */
  shownInLegend: boolean;

  /**
   * The bounding box of the layer group in [west, south, east, north] order.
   *
   * {@link FeltBoundary}
   */
  bounds: FeltBoundary | null;
}

/**
 * The constraints to apply when getting layers.
 *
 * @group Layers
 */
export interface GetLayersConstraint
  extends zInfer<typeof GetLayersConstraintSchema> {}
/**
 * @ignore
 */
export const GetLayersConstraintSchema = z.object({
  /**
   * The ids of the layers to get.
   */
  ids: z.array(z.string()).optional(),
});

/**
 * The constraints to apply when getting layer groups.
 *
 * @group Layer Groups
 */
export interface GetLayerGroupsConstraint
  extends zInfer<typeof GetLayerGroupsFilterSchema> {}
/**
 * @ignore
 */
export const GetLayerGroupsFilterSchema = z.object({
  /**
   * The ids of the layer groups to get.
   */
  ids: z.array(z.string()).optional(),
});

/**
 * The parameters for the {@link LayersController.onLayerChange | `onLayerChange`} listener.
 *
 * @group Layers
 */
export interface LayerChangeCallbackParams {
  /**
   * The new data for the layer or null if the layer was removed.
   */
  layer: Layer | null;
}

/**
 * The parameters for the {@link LayersController.onLayerGroupChange | `onLayerGroupChange`} listener.
 *
 * @group Layer Groups
 */
export interface LayerGroupChangeCallbackParams {
  layerGroup: LayerGroup | null;
}

/**
 * A legend item, which often represents a sub-class of features in a
 * layer in the case of categorical or classed layers.
 *
 * @group Legend Items
 */
export interface LegendItem extends LegendItemIdentifier {
  /**
   * The title of the legend item.
   */
  title: string | Array<string>;

  /**
   * Whether the title depends on the zoom level or not. If it does, you
   * need to call {@link LayersController.getLegendItem | `getLegendItem`} when the zoom level changes.
   *
   * Note that as the zoom level changes, the {@link LayersController.onLegendItemChange | `onLegendItemChange`} handler
   * will not be called, so you need to call {@link LayersController.getLegendItem | `getLegendItem`} yourself.
   */
  titleDependsOnZoom: boolean;

  /**
   * Whether the legend item is visible or not.
   */
  visible: boolean;
}

/**
 * The identifier for a legend item. It is a compound key of the layer to
 * which the legend item belongs and the legend item's own id.
 *
 * @group Legend Items
 */
export interface LegendItemIdentifier
  extends zInfer<typeof LegendItemIdentifierSchema> {}
/** @ignore */
export const LegendItemIdentifierSchema = z.object({
  /**
   * The id of the legend item.
   */
  id: z.string(),

  /**
   * The id of the layer the legend item belongs to.
   */
  layerId: z.string(),
});

/**
 * Constraints for legend items. If nothing is passed, all legend items will be returned.
 *
 * @group Legend Items
 */
export interface LegendItemsConstraint
  extends zInfer<typeof LegendItemsConstraintSchema> {}
/** @ignore */
export const LegendItemsConstraintSchema = z.object({
  /**
   * Array of legend item identifiers to constrain by.
   */
  ids: LegendItemIdentifierSchema.array().optional(),

  /**
   * Array of layer ids to constrain legend items by.
   */
  layerIds: z.string().array().optional(),
});

/**
 * The parameters for the {@link LayersController.onLegendItemChange | `onLegendItemChange`} listener.
 *
 * @group Legend Items
 */
export interface LegendItemChangeCallbackParams {
  /**
   * The new data for the legend item or null if the legend item was removed.
   */
  legendItem: LegendItem | null;
}

/**
 * Constraints for the {@link LayersController.getRenderedFeatures | `getRenderedFeatures`} method. This can include layer constriants, spatial constraints, or both. If no constraints are
 * provided, all rendered features will be returned.
 *
 * @group Layers
 */
export interface GetRenderedFeaturesConstraint
  extends zInfer<typeof GetRenderedFeaturesConstraintSchema> {
  /**
   * The area to query for rendered features. This can be specific coordinates or a {@link FeltBoundary}. If omitted, the entire viewport will be queried.
   */
  areaQuery?:
    | {
        coordinates: LatLng;
      }
    | {
        boundary: FeltBoundary;
      };
}
/** @ignore */
export const GetRenderedFeaturesConstraintSchema = z.object({
  /**
   * The ids of the layers to get rendered features for.
   */
  layerIds: z.array(z.string()).optional(),
  areaQuery: z
    .union([
      z.object({
        coordinates: LatLngSchema,
      }),
      z.object({
        boundary: FeltBoundarySchema,
      }),
    ])
    .optional(),
});

/**
 * The schema that describes the structure of the features in a layer.
 *
 * @remarks This can be useful to build generic UIs that need to know the structure of the data in
 * a layer, such as a dropdown to choose an attribute.
 *
 * @group Layer Schema
 */
export interface LayerSchema {
  /**
   * The total number of features in the layer.
   */
  featureCount: number;

  /**
   * Array of attribute schemas describing the properties available on features in this layer.
   */
  attributes: Array<LayerSchemaAttribute>;
}

/**
 * A single attribute from the layer schema.
 *
 * @remarks Each feature in a layer has a set of attributes, and these types describe the
 * structure of a single attribute, including things like id, display name, type, and sample values.
 *
 * @group Layer Schema
 */
export type LayerSchemaAttribute =
  | LayerSchemaNumericAttribute
  | LayerSchemaTextAttribute
  | LayerSchemaBooleanAttribute
  | LayerSchemaDateAttribute
  | LayerSchemaDateTimeAttribute;

/**
 * The common schema for all attributes.
 *
 * @group Layer Schema
 */
export interface LayerSchemaCommonAttribute {
  /**
   * The unique identifier for this attribute.
   *
   * This can be used to fetch statistics, categories, histograms etc. for this attribute
   * via the {@link LayersController.getCategoryData}, {@link LayersController.getHistogramData},
   * and {@link LayersController.getAggregates} methods.
   */
  id: string;

  /**
   * The human-readable name of this attribute.
   */
  displayName: string;

  /**
   * The specific data type of this attribute, providing more detail than the basic type.
   *
   * For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.
   */
  detailedType: string;

  /**
   * The number of distinct values present for this attribute across all features.
   */
  distinctCount: number;
}

/**
 * The schema for a numeric attribute on a layer.
 *
 * @group Layer Schema
 */
export interface LayerSchemaNumericAttribute
  extends LayerSchemaCommonAttribute {
  /**
   * Indicates this is a numeric attribute.
   */
  type: "numeric";

  /**
   * A small sample of values for this attribute and their frequency.
   */
  sampleValues: Array<{ value: number; count: number }>;

  /**
   * The minimum value present for this attribute across all features.
   */
  min: number;

  /**
   * The maximum value present for this attribute across all features.
   */
  max: number;
}

/**
 * The schema for a text attribute on a layer.
 *
 * @group Layer Schema
 */
export interface LayerSchemaTextAttribute extends LayerSchemaCommonAttribute {
  /**
   * Indicates this is a text attribute.
   */
  type: "text";

  /**
   * A small sample of string values for this attribute and their frequency.
   */
  sampleValues: Array<{ value: string; count: number }>;
}

/**
 * The schema for a boolean attribute on a layer.
 *
 * @group Layer Schema
 */
export interface LayerSchemaBooleanAttribute
  extends LayerSchemaCommonAttribute {
  /**
   * Indicates this is a boolean attribute.
   */
  type: "boolean";

  /**
   * A representative sample of boolean values for this attribute and their frequency.
   */
  sampleValues: Array<{ value: boolean; count: number }>;
}

/**
 * The schema for a date attribute on a layer.
 *
 * @group Layer Schema
 */
export interface LayerSchemaDateAttribute extends LayerSchemaCommonAttribute {
  /**
   * Indicates this is a date attribute.
   */
  type: "date";

  /**
   * The earliest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).
   */
  min: string;

  /**
   * The latest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).
   */
  max: string;

  /**
   * A representative sample of date values for this attribute and their frequency.
   */
  sampleValues: Array<{ value: string; count: number }>;
}

/**
 * The schema for a datetime attribute on a layer.
 *
 * @group Layer Schema
 */
export interface LayerSchemaDateTimeAttribute
  extends LayerSchemaCommonAttribute {
  /**
   * Indicates this is a datetime attribute.
   */
  type: "datetime";

  /**
   * The earliest datetime present for this attribute in ISO8601 format.
   */
  min: string;

  /**
   * The latest datetime present for this attribute in ISO8601 format.
   */
  max: string;

  /**
   * A representative sample of datetime values for this attribute and their frequency.
   */
  sampleValues: Array<{ value: string; count: number }>;
}

const LayersFromGeoJsonStylesPerGeometrySchema = z.object({
  Point: z.object({}).passthrough().optional(),
  Line: z.object({}).passthrough().optional(),
  Polygon: z.object({}).passthrough().optional(),
});

/**
 * The parameters for the {@link LayersController.createLayersFromGeoJson} method.
 *
 * @group Layers
 */
export const CreateLayersFromGeoJsonSchema = z.object({
  source: z.union([
    GeoJsonUrlVectorSourceSchema,
    GeoJsonDataVectorSourceSchema,
    GeoJsonFileVectorSourceSchema,
  ]),

  /**
   * The name of the layer to create.
   */
  name: z.string(),

  /**
   * Sets the bounds of the layer.
   */
  bounds: FeltBoundarySchema.optional(),

  /**
   * Sets the caption of the layer.
   */
  caption: z.string().optional(),

  /**
   * Sets the description of the layer.
   */
  description: z.string().optional(),

  /**
   * Sets the styles to apply to each geometry on the layer.
   */
  geometryStyles: LayersFromGeoJsonStylesPerGeometrySchema.optional(),
});

/**
 * The parameters for the {@link LayersController.createLayersFromGeoJson} method.
 *
 * @group Layers
 */
export interface CreateLayersFromGeoJsonParams
  extends Omit<
    zInfer<typeof CreateLayersFromGeoJsonSchema>,
    "source" | "geometryStyles"
  > {
  /**
   * The source of the GeoJSON data.
   */
  source:
    | GeoJsonDataVectorSource
    | GeoJsonFileVectorSource
    | GeoJsonUrlVectorSource;

  /**
   * The styles to apply to each geometry on the layer.
   *
   * Each style should be a valid FSL style, as described in {@link Layer.style}.
   *
   * These are optional, and if missing will use a default style determined by
   * Felt, which you can consider to be undefined behaviour.
   *
   * @example
   * ```typescript
   * const layer = await layersController.createLayersFromGeoJson({
   *   name: "My Layer",
   *   geometryStyles: {
   *     Point: {
   *       paint: { color: "red", size: 8 },
   *     },
   *     Line: {
   *       paint: { color: "blue", size: 4 },
   *       config: { labelAttribute: ["name"] },
   *       label: { minZoom: 0 },
   *     },
   *     Polygon: {
   *       paint: { color: "green", strokeColor: "darkgreen" },
   *     },
   *   },
   * });
   * ```
   */
  geometryStyles?: {
    Point?: object;
    Line?: object;
    Polygon?: object;
  };
}
