/**
 * This is the doc comment for the controller module
 * The FeltController allows you to control, inspect and observe a Felt map.
 *
 * @module Main
 */
import {
  elementsController,
  type ElementsController,
} from "./elements/controller";
import { layersController, type LayersController } from "./layers/controller";
import {
  selectionController,
  type SelectionController,
} from "./selection/controller";
import { type UiController, uiController } from "./ui/controller";
import {
  type ViewportController,
  viewportController,
} from "./viewport/controller";

/**
 * This pieces together the controller for the Felt SDK from the various namespaced
 * controllers.
 *
 * @ignore
 */
export function makeController(feltWindow: Window): FeltController {
  return {
    iframe: null,
    ...viewportController(feltWindow),
    ...uiController(feltWindow),
    ...layersController(feltWindow),
    ...elementsController(feltWindow),
    ...selectionController(feltWindow),
  };
}

// We could infer the type of the controller from the above definition, but that
// prevents documentation generation from working properly, as it cannot infer
// and document the type correctly, so we define it explicitly here.

/**
 * @public
 * @interface
 */
export type FeltController = {
  /**
   * The iframe element containing the Felt map, if it is an embedded map.
   *
   * @readonly
   */
  iframe: HTMLIFrameElement | null;
} & ViewportController &
  UiController &
  LayersController &
  ElementsController &
  SelectionController;
