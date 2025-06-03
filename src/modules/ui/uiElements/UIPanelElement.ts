import type { UISelectElementInput } from "./UISelectElement";

import type { UIButtonGroupElementInput } from "./UIButtonGroupElement";

import type { UIButtonElementInput } from "./UIButtonElement";

import type { UITextElementInput } from "./UITextElement";

import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import type { UiController } from "../controller";
import {
  uiElementBaseClonableSchema,
  uiElementBaseInputSchema,
  uiElementBaseSchema,
} from "./base";
import { uiButtonElementSchemas } from "./UIButtonElement";
import { uiButtonGroupElementSchemas } from "./UIButtonGroupElement";
import {
  uiDividerElementSchemas,
  type UIDividerElementInput,
} from "./UIDividerElement";
import { uiSelectElementSchemas } from "./UISelectElement";
import { uiTextElementSchemas } from "./UITextElement";
import {
  uiTextInputElementSchemas,
  type UITextInputElementInput,
} from "./UITextInputElement";

export const panelUiElementsSchemas = {
  public: z.discriminatedUnion("type", [
    uiTextElementSchemas.public,
    uiButtonElementSchemas.public,
    uiTextInputElementSchemas.public,
    uiDividerElementSchemas.public,
    uiButtonGroupElementSchemas.public,
    uiSelectElementSchemas.public,
  ]),
  input: z.discriminatedUnion("type", [
    uiTextElementSchemas.input,
    uiButtonElementSchemas.input,
    uiTextInputElementSchemas.input,
    uiDividerElementSchemas.input,
    uiButtonGroupElementSchemas.input,
    uiSelectElementSchemas.input,
  ]),
  clonable: z.discriminatedUnion("type", [
    uiTextElementSchemas.clonable,
    uiButtonElementSchemas.clonable,
    uiTextInputElementSchemas.clonable,
    uiDividerElementSchemas.clonable,
    uiButtonGroupElementSchemas.clonable,
    uiSelectElementSchemas.clonable,
  ]),
};

export const uiPanelElementSchemas = {
  public: uiElementBaseSchema.extend({
    type: z.literal("Panel"),
    title: z.string().optional(),
    onClose: z.function().returns(z.void()).optional(),
    items: z.array(panelUiElementsSchemas.public),
    footer: z.array(panelUiElementsSchemas.public).optional(),
  }),
  input: uiElementBaseInputSchema.extend({
    type: z.literal("Panel").optional(),
    title: z.string().optional(),
    onClose: z.function().returns(z.void()).optional(),
    items: z.array(panelUiElementsSchemas.input),
    footer: z.array(panelUiElementsSchemas.input).optional(),
  }),
  clonable: uiElementBaseClonableSchema.extend({
    type: z.literal("Panel").optional(),
    title: z.string().optional(),
    onClose: z.string().optional(),
    items: z.array(panelUiElementsSchemas.clonable),
    footer: z.array(panelUiElementsSchemas.clonable).optional(),
  }),
};

/**
 * The input panel to add to the map by using the {@link UiController.addPanelElement} method.
 *
 * @remarks
 * For the sake of convenience, the `id` of the panel and its elements are optional,
 * but it is recommended to provide them if you want to be able to perform updates.
 *
 * @public
 */
export interface UIPanelElementInput
  extends zInfer<typeof uiPanelElementSchemas.input> {
  /**
   * The elements to add to the panel body.
   */
  items: PanelUIElementsInput[];

  /**
   * The elements to add to the panel footer.
   */
  footer?: PanelUIElementsInput[];
}

/**
 * This is a union of all the possible elements that can be added to a panel.
 *
 * @remarks
 * For the sake of convenience, `id` is optional but recommended if you want to be able to
 * perform updates.
 *
 * @public
 */
export type PanelUIElementsInput =
  | UITextElementInput
  | UIButtonElementInput
  | UITextInputElementInput
  | UIDividerElementInput
  | UIButtonGroupElementInput
  | UISelectElementInput;

export const panelUiElementsUpdateSchemas = {
  input: z.discriminatedUnion("type", [
    uiTextElementSchemas.input.partial().required({ type: true }),
    uiButtonElementSchemas.input.partial().required({ type: true }),
    uiTextInputElementSchemas.input.partial().required({ type: true }),
    uiDividerElementSchemas.input.partial().required({ type: true }),
    uiButtonGroupElementSchemas.input.partial().required({ type: true }),
    uiSelectElementSchemas.input.partial().required({ type: true }),
  ]),
  clonable: z.discriminatedUnion("type", [
    uiTextElementSchemas.clonable.partial().required({ type: true }),
    uiButtonElementSchemas.clonable.partial().required({ type: true }),
    uiTextInputElementSchemas.clonable.partial().required({ type: true }),
    uiDividerElementSchemas.clonable.partial().required({ type: true }),
    uiButtonGroupElementSchemas.clonable.partial().required({ type: true }),
    uiSelectElementSchemas.clonable.partial().required({ type: true }),
  ]),
};
