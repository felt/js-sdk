import { method } from "~/lib/types/interface";
import type { UiControlsOptions, UiOnMapInteractionsOptions } from "./types";

/**
 * @ignore
 */
export const uiController = (feltWindow: Window): UiController => ({
  updateUiControls: method(feltWindow, "updateUiControls"),
  setOnMapInteractionsUi: method(feltWindow, "setOnMapInteractionsUi"),
});

/**
 * The UI controller allows you to enable and disable UI controls on the
 * embedded map.
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
}
