import { z } from "zod";
import type { zInfer } from "~/lib/utils";

/**
 * @public
 */
export interface UiControlsOptions
  extends zInfer<typeof UiControlsOptionsSchema> {}

/**
 * @internal
 * @ignore
 */
export const UiControlsOptionsSchema = z.object({
  /**
   * Whether or not the legend is shown.
   *
   * @defaultValue true
   */
  showLegend: z.boolean().optional(),

  /**
   * Customize the title of the legend.
   *
   *   - If true, map title is used.
   *   - If false, literal "Legend" is used.
   *   - For a custom legend title, set as string.
   *
   * @defaultValue true
   */
  legendTitle: z.union([z.string(), z.boolean()]).optional(),

  /**
   * When co-operative gestures are enabled, the pan and zoom gestures are
   * adjusted to work better when the map is embedded in another page.
   *
   * @remarks
   * On mobile devices, enabling co-operative gestures will allow the user to
   * pan past the embedded map with a single finger drag. To pan the map, they
   * must use two fingers.
   *
   * On desktop devices, enabling co-operative gestures allows the user to
   * scroll past the embedded map using their scroll wheel or trackpad. To
   * zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while
   * scrolling.
   *
   * @defaultValue true
   */
  cooperativeGestures: z.boolean().optional(),

  /**
   * Whether or not the full screen button is shown in an embedded map.
   *
   * @remarks
   * When clicked, this will open the map in a new tab or window.
   *
   * @defaultValue true
   */
  fullScreenButton: z.boolean().optional(),

  /**
   * Whether or not the geolocation button is shown in an embedded map.
   *
   * @remarks
   * The geolocation feature will plot your position on the map. If you
   * click the button again, it will start tracking your position.
   *
   * @defaultValue false
   */
  geolocation: z.boolean().optional(),

  /**
   * Whether or not the zoom controls are shown in an embedded map.
   *
   * @remarks
   * This does not affect whether or not the map can be zoomed, just
   * the display of the zoom controls in the bottom right corner of the map.
   *
   * @defaultValue true
   */
  zoomControls: z.boolean().optional(),

  /**
   * Whether or not the scale bar is shown in an embedded map.
   *
   * @defaultValue true
   */
  scaleBar: z.boolean().optional(),
});

/**
 * The options for which parts of the Felt UI can be shown when interacting with
 * features and elements on the map.
 *
 * Switching these off can be useful if you add your own click, selection or hover
 * handlers for features and elements.
 *
 * @public
 */
export interface UiOnMapInteractionsOptions
  extends zInfer<typeof UiOnMapInteractionsOptionsSchema> {}

/**
 * @internal
 * @ignore
 */
export const UiOnMapInteractionsOptionsSchema = z.object({
  /**
   * Set this to `false` to prevent the panel that shows information about a selected
   * feature from being shown.
   */
  featureSelectPanel: z.boolean().optional(),

  /**
   * Set this to `false` to prevent the panel that shows information about a hovered
   * feature from being shown.
   */
  featureHoverPanel: z.boolean().optional(),

  /**
   * Set this to `false` to prevent the panel that shows information about a selected
   * element from being shown.
   */
  elementSelectPanel: z.boolean().optional(),

  /**
   * Set this to `false` to prevent clicking on a map link element from opening that link
   * in a new tab or window.
   */
  linkClickOpen: z.boolean().optional(),

  /**
   * Set this to `false` to prevent clicking on an image element from opening the image
   * in a lightbox.
   */
  imageLightboxOpen: z.boolean().optional(),
});
