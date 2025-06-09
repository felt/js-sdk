import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  type MakeUpdateSchema,
  makeUpdateSchema,
  type UIElementBase,
  type UIElementBaseCreateParams,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
} from "./base";

export const uiButtonElementSchema = uiElementBaseSchema.extend({
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

  onClick: z.function().returns(z.void()),
});

/**
 * Represents a button element in a panel.
 *
 * @example
 * ```typescript
 * {
 *   type: "Button",
 *   label: "Click me",
 *   onClick: () => alert("Button clicked"),
 * }
 * ```
 */
export interface UIButtonElement
  extends UIElementBase,
    Omit<
      zInfer<typeof uiButtonElementSchema>,
      "onClick" | "onCreate" | "onDestroy"
    > {
  /**
   * The action to perform when the button is clicked.
   */
  onClick: () => void;
}

const uiButtonElementCreateSchm = uiButtonElementSchema.extend(
  uiElementBaseCreateSchema.params.shape,
);

export const uiButtonElementCreateSchema = {
  params: uiButtonElementCreateSchm,
  clonable: uiButtonElementCreateSchm
    .extend(uiElementBaseCreateSchema.clonable.shape)
    .extend({ onClick: z.string() }),
};

/**
 * The parameters for creating a button element.
 *
 * See {@link UIButtonElement} for more details.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to perform updates.
 */
export interface UIButtonElementCreate
  extends Omit<UIButtonElement, "id">,
    UIElementBaseCreateParams {}

export const uiButtonElementUpdateSchema = {
  params: makeUpdateSchema(uiButtonElementCreateSchema.params),
  clonable: makeUpdateSchema(uiButtonElementCreateSchema.clonable),
};

/**
 * The parameters for updating a button element.
 *
 * See {@link UIButtonElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export interface UIButtonElementUpdate
  extends MakeUpdateSchema<UIButtonElement, UIButtonElementCreate> {}
