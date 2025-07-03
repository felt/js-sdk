import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  makeUpdateSchema,
  uiControlOptionSchema,
  uiLabelReadyElementCreateSchema,
  uiLabelReadyElementSchema,
  type MakeClonableSchema,
  type MakeUpdateSchema,
  type UIControlOption,
  type UILabelReadyElement,
  type UILabelReadyElementCreateParams,
} from "./base";

const valueSchema = z.array(uiControlOptionSchema.shape.value);

export const uiCheckboxGroupElementSchema = uiLabelReadyElementSchema.extend({
  type: z.literal("CheckboxGroup"),

  /**
   * The options to display in the checkbox group.
   */
  options: z.array(uiControlOptionSchema),

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
 * Every group is labeled using `label` property and it can contain one or more checkboxes.
 */
export interface UICheckboxGroupElement
  extends UILabelReadyElement,
    Omit<
      zInfer<typeof uiCheckboxGroupElementSchema>,
      "onChange" | "onCreate" | "onDestroy"
    > {
  /**
   * The function to call when the value of the checkbox group changes.
   *
   * @param args - The arguments passed to the function.
   * @param args.value - Array of the selected values.
   * @param args.id - The id of the checkbox group element.
   */
  onChange: (args: {
    value: Array<UIControlOption["value"]>;
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
