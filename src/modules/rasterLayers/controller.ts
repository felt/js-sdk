import { method, methodWithTransfer } from "~/lib/interface";
import type {
  CreateEphemeralRasterLayerParams,
  EphemeralRasterLayer,
  SetEphemeralRasterLayerCoordinatesParams,
  UpdateEphemeralRasterLayerParams,
} from "./types";

/**
 * @ignore
 */
export const rasterLayersController = (
  feltWindow: Pick<Window, "postMessage">,
): RasterLayersController => ({
  createEphemeralRasterLayer: methodWithTransfer(
    feltWindow,
    "createEphemeralRasterLayer",
    (params) => (params.data ? [params.data] : []),
  ),
  updateEphemeralRasterLayer: methodWithTransfer(
    feltWindow,
    "updateEphemeralRasterLayer",
    (params) => [params.data],
  ),
  setEphemeralRasterLayerCoordinates: method(
    feltWindow,
    "setEphemeralRasterLayerCoordinates",
  ),
  deleteEphemeralRasterLayer: method(feltWindow, "deleteEphemeralRasterLayer"),
});

/**
 * The raster layers controller lets extensions create their own ephemeral,
 * client-only raster layers backed by a typed array buffer, and update the
 * pixels as close to realtime as possible.
 *
 * These layers never round-trip to the server: the pixels live entirely as a
 * GPU texture on the map. This makes them well-suited to live imagery such as
 * heatmaps, sensor fields, decoded video frames, or simulation grids.
 *
 * @group Controller
 * @public
 */
export interface RasterLayersController {
  /**
   * Creates an ephemeral raster layer backed by an RGBA8 buffer, placed on the
   * map at the given coordinates.
   *
   * The optional `data` buffer must contain exactly `width * height * 4` bytes,
   * laid out row-major with row 0 at the northern edge. When provided, the
   * buffer is transferred to the map and detached in the calling context.
   *
   * @returns A promise resolving to the created layer's `{ id }`.
   *
   * @example
   * ```typescript
   * const pixels = new Uint8Array(256 * 256 * 4);
   * // ...fill pixels with RGBA values...
   * const { id } = await felt.createEphemeralRasterLayer({
   *   width: 256,
   *   height: 256,
   *   coordinates: [-122.5, 37.7, -122.3, 37.9],
   *   data: pixels.buffer,
   * });
   * ```
   */
  createEphemeralRasterLayer(
    params: CreateEphemeralRasterLayerParams,
  ): Promise<EphemeralRasterLayer>;

  /**
   * Replaces the pixels of an existing ephemeral raster layer and re-renders it.
   *
   * The `data` buffer must contain exactly `width * height * 4` bytes matching
   * the layer's dimensions. It is transferred to the map and detached in the
   * calling context, so an animation loop should allocate (or reuse a pool of)
   * fresh buffers per frame.
   *
   * @example
   * ```typescript
   * function frame() {
   *   const pixels = new Uint8Array(256 * 256 * 4);
   *   // ...paint the next frame...
   *   felt.updateEphemeralRasterLayer({ id, data: pixels.buffer });
   *   requestAnimationFrame(frame);
   * }
   * requestAnimationFrame(frame);
   * ```
   */
  updateEphemeralRasterLayer(
    params: UpdateEphemeralRasterLayerParams,
  ): Promise<void>;

  /**
   * Moves an existing ephemeral raster layer's quad without recreating it.
   */
  setEphemeralRasterLayerCoordinates(
    params: SetEphemeralRasterLayerCoordinatesParams,
  ): Promise<void>;

  /**
   * Removes an ephemeral raster layer and frees its GPU resources.
   */
  deleteEphemeralRasterLayer(id: string): Promise<void>;
}
