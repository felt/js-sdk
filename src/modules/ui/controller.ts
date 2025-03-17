import { method } from "~/lib/interface";
import type { SortConfig } from "~/modules/shared/types";
import type { UiControlsOptions, UiOnMapInteractionsOptions } from "./types";

/**
 * @ignore
 */
export const uiController = (feltWindow: Window): UiController => ({
  updateUiControls: method(feltWindow, "updateUiControls"),
  setOnMapInteractionsUi: method(feltWindow, "setOnMapInteractionsUi"),

  showLayerDataTable: method(feltWindow, "showLayerDataTable"),
  hideLayerDataTable: method(feltWindow, "hideLayerDataTable"),
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
   * Updates the UI controls on the embedded map.
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
   * ```
   */
  showLayerDataTable(params: {
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
