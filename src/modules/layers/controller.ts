import { listener, method } from "../../types/interface";
import type {
  LayerChangeCallbackParams,
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
  getLayer: method(feltWindow, "getLayer"),
  getLayers: method(feltWindow, "getLayers"),
  setLayerVisibility: method(feltWindow, "setLayerVisibility"),
  getLayerGroup: method(feltWindow, "getLayerGroup"),
  getLayerGroups: method(feltWindow, "getLayerGroups"),
  setLayerGroupVisibility: method(feltWindow, "setLayerGroupVisibility"),
  onLayerChange: listener(feltWindow, "onLayerChange"),
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
   * const layers = await felt.getLayer({ ids: ["layer-1", "layer-2"] });
   * ```
   * @returns The requested layer.
   */
  getLayer(
    /**
     * The id of the layer you want to get.
     */
    id: string,
  ): Promise<LayersGetLayerResponse | null>;

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
   * const layers = await felt.getLayers();
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
   * felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
   * ```
   */
  setLayerVisibility(visibility: LayersSetVisibilityRequest): Promise<void>;

  /**
   * Get a layer group from the map by its id.
   *
   * @example
   * ```typescript
   * felt.getLayerGroup("layer-group-1");
   * ```
   * @returns The requested layer group.
   */
  getLayerGroup(id: string): Promise<LayersGetLayerGroupResponse | null>;

  /**
   * Gets layer groups from the map, according to the filters supplied. If no
   * filters are supplied, all layer groups will be returned in rendering order.
   *
   * @example
   * ```typescript
   * const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
   * ```
   * @returns The requested layer groups.
   */
  getLayerGroups(
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
   * felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
   * ```
   */
  setLayerGroupVisibility(
    visibility: LayersSetVisibilityRequest,
  ): Promise<void>;

  /**
   * Adds a listener for when a layer changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @example
   * ```typescript
   * const unsubscribe = felt.onLayerChange({
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
      change: LayerChangeCallbackParams,
    ) => void;
  }): VoidFunction;
}
