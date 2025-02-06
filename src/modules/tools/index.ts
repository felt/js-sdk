/**
 * The Tools part allows you to let users draw elements on the map.
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
