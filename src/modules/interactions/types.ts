import type { LayerFeature } from "../layers";
import type { RasterValue } from "../layers/features/types";
import type { LatLng } from "../shared/types";

/**
 * The event object passed to the interaction listeners.
 */
export interface MapInteractionEvent {
  /**
   * The cursor position in world coordinates.
   */
  coordinate: LatLng;

  /**
   * The vector features that are under the cursor.
   */
  features: Array<LayerFeature>;

  /**
   * The raster pixel values that are under the cursor.
   */
  rasterValues: Array<RasterValue>;
}
