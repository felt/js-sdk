import { method, methodWithListeners } from "~/lib/interface";
import type { SortConfig } from "~/modules/shared/types";
import type {
  AddElementToPanelInput,
  PanelInput,
  UiControlsOptions,
  UiOnMapInteractionsOptions,
  UpdateElementInPanelInput,
  UpdatePanelInput,
} from "./types";

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

  addPanel: methodWithListeners<"addPanel", PanelInput>(feltWindow, "addPanel"),
  updatePanel: methodWithListeners<"updatePanel", UpdatePanelInput>(
    feltWindow,
    "updatePanel",
  ),
  deletePanel: method(feltWindow, "deletePanel"),

  addElementToPanel: methodWithListeners<
    "addElementToPanel",
    AddElementToPanelInput
  >(feltWindow, "addElementToPanel"),

  updateElementInPanel: methodWithListeners<
    "updateElementInPanel",
    UpdateElementInPanelInput
  >(feltWindow, "updateElementInPanel"),
});

/**
 * The UI controller allows you to control various aspects of the Felt UI in your embedded map.
 *
 * This includes enabling/disabling UI controls, managing on-map interactions, and controlling
 * the visibility of UI components like the data table.
 *
 * @group Controller
 * @public
 */
export interface UiController {
  /**
   * Adds a panel to the embedded map.
   *
   * @param panel - The panel to add.
   * @example
   * ```typescript
   * await felt.addPanel({
   *   id: "panel-1", // not required but useful for further updates
   *   title: "My Panel",
   *   items: [
   *     {
   *       type: "Text",
   *       content: "Hello, world!",
   *     },
   *   ],
   * });
   */
  addPanel(panel: PanelInput): void;

  /**
   * Updates a panel on the embedded map.
   *
   * Panel to update is identified by the `id` property.
   *
   * @remarks
   * Properties provided will override the existing properties.
   * Override is done at Panel level, so if you want to update a specific item,
   * you need to provide the entire item.
   *
   * @param panel - The panel to update.
   * @example
   * ```typescript
   * await felt.updatePanel({
   *   id: "panel-1",
   *   title: "A new title for my panel", // only title changes
   * });
   */
  updatePanel(panel: UpdatePanelInput): void;

  /**
   * Deletes a panel from the embedded map.
   *
   * @param id - The id of the panel to delete.
   * @example
   * ```typescript
   * await felt.deletePanel("panel-1");
   * ```
   */
  deletePanel(id: string): void;

  /**
   * Adds a UI element to a panel.
   *
   * @param panelId - The id of the panel to add the element to.
   * @param element - The element to add.
   * @example
   * ```typescript
   * await felt.addElementToPanel({
   *   panelId: "panel-1",
   *   element: { type: "Text", content: "Hello, world!" },
   * });
   * ```
   */
  addElementToPanel(args: AddElementToPanelInput): void;

  /**
   * Updates an element in a panel.
   *
   * @param panelId - The id of the panel to update the element in.
   * @param element - The element to update.
   * @example
   * ```typescript
   * await felt.updateElementInPanel({
   *   panelId: "panel-1",
   *   element: { type: "Text", content: "Hello, world!" },
   * });
   * ```
   */
  updateElementInPanel(args: UpdateElementInPanelInput): void;

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
