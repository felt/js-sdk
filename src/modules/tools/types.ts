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

const PinToolSettingsSchema = PlaceCreateSchema.pick({
  color: true,
  symbol: true,
  frame: true,
});
export interface PinToolSettings extends zInfer<typeof PinToolSettingsSchema> {
  symbol: PlaceSymbol;
}

const LineToolSettingsSchema = PathCreateSchema.pick({
  color: true,
  strokeOpacity: true,
  strokeWidth: true,
  strokeStyle: true,
  distanceMarker: true,
});
export interface LineToolSettings
  extends zInfer<typeof LineToolSettingsSchema> {}

const RouteToolSettingsSchema = PathCreateSchema.pick({
  color: true,
  routingMode: true,
  strokeOpacity: true,
  strokeWidth: true,
  strokeStyle: true,
  distanceMarker: true,
  endCaps: true,
});
export interface RouteToolSettings
  extends zInfer<typeof RouteToolSettingsSchema> {}

const PolygonToolSettingsSchema = PolygonCreateSchema.pick({
  color: true,
  fillOpacity: true,
  strokeOpacity: true,
  strokeWidth: true,
  strokeStyle: true,
  areaMarker: true,
});
export interface PolygonToolSettings
  extends zInfer<typeof PolygonToolSettingsSchema> {}

const CircleToolSettingsSchema = CircleCreateSchema.pick({
  color: true,
  fillOpacity: true,
  strokeOpacity: true,
  strokeWidth: true,
  strokeStyle: true,
  radiusMarker: true,
});
export interface CircleToolSettings
  extends zInfer<typeof CircleToolSettingsSchema> {}

const MarkerToolSettingsSchema = MarkerCreateSchema.pick({
  color: true,
  opacity: true,
  size: true,
});
export interface MarkerToolSettings
  extends zInfer<typeof MarkerToolSettingsSchema> {}

const HighlighterToolSettingsSchema = HighlighterCreateSchema.pick({
  color: true,
  opacity: true,
}).extend({
  size: z.number().min(0).max(200),
});
export interface HighlighterToolSettings
  extends zInfer<typeof HighlighterToolSettingsSchema> {}

const TextToolSettingsSchema = TextCreateSchema.pick({
  color: true,
  align: true,
  style: true,
});
export interface TextToolSettings
  extends zInfer<typeof TextToolSettingsSchema> {}

const NoteToolSettingsSchema = NoteCreateSchema.pick({
  color: true,
  align: true,
  style: true,
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

export type InputToolSettings = {
  [K in ConfigurableToolType]: Partial<ToolSettingsMap[K]> & { tool: K };
}[ConfigurableToolType];

export type ToolSettingsChangeEvent = {
  [K in ConfigurableToolType]: ToolSettingsMap[K] & { tool: K };
}[ConfigurableToolType];

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
