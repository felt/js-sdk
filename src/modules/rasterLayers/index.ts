/**
 * The Raster Layers module lets extensions emit their own ephemeral,
 * client-only raster layers backed by a typed array buffer, and update the
 * pixels as close to realtime as possible.
 *
 * This is useful for rendering live imagery on the map, such as heatmaps,
 * sensor fields, decoded video frames, or simulation grids, without any
 * server round-trip.
 *
 * @module RasterLayers
 */
export type { RasterLayersController } from "./controller";
export type {
  CreateEphemeralRasterLayerParams,
  EphemeralRasterLayer,
  RasterLayerCoordinates,
  SetEphemeralRasterLayerCoordinatesParams,
  UpdateEphemeralRasterLayerParams,
} from "./types";
