import {
  elementsController,
  type ElementsController,
} from "../elements/controller";
import {
  interactionsController,
  type InteractionsController,
} from "../interactions/controller";
import { layersController, type LayersController } from "../layers/controller";
import {
  selectionController,
  type SelectionController,
} from "../selection/controller";
import { toolsController, type ToolsController } from "../tools/controller";
import { uiController, type UiController } from "../ui/controller";
import {
  viewportController,
  type ViewportController,
} from "../viewport/controller";

/**
 *
 * @ignore
 * @internal
 */
export function makeController(feltWindow: Window): FeltController {
  return {
    iframe: null,
    ...viewportController(feltWindow),
    ...uiController(feltWindow),
    ...layersController(feltWindow),
    ...elementsController(feltWindow),
    ...selectionController(feltWindow),
    ...interactionsController(feltWindow),
    ...toolsController(feltWindow),
  };
}

// We could infer the type of the controller from the above definition, but that
// prevents documentation generation from working properly, as it cannot infer
// and document the type correctly, so we define it explicitly here.

/**
 * This is the main interface for interacting with a Felt map.
 *
 * This interface is composed of the various controllers, each having a
 * different area of responsibility.
 *
 * All the methods are listed here, but each controller is documented on its
 * own to make it easier to find related methods and events.
 *
 * @group Controller
 * @public
 */
export interface FeltController
  extends ViewportController,
    UiController,
    LayersController,
    ElementsController,
    SelectionController,
    InteractionsController,
    ToolsController {
  /**
   * The iframe element containing the Felt map, if it is an embedded map.
   *
   * @readonly
   */
  iframe: HTMLIFrameElement | null;
}
