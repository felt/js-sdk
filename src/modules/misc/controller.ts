import { method } from "~/lib/interface";
import type { ExportImageParams, ExportImageResult, MapDetails } from "./types";

export const miscController = (
  feltWindow: Pick<Window, "postMessage">,
): MiscController => ({
  getMapDetails: method(feltWindow, "getMapDetails"),
  exportImage: method(feltWindow, "exportImage"),
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

  /**
   * Exports an image of the map exactly as the viewer currently sees it.
   *
   * @remarks
   * The export includes changes made through the SDK in this session, such as
   * layer visibility, filters and layers created with `createLayersFromGeoJson`,
   * none of which the REST API's image export can see.
   *
   * - The map owner must turn on "Allow image export from embeds" for anonymous
   *   viewers to use this; otherwise the call rejects.
   * - Only one export runs at a time; a second call while one is running rejects.
   * - The call rejects if the page is hidden, because browsers throttle
   *   rendering in background tabs.
   * - Selection and hover highlights are never drawn.
   *
   * @returns A promise that resolves to the exported file.
   *
   * @example
   * ```typescript
   * const { blob, filename } = await felt.exportImage({
   *   format: "png",
   *   width: 1200,
   *   height: 800,
   * });
   * const url = URL.createObjectURL(blob);
   * ```
   */
  exportImage(
    /**
     * The size, format and contents of the export.
     */
    params?: ExportImageParams,
  ): Promise<ExportImageResult>;
}
