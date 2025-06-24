import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  CircleCreateSchema,
  HighlighterCreateSchema,
  MarkerCreateSchema,
  NoteCreateSchema,
  PathCreateSchema,
  PlaceCreateSchema,
  PolygonCreateSchema,
  TextCreateSchema,
} from "../elements/types";

const configurableTools = [
  "circle",
  "highlighter",
  "line",
  "marker",
  "note",
  "pin",
  "polygon",
  "route",
  "text",
] as const satisfies Array<ConfigurableToolType>;

const allTools = [...configurableTools, "link"] as const;

export const ToolSchema = z.enum(allTools);
export const ConfigurableToolSchema = z.enum(configurableTools);

export type ToolType =
  | "circle"
  | "highlighter"
  | "line"
  | "link"
  | "marker"
  | "note"
  | "pin"
  | "polygon"
  | "route"
  | "text";
export type ConfigurableToolType = Exclude<ToolType, "link">;

const showToolInspector = { showInspector: z.boolean().optional() } as const;

interface ShowToolInspectorSettings {
  /**
   * Whether to show the tool inspector.
   *
   * @defaultValue `false`
   */
  showInspector: boolean;
}

const PinToolSettingsSchema = PlaceCreateSchema.pick({
  color: true,
  symbol: true,
  frame: true,
})
  .extend({ afterCreation: z.enum(["enter name", "add another", "select"]) })
  .required();

export interface PinToolSettings
  extends zInfer<typeof PinToolSettingsSchema>,
    ShowToolInspectorSettings {
  symbol: PlaceSymbol;

  /**
   * What to do after creating the Place element.
   *
   * - `"enter name"`: Enter a name for the Place, focusing the name input.
   * - `"add another"`: Add another Place, leaving the tool still selected.
   * - `"select"`: Puts the tool down and selects the new Place element.
   *
   * @defaultValue `"enter name"`
   */
  afterCreation: "enter name" | "add another" | "select";
}

const LineToolSettingsSchema = PathCreateSchema.pick({
  color: true,
  strokeOpacity: true,
  strokeWidth: true,
  strokeStyle: true,
  distanceMarker: true,
}).required();

export interface LineToolSettings
  extends zInfer<typeof LineToolSettingsSchema>,
    ShowToolInspectorSettings {}

const RouteToolSettingsSchema = PathCreateSchema.pick({
  color: true,
  routingMode: true,
  strokeOpacity: true,
  strokeWidth: true,
  strokeStyle: true,
  distanceMarker: true,
  endCaps: true,
}).required();

export interface RouteToolSettings
  extends zInfer<typeof RouteToolSettingsSchema>,
    ShowToolInspectorSettings {}

const PolygonToolSettingsSchema = PolygonCreateSchema.pick({
  color: true,
  fillOpacity: true,
  strokeOpacity: true,
  strokeWidth: true,
  strokeStyle: true,
  areaMarker: true,
}).required();
export interface PolygonToolSettings
  extends zInfer<typeof PolygonToolSettingsSchema>,
    ShowToolInspectorSettings {}

const CircleToolSettingsSchema = CircleCreateSchema.pick({
  color: true,
  fillOpacity: true,
  strokeOpacity: true,
  strokeWidth: true,
  strokeStyle: true,
  radiusMarker: true,
}).required();
export interface CircleToolSettings
  extends zInfer<typeof CircleToolSettingsSchema>,
    ShowToolInspectorSettings {}

const MarkerToolSettingsSchema = MarkerCreateSchema.pick({
  color: true,
  opacity: true,
  size: true,
}).required();
export interface MarkerToolSettings
  extends zInfer<typeof MarkerToolSettingsSchema>,
    ShowToolInspectorSettings {}

const HighlighterToolSettingsSchema = HighlighterCreateSchema.pick({
  color: true,
  opacity: true,
  renderHoles: true,
})
  .extend({ size: z.number().min(0).max(200) })
  .required();
export interface HighlighterToolSettings
  extends zInfer<typeof HighlighterToolSettingsSchema>,
    ShowToolInspectorSettings {}

const TextToolSettingsSchema = TextCreateSchema.pick({
  color: true,
  align: true,
  style: true,
}).required();
export interface TextToolSettings
  extends zInfer<typeof TextToolSettingsSchema>,
    ShowToolInspectorSettings {}

const NoteToolSettingsSchema = NoteCreateSchema.pick({
  color: true,
  align: true,
  style: true,
}).required();
export interface NoteToolSettings
  extends zInfer<typeof NoteToolSettingsSchema>,
    ShowToolInspectorSettings {}

