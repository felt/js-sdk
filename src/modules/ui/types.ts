import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import type { UiController } from "./controller";
import type { UIElementBase } from "./uiElements/base";
import type { PlacementForUIElement } from "./uiElements/placementForUiElement";
import { placementForUiElementSchema } from "./uiElements/placementForUiElement";
import {
  uiActionTriggerSchema,
  type UIActionTriggerCreate,
} from "./uiElements/UIActionTrigger";
import { type UIFlexibleSpaceElementCreate } from "./uiElements/UIFlexibleSpaceElement";
import { uiPanelCreateSchema, type UIPanelCreate } from "./uiElements/UIPanel";
import {
  uiPanelElementCreateSchema,
  uiPanelElementUpdateSchema,
  type UIPanelElementCreate,
  type UIPanelElementUpdate,
} from "./uiElements/uiPanelElementSchemas";

const CreateActionTriggerParamsSchema = z.object({
  actionTrigger: uiActionTriggerSchema.create,
  placement: placementForUiElementSchema.optional(),
});

export const CreateActionTriggerParamsClonableSchema = z.object({
  actionTrigger: uiActionTriggerSchema.clonable,
  placement: placementForUiElementSchema.optional(),
});

export interface CreateActionTriggerParams
  extends zInfer<typeof CreateActionTriggerParamsSchema> {
  actionTrigger: UIActionTriggerCreate;
  placement?: PlacementForUIElement;
}

const UpdateActionTriggerParamsSchema = uiActionTriggerSchema.create
  .partial()
  .required({ id: true });

export const UpdateActionTriggerParamsClonableSchema =
  uiActionTriggerSchema.clonable.partial().required({ id: true });

/**
 * @public
 */
export interface UpdateActionTriggerParams
  extends Omit<Partial<UIActionTriggerCreate>, "id"> {
  id: zInfer<typeof UpdateActionTriggerParamsSchema>["id"];
}

const CreatePanelParamsSchema = z.object({
  panel: uiPanelCreateSchema.params,
  placement: placementForUiElementSchema.optional(),
});

/**
 * The parameters for adding a panel to the map by using {@link UiController.createPanel}.
 *
 * @public
 */
export interface CreatePanelParams
  extends zInfer<typeof CreatePanelParamsSchema> {
  /**
   * The panel to add.
   */
  panel: UIPanelCreate;

  /**
   * The placement of the panel on the right sidebar stack.
   *
   * @defaultValue `{ at: "end" }`
   */
  placement?: PlacementForUIElement;
}

export const CreatePanelParamsClonableSchema = z.object({
  panel: uiPanelCreateSchema.clonable,
  placement: placementForUiElementSchema.optional(),
});

export const UpdatePanelClonableSchema = uiPanelCreateSchema.clonable
  .partial()
  .required({ id: true });

/**
 * @public
 */
export interface UpdatePanelParams
  extends Omit<Partial<UIPanelCreate>, "id">,
    UIElementBase {}

const CreatePanelElementsParamsSchema = z.object({
  panelId: z.string(),
  elements: z.array(
    z.object({
      element: uiPanelElementCreateSchema.params,
      container: z
        .union([
          z.literal("body"),
          z.literal("footer"),
          z.object({ id: z.string() }),
        ])
        .optional(),
      placement: placementForUiElementSchema.optional(),
    }),
  ),
});

/**
 * @public
 */
export interface CreatePanelElementsParams
  extends zInfer<typeof CreatePanelElementsParamsSchema> {
  elements: Array<{
    element: UIPanelElementCreate | UIFlexibleSpaceElementCreate;

    /**
     * The section of the panel to add the element to.
     * It can be either one of the top-level sections of the panel (`"body"` or `"footer"`)
     * or a specific container (like {@link UIGridContainerElement}) in the panel (`{ id: string }`).
     *
     * @defaultValue `"body"`
     */
    container?: "body" | "footer" | { id: string };

    /**
     * The placement of the element in the target container (based on the `container` property).
     *
     * @defaultValue `{ at: "end" }`
     */
    placement?: PlacementForUIElement;
  }>;
}

/**
 * @internal
 * @ignore
 */
export const CreatePanelElementsClonableSchema = z.object({
  panelId: z.string(),
  elements: z.array(
    z.object({
      element: uiPanelElementCreateSchema.clonable,
      container: z
        .union([
          z.literal("body"),
          z.literal("footer"),
          z.object({ id: z.string() }),
        ])
        .optional(),
      placement: placementForUiElementSchema.optional(),
    }),
  ),
});

