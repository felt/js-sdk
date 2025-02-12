import { method } from "~/lib/interface";
import type { MapDetails } from "./types";

export const miscController = (feltWindow: Window): MiscController => ({
  getMapDetails: method(feltWindow, "getMapDetails"),
});

/**
 * @group Controller
 * @public
 */
export interface MiscController {
  /**
   * Gets the details of the map.
   */
  getMapDetails(): Promise<MapDetails>;
}
