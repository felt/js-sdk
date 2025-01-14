import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  type UiControlsOptions,
  UiControlsOptionsSchema,
} from "~/modules/ui/types";
import {
  type ViewportCenterZoom,
  ViewportCenterZoomSchema,
} from "~/modules/viewport/types";
/**
 * @group Instantiation
 * @public
 */
export interface FeltEmbedOptions
  extends zInfer<typeof FeltEmbedOptionsSchema> {
  uiControls?: UiControlsOptions;
  initialViewport?: ViewportCenterZoom;
}
/**
 * @internal
 */
const FeltEmbedOptionsSchema = z.object({
  /**
   * @hidden
   */
  origin: z.string().optional(),

  /**
   * A short-lived (15 minutes) authentication token to use for showing embeds that are configured to be
   * private.
   */
  token: z.string().optional(),

  uiControls: UiControlsOptionsSchema.optional(),

  initialViewport: ViewportCenterZoomSchema.optional(),
});
