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

const valueSchema = uiControlOptionSchema.shape.value.optional();

export const uiRadioGroupElementSchema = uiLabelReadyElementSchema.extend({
  type: z.literal("RadioGroup"),

  /**
   * The options to display in the radio group.
   */
  options: z.array(uiControlOptionSchema),

  /**
   * The value of the radio group.
   *
   * @defaultValue `undefined`
   */
  value: valueSchema,

  onChange: z
    .function()
    .args(z.object({ value: valueSchema, id: z.string() }))
    .returns(z.void()),
});

/**
 * The parameters for creating a radio group element.
 *
 * The radio group is a control that allows the user to select a single value from a list of options.
 *
 * As a control, the radio group can have a label displayed above the radioes.
 *
 * If no value is provided, `value` is `undefined`, the radio group will be empty.
 *
 * <figure>
 * <img src="./img/radio-group-basic.png" alt="Radio group basic" />
 * <figcaption>
 * A radio buttons group with a label
 * </figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "RadioGroup",
 *   label: "Select a side",
 *   options: [
 *     { label: "🍟", value: "fries" },
 *     { label: "🍚", value: "rice" },
 *     { label: "🥗", value: "salad" },
 *   ],
 *   value: "rice",
 *   onChange: ({ value, id }) => { }
 * }
 * ```
 */
export interface UIRadioGroupElement
  extends UILabelReadyElement,
    Omit<
      zInfer<typeof uiRadioGroupElementSchema>,
      "onChange" | "onCreate" | "onDestroy" | "options"
    > {
  /**
   * The options to display in the radio group.
   */
  options: Array<UIControlOption>;

  /**
   * The function to call when the value of the radio group changes.
   *
   * @param args - The arguments passed to the function.
   * @param args.value - The selected value.
   * @param args.id - The id of the radio group element.
   */
  onChange: (args: {
    value: UIControlOption["value"] | undefined;
    id: string;
  }) => void;
}

const uiRadioGroupElementCreateSchm = uiRadioGroupElementSchema.extend(
  uiLabelReadyElementCreateSchema.params.shape,
);

export const uiRadioGroupElementCreateSchema = {
  params: uiRadioGroupElementCreateSchm,
  clonable: uiRadioGroupElementCreateSchm
    .extend(uiLabelReadyElementCreateSchema.clonable.shape)
    .extend({ onChange: z.string() }),
};

/**
 * The parameters for creating a radio group element.
 *
 * See {@link UIRadioGroupElement} for more details.
 */
export interface UIRadioGroupElementCreate
  extends Omit<UIRadioGroupElement, "id">,
    UILabelReadyElementCreateParams {}

export type UIRadioGroupElementCreateClonable =
  MakeClonableSchema<UIRadioGroupElementCreate>;

export const uiRadioGroupElementUpdateSchema = {
  params: makeUpdateSchema(uiRadioGroupElementCreateSchema.params),
  clonable: makeUpdateSchema(uiRadioGroupElementCreateSchema.clonable),
};

/**
 * The parameters for updating a radio group element.
 *
 * See {@link UIRadioGroupElement} for more details.
 */
export interface UIRadioGroupElementUpdate
  extends MakeUpdateSchema<UIRadioGroupElement, UIRadioGroupElementCreate> {}
