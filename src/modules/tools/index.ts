/**
 * The Tools part of the Felt SDK allows you to let users draw elements on the map
 * by programatically selecting a tool for them.
 *
 * You can also set the settings for individual tools, to allow you to change the
 * styling of the resulting element.
 *
 * @example
 * ```ts
 * // Change the settings for the line tool
 * felt.setToolSettings({
 *   tool: "line",
 *   strokeWidth: 8,
 *   color: "#448C2A"
 * });
 *
 * // Start using the line tool
 * felt.setTool("line");
 *
 * // Put down the tool
 * felt.setTool(null);
 * ```
 *
 * @module Tools
 */
export type {
  CircleToolSettings,
  ConfigurableToolType,
  HighlighterToolSettings,
  InputToolSettings,
  LineToolSettings,
  MarkerToolSettings,
  NoteToolSettings,
  PinToolSettings,
  PlaceFrame,
  PlaceSymbol,
  PolygonToolSettings,
  RouteToolSettings,
  TextToolSettings,
  ToolSettingsChangeEvent,
  ToolSettingsMap,
  ToolType,
} from "./types";

export type { ToolsController } from "./controller";
