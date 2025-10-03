import { listener, method } from "~/lib/interface";
import type {
  Basemap,
  ColorBasemapInput,
  CustomTileBasemapInput,
} from "./types";

/**
 * @ignore
 */
export const basemapsController = (
  feltWindow: Pick<Window, "postMessage">,
): BasemapsController => ({
  getCurrentBasemap: method(feltWindow, "getCurrentBasemap"),
  getBasemaps: method(feltWindow, "getBasemaps"),
  chooseBasemap: method(feltWindow, "chooseBasemap"),

  addCustomBasemap: method(feltWindow, "addCustomBasemap"),
  removeBasemap: method(feltWindow, "removeBasemap"),

  onBasemapChange: listener(feltWindow, "onBasemapChange"),
});

/**
 * The basemaps controller allows you to manage the map's basemap layer.
 *
 * You can get the current basemap, list available basemaps, change the basemap,
 * and be notified when the basemap changes.
 *
 * @group Controller
 * @public
 */
export interface BasemapsController {
  /**
   * Gets the currently active basemap.
   *
   * Use this method to retrieve information about the current basemap, including
   * its type (Felt, color, or custom tile), name, color scheme, and attribution.
   *
   * @returns A promise that resolves to the current basemap configuration.
   *
   * @example
   * ```typescript
   * // Get current basemap
   * const basemap = await felt.getCurrentBasemap();
   * console.log({
   *   name: basemap.name,
   *   type: basemap.type,
   *   uiColorScheme: basemap.uiColorScheme,
   * });
   * ```
   */
  getCurrentBasemap(): Promise<Basemap>;

  /**
   * Gets all basemaps available on the map.
   *
   * Use this method to retrieve a list of all available basemaps that can be
   * applied to the map.
   *
   * @returns A promise that resolves to all basemaps available on the map.
   *
   * @example
   * ```typescript
   * // Get all available basemaps
   * const basemaps = await felt.getBasemaps();
   * const lightBasemaps = basemaps.filter(b => b.uiColorScheme === "light");
   * ```
   */
  getBasemaps(): Promise<Basemap[]>;

  /**
   * Chooses the basemap to use for the map.
   *
   * Use this method to change the current basemap. The basemap ID can be obtained
   * from getBasemaps().
   *
   * @returns A promise that resolves when the basemap has been set.
   *
   * @example
   * ```typescript
   * // Switch to a specific basemap
   * const basemaps = await felt.getBasemaps();
   * const darkBasemap = basemaps.find(b => b.uiColorScheme === "dark");
   * if (darkBasemap) {
   *   await felt.chooseBasemap(darkBasemap.id);
   * }
   * ```
   */
  chooseBasemap(id: string): void;

  /**
   * Adds a custom basemap to the map. This can be either a solid color or a basemap
   * from a custom tile URL.
   *
   * @returns A promise for the added basemap.
   *
   * @example
   * ```typescript
   * // Add a custom basemap and select it
   * await felt.addCustomBasemap({
   *   basemap: {
   *     type: "xyz_tile",
   *     tileUrl: "https://example.com/tile.png"
   *   },
   *   select: true,
   * });
   * ```
   */
  addCustomBasemap(args: {
    /**
     * The basemap to add.
     */
    basemap: ColorBasemapInput | CustomTileBasemapInput;

    /**
     * Whether to select the basemap after adding it.
     */
    select?: boolean;
  }): Promise<Basemap>;

  /**
   * Removes a basemap from the list of available basemaps.
   *
   * @returns A promise that resolves when the basemap has been removed.
   */
  removeBasemap(id: string): Promise<void>;

  /**
   * Adds a listener for when the basemap changes.
   *
   * Use this to react to basemap changes, such as updating your UI or
   * adjusting other map elements to match the new basemap's color scheme.
   *
   * @returns A function to unsubscribe from the listener.
   *
   * @event
   * @example
   * ```typescript
   * // Listen for basemap changes
   * const unsubscribe = felt.onBasemapChange({
   *   handler: basemap => {
   *     console.log(`Switched to ${basemap.name}`);
   *     updateUIColors(basemap.uiColorScheme);
   *   },
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onBasemapChange(args: { handler: (basemap: Basemap) => void }): VoidFunction;
}
