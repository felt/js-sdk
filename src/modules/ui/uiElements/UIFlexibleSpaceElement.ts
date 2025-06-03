import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseClonableSchema,
  uiElementBaseInputSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";
import type { UIButtonGroupElementInput } from "./UIButtonGroupElement";

export const uiFlexibleSpaceElementSchemas = {
  public: uiElementBaseSchema.extend({ type: z.literal("FlexibleSpace") }),
  input: uiElementBaseInputSchema.extend({ type: z.literal("FlexibleSpace") }),
  clonable: uiElementBaseClonableSchema.extend({
    type: z.literal("FlexibleSpace"),
  }),
};

/**
 * Only accepted for {@link UIButtonGroupElementInput} elements.
 *
 * @public
 */
export interface UIFlexibleSpaceElementInput
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiFlexibleSpaceElementSchemas.input>,
      "onCreate" | "onDestroy"
    > {}
