import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import { LatLngSchema } from "../shared/types";

/**
 * @group Elements
 */
export type Element =
  | ReadPinElement
  | ReadLineElement
  | ReadPolygonElement
  | ReadCircleElement
  | ReadMarkerElement
  | ReadHighlighterElement
  | ReadTextElement
  | ReadNoteElement
  | ReadImageElement
  | ReadLinkElement;

export type ReadPinElement = Omit<PinElement, "coordinates">;
export type ReadLineElement = Omit<PathElement, "coordinates">;
export type ReadPolygonElement = Omit<PolygonElement, "coordinates">;
export type ReadCircleElement = Omit<CircleElement, "coordinates">;
export type ReadMarkerElement = Omit<MarkerElement, "coordinates">;
export type ReadHighlighterElement = Omit<HighlighterElement, "coordinates">;
export type ReadTextElement = Omit<TextElement, "coordinates">;
export type ReadNoteElement = Omit<NoteElement, "coordinates">;
export type ReadImageElement = Omit<ImageElement, "coordinates">;
export type ReadLinkElement = Omit<LinkElement, "coordinates">;

/**
 * @group Element Groups
 */
export interface ElementGroup {
  /**
   * A string identifying the element group.
   */
  id: string;

  /**
   * The name of the element group. This is shown in the legend.
   */
  name: string;

  /**
   * The caption of the element group. This is shown in the legend.
   */
  caption: string | null;

  /**
   * The ids of the elements in the element group.
   *
   * @remarks
   * You can use these ids to get the full element objects via the `getElements` method.
   */
  elementIds: Array<string>;

  /**
   * Whether the element group is visible or not.
   */
  visible: boolean;

  /**
   * Whether the element group is shown in the legend or not.
   */
  shownInLegend: boolean;
}

/**
 * The constraints to apply when getting elements.
 *
 * @group Elements
 */
export interface GetElementsConstraint
  extends zInfer<typeof GetElementsConstraintSchema> {}
export const GetElementsConstraintSchema = z.object({
  /**
   * The ids of the elements to get.
   */
  ids: z.array(z.string()).optional(),
});

/**
 * The constraints to apply when getting element groups.
 *
 * @group Element Groups
 */
export interface GetElementGroupsConstraint
  extends zInfer<typeof GetElementGroupsConstraintSchema> {}
/**
 * @ignore
 */
export const GetElementGroupsConstraintSchema = z.object({
  /**
   * The ids of the element groups to get.
   */
  ids: z.array(z.string()).optional(),
});

/**
 * The parameters for the `onElementChange` listener.
 *
 * @group Elements
 */
export interface ElementChangeCallbackParams {
  /**
   * The new data for the element or null if the element was removed.
   */
  element: Element | null;
}

/**
 * The parameters for the `onElementGroupChange` listener.
 *
 * @group Element Groups
 */
export interface ElementGroupChangeCallbackParams {
  elementGroup: ElementGroup | null;
}

const BaseFeltElementSchema = z.object({
  id: z.string(),
  groupId: z.string().nullable(),
  color: z.string(),
  name: z.union([z.string(), z.null()]),
  description: z.union([z.string(), z.null()]),
  attributes: z.record(z.string(), z.unknown()),
});

const Geographic = z.object({
  imageUrl: z.string().nullable(),
});

const Strokable = z.object({
  strokeOpacity: z.number(),
  strokeWidth: z.number(),
  strokeStyle: z.enum(["solid", "dashed", "dotted"]),
});

const DistanceUnit = z.enum(["meter", "kilometer", "foot", "mile"]);

export const PinSchema = BaseFeltElementSchema.extend(Geographic.shape).extend({
  type: z.literal("Pin"),
  coordinates: LatLngSchema,

  symbol: z.string(),
  frame: z.enum(["frame-circle", "frame-square"]).nullable(),
  hideLabel: z.boolean(),
});
export interface PinElement extends z.infer<typeof PinSchema> {}

export const LineSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Path"),
    coordinates: z.array(z.array(LatLngSchema)),
    routingMode: z.never().optional(),
    distanceMarker: z.boolean(),
  });

export const RouteSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Path"),
    coordinates: z.array(z.array(LatLngSchema)),

    routingMode: z.enum(["driving", "cycling", "walking", "flying"]),
    distanceMarker: z.boolean(),
    endCaps: z.boolean(),
  });

export const PathSchema = z.discriminatedUnion("routingMode", [
  LineSchema,
  RouteSchema,
]);
export type PathElement = z.infer<typeof PathSchema>;

export const PolygonSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Polygon"),
    coordinates: z.array(z.array(LatLngSchema)),

    fillOpacity: z.number().min(0).max(1),
    areaMarker: z.boolean(),
  });
export interface PolygonElement extends z.infer<typeof PolygonSchema> {}

export const CircleSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Circle"),
    coordinates: LatLngSchema,
    radius: z.number(),
    radiusDisplayAngle: z.number(),
    radiusDisplayUnit: DistanceUnit.nullable(),

    fillOpacity: z.number().min(0).max(1),
    radiusMarker: z.boolean(),
  });
