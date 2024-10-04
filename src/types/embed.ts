import * as z from "zod";
import {
  UiControlsOptions as UiControlsOptionsSchema,
  type UiControlsOptionsType as UiControlsOptions,
} from "../modules/ui/types";
import {
  ViewportCenterZoom as VCZSchema,
  type ViewportCenterZoomType as ViewportCenterZoom,
} from "../modules/viewport/types";

/**
 * @public
 */
const FeltEmbedOptions = z.object({
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
export type FeltEmbedOptionsType = z.infer<typeof FeltEmbedOptions>;
