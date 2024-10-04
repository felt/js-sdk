import type {
  FeltController,
  FeltControllerWithIframe,
} from "./modules/controller";
import type { UiController } from "./modules/ui/controller";
import type { UiControlsOptions } from "./modules/ui/types";
import type { ViewportController } from "./modules/viewport/controller";
import type {
  ViewportCenterZoom,
  ViewportSetCenterZoomMessage,
  ViewportState,
} from "./modules/viewport/types";
import type { FeltEmbedOptions } from "./types/embed";
import type { FeltBoundary, FeltZoom } from "./types/geo";

// This file exists to document the types that are used within the SDK, without
// having to export them as part of the public API of the SDK.

export type {
  FeltBoundary,
  FeltController,
  FeltControllerWithIframe,
  FeltEmbedOptions,
  FeltZoom,
  UiController,
  UiControlsOptions,
  ViewportCenterZoom,
  ViewportController,
  ViewportSetCenterZoomMessage,
  ViewportState,
};
