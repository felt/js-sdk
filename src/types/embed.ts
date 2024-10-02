import * as z from "zod";
import { UiControlsOptions, type UiController } from "../modules/ui/types";
import {
  ViewportCenterZoom,
  type ViewportController,
} from "../modules/viewport/types";

export const FeltEmbedOptions = z.strictObject({
  origin: z.string().optional(),
  uiControls: UiControlsOptions,
  initialViewport: ViewportCenterZoom.optional(),
});
export type FeltEmbedOptions = z.infer<typeof FeltEmbedOptions>;

export type FeltEmbedder = {
  /**
   * Embeds a Felt map into the provided container.
   *
   * @param container - The container element to embed the map into.
   * @param mapId - The ID of the map to embed.
   * @param options - The options to configure the map.
   * @returns
   */
  embed(
    container: Exclude<HTMLElement, HTMLIFrameElement>,
    mapId: string,
    options?: FeltEmbedOptions,
  ): Promise<FeltControllerWithIframe>;

  /**
   * Binds to an existing Felt map iframe.
   *
   * @param feltWindow - The iframe element containing the Felt map.
   * @returns
   */
  control(feltWindow: Window): Promise<FeltController>;
};

/**
 * The FeltControl object allows you to control and inspect the map. The various ways
 * to interact with the map are namespaced within the object for clarity.
 *
 * @public
 */
export interface FeltController {
  /**
   * The viewport controller allows you to control the viewport of the map.
   */
  viewport: ViewportController;

  /**
   * The UI controllers allows you to enable and disable UI controls on the
   * embedded map.
   */
  ui: UiController;
}

export interface FeltControllerWithIframe extends FeltController {
  /**
   * The iframe element containing the Felt map.
   */
  iframe: HTMLIFrameElement;
}
