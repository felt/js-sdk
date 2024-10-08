import { method } from "../../types/interface";
import type { LayersGetRequest, LayersGetResponse } from "./types";

/**
 * @ignore
 */
export const layersController = (feltWindow: Window): LayersController => ({
  get: method(feltWindow, "layers.get"),
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
   * @returns The layers that match the requested IDs in an array in the same
   * order as the requested IDs. If a layer doesn't exist, the response will
   * contain a `null` in the corresponding index.
   */
  get(request: LayersGetRequest): Promise<LayersGetResponse>;
}
