import { z } from "zod";
import { UiControlsOptionsSchema } from "~/modules/ui/types";
import { ViewportCenterZoomSchema } from "~/modules/viewport/types";

/**
 * @group Instantiation
 * @public
 */
export interface FeltEmbedOptions
  extends z.infer<typeof FeltEmbedOptionsSchema> {}
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
