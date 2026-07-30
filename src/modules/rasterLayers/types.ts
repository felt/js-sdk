import { z } from "zod";
import type { zInfer } from "~/lib/utils";

/**
 * A single `[longitude, latitude]` coordinate pair.
 */
export const LngLatSchema = z.tuple([z.number(), z.number()]);

/**
 * The geographic anchor for an ephemeral raster layer. Either an axis-aligned
 * bounding box `[west, south, east, north]`, or four explicit corner
 * `[lng, lat]` pairs in the order `[topLeft, topRight, bottomRight, bottomLeft]`.
 */
export const RasterLayerCoordinatesSchema = z.union([
  z.tuple([z.number(), z.number(), z.number(), z.number()]),
  z.tuple([LngLatSchema, LngLatSchema, LngLatSchema, LngLatSchema]),
]);

export type RasterLayerCoordinates = zInfer<typeof RasterLayerCoordinatesSchema>;

export const CreateEphemeralRasterLayerSchema = z.object({
  /** The pixel width of the raster's backing buffer. */
  width: z.number(),
  /** The pixel height of the raster's backing buffer. */
  height: z.number(),
  /** Where to place the raster on the map. */
  coordinates: RasterLayerCoordinatesSchema,
  /**
   * Initial RGBA8 pixels (`width * height * 4` bytes), row-major with row 0 at
   * the northern edge. When omitted the raster starts fully transparent. The
   * buffer is transferred to the map, detaching it in the calling context.
   */
  data: z.instanceof(ArrayBuffer).optional(),
  /** Layer opacity in `[0, 1]`. Defaults to `1`. */
  opacity: z.number().optional(),
});

export type CreateEphemeralRasterLayerParams = zInfer<
  typeof CreateEphemeralRasterLayerSchema
>;

export const UpdateEphemeralRasterLayerSchema = z.object({
  /** The id returned by `createEphemeralRasterLayer`. */
  id: z.string(),
  /**
   * New RGBA8 pixels (`width * height * 4` bytes) matching the layer's
   * dimensions. The buffer is transferred to the map, detaching it in the
   * calling context.
   */
  data: z.instanceof(ArrayBuffer),
});

export type UpdateEphemeralRasterLayerParams = zInfer<
  typeof UpdateEphemeralRasterLayerSchema
>;

export const SetEphemeralRasterLayerCoordinatesSchema = z.object({
  /** The id returned by `createEphemeralRasterLayer`. */
  id: z.string(),
  /** The new geographic anchor for the raster. */
  coordinates: RasterLayerCoordinatesSchema,
});

export type SetEphemeralRasterLayerCoordinatesParams = zInfer<
  typeof SetEphemeralRasterLayerCoordinatesSchema
>;

/**
 * The result of creating an ephemeral raster layer.
 */
export interface EphemeralRasterLayer {
  /** The id of the created layer, used to update or delete it later. */
  id: string;
}
