import { method, methodWithListeners } from "~/lib/interface";
import type { SortConfig } from "~/modules/shared/types";
import type {
  AddPanelElementsInput,
  AddPanelInput,
  DeletePanelElements,
  UiControlsOptions,
  UiOnMapInteractionsOptions,
  UpdatePanelElementsInput,
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

  addPanel: methodWithListeners<"addPanel", AddPanelInput>(
    feltWindow,
    "addPanel",
  ),
  updatePanel: methodWithListeners<"updatePanel", UpdatePanelInput>(
    feltWindow,
    "updatePanel",
  ),
  deletePanel: method(feltWindow, "deletePanel"),

  addPanelElements: methodWithListeners<
    "addPanelElements",
    AddPanelElementsInput
  >(feltWindow, "addPanelElements"),
  updatePanelElements: methodWithListeners<
    "updatePanelElements",
    UpdatePanelElementsInput
  >(feltWindow, "updatePanelElements"),
  deletePanelElements: method(feltWindow, "deletePanelElements"),
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
   * Adds a panel.
   * Panels are rendered on the right side of the map.
   *
   * By default, the panel will be added to the end of the stack but you can
   * specify a placement to add it at a specific position in the stack.
   *
   * When adding a panel, its id is optional as well as its elements' ids.
   * It is recommended to provide an id for the panel and its elements to make
   * it easier to update or delete them later.
   *
   * Panels have two sections:
   * - `items` - Body of the panel, scrollable.
   * - `footer` - It sticks to the bottom of the panel, useful to add submit buttons.
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
   * await felt.addPanel({
   *    panel: {
   *       id: "panel-1", // not required but useful for further updates
   *       title: "My Panel",
   *       items: [
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
  addPanel(args: AddPanelInput): void;

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
  updatePanel(panel: UpdatePanelInput): void;

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
   * Adds elements to a panel.
   *
   * @param args - The arguments for the method.
   * @param args.panelId - The id of the panel to add the elements to.
   * @param args.elements - The elements to add.
   *
   * For every element...
   *
   * - `element`: The element to add.
   *
   * - `on`: The section of the panel to add the element to. To point to a specific container, use the `id` of the container. Optional. Defaults to `items`.
   *   - `items` - Add the element to the items section of the panel.
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
   * await felt.addPanelElements({
   *   panelId: "panel-1",
   *   elements: [
   *     {
   *       element: { type: "Text", content: "Hello, world!" },
   *       on: "items",
   *       placement: { at: "start" },
   *     },
   *   ],
   * });
   * ```
   */
  addPanelElements(args: AddPanelElementsInput): void;

  /**
   * Updates an element in a panel.
   *
   * @param args - The arguments for the method.
   * @param args.panelId - The id of the panel to update the element in.
   * @param args.elements - Dictionary of elements to update with their id as key and the element properties to change as value.
   *
   * @example
   * ```typescript
   * await felt.updatePanelElements({
   *   panelId: "panel-1",
   *   elements: {
   *     "element-1": { type: "Text", content: "Hello, world!" },
   *   },
   * });
   * ```
   */
  updatePanelElements(args: UpdatePanelElementsInput): void;

  /**
   * Deletes elements from a panel.
   *
   * @param args - The arguments for the method.
   * @param args.panelId - The id of the panel to delete the elements from.
   * @param args.elements - The elements to delete.
   * @example
   * ```typescript
   * await felt.deletePanelElements({
   *   panelId: "panel-1",
   *   elements: ["element-1", "element-2"],
   * });
   * ```
   */
  deletePanelElements(args: DeletePanelElements): void;

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
