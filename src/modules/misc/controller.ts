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
   *
   * @example
   * ```typescript
   * const details = await felt.getMapDetails();
   * console.log({
   *   id: details.id,
   *   title: details.title,
   *   description: details.description,
   * });
   * ```
   */
  getMapDetails(): Promise<MapDetails>;
}
