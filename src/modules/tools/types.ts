import { z } from "zod";
import type { zInfer } from "~/lib/utils";

const configurableTools = [
  "pin",
  "line",
  "route",
  "polygon",
  "circle",
  "marker",
  "highlighter",
  "text",
  "note",
] as const satisfies Array<ConfigurableToolType>;

export const ToolSchema = z.enum([...configurableTools, "link"]);
export const ConfigurableToolSchema = z.enum(configurableTools);

export type ToolType = z.infer<typeof ToolSchema>;
export type ConfigurableToolType = keyof ToolSettingsMap;

const PinToolSettingsSchema = z.object({
  color: z.string(),
  symbol: z.string(),
  frame: z.string().nullable(),
});
export interface PinToolSettings extends zInfer<typeof PinToolSettingsSchema> {}

const LineToolSettingsSchema = z.object({
  tool: z.literal("line"),
  color: z.string(),
  strokeOpacity: z.number(),
  strokeWidth: z.number(),
  strokeStyle: z.enum(["solid", "dashed", "dotted"]),
  distanceMarker: z.boolean(),
});
export interface LineToolSettings
  extends zInfer<typeof LineToolSettingsSchema> {}
const RouteToolSettingsSchema = z.object({
  color: z.string(),
  routingMode: z.enum(["driving", "cycling", "walking", "flying"]),
  strokeOpacity: z.number(),
  strokeWidth: z.number(),
  strokeStyle: z.enum(["solid", "dashed", "dotted"]),
  distanceMarker: z.boolean(),
  endCaps: z.boolean(),
});
export interface RouteToolSettings
  extends zInfer<typeof RouteToolSettingsSchema> {}

const PolygonToolSettingsSchema = z.object({
  color: z.string(),
  fillOpacity: z.number(),
  strokeOpacity: z.number(),
  strokeWidth: z.number(),
  strokeStyle: z.enum(["solid", "dashed", "dotted"]),
  areaMarker: z.boolean(),
});
export interface PolygonToolSettings
  extends zInfer<typeof PolygonToolSettingsSchema> {}
const CircleToolSettingsSchema = z.object({
  color: z.string(),
  fillOpacity: z.number(),
  strokeOpacity: z.number(),
  strokeWidth: z.number(),
  strokeStyle: z.enum(["solid", "dashed", "dotted"]),
  radiusMarker: z.boolean(),
});
export interface CircleToolSettings
  extends zInfer<typeof CircleToolSettingsSchema> {}
const MarkerToolSettingsSchema = z.object({
  color: z.string(),
  opacity: z.number(),
  size: z.number(),
});
export interface MarkerToolSettings
  extends zInfer<typeof MarkerToolSettingsSchema> {}

const HighlighterToolSettingsSchema = z.object({
  color: z.string(),
  opacity: z.number(),
  size: z.number(),
});
export interface HighlighterToolSettings
  extends zInfer<typeof HighlighterToolSettingsSchema> {}
const TextToolSettingsSchema = z.object({
  color: z.string(),
  align: z.enum(["left", "center", "right"]),
  style: z.enum(["italic", "light", "regular", "caps"]),
});
export interface TextToolSettings
  extends zInfer<typeof TextToolSettingsSchema> {}
const NoteToolSettingsSchema = z.object({
  color: z.string(),
  align: z.enum(["left", "center", "right"]),
  style: z.enum(["italic", "light", "regular", "caps"]),
});
export interface NoteToolSettings
  extends zInfer<typeof NoteToolSettingsSchema> {}

export const InputToolSettingsSchema = z.discriminatedUnion("tool", [
  // GEOGRAPHIC TOOLS
  PinToolSettingsSchema.partial().extend({ tool: z.literal("pin") }),
  LineToolSettingsSchema.partial().extend({ tool: z.literal("line") }),
  RouteToolSettingsSchema.partial().extend({ tool: z.literal("route") }),
  PolygonToolSettingsSchema.partial().extend({ tool: z.literal("polygon") }),
  CircleToolSettingsSchema.partial().extend({ tool: z.literal("circle") }),

  // ANNOTATION TOOLS
  MarkerToolSettingsSchema.partial().extend({ tool: z.literal("marker") }),
  HighlighterToolSettingsSchema.partial().extend({
    tool: z.literal("highlighter"),
  }),
  TextToolSettingsSchema.partial().extend({ tool: z.literal("text") }),
  NoteToolSettingsSchema.partial().extend({ tool: z.literal("note") }),
]);

export const ToolSettingsSchema = z.discriminatedUnion("tool", [
  // GEOGRAPHIC TOOLS
  PinToolSettingsSchema.extend({ tool: z.literal("pin") }),
  LineToolSettingsSchema.extend({ tool: z.literal("line") }),
  RouteToolSettingsSchema.extend({ tool: z.literal("route") }),
  PolygonToolSettingsSchema.extend({ tool: z.literal("polygon") }),
  CircleToolSettingsSchema.extend({ tool: z.literal("circle") }),

  // ANNOTATION TOOLS
  MarkerToolSettingsSchema.extend({ tool: z.literal("marker") }),
  HighlighterToolSettingsSchema.extend({ tool: z.literal("highlighter") }),
  TextToolSettingsSchema.extend({ tool: z.literal("text") }),
  NoteToolSettingsSchema.extend({ tool: z.literal("note") }),
]);

export type InputToolSettings =
  | (Partial<PinToolSettings> & { tool: "pin" })
  | (Partial<LineToolSettings> & { tool: "line" })
  | (Partial<RouteToolSettings> & { tool: "route" })
  | (Partial<PolygonToolSettings> & { tool: "polygon" })
  | (Partial<CircleToolSettings> & { tool: "circle" })
  | (Partial<MarkerToolSettings> & { tool: "marker" })
  | (Partial<HighlighterToolSettings> & { tool: "highlighter" })
  | (Partial<TextToolSettings> & { tool: "text" })
  | (Partial<NoteToolSettings> & { tool: "note" });

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

export type PinFrame = "frame-circle" | "frame-square";

export type PinSymbol =
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
