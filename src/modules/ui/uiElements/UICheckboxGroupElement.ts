import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  makeUpdateSchema,
  uiControlElementOptionSchema,
  uiLabelReadyElementCreateSchema,
  uiLabelReadyElementSchema,
  type MakeClonableSchema,
  type MakeUpdateSchema,
  type UIControlElementOption,
  type UILabelReadyElement,
  type UILabelReadyElementCreateParams,
} from "./base";

const valueSchema = z.array(uiControlElementOptionSchema.shape.value);

export const uiCheckboxGroupElementSchema = uiLabelReadyElementSchema.extend({
  type: z.literal("CheckboxGroup"),

  /**
   * The options to display in the checkbox group.
   */
  options: z.array(uiControlElementOptionSchema),

  /**
   * The value of the checkbox group.
   *
   * @defaultValue `[]`
   */
  value: valueSchema,

  onChange: z
    .function()
    .args(z.object({ value: valueSchema, id: z.string() }))
    .returns(z.void()),
});

/**
 * The parameters for creating a checkbox group element.
 *
 * The checkbox group is a control that allows the user to select one or more values from a list of options.
 *
 * As a control, the checkbox group can have a label displayed above the checkboxes.
 *
 * If no value is provided, `value` is `[]`, the checkbox group will be empty.
 *
 * <figure>
 * <img src="./img/checkbox-group-basic.png" alt="Checkbox group basic" />
 * <figcaption>
 * A checkbox group with a label
 * </figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "CheckboxGroup",
 *   label: "Select your hobbies",
 *   options: [
 *     { label: "👾 Video games", value: "gaming" },
 *     { label: "🎨 Art", value: "art" },
 *     { label: "🎤 Singing", value: "singing" },
 *     { label: "🎬 Movies", value: "movies" },
 *   ],
 *   value: ["gaming", "art"],
 *   onChange: ({ value, id }) => { }
 * }
 * ```
 */
export interface UICheckboxGroupElement
  extends UILabelReadyElement,
    Omit<
      zInfer<typeof uiCheckboxGroupElementSchema>,
      "onChange" | "onCreate" | "onDestroy" | "options"
    > {
  /**
   * The options to display in the checkbox group.
   */
  options: Array<UIControlElementOption>;

  /**
   * The function to call when the value of the checkbox group changes.
   *
   * @param args - The arguments passed to the function.
   * @param args.value - Array of the selected values.
   * @param args.id - The id of the checkbox group element.
   */
  onChange: (args: {
    value: Array<UIControlElementOption["value"]>;
    id: string;
  }) => void;
}

const uiCheckboxGroupElementCreateSchm = uiCheckboxGroupElementSchema.extend(
  uiLabelReadyElementCreateSchema.params.shape,
);

export const uiCheckboxGroupElementCreateSchema = {
  params: uiCheckboxGroupElementCreateSchm,
  clonable: uiCheckboxGroupElementCreateSchm
    .extend(uiLabelReadyElementCreateSchema.clonable.shape)
    .extend({ onChange: z.string() }),
};

/**
 * The parameters for creating a checkbox group element.
 *
 * See {@link UICheckboxGroupElement} for more details.
 */
export interface UICheckboxGroupElementCreate
  extends Omit<UICheckboxGroupElement, "id">,
    UILabelReadyElementCreateParams {}

export type UICheckboxGroupElementCreateClonable =
  MakeClonableSchema<UICheckboxGroupElementCreate>;

export const uiCheckboxGroupElementUpdateSchema = {
  params: makeUpdateSchema(uiCheckboxGroupElementCreateSchema.params),
  clonable: makeUpdateSchema(uiCheckboxGroupElementCreateSchema.clonable),
};

/**
 * The parameters for updating a checkbox group element.
 *
 * See {@link UICheckboxGroupElement} for more details.
 */
export interface UICheckboxGroupElementUpdate
  extends MakeUpdateSchema<
    UICheckboxGroupElement,
    UICheckboxGroupElementCreate
  > {}
