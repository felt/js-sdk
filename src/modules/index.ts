import { uiModule, type UiModule } from "./ui";
import { viewportModule, type ViewportModule } from "./viewport";

export const allModules = [uiModule, viewportModule];

export type AllModules = UiModule | ViewportModule;
