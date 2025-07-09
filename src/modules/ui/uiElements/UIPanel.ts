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
 * A UI panel that can be added to the map using {@link UiController.createOrUpdatePanel}.
 *
 * Panels are containers for UI elements with title, body, footer, and close button.
 * Body and footer elements are arranged in vertical stacks.
 *
 * #### Body
 * Main content area that scrolls when content exceeds available space.
 *
 * #### Footer
 * Sticky bottom section for action buttons (e.g., Save, Cancel).
 *
 * #### Close Button
 * Optional close icon in header. When `onClickClose` is provided, you must handle
 * panel cleanup and removal.
 *
 * @example
 * ```typescript
 * // 1. Create panel ID
 * const panelId = await felt.createPanelId();
 *
 * // 2. Create panel with close button and footer
 * await felt.createOrUpdatePanel({
 *   panel: {
 *     id: panelId,
 *     title: "My Panel",
 *     body: [
 *       { type: "Text", content: "Hello, world!" },
 *       { type: "TextInput", label: "Name", placeholder: "Enter your name" }
 *     ],
 *     footer: [
 *       {
 *         type: "ButtonRow",
 *         align: "end",
 *         items: [
 *           { type: "Button", label: "Cancel", onClick: () => handleCancel() },
 *           { type: "Button", label: "Save", onClick: () => handleSave() }
 *         ]
 *       }
 *     ],
 *     onClickClose: (args) => {
 *       // Clean up any state or resources
 *       cleanupResources();
 *       // Close the panel
 *       felt.deletePanel(panelId);
 *     }
 *   }
 * });
 * ```
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
      body: z.array(uiPanelElementCreateSchema.clonable).optional(),
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
