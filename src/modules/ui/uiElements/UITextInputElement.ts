import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import { uiLabelReadyElementSchemas, type UIElementLifecycle } from "./base";

const uiTextInputElementBaseSchema = z.object({
  type: z.literal("TextInput"),

  /**
   * The value of the input. Use `""` for empty values.
   */
  value: z.string(),

  /**
   * The placeholder text to display in the input.
   */
  placeholder: z.string().optional(),
});

export const uiTextInputElementSchemas = {
  public: uiLabelReadyElementSchemas.public
    .extend(uiTextInputElementBaseSchema.shape)
    .extend({
      onChange: z.function().args(z.string()).returns(z.void()).optional(),
      onBlur: z.function().args(z.string()).returns(z.void()).optional(),
      onFocus: z.function().args(z.string()).returns(z.void()).optional(),
    }),
  input: uiLabelReadyElementSchemas.input
    .extend(uiTextInputElementBaseSchema.shape)
    .extend({
      onChange: z
        .function()
        .args(z.object({ value: z.string() }))
        .returns(z.void())
        .optional(),
      onBlur: z
        .function()
        .args(z.object({ value: z.string() }))
        .returns(z.void())
        .optional(),
      onFocus: z
        .function()
        .args(z.object({ value: z.string() }))
        .returns(z.void())
        .optional(),
    }),
  clonable: uiLabelReadyElementSchemas.clonable
    .extend(uiTextInputElementBaseSchema.shape)
    .extend({
      onChange: z.string().optional(),
      onBlur: z.string().optional(),
      onFocus: z.string().optional(),
    }),
};

/**
 * Represents a text input element.
 *
 * @public
 */
export interface UITextInputElementInput
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiTextInputElementSchemas.input>,
      "onCreate" | "onDestroy"
    > {
  /**
   * Event handler for when the value of the input changes.
   *
   * @param args
   * @param args.value - The new value of the input.
   */
  onChange?: (args: { value: string }) => void;

  /**
   * Event handler for when the input loses focus.
   *
   * @param args
   * @param args.value - The input value when the input loses focus.
   */
  onBlur?: (args: { value: string }) => void;

  /**
   * Event handler for when the input gains focus.
   *
   * @param args
   * @param args.value - The input value when the input gains focus.
   */
  onFocus?: (args: { value: string }) => void;
}