export const InputToolSettingsSchema = z.discriminatedUnion("tool", [
  // GEOGRAPHIC TOOLS
  PinToolSettingsSchema.partial().extend({
    tool: z.literal("pin"),
    ...showToolInspector,
  }),
  LineToolSettingsSchema.partial().extend({
    tool: z.literal("line"),
    ...showToolInspector,
  }),
  RouteToolSettingsSchema.partial().extend({
    tool: z.literal("route"),
    ...showToolInspector,
  }),
  PolygonToolSettingsSchema.partial().extend({
    tool: z.literal("polygon"),
    ...showToolInspector,
  }),
  CircleToolSettingsSchema.partial().extend({
    tool: z.literal("circle"),
    ...showToolInspector,
  }),

  // ANNOTATION TOOLS
  MarkerToolSettingsSchema.partial().extend({
    tool: z.literal("marker"),
    ...showToolInspector,
  }),
  HighlighterToolSettingsSchema.partial().extend({
    tool: z.literal("highlighter"),
    ...showToolInspector,
  }),
  TextToolSettingsSchema.partial().extend({
    tool: z.literal("text"),
    ...showToolInspector,
  }),
  NoteToolSettingsSchema.partial().extend({
    tool: z.literal("note"),
    ...showToolInspector,
  }),
]);

/**
 * The parameters for changing the settings of each tool.
 */
export type InputToolSettings =
  | ({
      tool: "pin";
    } & Partial<PinToolSettings>)
  | ({
      tool: "line";
    } & Partial<LineToolSettings>)
  | ({
      tool: "route";
    } & Partial<RouteToolSettings>)
  | ({
      tool: "polygon";
    } & Partial<PolygonToolSettings>)
  | ({
      tool: "circle";
    } & Partial<CircleToolSettings>)
  | ({
      tool: "marker";
    } & Partial<MarkerToolSettings>)
  | ({
      tool: "highlighter";
    } & Partial<HighlighterToolSettings>)
  | ({
      tool: "text";
    } & Partial<TextToolSettings>)
  | ({
      tool: "note";
    } & Partial<NoteToolSettings>);

/**
 * The result of listening for changes to the settings of each tool.
 */
export type ToolSettingsChangeEvent =
  | ({
      tool: "pin";
    } & PinToolSettings)
  | ({
      tool: "line";
    } & LineToolSettings)
  | ({
      tool: "route";
    } & RouteToolSettings)
  | ({
      tool: "polygon";
    } & PolygonToolSettings)
  | ({
      tool: "circle";
    } & CircleToolSettings)
  | ({
      tool: "marker";
    } & MarkerToolSettings)
  | ({
      tool: "highlighter";
    } & HighlighterToolSettings)
  | ({
      tool: "text";
    } & TextToolSettings)
  | ({
      tool: "note";
    } & NoteToolSettings);

export type ToolSettingsMap = {
  pin: PinToolSettings;
  line: LineToolSettings;
  route: RouteToolSettings;
  polygon: PolygonToolSettings;
  circle: CircleToolSettings;
  marker: MarkerToolSettings;
  highlighter: HighlighterToolSettings;
  text: TextToolSettings;
  note: NoteToolSettings;
};

export type PlaceFrame = "frame-circle" | "frame-square" | null;

export type PlaceSymbol =
  | "dot"
  | "square"
  | "diamond"
  | "triangle"
  | "x"
  | "plus"
  | "circle-line"
  | "circle-slash"
  | "star"
  | "heart"
  | "hexagon"
  | "octagon"
  | "pedestrian"
  | "bicycle"
  | "wheelchair"
  | "airport"
  | "car"
  | "bus"
  | "train"
  | "truck"
  | "ferry"
  | "sailboat"
  | "electric-service"
  | "gas-service"
  | "blood-clinic"
  | "badge"
  | "traffic-light"
  | "traffic-cone"
  | "road-sign-caution"
  | "person"
  | "restroom"
  | "house"
  | "work"
  | "letter"
  | "hotel"
  | "factory"
  | "hospital"
  | "religious-facility"
  | "school"
  | "government"
  | "university"
  | "bank"
  | "landmark"
  | "museum"
  | "clothing"
  | "shopping"
  | "store"
  | "bar"
  | "pub"
  | "cafe"
  | "food"
  | "park"
  | "amusement-park"
  | "camping-tent"
  | "cabin"
  | "picnic"
  | "water-refill"
  | "trailhead"
  | "guidepost"
  | "viewpoint"
  | "camera"
  | "us-football"
  | "football"
  | "tennis"
  | "binoculars"
  | "swimming"
  | "zap"
  | "battery-full"
  | "battery-half"
  | "battery-low"
  | "boom"
  | "radar"
  | "wind-turbine"
  | "solar-panel"
  | "antenna"
  | "telephone-pole"
  | "oil-well"
  | "oil-barrel"
  | "railroad-track"
  | "bridge"
  | "lighthouse"
  | "lock-closed"
  | "lock-open"
  | "wifi"
  | "trash"
  | "recycle"
  | "tree"
  | "flower"
  | "leaf"
  | "fire"
  | "mountain"
  | "snowy-mountain"
  | "volcano"
  | "island"
  | "wave"
  | "hot-springs"
  | "water"
  | "lake"
  | "ocean"
  | "animal"
  | "bird"
  | "duck"
  | "dog"
  | "fish"
  | "beach"
  | "wetland"
  | "sun"
  | "moon"
  | "cloud"
  | "partial-sun"
  | "rain"
  | "lightning"
  | "snowflake"
  | "wind"
  | "snow"
  | "fog"
  | "sleet"
  | "hurricane"
  | "warning"
  | "parking"
  | "info"
  | "circle-exclamation"
  | "circle-triangle"
  | "circle-x"
  | "circle-plus"
  | (`:${string}:` & {});
