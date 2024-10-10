import { listener, method } from "../../types/interface";
import type {
  Layer,
  LayersGetGroupsFilter,
  LayersGetGroupsResponse,
  LayersGetLayerGroupResponse,
  LayersGetLayerResponse,
  LayersGetLayersFilter,
  LayersGetLayersResponse,
  LayersSetVisibilityRequest,
} from "./types";

/**
 * @ignore
 */
export const layersController = (feltWindow: Window): LayersController => ({
  getLayer: method(feltWindow, "layers.getLayer"),
  getLayers: method(feltWindow, "layers.getLayers"),
  setLayerVisibility: method(feltWindow, "layers.setLayerVisibility"),
  getGroup: method(feltWindow, "layers.getGroup"),
  getGroups: method(feltWindow, "layers.getGroups"),
  setGroupVisibility: method(feltWindow, "layers.setGroupVisibility"),
  onLayerChange: listener(feltWindow, "layers.onLayerChange"),
});

/**
 * The Layers controller allows you to get information about the layers on the
 * map, and make changes to their visibility.
 *
 * Layers can be organised into groups, and their groups can also have their
 * visibility toggled.
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
   * Gets layers from the map, accoridng to the filters supplied. If no
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
  setLayerVisibility(visibility: LayersSetVisibilityRequest): Promise<void>;

  /**
   * Get a layer group from the map by its id.
   *
   * @example
   * ```typescript
   * const layerGroup = await layers.getGroup("layer-group-1");
   * ```
   * @returns The requested layer group.
   */
  getGroup(id: string): Promise<LayersGetLayerGroupResponse>;

  /**
   * Gets layer groups from the map, according to the filters supplied. If no
   * filters are supplied, all layer groups will be returned in rendering order.
   *
   * @example
   * ```typescript
   * const layerGroups = await layers.getGroups({ ids: ["layer-group-1", "layer-group-2"] });
   * ```
   * @returns The requested layer groups.
   */
  getGroups(
    /**
     * The filters to apply to the layer groups returned from the map.
     */
    filter?: LayersGetGroupsFilter,
  ): Promise<LayersGetGroupsResponse>;

  /**
   * Hide or show layer groups with the given ids.
   *
   * @example
   * ```typescript
   * layers.setGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
   * ```
   */
  setGroupVisibility(visibility: LayersSetVisibilityRequest): Promise<void>;

  /**
   * Adds a listener for when a layer changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @example
   * ```typescript
   * const unsubscribe = layers.onLayerChange({
   *   options: { id: "layer-1" },
   *   handler: layer => console.log(layer.bounds),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onLayerChange(args: {
    options: {
      /**
       * The id of the layer to listen for changes to.
       */
      id: string;
    };

    /**
     * The handler that is called when the layer changes.
     */
    handler: (
      /**
       * An object describing the change that occurred.
       */
      change: {
        /**
         * The new data for the layer.
         */
        layer: Layer;
      },
    ) => void;
  }): VoidFunction;
}
