import * as z from "zod";
import {
  UiControlsOptionsSchema,
} from "../modules/ui/types";
import {
  ViewportCenterZoomSchema as VCZSchema,
} from "../modules/viewport/types";

/**
 * @public
 */
const FeltEmbedOptionsSchema = z.object({
  /**
   * @hidden
   */
  origin: z.string().optional(),


  uiControls: UiControlsOptionsSchema,

  initialViewport: VCZSchema.optional(),
});

/**
 * @public
 */
export interface FeltEmbedOptions
  extends z.infer<typeof FeltEmbedOptionsSchema> {}
