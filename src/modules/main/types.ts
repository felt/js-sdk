import { z } from "zod";
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
  extends z.infer<typeof FeltEmbedOptionsSchema> {
  uiControls: UiControlsOptions;
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

  uiControls: UiControlsOptionsSchema,

  initialViewport: ViewportCenterZoomSchema.optional(),
});
