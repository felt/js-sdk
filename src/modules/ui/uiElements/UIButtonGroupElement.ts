import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseClonableSchema,
  uiElementBaseInputSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";
import type { UIButtonElementInput } from "./UIButtonElement";
import { uiButtonElementSchemas } from "./UIButtonElement";
import type { UIFlexibleSpaceElementInput } from "./UIFlexibleSpaceElement";
import { uiFlexibleSpaceElementSchemas } from "./UIFlexibleSpaceElement";
import type { UITextElementInput } from "./UITextElement";
import { uiTextElementSchemas } from "./UITextElement";

const uiButtonGroupElementBaseSchema = z.object({
  type: z.literal("ButtonGroup"),

  /**
   * The alignment of the button group.
   *
   * @defaultValue `"start"`
   */
  align: z.enum(["start", "end"]).optional(),
});

export const uiButtonGroupElementSchemas = {
  public: uiElementBaseSchema
    .extend(uiButtonGroupElementBaseSchema.shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementSchemas.public,
          uiTextElementSchemas.public,
          uiFlexibleSpaceElementSchemas.public,
        ]),
      ),
    }),
  input: uiElementBaseInputSchema
    .extend(uiButtonGroupElementBaseSchema.shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementSchemas.input,
          uiTextElementSchemas.input,
          uiFlexibleSpaceElementSchemas.input,
        ]),
      ),
    }),
  clonable: uiElementBaseClonableSchema
    .extend(uiButtonGroupElementBaseSchema.shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementSchemas.clonable,
          uiTextElementSchemas.clonable,
          uiFlexibleSpaceElementSchemas.clonable,
        ]),
      ),
    }),
};

/**
 * Represents a button group element in a panel.
 *
 * @remarks
 * This element is used to group buttons and text elements together.
 *
 * @public
 */
export interface UIButtonGroupElementInput
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiButtonGroupElementSchemas.input>,
      "onCreate" | "onDestroy"
    > {
  items: Array<
    UIButtonElementInput | UITextElementInput | UIFlexibleSpaceElementInput
  >;
}
