import { method } from "../../types/interface";
import type {
  LayersGetLayerResponse,
  LayersGetLayersFilter,
  LayersGetLayersResponse,
  LayersSetLayerVisibilityRequest,
} from "./types";

/**
 * @ignore
 */
export const layersController = (feltWindow: Window): LayersController => ({
  getLayer: method(feltWindow, "layers.getLayer"),
  getLayers: method(feltWindow, "layers.getLayers"),
  setLayerVisibility: method(feltWindow, "layers.setLayerVisibility"),
});

/**
 * The Layers controller allows you to get information about the layers on the
 * map, and make changes to their visibility.
 *
 * @category Layers
 * @public
 */
export interface LayersController {
  /**
   * Get a single layer from the map by its id.
   *
   * @example
   * ```typescript
   * const layers = await layers.get({ ids: ["layer-1", "layer-2"] });
   * ```
   * @returns The requested layer.
   */
  getLayer(
    /**
     * The id of the layer you want to get.
     */
    id: string,
  ): Promise<LayersGetLayerResponse>;

  /**
   * Returns layers from the map, accoridng to the filters supplied. If no
   * filters are supplied, all layers will be returned.
   *
   * @remarks The layers in the map, ordered by the order specified in Felt. This is not
   * necessarily the order that they are drawn in, as Felt draws points above
   * lines and lines above polygons, for instance.
   *
   * @example
   * ```typescript
   * const layers = await layers.getAll();
   * ```
   * @returns All layers on the map.
   */
  getLayers(
    /**
     * The filters to apply to the layers returned from the map.
     */
    filter?: LayersGetLayersFilter,
  ): Promise<LayersGetLayersResponse>;

  /**
   * Hide or show layers with the given ids.
   *
   * @example
   * ```typescript
   * layers.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
   * ```
   */
  setLayerVisibility(request: LayersSetLayerVisibilityRequest): Promise<void>;
}
