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
   *     id: "enablePolygonTool", // optional. Required if you want to update the action trigger later
   *     label: "Draw polygon",
   *     onTrigger: async () => {
   *       felt.setTool("polygon");
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
   *   id: "enablePolygonTool",
   *   label: "Enable polygon tool", // only label changes
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
   * await felt.deleteActionTrigger("enablePolygonTool");
   * ```
   */
  deleteActionTrigger(id: string): void;

  /**
   * Creates a panel ID.
   *
   * In order to create a panel using {@link createOrUpdatePanel}, you need to create a panel ID first.
   *
   * @example
   * ```typescript
   * const panelId = await felt.createPanelId();
   * ```
   */
  createPanelId(): Promise<string>;

  /**
   * Creates or updates a panel.
   *
   * Panels are rendered on the map's right sidebar and allow you to extend Felt UI
   * for your own use cases using Felt UI elements (e.g., Text, Button, etc.).
   *
   * A panel is identified by its ID, which must be created using {@link createPanelId}.
   * Custom IDs are not supported to prevent conflicts with other panels.
   *
   * Panels have two main sections:
   *  - `body` - The main content area of the panel, which is scrollable.
   *  - `footer` - A section that sticks to the bottom of the panel, useful for
   *    action buttons like "Submit" or "Cancel".
   *
   * Panel placement is controlled by the `initialPlacement` parameter. By default,
   * panels are added to the end of the panel stack, but you can specify a different
   * placement. Note that this placement cannot be changed after the panel is created.
   *
   * Element IDs are required for targeted updates and deletions using the other
   * panel management methods. For complete panel refreshes with this method,
   * element IDs are optional but recommended for consistency.
   *
   * For dynamic content management, consider these approaches:
   *  - Use this method for complete panel refreshes (replaces all content)
   *  - Use {@link createPanelElements} to add new elements to existing panels
   *  - Use {@link updatePanelElements} to modify specific existing elements
   *  - Use {@link deletePanelElements} to remove specific elements
   *
   * @param args - The arguments for creating or updating the panel.
   * @param args.panel - The panel configuration to create or update.
   * @param args.initialPlacement - The placement of the panel when first added.
   *   Optional. Defaults to `{ at: "end" }`.
   *   - `{ at: "start" }` - Add the panel to the start of the stack.
   *   - `{ at: "end" }` - Add the panel to the end of the stack.
   *   - `{ after: "panel-1" }` - Add the panel after the panel with the id `panel-1`.
   *   - `{ before: "panel-1" }` - Add the panel before the panel with the id `panel-1`.
   *
   * @example
   * ```typescript
   * // 1. Create panel ID first (required)
   * const panelId = await felt.createPanelId();
   * 
   * // 2. Define reusable elements
   * const SELECT = { id: "layer-select", type: "Select", label: "Layer", options: [...] };
   * const ANALYZE_BTN = { id: "analyze-btn", type: "Button", label: "Analyze", onClick: handleAnalyze };
   * const STATUS_TEXT = { id: "status-text", type: "Text", content: "" };
   * const CLEAR_BTN = { id: "clear-btn", type: "Button", label: "Clear", onClick: handleClear };
   * 
   * // 3. Initial state
   * await felt.createOrUpdatePanel({
   *   panel: { id: panelId, title: "Data Analyzer", body: [SELECT, ANALYZE_BTN] }
   * });
   * 
   * // 4. Loading state (replaces entire panel)
   * await felt.createOrUpdatePanel({
   *   panel: { 
   *     id: panelId, 
   *     title: "Data Analyzer", 
   *     body: [SELECT, ANALYZE_BTN, { ...STATUS_TEXT, content: "Loading..." }] 
   *   }
   * });
   * 
   * // 5. Results state (replaces entire panel)
   * await felt.createOrUpdatePanel({
   *   panel: { 
   *     id: panelId, 
   *     title: "Data Analyzer", 
   *     body: [SELECT, ANALYZE_BTN, { ...STATUS_TEXT, content: "**Results:**\n- Found 150 features" }, CLEAR_BTN] 
   *   }
   * });
   * ```
   */
  createOrUpdatePanel(args: CreateOrUpdatePanelParams): Promise<UIPanel>;

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
   * Updates an existing element in a panel. This method can only update elements that
   * already exist in the panel and have an ID.
   *
   * @param args - The arguments for the method.
   * @param args.panelId - The id of the panel to update the element in.
   * @param args.elements - Array of elements to update. Each element must have an `id` and `type` 
   *   to identify which existing element to update. The element must already exist in the panel.
   *
   * @example
   * ```typescript
   * // 1. Create panel with initial elements
   * const panelId = await felt.createPanelId();
   * const STATUS_TEXT = { id: "status-text", type: "Text", content: "Ready" };
   * 
   * await felt.createOrUpdatePanel({
   *   panel: {
   *     id: panelId,
   *     title: "My Panel",
   *     body: [STATUS_TEXT]
   *   }
   * });
   * 
   * // 2. Update the existing element
   * await felt.updatePanelElements({
   *   panelId,
   *   elements: [
   *     {
   *       element: {
   *         ...STATUS_TEXT,                    // Reuse the same element structure
   *         content: "Updated content"         // Only change what needs updating
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
