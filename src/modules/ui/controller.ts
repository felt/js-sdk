import { method, methodWithListeners } from "~/lib/interface";
import type { SortConfig } from "~/modules/shared/types";
import type {
  CreateActionTriggerParams,
  CreateOrUpdatePanelParams,
  CreatePanelElementsParams,
  DeletePanelElementsParams,
  UiControlsOptions,
  UiOnMapInteractionsOptions,
  UpdateActionTriggerParams,
  UpdatePanelElementsParams,
} from "./types";
import type { UIActionTriggerCreate } from "./uiElements/UIActionTrigger";
import type { UIPanel } from "./uiElements/UIPanel";

/**
 * @ignore
 */
export const uiController = (
  feltWindow: Pick<Window, "postMessage">,
): UiController => ({
  updateUiControls: method(feltWindow, "updateUiControls"),
  setOnMapInteractionsUi: method(feltWindow, "setOnMapInteractionsUi"),

  showLayerDataTable: method(feltWindow, "showLayerDataTable"),
  hideLayerDataTable: method(feltWindow, "hideLayerDataTable"),

  createPanelId: method(feltWindow, "createPanelId"),
  createOrUpdatePanel: methodWithListeners<
    "createOrUpdatePanel",
    CreateOrUpdatePanelParams,
    UIPanel
  >(feltWindow, "createOrUpdatePanel"),

  deletePanel: method(feltWindow, "deletePanel"),

  createPanelElements: methodWithListeners<
    "createPanelElements",
    CreatePanelElementsParams,
    UIPanel
  >(feltWindow, "createPanelElements"),
  updatePanelElements: methodWithListeners<
    "updatePanelElements",
    UpdatePanelElementsParams,
    UIPanel
  >(feltWindow, "updatePanelElements"),
  deletePanelElements: method(feltWindow, "deletePanelElements"),

  createActionTrigger: methodWithListeners<
    "createActionTrigger",
    CreateActionTriggerParams,
    UIActionTriggerCreate
  >(feltWindow, "createActionTrigger"),
  updateActionTrigger: methodWithListeners<
    "updateActionTrigger",
    UpdateActionTriggerParams,
    UIActionTriggerCreate
  >(feltWindow, "updateActionTrigger"),
  deleteActionTrigger: method(feltWindow, "deleteActionTrigger"),
});

/**
 * The UI controller allows you to control various aspects of the Felt UI in your map.
 *
 * This includes enabling/disabling UI controls, managing on-map interactions, and controlling
 * the visibility of UI components like the data table.
 *
 * @group Controller
 * @public
 */
export interface UiController {
  /**
   * Creates an action trigger.
   * Action triggers are rendered on map's left sidebar as a button,
   * similar to other map extensions like measure and spatial filter.
   *
   * The goal of action triggers is to allow users to perform actions on the map
   * by clicking on a button.
   *
   * @param args - The arguments for the method.
   * @param args.actionTrigger - The action trigger to add.
   * @param args.placement - The placement of the action trigger. Optional. Defaults to `{ at: "end" }`.
   * - `{ at: "start" }` - Add the action trigger to the start of the stack.
   * - `{ at: "end" }` - Add the action trigger to the end of the stack.
   * - `{ after: "action-trigger-1" }` - Add the action trigger after the action trigger with the id `action-trigger-1`.
   * - `{ before: "action-trigger-1" }` - Add the action trigger before the action trigger with the id `action-trigger-1`.
   *
   * @example
   * ```typescript
   * await felt.createActionTrigger({
   *   actionTrigger: {
   *     id: "layerTurnPurple", // not required but useful for further updates
   *     label: "Turn layer purple",
   *     onTrigger: async () => {
   *       await felt.setLayerStyle("layer-1", { ..., paint: { color: "purple" } });
   *     },
   *     disabled: false, // optional, defaults to false
   *   },
   *   placement: { at: "start" }, // optional, defaults to { at: "end" }
   * });
   * ```
   */
  createActionTrigger(
    args: CreateActionTriggerParams,
  ): Promise<UIActionTriggerCreate>;