export interface CircleElement extends z.infer<typeof CircleSchema> {}

export const MarkerSchema = BaseFeltElementSchema.extend({
  type: z.literal("Marker"),
  coordinates: z.array(z.array(LatLngSchema)),

  opacity: z.number().min(0).max(1),
  size: z.number().min(0).max(100),
});
export interface MarkerElement extends z.infer<typeof MarkerSchema> {}

export const HighlighterSchema = BaseFeltElementSchema.extend({
  type: z.literal("Highlighter"),
  coordinates: z.array(z.array(LatLngSchema)),

  opacity: z.number().min(0).max(1),
});
export interface HighlighterElement extends z.infer<typeof HighlighterSchema> {}

const DerivedCoords = z.object({
  position: LatLngSchema,
  rotation: z.number(),
  scale: z.number(),

  coordinates: z.array(z.array(LatLngSchema)),
});

const Textual = z.object({
  align: z.enum(["left", "center", "right"]),
  style: z.enum(["italic", "light", "regular", "caps"]),
  name: z.string(),
});

export const TextSchema = BaseFeltElementSchema.extend(DerivedCoords.shape)
  .extend(Textual.shape)
  .extend({
    type: z.literal("Text"),
  });
export interface TextElement extends z.infer<typeof TextSchema> {}

export const NoteSchema = BaseFeltElementSchema.extend(DerivedCoords.shape)
  .extend(Textual.shape)
  .extend({
    type: z.literal("Note"),
    widthMultiplier: z.number().min(0),
  });
export interface NoteElement extends z.infer<typeof NoteSchema> {}

export const ImageSchema = BaseFeltElementSchema.extend({
  type: z.literal("Image"),
  coordinates: z.array(z.array(LatLngSchema)),
  imageUrl: z.string(),
  opacity: z.number().min(0).max(1),
});
export interface ImageElement extends z.infer<typeof ImageSchema> {}

export const LinkSchema = BaseFeltElementSchema.extend({
  type: z.literal("Link"),
  coordinates: z.array(z.array(LatLngSchema)),
  url: z.string(),
});
export interface LinkElement extends z.infer<typeof LinkSchema> {}

export const ElementInputSchema = z.discriminatedUnion("type", [
  PinSchema,
  LineSchema,
  RouteSchema,
  PolygonSchema,
  CircleSchema,

  MarkerSchema,
  HighlighterSchema,

  ImageSchema,

  TextSchema.omit({ coordinates: true }),
  NoteSchema.omit({ coordinates: true }),
]);

export type ElementInput =
  | PinElement
  | PathElement
  | PolygonElement
  | CircleElement
  | MarkerElement
  | HighlighterElement
  | ImageElement
  | Omit<TextElement, "coordinates">
  | Omit<NoteElement, "coordinates">;

const requiredProps = { type: true, id: true } as const;

const PinUpdateSchema = PinSchema.partial().required(requiredProps);
export interface PinUpdate extends z.infer<typeof PinUpdateSchema> {}

const LineUpdateSchema = LineSchema.partial().required(requiredProps);
export interface LineUpdate extends z.infer<typeof LineUpdateSchema> {}

const RouteUpdateSchema = RouteSchema.partial().required(requiredProps);
export interface RouteUpdate extends z.infer<typeof RouteUpdateSchema> {}

const PolygonUpdateSchema = PolygonSchema.partial().required(requiredProps);
export interface PolygonUpdate extends z.infer<typeof PolygonUpdateSchema> {}

const CircleUpdateSchema = CircleSchema.partial().required(requiredProps);
export interface CircleUpdate extends z.infer<typeof CircleUpdateSchema> {}

const MarkerUpdateSchema = MarkerSchema.partial().required(requiredProps);
export interface MarkerUpdate extends z.infer<typeof MarkerUpdateSchema> {}

const HighlighterUpdateSchema =
  HighlighterSchema.partial().required(requiredProps);
export interface HighlighterUpdate
  extends z.infer<typeof HighlighterUpdateSchema> {}

const TextUpdateSchema = TextSchema.partial().required(requiredProps);
export interface TextUpdate extends z.infer<typeof TextUpdateSchema> {}

const NoteUpdateSchema = NoteSchema.partial().required(requiredProps);
export interface NoteUpdate extends z.infer<typeof NoteUpdateSchema> {}

const ImageUpdateSchema = ImageSchema.partial().required(requiredProps);
export interface ImageUpdate extends z.infer<typeof ImageUpdateSchema> {}

export const ElementUpdateSchema = z.discriminatedUnion("type", [
  PinUpdateSchema,
  LineUpdateSchema,
  RouteUpdateSchema,
  PolygonUpdateSchema,
  CircleUpdateSchema,
  MarkerUpdateSchema,
  HighlighterUpdateSchema,
  TextUpdateSchema,
  NoteUpdateSchema,
  ImageUpdateSchema,
]);

export type ElementUpdate =
  | PinUpdate
  | LineUpdate
  | RouteUpdate
  | PolygonUpdate
  | CircleUpdate
  | MarkerUpdate
  | HighlighterUpdate
  | TextUpdate
  | NoteUpdate
  | ImageUpdate;
