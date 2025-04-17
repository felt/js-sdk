import type { MultiPolygonGeometry } from "~/modules/shared/types";

/**
 * The boundary for a layer
 */
export type LayerBoundary = MultiPolygonGeometry;

/**
 * All the different sources for boundaries for a layer, including their combined result.
 */
export interface LayerBoundaries {
  /**
   * Boundaries set by drawing spatial filters on the map.
   *
   * When there are multiple spatial filters, they are combined into a multi-polygon.
   */
  spatialFilters: LayerBoundary | null;

  /**
   * Boundaries that are set ephemerally by viewers in their own session.
   *
   * These are the filters that are set when the {@link LayersController.setLayerBoundary}
   * method is called. There is no way to set these in the Felt UI - they can only be
   * set using the SDK.
   */
  ephemeral: LayerBoundary | null;

  /**
   * The combined result of all the boundaries set on the layer.
   *
   * Each different source of boundary is intersected to produce the combined result.
   *
   */
  combined: LayerBoundary | null;
}