  /**
   * Updates an action trigger.
   *
   * Action trigger to update is identified by the `id` property.
   *
   * @remarks
   * Properties provided will override the existing properties.
   *
   * @param args - The action trigger to update.
   *
   * @example
   * ```typescript
   * await felt.updateActionTrigger({
   *   id: "layerTurnPurple",
   *   label: "Turn layer points purple", // only label changes
   * });
   * ```
   */
  updateActionTrigger(
    args: UpdateActionTriggerParams,
  ): Promise<UIActionTriggerCreate>;

  /**
   * Deletes an action trigger.
   *
   * @param id - The id of the action trigger to delete.
   *
   * @example
   * ```typescript
   * await felt.deleteActionTrigger("layerTurnPurple");
   * ```
   */
  deleteActionTrigger(id: string): void;

  /**
   * Creates a panel ID.
   *
   * @example
   * ```typescript
   * const panelId = await felt.createPanelId();
   * ```
   */
  createPanelId(): Promise<string>;

  /**
   * Creates a panel on map's right sidebar.
   *
   * Panels are useful to extend Felt UI for your own use cases (e.g. a form, a settings panel, etc.)
   * by using Felt UI elements (e.g. Text, Button, etc.). This way the user experience is consistent
   * with the rest of Felt.
   *
   * Panels have two sections:
   *  - `body` - Body of the panel, scrollable.
   *  - `footer` - It sticks to the bottom of the panel, useful to add submit buttons.
   *
   * By default, the panel will be added to the end of the stack but you can
   * specify a placement to add it at a specific position in the stack.
   *
   * Once created, you can add elements to the panel by using the {@link createPanelElements} method or
   * perform partial updates of elements by using the {@link updatePanelElements} method.
   *
   * When adding a panel, its id is optional as well as its elements' ids.
   * It is recommended to provide an id for the panel and its elements to make
   * it easier to update or delete them later.
   *
   * @param args - The arguments for the method.
   * @param args.panel - The panel to add.
   * @param args.placement - The placement of the panel. Optional. Defaults to `{ at: "end" }`.
   * - `{ at: "start" }` - Add the panel to the start of the stack.
   * - `{ at: "end" }` - Add the panel to the end of the stack.
   * - `{ after: "panel-1" }` - Add the panel after the panel with the id `panel-1`.
   * - `{ before: "panel-1" }` - Add the panel before the panel with the id `panel-1`.
   *
   * @example
   * ```typescript
   * const id = await felt.createPanelId();
   *
   * await felt.createOrUpdatePanel({
   *    panel: {
   *       id,
   *       title: "My Panel",
   *       body: [
   *          {
   *             type: "Text",
   *             content: "Hello, world!",
   *          },
   *          {
   *             type: "TextInput",
   *             label: "Name",
   *             placeholder: "Enter your name",
   *             value: "",
   *             onChange: ({ value }) => setName(value),
   *          },
   *       ],
   *       footer: [
   *          {
   *             type: "Button",
   *             label: "Submit",
   *             onClick: () => submitForm(),
   *          },
   *       ],
   *    },
   *    placement: { at: "start" }, // add the panel to the start of the stack
   * });
   * ```
   */
  createOrUpdatePanel(args: CreateOrUpdatePanelParams): Promise<UIPanel>;

  /**
   * Updates a panel.
   *
   * Panel to update is identified by the `id` property.
   *
   * @remarks
   * Properties provided will override the existing properties.
   * Override is done at Panel level, so if you want to update a specific element,
   * you need to provide the entire element. For partial updates of elements, use
   * {@link updatePanelElements} instead.
   *
   * @param panel - The panel to update.
   * @example
   * ```typescript
   * await felt.updatePanel({
   *   id: "panel-1",
   *   title: "A new title for my panel", // only title changes
   * });
   * ```
   */
  // updatePanel(panel: UpdatePanelParams): Promise<UIPanel>;

  /**
   * Deletes a panel.
   *
   * @param id - The id of the panel to delete.
   * @example
   * ```typescript
   * await felt.deletePanel("panel-1");
   * ```
   */
  deletePanel(id: string): void;

