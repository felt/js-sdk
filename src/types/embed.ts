import * as z from "zod";
import {
  UiControlsOptionsSchema,
  type UiControlsOptions,
} from "../modules/ui/types";
import {
  ViewportCenterZoomSchema as VCZSchema,
  type ViewportCenterZoom,
} from "../modules/viewport/types";

/**
 * @public
 */
const FeltEmbedOptionsSchema = z.object({
  /**
   * @hidden
   */
  origin: z.string().optional(),

  /**
   * {@link UiControlsOptions}
   */
  uiControls: UiControlsOptionsSchema,

  /**
   * {@link ViewportCenterZoom}
   */
  initialViewport: VCZSchema.optional(),
});

/**
 * @public
 */
export interface FeltEmbedOptions
  extends z.infer<typeof FeltEmbedOptionsSchema> {}
