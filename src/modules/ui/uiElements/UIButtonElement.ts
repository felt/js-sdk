import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseClonableSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";

const uiButtonElementBaseSchema = z.object({
  type: z.literal("Button"),

  /**
   * The label to display in the button.
   */
  label: z.string(),

  /**
   * The style variant of the button.
   *
   * - `"primary"`: A solid button with Felt's primary background color (pink).
   * - `"outlined"`: A button with a border and no background color.
   * - `"transparent"`: A button with no background color and no border.
   * - `"transparentThin"`: Same as `transparent` but with lighter font weight.
   *
   * @defaultValue `"primary"`
   */
  variant: z
    .enum(["primary", "outlined", "transparent", "transparentThin"])
    .optional(),

  /**
   * Whether the button is disabled.
   *
   * @defaultValue `false`
   */
  disabled: z.boolean().optional(),
});

export const uiButtonElementSchemas = {
  read: uiElementBaseSchema
    .extend(uiButtonElementBaseSchema.shape)
    .extend({ onClick: z.function().returns(z.void()) }),
  create: uiElementBaseCreateSchema
    .extend(uiButtonElementBaseSchema.shape)
    .extend({ onClick: z.function().returns(z.void()) }),
  clonable: uiElementBaseClonableSchema
    .extend(uiButtonElementBaseSchema.shape)
    .extend({ onClick: z.string() }),
};

/**
 * Represents a button element in a panel.
 *
 * @public
 */
export interface UIButtonElementCreate
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiButtonElementSchemas.create>,
      "onCreate" | "onDestroy"
    > {
  /**
   * Event handler for when the button is clicked.
   */
  onClick: () => void;
}
