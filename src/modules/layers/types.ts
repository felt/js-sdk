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
 * @category Layers
 */
export type LayerProcessingStatus = z.infer<typeof LayerProcessingStatus>;
const LayerProcessingStatus = z.enum([
  "processing",
  "completed",
  "failed",
  "incomplete",
]);

/**
 * @category Layers
 * @group Entities
 */
export type Layer = z.infer<typeof LayerSchema>;
const LayerSchema = z.object({
  /**
   * The string identifying the layer
   */
  id: z.string(),

  /**
   * The ID of the layer group that the layer belongs to.
   *
   * Layers that appear unnested in Felt are still within a LayerGroup,
   * but the LayerGroup doesn't show up in the UI.
   */
  layerGroupId: z.string(),

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
 * @category Layers
 * @group Entities
 */
export type LayerGroup = z.infer<typeof LayerGroupSchema>;
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
   * You can use these ids to get the full layer objects via the `layers.getLayers` method.
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
 * The response from the `layers.getLayer` method. If the layer doesn't exist, the
 * response will be `null`.
 *
 * @category Layers
 */
export type LayersGetLayerResponse = z.infer<
  typeof LayersGetLayerResponseSchema
>;
const LayersGetLayerResponseSchema = LayerSchema.nullable();

/**
 * The response from the `layers.getGroup` method. If the layer doesn't exist, the
 * response will be `null`.
 *
 * @category Layers
 */
export type LayersGetLayerGroupResponse = z.infer<
  typeof LayersGetLayerGroupResponseSchema
>;
const LayersGetLayerGroupResponseSchema = LayerGroupSchema.nullable();

/**
 * The filter to apply to the layers. If this is not passed, all layers will be returned.
 *
 * @category Layers
 */
export type LayersGetLayersFilter = z.infer<typeof LayersGetLayersFilterSchema>;
export const LayersGetLayersFilterSchema = z
  .object({
    /**
     * The ids of the layers to get.
     */
    ids: z.array(z.string()).optional(),
  })
  .optional();

/**
 * The response from the `layers.getLayers` method.
 *
 * @remarks
 * The layers in the map, ordered by the order specified in Felt. This is not
 * necessarily the order that they are drawn in, as Felt draws points above
 * lines and lines above polygons, for instance.
 *
 * See {@link Layer} for the structure of the layer object.
 *
 * @category Layers
 */
export type LayersGetLayersResponse = z.infer<
  typeof LayersGetLayersResponseSchema
>;
const LayersGetLayersResponseSchema = z.array(LayerSchema.nullable());

/**
 * The filter to apply to the layer groups. If this is not passed, all layer groups will be returned.
 *
 * @category Layers
 */
export type LayersGetGroupsFilter = z.infer<typeof LayersGetGroupsFilterSchema>;
export const LayersGetGroupsFilterSchema = z
  .object({
    /**
     * The ids of the layer groups to get.
     */
    ids: z.array(z.string()).optional(),
  })
  .optional();

/**
 * The response from the `layers.getGroups` method.
 *
 * @category Layers
 */
export type LayersGetGroupsResponse = z.infer<
  typeof LayersGetGroupsResponseSchema
>;
const LayersGetGroupsResponseSchema = z.array(LayerGroupSchema.nullable());
/**
 * The parameters for the `layers.setLayerVisibility` and `layers.setGroupVisibility` methods.
 *
 * @category Layers
 */
export type LayersSetVisibilityRequest = z.infer<
  typeof LayersSetVisibilityRequestSchema
>;
export const LayersSetVisibilityRequestSchema = z.object({
  /**
   * The ids of the layers you want to change the visibility of.
   */
  show: z.array(z.string()).optional(),
  hide: z.array(z.string()).optional(),
});
