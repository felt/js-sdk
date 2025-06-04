import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseClonableSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";
import type { UIButtonElementCreate } from "./UIButtonElement";
import { uiButtonElementSchemas } from "./UIButtonElement";
import type { UIFlexibleSpaceElementCreate } from "./UIFlexibleSpaceElement";
import { uiFlexibleSpaceElementSchemas } from "./UIFlexibleSpaceElement";
import type { UITextElementCreate } from "./UITextElement";
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
  read: uiElementBaseSchema
    .extend(uiButtonGroupElementBaseSchema.shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementSchemas.read,
          uiTextElementSchemas.read,
          uiFlexibleSpaceElementSchemas.read,
        ]),
      ),
    }),
  create: uiElementBaseCreateSchema
    .extend(uiButtonGroupElementBaseSchema.shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementSchemas.create,
          uiTextElementSchemas.create,
          uiFlexibleSpaceElementSchemas.create,
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
export interface UIButtonGroupElementCreate
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiButtonGroupElementSchemas.create>,
      "onCreate" | "onDestroy"
    > {
  items: Array<
    UIButtonElementCreate | UITextElementCreate | UIFlexibleSpaceElementCreate
  >;
}
