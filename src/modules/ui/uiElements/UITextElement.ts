import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  makeUpdateSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type MakeClonableSchema,
  type MakeUpdateSchema,
  type UIElementBase,
  type UIElementBaseCreateParams,
} from "./base";

export const uiTextElementSchema = uiElementBaseSchema.extend({
  type: z.literal("Text"),

  /**
   * The text to display in the element.
   */
  content: z.string(),
});

/**
 * Represents a text element in a panel.
 * Markdown is supported.
 *
 * @example
 * #### simple
 * ```typescript
 * {
 *   type: "Text",
 *   content: "Hello, world!",
 * }
 * ```
 *
 * @example
 * #### with links
 * ```typescript
 * {
 *   type: "Text",
 *   content: "Fill the form https://www.google.com.",
 * }
 * ```
 *
 * @example
 * #### markdown
 * ```typescript
 * {
 *   type: "Text",
 *   content: "**Hello**, _world_!",
 * }
 * ```
 *
 * @example
 * #### complex markdown
 * Complex markdown syntax is supported like tables, images, quotes, etc.
 * ```typescript
 * {
 *   type: "Text",
 *   content: `
 *
 * ## Heading
 *
 * This is a paragraph.
 *
 * ### Subheading
 *
 * This is a paragraph.
 *
 * | Name | Age |
 * | ---- | --- |
 * | John | 25 |
 * | Jane | 30 |
 *
 * ![Image](https://via.placeholder.com/150)
 *
 * > This is a quote.
 *
 * [Link](https://www.google.com)
 * `,
 * }
 * ```
 */
export interface UITextElement
  extends UIElementBase,
    Omit<zInfer<typeof uiTextElementSchema>, "onCreate" | "onDestroy"> {}

const uiTextElementCreateSchm = uiTextElementSchema.extend(
  uiElementBaseCreateSchema.params.shape,
);

export const uiTextElementCreateSchema = {
  params: uiTextElementCreateSchm,
  clonable: uiTextElementCreateSchm.extend(
    uiElementBaseCreateSchema.clonable.shape,
  ),
};

/**
 * The parameters for creating a text element.
 *
 * See {@link UITextElement} for more details.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to perform updates.
 */
export interface UITextElementCreate
  extends Omit<UITextElement, "id">,
    UIElementBaseCreateParams {}

export type UITextElementCreateClonable =
  MakeClonableSchema<UITextElementCreate>;

export const uiTextElementUpdateSchema = {
  params: makeUpdateSchema(uiTextElementCreateSchema.params),
  clonable: makeUpdateSchema(uiTextElementCreateSchema.clonable),
};

/**
 * The parameters for updating a text element.
 *
 * See {@link UITextElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export interface UITextElementUpdate
  extends MakeUpdateSchema<UITextElement, UITextElementCreate> {}
