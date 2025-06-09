import { z } from "zod";
import {
  uiButtonElementCreateSchema,
  uiButtonElementSchema,
  uiButtonElementUpdateSchema,
  type UIButtonElement,
  type UIButtonElementCreate,
  type UIButtonElementUpdate,
} from "./UIButtonElement";
import {
  uiButtonGroupElementCreateSchema,
  uiButtonGroupElementSchema,
  uiButtonGroupElementUpdateSchema,
  type UIButtonGroupElement,
  type UIButtonGroupElementCreate,
  type UIButtonGroupElementUpdate,
} from "./UIButtonGroupElement";
import {
  uiDividerElementCreateSchema,
  uiDividerElementSchema,
  uiDividerElementUpdateSchema,
  type UIDividerElement,
  type UIDividerElementCreate,
  type UIDividerElementUpdate,
} from "./UIDividerElement";
import {
  uiFlexibleSpaceElementUpdateSchema,
  type UIFlexibleSpaceElementUpdate,
} from "./UIFlexibleSpaceElement";
import {
  uiSelectElementCreateSchema,
  uiSelectElementSchema,
  uiSelectElementUpdateSchema,
  type UISelectElement,
  type UISelectElementCreate,
  type UISelectElementUpdate,
} from "./UISelectElement";
import type {
  UITextElement,
  UITextElementCreate,
  UITextElementUpdate,
} from "./UITextElement";
import {
  uiTextElementCreateSchema,
  uiTextElementSchema,
  uiTextElementUpdateSchema,
} from "./UITextElement";
import {
  uiTextInputElementCreateSchema,
  uiTextInputElementSchema,
  uiTextInputElementUpdateSchema,
  type UITextInputElement,
  type UITextInputElementCreate,
  type UITextInputElementUpdate,
} from "./UITextInputElement";

// only elements that can be added to the panel root (body or footer)
// this excludes FlexibleSpace element because it is a button group-specific element
export const uiPanelElementsSchema = z.discriminatedUnion("type", [
  uiButtonElementSchema,
  uiTextElementSchema,
  uiButtonGroupElementSchema,
  uiDividerElementSchema,
  uiTextInputElementSchema,
  uiSelectElementSchema,
]);

export const uiPanelElementsCreateSchema = {
  params: z.discriminatedUnion("type", [
    uiButtonElementCreateSchema.params,
    uiTextElementCreateSchema.params,
    uiButtonGroupElementCreateSchema.params,
    uiDividerElementCreateSchema.params,
    uiTextInputElementCreateSchema.params,
    uiSelectElementCreateSchema.params,
  ]),
  clonable: z.discriminatedUnion("type", [
    uiButtonElementCreateSchema.clonable,
    uiTextElementCreateSchema.clonable,
    uiButtonGroupElementCreateSchema.clonable,
    uiDividerElementCreateSchema.clonable,
    uiTextInputElementCreateSchema.clonable,
    uiSelectElementCreateSchema.clonable,
  ]),
};

export const uiPanelElementsUpdateSchema = {
  params: z.discriminatedUnion("type", [
    uiButtonElementUpdateSchema.params,
    uiTextElementUpdateSchema.params,
    uiButtonGroupElementUpdateSchema.params,
    uiTextInputElementUpdateSchema.params,
    uiSelectElementUpdateSchema.params,
    uiFlexibleSpaceElementUpdateSchema.params,
    uiDividerElementUpdateSchema.params,
  ]),
  clonable: z.discriminatedUnion("type", [
    uiButtonElementUpdateSchema.clonable,
    uiTextElementUpdateSchema.clonable,
    uiButtonGroupElementUpdateSchema.clonable,
    uiTextInputElementUpdateSchema.clonable,
    uiSelectElementUpdateSchema.clonable,
    uiFlexibleSpaceElementUpdateSchema.clonable,
    uiDividerElementUpdateSchema.clonable,
  ]),
};

export type UIPanelElements =
  | UIButtonElement
  | UITextElement
  | UIButtonGroupElement
  | UIDividerElement
  | UITextInputElement
  | UISelectElement;

/**
 * This is a union of all the possible elements that can be created inside panel's body or footer.
 *
 * @remarks
 * For the sake of convenience, `id` is optional but recommended if you want to be able to perform updates.
 */
export type UIPanelElementsCreate =
  | UIButtonElementCreate
  | UITextElementCreate
  | UIButtonGroupElementCreate
  | UIDividerElementCreate
  | UITextInputElementCreate
  | UISelectElementCreate;

/**
 * This is a union of all the possible elements that can be updated inside panel's body or footer (excluding Divider and FlexibleSpace elements because they cannot be updated).
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export type UIPanelElementsUpdate =
  | UIButtonElementUpdate
  | UITextElementUpdate
  | UIButtonGroupElementUpdate
  | UITextInputElementUpdate
  | UISelectElementUpdate
  | UIFlexibleSpaceElementUpdate
  | UIDividerElementUpdate;
