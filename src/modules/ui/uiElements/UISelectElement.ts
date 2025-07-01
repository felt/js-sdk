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

export const uiSelectElementSchema = uiLabelReadyElementSchema.extend({
  type: z.literal("Select"),

  /**
   * The options to display in the select.
   */
  options: z.array(z.object({ label: z.string(), value: z.string() })),

  /**
   * The value of the select.
   */
  value: z.string().optional(),

  /**
   * The placeholder text to display in the select.
   */
  placeholder: z.string().optional(),

  /**
   * Whether the select should allow searching through the options.
   *
   * @defaultValue `false`
   */
  search: z.boolean().optional(),

  onChange: z
    .function()
    .args(z.object({ value: z.string(), id: z.string() }))
    .returns(z.void()),
});

/**
 * Represents a select element in a panel.
 *
 * @remarks
 * `options` property is required.
 * `label` property is displayed above the select and used for screen readers.
 * `value` property is optional, for empty value use `undefined`.
 * `placeholder` property is displayed in the select when no value is selected.
 * `search` property is used to enable searching through the options.
 * `onChange` property is used to handle the value change event.
 *
 * @example
 * #### empty select
 * ```typescript
 * {
 *   type: "Select",
 *   options: [{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" }],
 *   value: undefined,
 *   placeholder: "Select an option",
 *   onChange: (args) => console.log(args.value),
 * }
 * ```
 * 
 * @example
 * #### with label
 * `label` is displayed above the select and used for screen readers.
 * `placeholder` is displayed in the select when no value is selected.
 * 
 * ```typescript
 * {
 *   type: "Select",
 *   label: "Fruit",
 *   options: [{ label: "Apple", value: "apple" }, { label: "Banana", value: "banana" }],
 *   value: undefined,
 *   placeholder: "Select a fruit",
 *   onChange: (args) => console.log(args.value),
 * }
 * ```
 *
 * @example
 * #### with search
 * ```typescript
 * {
 *   type: "Select",
 *   options: [{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" }],
 *   value: "option1",
 *   placeholder: "Select an option",
 *   search: true,
 *   onChange: (args) => console.log(args.value),
 * }
 * ```
 */
export interface UISelectElement
  extends UILabelReadyElement,
    Omit<
      zInfer<typeof uiSelectElementSchema>,
      "onChange" | "onCreate" | "onDestroy"
    > {
  /**
   * The function to call when the value of the select changes.
   *
   * @param args - The arguments passed to the function.
   * @param args.value - The value of the select.
   * @param args.id - The id of the select element.
   */
  onChange: (args: { value: string; id: string }) => void;
}

const uiSelectElementCreateSchm = uiSelectElementSchema.extend(
  uiLabelReadyElementCreateSchema.params.shape,
);

export const uiSelectElementCreateSchema = {
  params: uiSelectElementCreateSchm,
  clonable: uiSelectElementCreateSchm
    .extend(uiLabelReadyElementCreateSchema.clonable.shape)
    .extend({ onChange: z.string() }),
};

/**
 * The parameters for creating a select element.
 *
 * See {@link UISelectElement} for more details.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to perform updates.
 */
export interface UISelectElementCreate
  extends Omit<UISelectElement, "id">,
    UILabelReadyElementCreateParams {}

export type UISelectElementCreateClonable =
  MakeClonableSchema<UISelectElementCreate>;

export const uiSelectElementUpdateSchema = {
  params: makeUpdateSchema(uiSelectElementCreateSchema.params),
  clonable: makeUpdateSchema(uiSelectElementCreateSchema.clonable),
};

/**
 * The parameters for updating a select element.
 *
 * See {@link UISelectElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export interface UISelectElementUpdate
  extends MakeUpdateSchema<UISelectElement, UISelectElementCreate> {}
