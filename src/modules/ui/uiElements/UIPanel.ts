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
  uiPanelElementCreateSchema,
  uiPanelElementSchema,
  type UIPanelElement,
  type UIPanelElementCreate,
} from "./uiPanelElementSchemas";

const uiPanelSchema = uiElementBaseSchema.extend({
  type: z.literal("Panel"),

  /**
   * The title to display in the panel header.
   */
  title: z.string().optional(),

  /**
   * The elements to add to the panel body.
   */
  body: z.array(uiPanelElementSchema).optional(),

  /**
   * The elements to add to the panel footer.
   */
  footer: z.array(uiPanelElementSchema).optional(),

  onClickClose: z
    .function()
    .args(z.object({ id: z.string() }))
    .returns(z.void())
    .optional(),
});

/**
 * Represents a panel in the UI.
 * It can be added to the map by using the {@link UiController.createOrUpdatePanel} method.
 *
 * A panel is a container for other UI elements.
 * It can have a title, a body, a footer as well as a close button.
 *
 * The body and footer are arrays of UI elements and turn into vertical stacks of elements.
 *
 * The close button is a button rendered in the top right corner of the panel that can be
 * used to close the panel and is only visible if `onClickClose` is provided.
 * Usually, you want to call {@link UiController.deletePanel} when the close button is clicked,
 * e.g. `onClickClose: () => felt.deletePanel("my-panel")`.
 *
 * #### Body
 * Body is the main content of the panel. It is scrollable which means
 * that it can contain a lot of elements.
 *
 * #### Footer
 * Footer is sticky to the bottom of the panel, and can be used to add actions to the panel (e.g. save, cancel, etc.).
 *
 * @example
 * #### basic
 * ```typescript
 * {
 *   title: "My Panel",
 *   body: [
 *     { type: "Text", text: "Hello" },
 *   ],
 * }
 * ```
 *
 * @example
 * #### closable
 * ```typescript
 * {
 *   id: "my-panel",
 *   title: "My Panel",
 *   onClickClose: () => felt.deletePanel("my-panel"),
 * }
 *
 * @example
 * #### form
 * ```typescript
 * {
 *   title: "My Panel",
 *   body: [
 *     { type: "Text", text: "Introduce your name and last name" },
 *     { type: "TextInput", label: "Name", value: "", placeholder: "John", onChange: (value) => setName(value) },
 *     { type: "TextInput", label: "Last name", value: "", placeholder: "Doe", onChange: (value) => setLastName(value) },
 *   ],
 *   footer: [
 *     {
 *       type: "Grid",
 *       grid: "auto-flow / 1fr auto auto",
 *       items: [
 *         { type: "FlexibleSpace" }, // this will make the buttons to be aligned to the end of the panel
 *         { type: "Button", label: "Reset", onClick: () => alert("Reset") },
 *         { type: "Button", label: "Save", onClick: () => alert("Save") },
 *       ],
 *     },
 *   ],
 * }
 * ```
 *
 */
export interface UIPanel
  extends UIElementBase,
    Omit<
      zInfer<typeof uiPanelSchema>,
      "onClickClose" | "body" | "footer" | "onCreate" | "onDestroy" | "id"
    > {
  /**
   * The ID of the panel obtained from {@link UiController.createPanelId}.
   *
   * @remarks
   * Custom IDs are not supported.
   */
  id: string;

  /**
   * The elements to add to the panel body.
   */
  body?: UIPanelElement[];

  /**
   * The elements to add to the panel footer.
   */
  footer?: UIPanelElement[];

  /**
   * A function to call when panel's close button is clicked.
   *
   * @param args - The arguments passed to the function.
   * @param args.id - The id of the panel.
   */
  onClickClose?: (args: { id: string }) => void;
}

const uiPanelCreateSchm = uiPanelSchema
  .extend(uiElementBaseCreateSchema.params.shape)
  .required({ id: true })
  .partial({ type: true })
  .omit({ body: true, footer: true })
  .extend({
    body: z.array(uiPanelElementCreateSchema.params).optional(),
    footer: z.array(uiPanelElementCreateSchema.params).optional(),
  });

export const uiPanelCreateSchema = {
  params: uiPanelCreateSchm,
  clonable: uiPanelCreateSchm
    .extend(uiElementBaseCreateSchema.clonable.shape)
    .required({ id: true })
    .extend({
      onClickClose: z.string().optional(),
      body: z.array(uiPanelElementCreateSchema.clonable),
      footer: z.array(uiPanelElementCreateSchema.clonable).optional(),
    }),
};

/**
 * The parameters for creating a panel by using {@link UiController.createOrUpdatePanel}.
 *
 * @see {@link UIPanel} for more information about panels.
 */
export interface UIPanelCreateOrUpdate
  extends Omit<UIPanel, "body" | "footer" | "type">,
    Omit<UIElementBaseCreateParams, "id"> {
  type?: "Panel";

  /**
   * The elements to add to the panel body.
   */
  body?: UIPanelElementCreate[];

  /**
   * The elements to add to the panel footer.
   */
  footer?: UIPanelElementCreate[];
}