  /**
   * Creates elements in a panel.
   *
   * @param args - The arguments for the method.
   * @param args.panelId - The id of the panel to add the elements to.
   * @param args.elements - The elements to add.
   *
   * For every element...
   *
   * - `element`: The element to add.
   *
   * - `container`: The section of the panel to add the element to. To point to a specific container, use the `id` of the container. Optional. Defaults to `body`.
   *   - `body` - Add the element to the body section of the panel.
   *   - `footer` - Add the element to the footer section of the panel.
   *   - `{ id: "container-1" }` - Add the element to the container identified by `id`.
   *
   * - `placement`: The placement of the element in the section. Optional. Defaults to `{ at: "end" }`.
   *   - `{ after: "element-1" }` - Add the element after the element with the id `element-1`.
   *   - `{ before: "element-1" }` - Add the element before the element with the id `element-1`.
   *   - `{ at: "start" }` - Add the element to the start of the section.
   *   - `{ at: "end" }` - Add the element to the end of the section.
   *
   * @example
   * ```typescript
   * await felt.createPanelElements({
   *   panelId,
   *   elements: [
   *     {
   *       element: { type: "Text", content: "Hello, world!" },
   *       container: "body",
   *       placement: { at: "start" },
   *     },
   *   ],
   * });
   * ```
   */
  createPanelElements(args: CreatePanelElementsParams): Promise<UIPanel>;

  /**
   * Updates an element in a panel.
   *
   * @param args - The arguments for the method.
   * @param args.panelId - The id of the panel to update the element in.
   * @param args.elements - Array of elements to update (`id` and `type` are required to identify the element to update).
   *
   * @example
   * ```typescript
   * await felt.updatePanelElements({
   *   panelId,
   *   elements: [
   *     {
   *       element: {
   *         id: "element-1",
   *         type: "Text",
   *         content: "Hello, world!",
   *       },
   *     },
   *   ],
   * });
   * ```
   */
  updatePanelElements(args: UpdatePanelElementsParams): Promise<UIPanel>;

  /**
   * Deletes elements from a panel.
   *
   * @param args - The arguments for the method.
   * @param args.panelId - The id of the panel to delete the elements from.
   * @param args.elements - The elements to delete.
   * @example
   * ```typescript
   * await felt.deletePanelElements({
   *   panelId,
   *   elements: ["element-1", "element-2"],
   * });
   * ```
   */
  deletePanelElements(args: DeletePanelElementsParams): void;

  /**
   * Updates the UI controls on the embedded map.
   *
   * @example
   * ```typescript
   * // Show some UI controls
   * await felt.updateUiControls({
   *   showLegend: true,
   *   fullScreenButton: true,
   * });
   *
   * // Disable some UI options
   * await felt.updateUiControls({
   *   cooperativeGestures: false,
   *   geolocation: false,
   * });
   * ```
   *
   * @param controls - The controls to update.
   */
  updateUiControls(controls: UiControlsOptions): void;

  /**
   * Control the on-map UI shown when interacting with features and elements.
   *
   * If you add your own click, selection or hover handlers you may want to disable
   * various parts of the Felt UI. This method allows you to control the visibility of
   * various parts of the UI that might otherwise be shown when people click or hover
   * on things.
   *
   * This does not affect selection. That means that selectable features and elements
   * will still be selected when clicked.
   *
   * @example
   * ```typescript
   * // Disable UI when hovering or selecting features
   * await felt.setOnMapInteractionsUi({
   *   featureSelectPanel: false,
   *   featureHoverPanel: false,
   * });
   * ```
   */
  setOnMapInteractionsUi(options: UiOnMapInteractionsOptions): void;

  /**
   * Shows a data table view for the specified layer, optionally sorted by a given attribute.
   *
   * @example
   * ```typescript
   * // Show data table with default sorting
   * await felt.showLayerDataTable({
   *   layerId: "layer-1",
   * });
   *
   * // Show data table sorted by height in descending order
   * await felt.showLayerDataTable({
   *   layerId: "layer-1",
   *   sorting: {
   *     attribute: "height",
   *     direction: "desc",
   *   },
   * });
   *
   * // Show the data table pane with no table visible
   * await felt.showLayerDataTable();
   * ```
   */
  showLayerDataTable(params?: {
    layerId: string;
    sorting?: SortConfig;
  }): Promise<void>;

  /**
   * Hides the data table.
   *
   * @example
   * ```typescript
   * await felt.hideLayerDataTable();
   * ```
   */
  hideLayerDataTable(): Promise<void>;
}
