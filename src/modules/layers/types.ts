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
   * The current processing status of the layer.
   */
  status: LayerProcessingStatus,

  geometryType: z.string(),
  bounds: FeltBoundarySchema,
});

/**
 * The parameters for the `layers.get` method.
 *
 * @category Layers
 */
export type LayersGetRequest = z.infer<typeof LayersGetRequestSchema>;
export const LayersGetRequestSchema = z.object({
  /**
   * The ids of the layers you want to get in the order you want them.
   */
  ids: z.array(z.string()),
});

/**
 * The response from the `layers.get` method.
 *
 * @category Layers
 */
export type LayersGetResponse = z.infer<typeof LayersGetResponseSchema>;
const LayersGetResponseSchema = z.object({
  /**
   * The layers matching the given IDs as an array. Any layers that don't
   * exist will be represented by a `null` in the array.
   *
   * See {@link Layer} for the structure of the layer object.
   */
  layers: z.array(z.union([LayerSchema, z.null()])),
});

/**
 * The response from the `layers.getAll` method.
 *
 * @category Layers
 */
export type LayersGetAllResponse = z.infer<typeof LayersGetAllResponseSchema>;
const LayersGetAllResponseSchema = z.object({
  /**
   * The layers in the map, ordered by the order specified in Felt. This is not
   * necessarily the order that they are drawn in, as Felt draws points above
   * lines and lines above polygons, for instance.
   *
   * See {@link Layer} for the structure of the layer object.
   */
  layers: z.array(LayerSchema),
});
