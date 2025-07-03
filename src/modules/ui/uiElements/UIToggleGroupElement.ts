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

export const uiToggleGroupElementSchema = uiLabelReadyElementSchema.extend({
  type: z.literal("ToggleGroup"),

  /**
   * The alignment of the toggle group.
   *
   * @defaultValue `"start"`
   */
  alignment: z.enum(["start", "end"]).optional(),

  /**
   * The options to display in the toggle group.
   */
  options: z.array(uiControlOptionSchema),

  /**
   * The value of the toggle group.
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
 * The parameters for creating a toggle group element.
 *
 * ### Options
 *
 * The options to display in the toggle group are defined using the `options` property.
 * It can contain one or more options and each option renders a toggle.
 *
 * <figure>
 * <img src="./img/toggle-group-basic.png" alt="Toggle group basic" />
 * <figcaption>
 * A group with a single option
 * </figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "ToggleGroup",
 *   options: [{ label: "Option A", value: "optionA" }],
 *   value: [],
 *   onChange: ({ value, id }) => { }
 * }
 * ```
 *
 * ### Alignment
 *
 * By default, the toggles are aligned to the start of the group,
 * but it can be changed to `end` by setting the `alignment` property to `end`.
 *
 * <figure>
 * <img src="./img/toggle-group-end-alignment.png" alt="Toggle group end alignment" />
 * <figcaption>
 * The toggles are aligned to the end
 * </figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "ToggleGroup",
 *   alignment: "end",
 *   label: "All options",
 *   options: [
 *     { label: "Option A", value: "optionA" },
 *     { label: "Option B", value: "optionB" },
 *   ],
 *   value: ["optionA"],
 *   onChange: ({ value, id }) => { }
 * }
 * ```
 *
 * ### Label
 *
 * As a control, the toggle group can have a label displayed above the toggles.
 *
 * <img src="./img/toggle-group-with-label.png" alt="Toggle group with label" />
 *
 * ```typescript
 * {
 *   type: "ToggleGroup",
 *   label: "All options",
 *   options: [
 *     { label: "Option A", value: "optionA" },
 *     { label: "Option B", value: "optionB" },
 *   ],
 *   value: ["optionA"],
 *   onChange: ({ value, id }) => { }
 * }
 * ```
 */
export interface UIToggleGroupElement
  extends UILabelReadyElement,
    Omit<
      zInfer<typeof uiToggleGroupElementSchema>,
      "onChange" | "onCreate" | "onDestroy"
    > {
  /**
   * The function to call when the value of the toggle group changes.
   *
   * @param args - The arguments passed to the function.
   * @param args.value - Array of the selected values.
   * @param args.id - The id of the toggle group element.
   */
  onChange: (args: {
    value: Array<UIControlOption["value"]>;
    id: string;
  }) => void;
}

const uiToggleGroupElementCreateSchm = uiToggleGroupElementSchema.extend(
  uiLabelReadyElementCreateSchema.params.shape,
);

export const uiToggleGroupElementCreateSchema = {
  params: uiToggleGroupElementCreateSchm,
  clonable: uiToggleGroupElementCreateSchm
    .extend(uiLabelReadyElementCreateSchema.clonable.shape)
    .extend({ onChange: z.string() }),
};

/**
 * The parameters for creating a toggle group element.
 *
 * See {@link UIToggleGroupElement} for more details.
 */
export interface UIToggleGroupElementCreate
  extends Omit<UIToggleGroupElement, "id">,
    UILabelReadyElementCreateParams {}

export type UIToggleGroupElementCreateClonable =
  MakeClonableSchema<UIToggleGroupElementCreate>;

export const uiToggleGroupElementUpdateSchema = {
  params: makeUpdateSchema(uiToggleGroupElementCreateSchema.params),
  clonable: makeUpdateSchema(uiToggleGroupElementCreateSchema.clonable),
};

/**
 * The parameters for updating a toggle group element.
 *
 * See {@link UIToggleGroupElement} for more details.
 */
export interface UIToggleGroupElementUpdate
  extends MakeUpdateSchema<UIToggleGroupElement, UIToggleGroupElementCreate> {}
