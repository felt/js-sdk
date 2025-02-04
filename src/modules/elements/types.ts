import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import { LatLngSchema, MultiLineStringGeometrySchema, PointGeometrySchema } from "../shared/types";

/**
 * @group Elements
 */
export type Element =
  | ReadPinElement
  | ReadPathElement
  | ReadPolygonElement
  | ReadCircleElement
  | ReadMarkerElement
  | ReadHighlighterElement
  | ReadTextElement
  | ReadNoteElement
  | ReadImageElement
  | ReadLinkElement;

export type ReadPinElement = Omit<PinElement, "coordinates">;
export type ReadPathElement = Omit<PathElement, "coordinates">;
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
  coordinates: PointGeometrySchema.shape.coordinates,

  symbol: z.string(),
  frame: z.enum(["frame-circle", "frame-square"]).nullable(),
  hideLabel: z.boolean(),
});
export interface PinElement extends z.infer<typeof PinSchema> {}


export const PathSchema = BaseFeltElementSchema.extend(Geographic.shape)
.extend(Strokable.shape)
.extend({
  type: z.literal("Path"),
  coordinates: MultiLineStringGeometrySchema.shape.coordinates,
  distanceMarker: z.boolean(),
  endCaps: z.boolean(),
  routingMode: z.enum(["driving", "cycling", "walking", "flying"]).optional(),
});

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


const requiredCreateProps = { type: true, coordinates: true } as const;
const omitCreateProps = { id: true } as const;

const PinCreateSchema = PinSchema.partial().required(requiredCreateProps).omit(omitCreateProps);
export interface PinCreate extends z.infer<typeof PinCreateSchema> {}

const PathCreateSchema = PathSchema.partial().required(requiredCreateProps).omit(omitCreateProps);
export interface PathCreate extends z.infer<typeof PathCreateSchema> {}

const PolygonCreateSchema = PolygonSchema.partial().required(requiredCreateProps).omit(omitCreateProps);
export interface PolygonCreate extends z.infer<typeof PolygonCreateSchema> {}

const CircleCreateSchema = CircleSchema.partial().required(requiredCreateProps).omit(omitCreateProps);
export interface CircleCreate extends z.infer<typeof CircleCreateSchema> {}

const MarkerCreateSchema = MarkerSchema.partial().required(requiredCreateProps).omit(omitCreateProps);
export interface MarkerCreate extends z.infer<typeof MarkerCreateSchema> {}

const HighlighterCreateSchema =
  HighlighterSchema.partial().required(requiredCreateProps).omit(omitCreateProps);
export interface HighlighterCreate
  extends z.infer<typeof HighlighterCreateSchema> {}

const TextCreateSchema = TextSchema.partial().required(requiredCreateProps).omit(omitCreateProps);
export interface TextCreate extends z.infer<typeof TextCreateSchema> {}

const NoteCreateSchema = NoteSchema.partial().required(requiredCreateProps).omit(omitCreateProps);
export interface NoteCreate extends z.infer<typeof NoteCreateSchema> {}

const ImageCreateSchema = ImageSchema.partial().required(requiredCreateProps).omit(omitCreateProps);
export interface ImageCreate extends z.infer<typeof ImageCreateSchema> {}

export type ElementCreate =
  | PinCreate
  | PathCreate
  | PolygonCreate
  | CircleCreate
  | MarkerCreate
  | HighlighterCreate
  | ImageCreate
  | Omit<TextCreate, "coordinates">
  | Omit<NoteCreate, "coordinates">;

  export const ElementCreateSchema = z.discriminatedUnion("type", [
    PinCreateSchema,
    PathCreateSchema,
    PolygonCreateSchema,
    CircleCreateSchema,
  
    MarkerCreateSchema,
    HighlighterCreateSchema,
  
    ImageCreateSchema,
  
    TextCreateSchema.omit({ coordinates: true }),
    NoteCreateSchema.omit({ coordinates: true }),
  ]);

const requiredUpdateProps = { type: true, id: true } as const;

const PinUpdateSchema = PinSchema.partial().required(requiredUpdateProps);
export interface PinUpdate extends z.infer<typeof PinUpdateSchema> {}

const PathUpdateSchema = PathSchema.partial().required(requiredUpdateProps);
export interface PathUpdate extends z.infer<typeof PathUpdateSchema> {}

const PolygonUpdateSchema = PolygonSchema.partial().required(requiredUpdateProps);
export interface PolygonUpdate extends z.infer<typeof PolygonUpdateSchema> {}

const CircleUpdateSchema = CircleSchema.partial().required(requiredUpdateProps);
export interface CircleUpdate extends z.infer<typeof CircleUpdateSchema> {}

const MarkerUpdateSchema = MarkerSchema.partial().required(requiredUpdateProps);
export interface MarkerUpdate extends z.infer<typeof MarkerUpdateSchema> {}

const HighlighterUpdateSchema =
  HighlighterSchema.partial().required(requiredUpdateProps);
export interface HighlighterUpdate
  extends z.infer<typeof HighlighterUpdateSchema> {}

const TextUpdateSchema = TextSchema.partial().required(requiredUpdateProps);
export interface TextUpdate extends z.infer<typeof TextUpdateSchema> {}

const NoteUpdateSchema = NoteSchema.partial().required(requiredUpdateProps);
export interface NoteUpdate extends z.infer<typeof NoteUpdateSchema> {}

const ImageUpdateSchema = ImageSchema.partial().required(requiredUpdateProps);
export interface ImageUpdate extends z.infer<typeof ImageUpdateSchema> {}

export const ElementUpdateSchema = z.discriminatedUnion("type", [
  PinUpdateSchema,
  PathUpdateSchema,
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
  | PathUpdate
  | PolygonUpdate
  | CircleUpdate
  | MarkerUpdate
  | HighlighterUpdate
  | TextUpdate
  | NoteUpdate
  | ImageUpdate;
