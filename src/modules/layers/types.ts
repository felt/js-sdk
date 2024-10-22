/**
 * This is the doc comment for the layers module
 * @module Layers
 */
import * as z from "zod";
import { FeltBoundarySchema } from "../../types/geo";

/**
 * This describes the processing status of a layer.
 *
 * The various values are:
 * - `processing`: The layer has been uploaded or updated and is still processing.
 * - `completed`: The layer has been processed and can be viewed on the map.
 * - `failed`: The layer failed to process and cannot be viewed on the map.
 * - `incomplete`: The layer has not been processed.
 *
 */
type LayerProcessingStatusType = z.infer<typeof LayerProcessingStatus>;
const LayerProcessingStatus = z.enum([
  "processing",
  "completed",
  "failed",
  "incomplete",
]);

/**
 * @group Entities
 */
export interface Layer extends z.infer<typeof LayerSchema> {}
const LayerSchema = z.object({
  /**
   * The string identifying the layer
   */
  id: z.string(),

  /**
   * The ID of the layer group that the layer belongs to.
   *
   * Layers that appear at the root level in Felt will not have a group ID.
   */
  groupId: z.string().nullable(),

  /**
   * The name of the layer can be displayed in the Legend, depending
   * on how the layer's legend is configured in its style.
   */
  name: z.string(),

  /**
   * The layer's caption is shown in the legend.
   */
  caption: z.string().nullable(),

  /**
   * The layer description forms part of the layer's metadata. This is visible
   * to users via the layer info button in the legend.
   */
  description: z.string().nullable(),

  /**
   * Whether the layer is visible or not.
   */
  visible: z.boolean(),

  /**
   * Whether the layer is shown in the legend or not.
   */
  shownInLegend: z.boolean(),

  /**
   * The current processing status of the layer.
   */
  status: LayerProcessingStatus,

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
  geometryType: z.string().nullable(),

  /**
   * The bounding box of the layer. If the layer is processing, or the bounds have otherwise
   * not been calculated or are not available, this will be `null`.
   */
  bounds: FeltBoundarySchema.nullable(),
});

/**
 * @group Entities
 */
export interface LayerGroup extends z.infer<typeof LayerGroupSchema> {}
const LayerGroupSchema = z.object({
  /**
   * A string identifying the layer group.
   */
  id: z.string(),

  /**
   * The name of the layer group. This is shown in the legend.
   */
  name: z.string(),

  /**
   * The caption of the layer group. This is shown in the legend.
   */
  caption: z.string().nullable(),

  /**
   * The ids of the layers in the layer group.
   *
   * @remarks
   * You can use these ids to get the full layer objects via the `getLayers` method.
   */
  layerIds: z.array(z.string()),

  /**
   * Whether the layer group is visible or not.
   */
  visible: z.boolean(),

  /**
   * Whether the layer group is shown in the legend or not.
   */
  shownInLegend: z.boolean(),

  /**
   * The bounding box of the layer group.
   */
  bounds: FeltBoundarySchema.nullable(),
});

/**
 * The response from the `getLayer` method. If the layer doesn't exist, the
 * response will be `null`.
 *
 */
export interface GetLayerResponse
  extends z.infer<typeof GetLayerResponseSchema> {}
const GetLayerResponseSchema = LayerSchema;

/**
 * The response from the `getLayerGroup` method. If the layer doesn't exist, the
 * response will be `null`.
 *
 */
export interface GetLayerGroupResponse
  extends z.infer<typeof GetLayerGroupResponseSchema> {}
const GetLayerGroupResponseSchema = LayerGroupSchema;

/**
 * The filter to apply to the layers. If this is not passed, all layers will be returned.
 *
 */
export interface GetLayersFilter
  extends z.infer<typeof GetLayersFilterSchema> {}
/**
 * @ignore
 */
export const GetLayersFilterSchema = z.object({
  /**
   * The ids of the layers to get.
   */
  ids: z.array(z.string()).optional(),
});

/**
 * The response from the `getLayers` method.
 *
 * @remarks
 * The layers in the map, ordered by the order specified in Felt. This is not
 * necessarily the order that they are drawn in, as Felt draws points above
 * lines and lines above polygons, for instance.
 *
 * See {@link Layer} for the structure of the layer object.
 *
 */
export type GetLayersResponse = z.infer<typeof GetLayersResponseSchema>;
const GetLayersResponseSchema = z.array(LayerSchema.nullable());

/**
 * The filter to apply to the layer groups. If this is not passed, all layer groups will be returned.
 *
 */
export interface GetLayerGroupsFilter
  extends z.infer<typeof GetLayerGroupsFilterSchema> {}
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
 * The response from the `getLayerGroups` method.
 *
 */
export type GetLayerGroupsResponse = z.infer<
  typeof GetLayerGroupsResponseSchema
>;
const GetLayerGroupsResponseSchema = z.array(LayerGroupSchema.nullable());

/**
 * The parameters for the `onLayerChange` listener.
 *
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
 */
export interface LayerGroupChangeCallbackParams {
  layerGroup: LayerGroup | null;
}

/**
 * A legend item, which often represents a sub-class of features in a
 * layer in the case of categorical or classed layers.
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
 */
export interface LegendItemIdentifier
  extends z.infer<typeof LegendItemIdentifierSchema> {}
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
 * Filter for legend items. If nothing is passed, all legend items will be returned.
 */
export interface LegendItemsFilter
  extends z.infer<typeof LegendItemsFilterSchema> {}
/** @ignore */
export const LegendItemsFilterSchema = z.object({
  /**
   * Array of legend item identifiers to filter by.
   */
  ids: LegendItemIdentifierSchema.array().optional(),
  /**
   * Array of layer ids to filter legend items by.
   */
  layerIds: z.string().array().optional(),
});

/**
 * The parameters for the `onLegendItemChange` listener.
 */
export interface LegendItemChangeCallbackParams {
  /**
   * The new data for the legend item or null if the legend item was removed.
   */
  legendItem: LegendItem | null;
}
