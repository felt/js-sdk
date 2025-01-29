import { z } from "zod";

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
] as const;

export const ToolSchema = z.enum([...configurableTools, "link"]);
export const ConfigurableToolSchema = z.enum(configurableTools);

export type ToolType = z.infer<typeof ToolSchema>;
export type ConfigurableToolType = z.infer<typeof ConfigurableToolSchema>;

const InputPinToolSettingsSchema = z.object({
  tool: z.literal("pin"),
  color: z.string().optional(),
  symbol: z.string().optional(),
  frame: z.string().nullable().optional(),
});

const InputLineToolSettingsSchema = z.object({
  tool: z.literal("line"),
  color: z.string().optional(),
  strokeOpacity: z.number().optional(),
  strokeWidth: z.number().optional(),
  strokeStyle: z.enum(["solid", "dashed", "dotted"]).optional(),
  distanceMarker: z.boolean().optional(),
});

const InputRouteToolSettingsSchema = z.object({
  tool: z.literal("route"),
  color: z.string().optional(),
  routingMode: z.enum(["driving", "cycling", "walking", "flying"]).optional(),
  strokeOpacity: z.number().optional(),
  strokeWidth: z.number().optional(),
  strokeStyle: z.enum(["solid", "dashed", "dotted"]).optional(),
  distanceMarker: z.boolean().optional(),
  endCaps: z.boolean().optional(),
});

const InputPolygonToolSettingsSchema = z.object({
  tool: z.literal("polygon"),
  color: z.string().optional(),
  fillOpacity: z.number().optional(),
  strokeOpacity: z.number().optional(),
  strokeWidth: z.number().optional(),
  strokeStyle: z.enum(["solid", "dashed", "dotted"]).optional(),
  areaMarker: z.boolean().optional(),
});

const InputCircleToolSettingsSchema = z.object({
  tool: z.literal("circle"),
  color: z.string().optional(),
  fillOpacity: z.number().optional(),
  strokeOpacity: z.number().optional(),
  strokeWidth: z.number().optional(),
  strokeStyle: z.enum(["solid", "dashed", "dotted"]).optional(),
  radiusMarker: z.boolean().optional(),
});

const InputMarkerToolSettingsSchema = z.object({
  tool: z.literal("marker"),
  color: z.string().optional(),
  opacity: z.number().optional(),
  size: z.number().optional(),
});

const InputHighlighterToolSettingsSchema = z.object({
  tool: z.literal("highlighter"),
  color: z.string().optional(),
  opacity: z.number().optional(),
  size: z.number().optional(),
});

const InputTextToolSettingsSchema = z.object({
  tool: z.literal("text"),
  color: z.string().optional(),
  align: z.enum(["left", "center", "right"]).optional(),
  style: z.enum(["italic", "light", "regular", "caps"]).optional(),
});

const InputNoteToolSettingsSchema = z.object({
  tool: z.literal("note"),
  color: z.string().optional(),
  align: z.enum(["left", "center", "right"]).optional(),
  style: z.enum(["italic", "light", "regular", "caps"]).optional(),
});

export const InputToolSettingsSchema = z.discriminatedUnion("tool", [
  // GEOGRAPHIC TOOLS
  InputPinToolSettingsSchema,
  InputLineToolSettingsSchema,
  InputRouteToolSettingsSchema,
  InputPolygonToolSettingsSchema,
  InputCircleToolSettingsSchema,

  // ANNOTATION TOOLS
  InputMarkerToolSettingsSchema,
  InputHighlighterToolSettingsSchema,
  InputTextToolSettingsSchema,
  InputNoteToolSettingsSchema,
]);

export const ToolSettingsSchema = z.discriminatedUnion("tool", [
  // GEOGRAPHIC TOOLS
  InputPinToolSettingsSchema.required(),
  InputLineToolSettingsSchema.required(),
  InputRouteToolSettingsSchema.required(),
  InputPolygonToolSettingsSchema.required(),
  InputCircleToolSettingsSchema.required(),

  // ANNOTATION TOOLS
  InputMarkerToolSettingsSchema.required(),
  InputHighlighterToolSettingsSchema.required(),
  InputTextToolSettingsSchema.required(),
  InputNoteToolSettingsSchema.required(),
]);

/**
 * @useDeclaredType
 */
export type InputToolSettings = z.infer<typeof InputToolSettingsSchema>;
export type ToolSettings = z.infer<typeof ToolSettingsSchema>;

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
