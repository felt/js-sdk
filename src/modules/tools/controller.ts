import { listener, method } from "~/lib/interface";
import type {
  ConfigurableToolType,
  InputToolSettings,
  ToolSettingsChangeEvent,
  ToolSettingsMap,
  ToolType,
} from "./types";

/**
 * @ignore
 */
export const toolsController = (feltWindow: Window): ToolsController => ({
  setTool: method(feltWindow, "setTool"),
  getTool: method(feltWindow, "getTool"),
  onToolChange: listener(feltWindow, "onToolChange"),

  setToolSettings: method(feltWindow, "setToolSettings"),
  getToolSettings: method(
    feltWindow,
    "getToolSettings",
  ) as ToolsController["getToolSettings"],
  onToolSettingsChange: listener(feltWindow, "onToolSettingsChange"),
});

/**
 * The Tools controller allows you to let users draw elements on the map.
 *
 * @group Controller
 * @public
 */
export interface ToolsController {
  /**
   * Sets the tool to use for drawing elements on the map.
   *
   * @param tool - The tool to set.
   *
   * @example
   * ```typescript
   * // Set the tool to "marker"
   * felt.setTool("marker");
   *
   * // put down the tool
   * felt.setTool(null);
   * ```
   */
  setTool(tool: ToolType | null): void;

  /**
   * Gets the current tool, if any is in use.
   *
   * @returns The current tool, or `null` if no tool is in use.
   *
   * @example
   * ```typescript
   * const tool = await felt.getTool(); // "marker", "polygon", etc.
   * ```
   */
  getTool(): Promise<ToolType | null>;

  /**
   * Listens for changes to the current tool.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @example
   * ```typescript
   * const unsubscribe = felt.onToolChange({
   *   handler: tool => console.log(tool),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onToolChange(args: {
    /**
     * This callback is called with the current tool whenever the tool changes.
     *
     * @param tool - The current tool, or `null` if no tool is in use.
     */
    handler: (tool: ToolType | null) => void;
  }): VoidFunction;

  /**
   * Sets the settings for the current tool.
   *
   * @param settings - The settings to set.
   */
  setToolSettings(settings: InputToolSettings): void;

  /**
   * Gets the settings for the current tool.
   *
   * @returns The settings for the current tool.
   */
  getToolSettings<T extends ConfigurableToolType>(
    tool: T,
  ): Promise<ToolSettingsMap[T]>;

  /**
   * Listens for changes to the settings on all tools.
   *
   * @returns A function to unsubscribe from the listener
   */
  onToolSettingsChange(args: {
    handler: (settings: ToolSettingsChangeEvent) => void;
  }): VoidFunction;
}
