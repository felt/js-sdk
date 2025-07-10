import { method } from "~/lib/interface";
import type { MapDetails } from "./types";

export const miscController = (
  feltWindow: Pick<Window, "postMessage">,
): MiscController => ({
  getMapDetails: method(feltWindow, "getMapDetails"),
});

/**
 * The Misc controller provides access to miscellaneous map functionality
 * that doesn't fit into other controller categories.
 *
 * @group Controller
 * @public
 */
export interface MiscController {
  /**
   * Gets the details of the map.
   *
   * Use this method to retrieve metadata about the current map, such as
   * its title, description, and other map-level information.
   *
   * @returns A promise that resolves to the map details.
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
