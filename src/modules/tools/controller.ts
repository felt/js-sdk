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
export const toolsController = (
  feltWindow: Pick<Window, "postMessage">,
): ToolsController => ({
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
   * Use this method to programmatically activate drawing tools for users. When a tool
   * is set, users can draw elements on the map using that tool. Set to `null` to
   * deactivate all drawing tools.
   *
   * @param tool - The tool to set, or `null` to deactivate all tools.
   *
   * @example
   * ```typescript
   * // Set the tool to "marker"
   * await felt.setTool("marker");
   *
   * // put down the tool
   * await felt.setTool(null);
   * ```
   */
  setTool(tool: ToolType | null): void;

  /**
   * Gets the current tool, if any is in use.
   *
   * Use this method to check which drawing tool is currently active, if any.
   *
   * @returns A promise that resolves to the current tool, or `null` if no tool is in use.
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
   * Use this to react to tool changes, such as updating your UI to reflect
   * the currently active drawing tool.
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
   * Use this method to configure how drawing tools behave, such as setting colors,
   * stroke widths, or other tool-specific properties.
   *
   * @param settings - The settings to set for the specified tool.
   *
   * @example
   * ```typescript
   * // Set the settings for the marker tool
   * await felt.setToolSettings({
   *   tool: "marker",
   *   color: "#FE17",
   * });
   * ```
   */
  setToolSettings(settings: InputToolSettings): void;

  /**
   * Gets the settings for the chosen tool.
   *
   * Use this method to retrieve the current configuration of a drawing tool.
   *
   * @param tool - The tool to get settings for.
   * @returns A promise that resolves to the settings for the chosen tool.
   *
   * @example
   * ```typescript
   * const settings = await felt.getToolSettings("marker");
   * ```
   */
  getToolSettings<T extends ConfigurableToolType>(
    tool: T,
  ): Promise<ToolSettingsMap[T]>;

  /**
   * Listens for changes to the settings on all tools.
   *
   * Use this to react to tool setting changes, such as updating your UI to
   * reflect the current tool configuration.
   *
   * @returns A function to unsubscribe from the listener.
   *
   * @example
   * ```typescript
   * const unsubscribe = felt.onToolSettingsChange({
   *   handler: settings => console.log(settings),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onToolSettingsChange(args: {
    handler: (settings: ToolSettingsChangeEvent) => void;
  }): VoidFunction;
}
