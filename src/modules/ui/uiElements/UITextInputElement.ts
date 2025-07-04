import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  makeUpdateSchema,
  uiLabelReadyElementCreateSchema,
  uiLabelReadyElementSchema,
  type MakeClonableSchema,
  type MakeUpdateSchema,
  type UILabelReadyElement,
  type UILabelReadyElementCreateParams,
} from "./base";

export const uiTextInputElementSchema = uiLabelReadyElementSchema.extend({
  type: z.literal("TextInput"),

  /**
   * The value of the input. Use `""` for empty values.
   */
  value: z.string(),

  /**
   * The placeholder text to display in the input.
   */
  placeholder: z.string().optional(),

  onChange: z
    .function()
    .args(z.object({ value: z.string(), id: z.string() }))
    .returns(z.void())
    .optional(),
  onBlur: z
    .function()
    .args(z.object({ value: z.string(), id: z.string() }))
    .returns(z.void())
    .optional(),
  onFocus: z
    .function()
    .args(z.object({ value: z.string(), id: z.string() }))
    .returns(z.void())
    .optional(),
});

/**
 * Represents a text input element in a panel.
 *
 * @remarks
 * `value` property is required, for empty value use `""`.
 * `label` property is displayed above the input and used for screen readers.
 *
 * @example
 * #### empty input
 * ```typescript
 * {
 *   type: "TextInput",
 *   value: "",
 *   onChange: (args) => console.log(args.value),
 *   placeholder: "Enter your name",
 * }
 * ```
 *
 * @example
 * #### with label
 * ```typescript
 * {
 *   type: "TextInput",
 *   label: "Name",
 *   value: "Hello",
 *   onChange: (args) => console.log(args.value),
 *   placeholder: "Enter your name",
 * }
 * ```
 */
export interface UITextInputElement
  extends UILabelReadyElement,
    Omit<
      zInfer<typeof uiTextInputElementSchema>,
      "onChange" | "onBlur" | "onFocus" | "onCreate" | "onDestroy"
    > {
  /**
   * The function to call when the value of the input changes.
   *
   * @param args - The arguments passed to the function.
   * @param args.value - The value of the input.
   * @param args.id - The id of the input element.
   */
  onChange?: (args: { value: string; id: string }) => void;

  /**
   * The function to call when the input is blurred.
   *
   * @param args - The arguments passed to the function.
   * @param args.value - The value of the input.
   * @param args.id - The id of the input element.
   */
  onBlur?: (args: { value: string; id: string }) => void;

  /**
   * The function to call when the input is focused.
   *
   * @param args - The arguments passed to the function.
   * @param args.value - The value of the input.
   * @param args.id - The id of the input element.
   */
  onFocus?: (args: { value: string; id: string }) => void;
}

const uiTextInputElementCreateSchm = uiTextInputElementSchema.extend(
  uiLabelReadyElementCreateSchema.params.shape,
);

export const uiTextInputElementCreateSchema = {
  params: uiTextInputElementCreateSchm,
  clonable: uiTextInputElementCreateSchm
    .extend(uiLabelReadyElementCreateSchema.clonable.shape)
    .extend({
      onChange: z.string().optional(),
      onBlur: z.string().optional(),
      onFocus: z.string().optional(),
    }),
};

/**
 * The parameters for creating a text input element.
 *
 * See {@link UITextInputElement} for more details.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to perform updates.
 */
export interface UITextInputElementCreate
  extends Omit<UITextInputElement, "id">,
    UILabelReadyElementCreateParams {}

export type UITextInputElementCreateClonable =
  MakeClonableSchema<UITextInputElementCreate>;

export const uiTextInputElementUpdateSchema = {
  params: makeUpdateSchema(uiTextInputElementCreateSchema.params),
  clonable: makeUpdateSchema(uiTextInputElementCreateSchema.clonable),
};

/**
 * The parameters for updating a text input element.
 *
 * See {@link UITextInputElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export interface UITextInputElementUpdate
  extends MakeUpdateSchema<UITextInputElement, UITextInputElementCreate> {}
