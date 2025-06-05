import type { UISelectElementCreate } from "./UISelectElement";

import type { UIButtonGroupElementCreate } from "./UIButtonGroupElement";

import type { UIButtonElementCreate } from "./UIButtonElement";

import type { UITextElementCreate } from "./UITextElement";

import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import type { UiController } from "../controller";
import {
  uiElementBaseClonableSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
} from "./base";
import { uiButtonElementSchemas } from "./UIButtonElement";
import { uiButtonGroupElementSchemas } from "./UIButtonGroupElement";
import {
  uiDividerElementSchemas,
  type UIDividerElementCreate,
} from "./UIDividerElement";
import { uiSelectElementSchemas } from "./UISelectElement";
import { uiTextElementSchemas } from "./UITextElement";
import {
  uiTextInputElementSchemas,
  type UITextInputElementCreate,
} from "./UITextInputElement";

export const uiPanelElementsSchemas = {
  read: z.discriminatedUnion("type", [
    uiTextElementSchemas.read,
    uiButtonElementSchemas.read,
    uiTextInputElementSchemas.read,
    uiDividerElementSchemas.read,
    uiButtonGroupElementSchemas.read,
    uiSelectElementSchemas.read,
  ]),
  create: z.discriminatedUnion("type", [
    uiTextElementSchemas.create,
    uiButtonElementSchemas.create,
    uiTextInputElementSchemas.create,
    uiDividerElementSchemas.create,
    uiButtonGroupElementSchemas.create,
    uiSelectElementSchemas.create,
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

const uiPanelBaseSchema = z.object({
  type: z.literal("Panel"),

  /**
   * The title to display in the panel header.
   */
  title: z.string().optional(),
});

export const uiPanelSchemas = {
  read: uiElementBaseSchema.extend(uiPanelBaseSchema.shape).extend({
    onClose: z.function().returns(z.void()).optional(),
    body: z.array(uiPanelElementsSchemas.read),
    footer: z.array(uiPanelElementsSchemas.read).optional(),
  }),
  create: uiElementBaseCreateSchema
    .extend(uiPanelBaseSchema.partial().shape)
    .extend({
      onClose: z.function().returns(z.void()).optional(),
      body: z.array(uiPanelElementsSchemas.create),
      footer: z.array(uiPanelElementsSchemas.create).optional(),
    }),
  clonable: uiElementBaseClonableSchema
    .extend(uiPanelBaseSchema.partial().shape)
    .extend({
      onClose: z.string().optional(),
      body: z.array(uiPanelElementsSchemas.clonable),
      footer: z.array(uiPanelElementsSchemas.clonable).optional(),
    }),
};

/**
 * The panel to add to the map by using the {@link UiController.createPanel} method.
 *
 * @remarks
 * For the sake of convenience, the `id` of the panel and its elements are optional,
 * but it is recommended to provide them if you want to be able to perform updates.
 *
 * @public
 */
export interface UIPanelCreate extends zInfer<typeof uiPanelSchemas.create> {
  /**
   * The elements to add to the panel body.
   */
  body: UIPanelElementsCreate[];

  /**
   * The elements to add to the panel footer.
   */
  footer?: UIPanelElementsCreate[];

  /**
   * A function to call when panel's close button is clicked.
   */
  onClose?: () => void;
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
export type UIPanelElementsCreate =
  | UITextElementCreate
  | UIButtonElementCreate
  | UITextInputElementCreate
  | UIDividerElementCreate
  | UIButtonGroupElementCreate
  | UISelectElementCreate;

export const uiPanelElementsUpdateSchemas = {
  create: z.discriminatedUnion("type", [
    uiTextElementSchemas.create.partial().required({ type: true }),
    uiButtonElementSchemas.create.partial().required({ type: true }),
    uiTextInputElementSchemas.create.partial().required({ type: true }),
    uiDividerElementSchemas.create.partial().required({ type: true }),
    uiButtonGroupElementSchemas.create.partial().required({ type: true }),
    uiSelectElementSchemas.create.partial().required({ type: true }),
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
