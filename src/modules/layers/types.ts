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
 * @group Layers
 */
export interface Layer {
  /**
   * The string identifying the layer
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
   * The geometry type of the layer.
   *
   * @remarks
   * This will generally be one of:
   * - `"Point"`
   * - `"Line"`
   * - `"Polygon"`
   * - `"Raster"`
   * - `null`
   *
   * When the layer is processing, or it is a data-only layer, it will be null. You should
   * expect this to be able to be any string, however, as more geometry types can be added
   * in the future.
   */
  geometryType: string | null;

  /**
   * The bounding box of the layer. If the layer is processing, or the bounds have otherwise
   * not been calculated or are not available, this will be `null`.
   *
   * {@link FeltBoundary}
   */
  bounds: FeltBoundary | null;
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
   * You can use these ids to get the full layer objects via the `getLayers` method.
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
   * The bounding box of the layer group.
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
 * The parameters for the `onLayerChange` listener.
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
 * The parameters for the `onLayerGroupChange` listener.
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
   * need to call `getLegendItem` when the zoom level changes.
   *
   * Note that as the zoom level changes, the `onLegendItemChange` handler
   * will not be called, so you need to call `getLegendItem` yourself.
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
 * The parameters for the `onLegendItemChange` listener.
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
 * Constraints for the `getRenderedFeatures` method. This can include layer constriants, spatial constraints, or both. If no constraints are
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

const EphemeralLayerGeometryStyleSchema = z.object({
  Point: z.object({}).passthrough().optional(),
  Line: z.object({}).passthrough().optional(),
  Polygon: z.object({}).passthrough().optional(),
});

const EphemeralLayerSourceSchema = z.object({
  type: z.literal("application/geo+json"),
  name: z.string(),
  geometryStyles: EphemeralLayerGeometryStyleSchema.optional(),
});

export interface EphemeralLayerSource
  extends zInfer<typeof EphemeralLayerSourceSchema> {}

const GeoJsonFileSourceSchema = EphemeralLayerSourceSchema.extend({
  file: z.instanceof(File),
});
export interface GeoJsonFileSource
  extends zInfer<typeof GeoJsonFileSourceSchema>,
    EphemeralLayerSource {}

const GeoJsonUrlSourceSchema = EphemeralLayerSourceSchema.extend({
  url: z.string().url(),
});
export interface GeoJsonUrlSource
  extends z.infer<typeof GeoJsonUrlSourceSchema>,
    EphemeralLayerSource {}

const GeoJsonArrayBufferSourceSchema = EphemeralLayerSourceSchema.extend({
  arrayBuffer: z.instanceof(ArrayBuffer),
});

export interface GeoJsonArrayBufferSource
  extends zInfer<typeof GeoJsonArrayBufferSourceSchema>,
    EphemeralLayerSource {}

export const createLayerSourceSchema = z.union([
  GeoJsonArrayBufferSourceSchema,
  GeoJsonFileSourceSchema,
  GeoJsonUrlSourceSchema,
]);
