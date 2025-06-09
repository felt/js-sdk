import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import type { UiController } from "../controller";
import {
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementBase,
  type UIElementBaseCreateParams,
} from "./base";
import {
  uiPanelElementsCreateSchema,
  uiPanelElementsSchema,
  type UIPanelElements,
  type UIPanelElementsCreate,
} from "./uiPanelElementsSchemas";

const uiPanelSchema = uiElementBaseSchema.extend({
  type: z.literal("Panel"),

  /**
   * The title to display in the panel header.
   */
  title: z.string().optional(),

  /**
   * The elements to add to the panel body.
   */
  body: z.array(uiPanelElementsSchema),

  /**
   * The elements to add to the panel footer.
   */
  footer: z.array(uiPanelElementsSchema).optional(),

  onClose: z.function().returns(z.void()).optional(),
});

/**
 * Represents a panel in the UI.
 * It can be added to the map by using the {@link UiController.createPanel} method.
 *
 * A panel is a container for other UI elements.
 * It can have a title, a body, a footer as well as a close button.
 *
 * The body and footer are arrays of UI elements and turn into vertical stacks of elements.
 * The close button is a button that can be used to close the panel.
 *
 * #### Body
 * Body is the main content of the panel. It is scrollable which means
 * that it can contain a lot of elements.
 *
 * #### Footer
 * Footer is sticky to the bottom of the panel, and can be used to add actions to the panel (e.g. save, cancel, etc.).
 * Normally, it should contain a `ButtonGroup` element with a `Cancel` and `Save` button. Using `ButtonGroup` is recommended
 * because it will automatically align the buttons to the end of the panel giving it a nice look.
 *
 * @example Basic
 * ```typescript
 * {
 *   title: "My Panel",
 *   body: [
 *     { type: "Text", text: "Hello" },
 *   ],
 * });
 * ```
 *
 * @example Form
 * ```typescript
 * {
 *   title: "My Panel",
 *   body: [
 *     { type: "Text", text: "Introduce your name and last name" },
 *     { type: "TextInput", label: "Name", value: "", placeholder: "John", onChange: (value) => setName(value) },
 *     { type: "TextInput", label: "Last name", value: "", placeholder: "Doe", onChange: (value) => setLastName(value) },
 *   ],
 *   footer: [
 *     { type: "ButtonGroup", items: [
 *       { type: "Button", label: "Reset", onClick: () => alert("Reset") },
 *       { type: "Button", label: "Save", onClick: () => alert("Save") },
 *     ] },
 *   ],
 * });
 * ```
 *
 */
export interface UIPanel
  extends UIElementBase,
    Omit<
      zInfer<typeof uiPanelSchema>,
      "onClose" | "body" | "footer" | "onCreate" | "onDestroy"
    > {
  /**
   * The elements to add to the panel body.
   */
  body: UIPanelElements[];

  /**
   * The elements to add to the panel footer.
   */
  footer?: UIPanelElements[];

  /**
   * A function to call when panel's close button is clicked.
   */
  onClose?: () => void;
}

const uiPanelCreateSchm = uiPanelSchema
  .extend(uiElementBaseCreateSchema.params.shape)
  .partial({ type: true })
  .omit({ body: true, footer: true })
  .extend({
    body: z.array(uiPanelElementsCreateSchema.params),
    footer: z.array(uiPanelElementsCreateSchema.params).optional(),
  });

export const uiPanelCreateSchema = {
  params: uiPanelCreateSchm,
  clonable: uiPanelCreateSchm
    .extend(uiElementBaseCreateSchema.clonable.shape)
    .extend({
      onClose: z.string().optional(),
      body: z.array(uiPanelElementsCreateSchema.clonable),
      footer: z.array(uiPanelElementsCreateSchema.clonable).optional(),
    }),
};

/**
 * The parameters for creating a panel by using {@link UiController.createPanel}.
 *
 * @see {@link UIPanel} for more information about panels.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to perform updates.
 */
export interface UIPanelCreate
  extends Omit<UIPanel, "id" | "body" | "footer" | "type">,
    UIElementBaseCreateParams {
  type?: "Panel";

  /**
   * The elements to add to the panel body.
   */
  body: UIPanelElementsCreate[];

  /**
   * The elements to add to the panel footer.
   */
  footer?: UIPanelElementsCreate[];
}
