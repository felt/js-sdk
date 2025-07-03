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
  uiButtonRowElementCreateSchema,
  uiButtonRowElementSchema,
  uiButtonRowElementUpdateSchema,
  type UIButtonRowElement,
  type UIButtonRowElementCreate,
  type UIButtonRowElementCreateClonable,
  type UIButtonRowElementUpdate,
} from "./UIButtonRowElement";
import {
  uiCheckboxGroupElementCreateSchema,
  uiCheckboxGroupElementSchema,
  uiCheckboxGroupElementUpdateSchema,
  type UICheckboxGroupElement,
  type UICheckboxGroupElementCreate,
  type UICheckboxGroupElementCreateClonable,
  type UICheckboxGroupElementUpdate,
} from "./UICheckboxGroupElement";
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
  uiRadioGroupElementCreateSchema,
  uiRadioGroupElementSchema,
  uiRadioGroupElementUpdateSchema,
  type UIRadioGroupElement,
  type UIRadioGroupElementCreate,
  type UIRadioGroupElementCreateClonable,
  type UIRadioGroupElementUpdate,
} from "./UIRadioGroupElement";
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
import {
  uiToggleGroupElementCreateSchema,
  uiToggleGroupElementSchema,
  uiToggleGroupElementUpdateSchema,
  type UIToggleGroupElement,
  type UIToggleGroupElementCreate,
  type UIToggleGroupElementCreateClonable,
  type UIToggleGroupElementUpdate,
} from "./UIToggleGroupElement";

export const uiPanelElementSchema: z.ZodType<UIPanelElement> =
  z.discriminatedUnion("type", [
    uiButtonElementSchema,
    uiTextElementSchema,
    uiDividerElementSchema,
    uiTextInputElementSchema,
    uiSelectElementSchema,
    uiFlexibleSpaceElementSchema,
    uiButtonRowElementSchema,
    uiCheckboxGroupElementSchema,
    uiRadioGroupElementSchema,
    uiToggleGroupElementSchema,

    uiGridContainerElementSchema,
  ]);

const uiPanelElementCreateParamsSchema: z.ZodType<UIPanelElementCreate> =
  z.discriminatedUnion("type", [
    uiButtonElementCreateSchema.params,
    uiTextElementCreateSchema.params,
    uiDividerElementCreateSchema.params,
    uiTextInputElementCreateSchema.params,
    uiSelectElementCreateSchema.params,
    uiFlexibleSpaceElementCreateSchema.params,
    uiButtonRowElementCreateSchema.params,
    uiCheckboxGroupElementCreateSchema.params,
    uiRadioGroupElementCreateSchema.params,
    uiToggleGroupElementCreateSchema.params,

    uiGridContainerElementCreateSchema.params,
  ]);

const uiPanelElementCreateClonableSchema: z.ZodType<UIPanelElementCreateClonable> =
  z.discriminatedUnion("type", [
    uiButtonElementCreateSchema.clonable,
    uiTextElementCreateSchema.clonable,
    uiDividerElementCreateSchema.clonable,
    uiTextInputElementCreateSchema.clonable,
    uiSelectElementCreateSchema.clonable,
    uiFlexibleSpaceElementCreateSchema.clonable,
    uiButtonRowElementCreateSchema.clonable,
    uiCheckboxGroupElementCreateSchema.clonable,
    uiRadioGroupElementCreateSchema.clonable,
    uiToggleGroupElementCreateSchema.clonable,

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
    uiTextInputElementUpdateSchema.params,
    uiSelectElementUpdateSchema.params,
    uiDividerElementUpdateSchema.params,
    uiFlexibleSpaceElementUpdateSchema.params,
    uiButtonRowElementUpdateSchema.params,
    uiCheckboxGroupElementUpdateSchema.params,
    uiRadioGroupElementUpdateSchema.params,
    uiToggleGroupElementUpdateSchema.params,

    uiGridContainerElementUpdateSchema.params,
  ]),
  clonable: z.discriminatedUnion("type", [
    uiButtonElementUpdateSchema.clonable,
    uiTextElementUpdateSchema.clonable,
    uiTextInputElementUpdateSchema.clonable,
    uiSelectElementUpdateSchema.clonable,
    uiDividerElementUpdateSchema.clonable,
    uiFlexibleSpaceElementUpdateSchema.clonable,
    uiButtonRowElementUpdateSchema.clonable,
    uiCheckboxGroupElementUpdateSchema.clonable,
    uiRadioGroupElementUpdateSchema.clonable,
    uiToggleGroupElementUpdateSchema.clonable,

    uiGridContainerElementUpdateSchema.clonable,
  ]),
};

export type UIPanelElement =
  | UIButtonElement
  | UITextElement
  | UIDividerElement
  | UITextInputElement
  | UISelectElement
  | UIFlexibleSpaceElement
  | UIButtonRowElement
  | UICheckboxGroupElement
  | UIRadioGroupElement
  | UIToggleGroupElement
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
  | UIDividerElementCreate
  | UITextInputElementCreate
  | UISelectElementCreate
  | UIFlexibleSpaceElementCreate
  | UIButtonRowElementCreate
  | UICheckboxGroupElementCreate
  | UIRadioGroupElementCreate
  | UIToggleGroupElementCreate
  | UIGridContainerElementCreate;

export type UIPanelElementCreateClonable =
  | UIButtonElementCreateClonable
  | UITextElementCreateClonable
  | UIDividerElementCreateClonable
  | UITextInputElementCreateClonable
  | UISelectElementCreateClonable
  | UIFlexibleSpaceElementCreateClonable
  | UIButtonRowElementCreateClonable
  | UICheckboxGroupElementCreateClonable
  | UIRadioGroupElementCreateClonable
  | UIToggleGroupElementCreateClonable
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
  | UITextInputElementUpdate
  | UISelectElementUpdate
  | UIDividerElementUpdate
  | UIButtonRowElementUpdate
  | UICheckboxGroupElementUpdate
  | UIRadioGroupElementUpdate
  | UIToggleGroupElementUpdate
  | UIGridContainerElementUpdate
  | UIFlexibleSpaceElementUpdate;
