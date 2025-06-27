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
  uiFlexibleSpaceElementUpdateSchema,
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
import type {
  UITextElement,
  UITextElementCreate,
  UITextElementCreateClonable,
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
  type UITextInputElementCreateClonable,
  type UITextInputElementUpdate,
} from "./UITextInputElement";

// only elements that can be added to the panel root (body or footer)
// this excludes FlexibleSpace element because it is a button group-specific element
export const uiPanelElementSchema: z.ZodType<UIPanelElement> = z.lazy(() =>
  z.discriminatedUnion("type", [
    uiButtonElementSchema,
    uiTextElementSchema,
    uiButtonGroupElementSchema,
    uiDividerElementSchema,
    uiTextInputElementSchema,
    uiSelectElementSchema,
    uiGridContainerElementSchema,
  ]),
);

const uiPanelElementCreateParamsSchema: z.ZodType<UIPanelElementCreate> =
  z.lazy(() =>
    z.discriminatedUnion("type", [
      uiButtonElementCreateSchema.params,
      uiTextElementCreateSchema.params,
      uiButtonGroupElementCreateSchema.params,
      uiDividerElementCreateSchema.params,
      uiTextInputElementCreateSchema.params,
      uiSelectElementCreateSchema.params,
      uiGridContainerElementCreateSchema.params,
    ]),
  );

const uiPanelElementCreateClonableSchema: z.ZodType<UIPanelElementCreateClonable> =
  z.lazy(() =>
    z.discriminatedUnion("type", [
      uiButtonElementCreateSchema.clonable,
      uiTextElementCreateSchema.clonable,
      uiButtonGroupElementCreateSchema.clonable,
      uiDividerElementCreateSchema.clonable,
      uiTextInputElementCreateSchema.clonable,
      uiSelectElementCreateSchema.clonable,
      uiGridContainerElementCreateSchema.clonable,
    ]),
  );

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
    uiFlexibleSpaceElementUpdateSchema.params,
    uiDividerElementUpdateSchema.params,
    uiGridContainerElementUpdateSchema.params,
  ]),
  clonable: z.discriminatedUnion("type", [
    uiButtonElementUpdateSchema.clonable,
    uiTextElementUpdateSchema.clonable,
    uiButtonGroupElementUpdateSchema.clonable,
    uiTextInputElementUpdateSchema.clonable,
    uiSelectElementUpdateSchema.clonable,
    uiFlexibleSpaceElementUpdateSchema.clonable,
    uiDividerElementUpdateSchema.clonable,
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
  | UIGridContainerElementCreate;

export type UIPanelElementCreateClonable =
  | UIButtonElementCreateClonable
  | UITextElementCreateClonable
  | UIButtonGroupElementCreateClonable
  | UIDividerElementCreateClonable
  | UITextInputElementCreateClonable
  | UISelectElementCreateClonable
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
  | UIFlexibleSpaceElementUpdate
  | UIDividerElementUpdate
  | UIGridContainerElementUpdate;
