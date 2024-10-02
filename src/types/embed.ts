import * as z from "zod";
import type {
  FeltController,
  FeltControllerWithIframe,
} from "../modules/controller";
import { UiControlsOptions } from "../modules/ui/types";
import { ViewportCenterZoom } from "../modules/viewport/types";

export const FeltEmbedOptions = z.object({
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
