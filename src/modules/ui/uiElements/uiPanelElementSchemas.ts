import { z } from "zod";
import {
  uiButtonElementCreateSchema,
  uiButtonElementSchema,
  uiButtonElementUpdateSchema,
  type UIButtonElement,
  type UIButtonElementCreate,
  type UIButtonElementCreateClonable,
  type UIButtonElementUpdate,
} from "./UIButtonElement";
import {
  uiButtonGroupElementCreateSchema,
  uiButtonGroupElementSchema,
  uiButtonGroupElementUpdateSchema,
  type UIButtonGroupElement,
  type UIButtonGroupElementCreate,
  type UIButtonGroupElementCreateClonable,
  type UIButtonGroupElementUpdate,
} from "./UIButtonGroupElement";
import {
  uiDividerElementCreateSchema,
  uiDividerElementSchema,
  uiDividerElementUpdateSchema,
  type UIDividerElement,
  type UIDividerElementCreate,
  type UIDividerElementCreateClonable,
  type UIDividerElementUpdate,
} from "./UIDividerElement";
import {
  uiFlexibleSpaceElementCreateSchema,
  uiFlexibleSpaceElementSchema,
  uiFlexibleSpaceElementUpdateSchema,
  type UIFlexibleSpaceElement,
  type UIFlexibleSpaceElementCreate,
  type UIFlexibleSpaceElementCreateClonable,
  type UIFlexibleSpaceElementUpdate,
} from "./UIFlexibleSpaceElement";
import {
  uiGridContainerElementCreateSchema,
  uiGridContainerElementSchema,
  uiGridContainerElementUpdateSchema,
  type UIGridContainerElement,
  type UIGridContainerElementCreate,
  type UIGridContainerElementCreateClonable,
  type UIGridContainerElementUpdate,
} from "./UIGridContainerElement";
import {
  uiSelectElementCreateSchema,
  uiSelectElementSchema,
  uiSelectElementUpdateSchema,
  type UISelectElement,
  type UISelectElementCreate,
  type UISelectElementCreateClonable,
  type UISelectElementUpdate,
} from "./UISelectElement";
import {
  uiTextElementCreateSchema,
  uiTextElementSchema,
  uiTextElementUpdateSchema,
  type UITextElement,
  type UITextElementCreate,
  type UITextElementCreateClonable,
  type UITextElementUpdate,
} from "./UITextElement";
import {
  uiTextInputElementCreateSchema,
  uiTextInputElementSchema,
  uiTextInputElementUpdateSchema,
  type UITextInputElement,
  type UITextInputElementCreate,
  type UITextInputElementCreateClonable,
  type UITextInputElementUpdate,
} from "./UITextInputElement";

export const uiPanelElementSchema: z.ZodType<UIPanelElement> =
  z.discriminatedUnion("type", [
    uiButtonElementSchema,
    uiTextElementSchema,
    uiButtonGroupElementSchema,
    uiDividerElementSchema,
    uiTextInputElementSchema,
    uiSelectElementSchema,
    uiFlexibleSpaceElementSchema,

    uiGridContainerElementSchema,
  ]);

const uiPanelElementCreateParamsSchema: z.ZodType<UIPanelElementCreate> =
  z.discriminatedUnion("type", [
    uiButtonElementCreateSchema.params,
    uiTextElementCreateSchema.params,
    uiButtonGroupElementCreateSchema.params,
    uiDividerElementCreateSchema.params,
    uiTextInputElementCreateSchema.params,
    uiSelectElementCreateSchema.params,
    uiFlexibleSpaceElementCreateSchema.params,

    uiGridContainerElementCreateSchema.params,
  ]);

const uiPanelElementCreateClonableSchema: z.ZodType<UIPanelElementCreateClonable> =
  z.discriminatedUnion("type", [
    uiButtonElementCreateSchema.clonable,
    uiTextElementCreateSchema.clonable,
    uiButtonGroupElementCreateSchema.clonable,
    uiDividerElementCreateSchema.clonable,
    uiTextInputElementCreateSchema.clonable,
    uiSelectElementCreateSchema.clonable,
    uiFlexibleSpaceElementCreateSchema.clonable,

    uiGridContainerElementCreateSchema.clonable,
  ]);

export const uiPanelElementCreateSchema = {
  params: uiPanelElementCreateParamsSchema,
  clonable: uiPanelElementCreateClonableSchema,
};

export const uiPanelElementUpdateSchema = {
  params: z.discriminatedUnion("type", [
    uiButtonElementUpdateSchema.params,
    uiTextElementUpdateSchema.params,
    uiButtonGroupElementUpdateSchema.params,
    uiTextInputElementUpdateSchema.params,
    uiSelectElementUpdateSchema.params,
    uiDividerElementUpdateSchema.params,
    uiFlexibleSpaceElementUpdateSchema.params,

    uiGridContainerElementUpdateSchema.params,
  ]),
  clonable: z.discriminatedUnion("type", [
    uiButtonElementUpdateSchema.clonable,
    uiTextElementUpdateSchema.clonable,
    uiButtonGroupElementUpdateSchema.clonable,
    uiTextInputElementUpdateSchema.clonable,
    uiSelectElementUpdateSchema.clonable,
    uiDividerElementUpdateSchema.clonable,
    uiFlexibleSpaceElementUpdateSchema.clonable,

    uiGridContainerElementUpdateSchema.clonable,
  ]),
};

export type UIPanelElement =
  | UIButtonElement
  | UITextElement
  | UIButtonGroupElement
  | UIDividerElement
  | UITextInputElement
  | UISelectElement
  | UIFlexibleSpaceElement
  | UIGridContainerElement;

/**
 * This is a union of all the possible elements that can be created inside panel's body or footer.
 *
 * @remarks
 * For the sake of convenience, `id` is optional but recommended if you want to be able to perform updates.
 */
export type UIPanelElementCreate =
  | UIButtonElementCreate
  | UITextElementCreate
  | UIButtonGroupElementCreate
  | UIDividerElementCreate
  | UITextInputElementCreate
  | UISelectElementCreate
  | UIFlexibleSpaceElementCreate
  | UIGridContainerElementCreate;

export type UIPanelElementCreateClonable =
  | UIButtonElementCreateClonable
  | UITextElementCreateClonable
  | UIButtonGroupElementCreateClonable
  | UIDividerElementCreateClonable
  | UITextInputElementCreateClonable
  | UISelectElementCreateClonable
  | UIFlexibleSpaceElementCreateClonable
  | UIGridContainerElementCreateClonable;

/**
 * This is a union of all the possible elements that can be updated inside panel's body or footer (excluding Divider and FlexibleSpace elements because they cannot be updated).
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export type UIPanelElementUpdate =
  | UIButtonElementUpdate
  | UITextElementUpdate
  | UIButtonGroupElementUpdate
  | UITextInputElementUpdate
  | UISelectElementUpdate
  | UIDividerElementUpdate
  | UIGridContainerElementUpdate
  | UIFlexibleSpaceElementUpdate;
