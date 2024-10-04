import * as z from "zod";
import { UiControlsOptions } from "../modules/ui/types";
import {
  ViewportCenterZoom as VCZSchema,
  type ViewportCenterZoom,
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
  uiControls: UiControlsOptions,

  /**
   * {@link ViewportCenterZoom}
   */
  initialViewport: VCZSchema.optional(),
});

/**
 * @public
 */
export interface FeltEmbedOptionsType
  extends z.infer<typeof FeltEmbedOptions> {}
