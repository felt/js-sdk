/**
 * The UI part of the Felt SDK allows you to enable and disable certain
 * UI features such as the legend and the full screen button.
 *
 * @module UI
 */
export type {
  CreateActionTriggerParams,
  CreatePanelElementsParams,
  CreatePanelParams,
  DeletePanelElementsParams,
  UiOnMapInteractionsOptions as OnMapInteractionsOptions,
  UiControlsOptions,
  UpdateActionTriggerParams,
  UpdatePanelElementsParams,
  UpdatePanelParams,
} from "./types";

export type { PlacementForUIElement } from "./uiElements/placementForUiElement";

export type { UIPanel, UIPanelCreate } from "./uiElements/UIPanel";

export type {
  UIButtonElement,
  UIButtonElementCreate,
  UIButtonElementUpdate,
} from "./uiElements/UIButtonElement";

export type {
  UITextElement,
  UITextElementCreate,
  UITextElementUpdate,
} from "./uiElements/UITextElement";

export type {
  UIButtonGroupElement,
  UIButtonGroupElementCreate,
  UIButtonGroupElementUpdate,
} from "./uiElements/UIButtonGroupElement";

export type {
  UIFlexibleSpaceElement,
  UIFlexibleSpaceElementCreate,
  UIFlexibleSpaceElementUpdate,
} from "./uiElements/UIFlexibleSpaceElement";

export type {
  UIDividerElement,
  UIDividerElementCreate,
  UIDividerElementUpdate,
} from "./uiElements/UIDividerElement";

export type {
  UITextInputElement,
  UITextInputElementCreate,
  UITextInputElementUpdate,
} from "./uiElements/UITextInputElement";

export type {
  UISelectElement,
  UISelectElementCreate,
  UISelectElementUpdate,
} from "./uiElements/UISelectElement";

export type {
  UIPanelElements,
  UIPanelElementsCreate,
  UIPanelElementsUpdate,
} from "./uiElements/uiPanelElementsSchemas";

export type { UIActionTriggerCreate } from "./uiElements/UIActionTrigger";

export type { UiController } from "./controller";

export type { PromiseOrNot } from "~/lib/utils";
