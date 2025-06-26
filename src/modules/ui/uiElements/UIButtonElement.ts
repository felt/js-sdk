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
   * - `"filled"`: a button with background.
   *   - `background` color is based on button's `tint` (defaults to `default` tint)
   * - `"transparent"`: a transparent button that gets a subtle dark background when hovered.
   *   - `text` color is based on button's `tint` (defaults to `default` tint)
   * - `"outlined"`: a transparent button with a border.
   *   - `text` and `border` colors are based on button's `tint` (defaults to `default` tint)
   *
   * @defaultValue `"filled"`
   */
  variant: z.enum(["filled", "transparent", "outlined"]).optional(),

  /**
   * The tint of the button.
   *
   * - `"primary"`: Felt's primary color (pink).
   * - `"default"`: Felt's theme-based light/dark colors.
   * - `"accent"`: Felt's accent color (blue).
   * - `"danger"`: Felt's danger color (red).
   *
   * @defaultValue `"default"`
   */
  tint: z.enum(["primary", "default", "accent", "danger"]).optional(),

  /**
   * Whether the button is disabled.
   *
   * @defaultValue `false`
   */
  disabled: z.boolean().optional(),

  onClick: z
    .function()
    .args(z.object({ id: z.string() }))
    .returns(z.void()),
});

/**
 * Represents a button element in a panel.
 *
 * <figure>
 * <img src="./img/button-showcase.png" alt="Button variants" />
 * <figcaption>Button variants</figcaption>
 * </figure>
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
   *
   * @param args - The arguments passed to the function.
   * @param args.id - The id of the button.
   */
  onClick: (args: { id: string }) => void;
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