const UpdatePanelElementsParamsSchema = z.object({
  /**
   * The ID of the panel to update.
   */
  panelId: z.string(),

  elements: z.array(z.object({ element: uiPanelElementUpdateSchema.params })),
});

/**
 * @public
 */
export interface UpdatePanelElementsParams
  extends Omit<zInfer<typeof UpdatePanelElementsParamsSchema>, "elements"> {
  /**
   * Dictionary of element IDs to the element to update.
   */
  elements: Array<{ element: UIPanelElementUpdate }>;
}

export const UpdatePanelElementsParamsClonableSchema = z.object({
  panelId: z.string(),
  elements: z.array(z.object({ element: uiPanelElementUpdateSchema.clonable })),
});

/**
 * @internal
 * @ignore
 */
export const DeletePanelElementsParamsSchema = z.object({
  panelId: z.string(),
  elements: z.array(z.string()),
});

/**
 * @public
 */
export interface DeletePanelElementsParams
  extends zInfer<typeof DeletePanelElementsParamsSchema> {}

/**
 * @public
 */
export interface UiControlsOptions
  extends zInfer<typeof UiControlsOptionsSchema> {}

/**
 * @internal
 * @ignore
 */
export const UiControlsOptionsSchema = z.object({
  /**
   * Whether or not the legend is shown.
   *
   * @defaultValue true
   */
  showLegend: z.boolean().optional(),

  /**
   * When co-operative gestures are enabled, the pan and zoom gestures are
   * adjusted to work better when the map is embedded in another page.
   *
   * @remarks
   * On mobile devices, enabling co-operative gestures will allow the user to
   * pan past the embedded map with a single finger drag. To pan the map, they
   * must use two fingers.
   *
   * On desktop devices, enabling co-operative gestures allows the user to
   * scroll past the embedded map using their scroll wheel or trackpad. To
   * zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while
   * scrolling.
   *
   * @defaultValue true
   */
  cooperativeGestures: z.boolean().optional(),

  /**
   * Whether or not the full screen button is shown in an embedded map.
   *
   * @remarks
   * When clicked, this will open the map in a new tab or window.
   *
   * @defaultValue true
   */
  fullScreenButton: z.boolean().optional(),

  /**
   * Whether or not the geolocation button is shown in an embedded map.
   *
   * @remarks
   * The geolocation feature will plot your position on the map. If you
   * click the button again, it will start tracking your position.
   *
   * @defaultValue false
   */
  geolocation: z.boolean().optional(),

  /**
   * Whether or not the zoom controls are shown in an embedded map.
   *
   * @remarks
   * This does not affect whether or not the map can be zoomed, just
   * the display of the zoom controls in the bottom right corner of the map.
   *
   * @defaultValue true
   */
  zoomControls: z.boolean().optional(),

  /**
   * Whether or not the scale bar is shown in an embedded map.
   *
   * @defaultValue true
   */
  scaleBar: z.boolean().optional(),
});

/**
 * The options for which parts of the Felt UI can be shown when interacting with
 * features and elements on the map.
 *
 * Switching these off can be useful if you add your own click, selection or hover
 * handlers for features and elements.
 *
 * @public
 */
export interface UiOnMapInteractionsOptions
  extends zInfer<typeof UiOnMapInteractionsOptionsSchema> {}

/**
 * @internal
 * @ignore
 */
export const UiOnMapInteractionsOptionsSchema = z.object({
  /**
   * Set this to `false` to prevent the panel that shows information about a selected
   * feature from being shown.
   */
  featureSelectPanel: z.boolean().optional(),

  /**
   * Set this to `false` to prevent the panel that shows information about a hovered
   * feature from being shown.
   */
  featureHoverPanel: z.boolean().optional(),

  /**
   * Set this to `false` to prevent the panel that shows information about a selected
   * element from being shown.
   */
  elementSelectPanel: z.boolean().optional(),

  /**
   * Set this to `false` to prevent clicking on a map link element from opening that link
   * in a new tab or window.
   */
  linkClickOpen: z.boolean().optional(),

  /**
   * Set this to `false` to prevent clicking on an image element from opening the image
   * in a lightbox.
   */
  imageLightboxOpen: z.boolean().optional(),
});
