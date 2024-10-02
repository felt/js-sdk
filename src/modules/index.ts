import { uiModule, type UiModule } from "./ui/schema";
import { viewportModule, type ViewportModule } from "./viewport/schema";

export const allModules = [uiModule, viewportModule];

export type AllModules = UiModule | ViewportModule;
