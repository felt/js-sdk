import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  LatLngTupleSchema,
  MultiLineStringGeometrySchema,
  PointGeometrySchema,
} from "../shared/types";

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

const PlaceElementSchema = BaseFeltElementSchema.extend(
  Geographic.shape,
).extend({
  type: z.literal("Place"),
  coordinates: PointGeometrySchema.shape.coordinates,

  symbol: z.string(),
  frame: z.enum(["frame-circle", "frame-square"]).nullable(),
  hideLabel: z.boolean(),
});

const PathElementSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Path"),
    coordinates: MultiLineStringGeometrySchema.shape.coordinates,
    distanceMarker: z.boolean(),
    endCaps: z.boolean(),
    routingMode: z.enum(["driving", "cycling", "walking", "flying"]).nullable(),
  });

const PolygonElementSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Polygon"),
    coordinates: MultiLineStringGeometrySchema.shape.coordinates,

    fillOpacity: z.number().min(0).max(1),
    areaMarker: z.boolean(),
  });

const CircleElementSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Circle"),
    coordinates: LatLngTupleSchema,
    radius: z.number(),
    radiusDisplayAngle: z.number(),
    radiusDisplayUnit: DistanceUnit.nullable(),

    fillOpacity: z.number().min(0).max(1),
    radiusMarker: z.boolean(),
  });

const MarkerElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Marker"),
  coordinates: MultiLineStringGeometrySchema.shape.coordinates,

  opacity: z.number().min(0).max(1),
  size: z.number().min(0).max(100),
  zoom: z.number().min(0).max(23),
});

const HighlighterElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Highlighter"),
  coordinates: MultiLineStringGeometrySchema.shape.coordinates,

  opacity: z.number().min(0).max(1),
});

const DerivedCoords = z.object({
  position: LatLngTupleSchema,
  rotation: z.number(),
  scale: z.number(),
  zoom: z.number().min(0).max(23),

  coordinates: MultiLineStringGeometrySchema.shape.coordinates,
});

const Textual = z.object({
  text: z.string(),
  align: z.enum(["left", "center", "right"]),
  style: z.enum(["italic", "light", "regular", "caps"]),
  name: z.string(),
});

const TextElementSchema = BaseFeltElementSchema.extend(DerivedCoords.shape)
  .extend(Textual.shape)
  .extend({
    type: z.literal("Text"),
  });

const NoteElementSchema = BaseFeltElementSchema.extend(DerivedCoords.shape)
  .extend(Textual.shape)
  .extend({
    type: z.literal("Note"),
    widthScale: z.number().min(0),
  });

const ImageElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Image"),
  coordinates: MultiLineStringGeometrySchema.shape.coordinates,
  imageUrl: z.string(),
  opacity: z.number().min(0).max(1),
}).omit({ color: true });

const LinkElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Link"),
  coordinates: MultiLineStringGeometrySchema.shape.coordinates,
  url: z.string(),
});

const requiredCreateProps = { type: true, coordinates: true } as const;
const omitCreateProps = { id: true } as const;

export const PlaceCreateSchema = PlaceElementSchema.partial()
  .required(requiredCreateProps)
  .omit(omitCreateProps);

export const PathCreateSchema = PathElementSchema.partial()
  .required(requiredCreateProps)
  .omit(omitCreateProps);

export const PolygonCreateSchema = PolygonElementSchema.partial()
  .required(requiredCreateProps)
  .omit(omitCreateProps);

export const CircleCreateSchema = CircleElementSchema.partial()
  .required(requiredCreateProps)
  .required({ radius: true })
  .omit(omitCreateProps);

export const MarkerCreateSchema = MarkerElementSchema.partial()
  .required(requiredCreateProps)
  .omit(omitCreateProps);

export const HighlighterCreateSchema = HighlighterElementSchema.partial()
  .required(requiredCreateProps)
  .omit(omitCreateProps);

export const TextCreateSchema = TextElementSchema.partial()
  .required(requiredCreateProps)
  .required({ text: true })
  .omit(omitCreateProps)
  .omit({ coordinates: true, name: true });

export const NoteCreateSchema = NoteElementSchema.partial()
  .required(requiredCreateProps)
  .required({ text: true })
  .omit(omitCreateProps)
  .omit({ coordinates: true, name: true });

const ImageCreateSchema = ImageElementSchema.partial()
  .required(requiredCreateProps)
  .required({ imageUrl: true })
  .omit(omitCreateProps);

export const ElementCreateSchema = z.discriminatedUnion("type", [
  PlaceCreateSchema,
  PathCreateSchema,
  PolygonCreateSchema,
  CircleCreateSchema,

  MarkerCreateSchema,
  HighlighterCreateSchema,

  ImageCreateSchema,

  TextCreateSchema,
  NoteCreateSchema,
]);

const PlaceReadSchema = PlaceElementSchema.omit({ coordinates: true });
const PathReadSchema = PathElementSchema.omit({ coordinates: true });
const PolygonReadSchema = PolygonElementSchema.omit({
  coordinates: true,
});
const CircleReadSchema = CircleElementSchema.omit({ coordinates: true });
const MarkerReadSchema = MarkerElementSchema.omit({ coordinates: true });
const HighlighterReadSchema = HighlighterElementSchema.omit({
  coordinates: true,
});
const TextReadSchema = TextElementSchema.omit({ coordinates: true });
const NoteReadSchema = NoteElementSchema.omit({ coordinates: true });
const ImageReadSchema = ImageElementSchema.omit({ coordinates: true });
const LinkReadSchema = LinkElementSchema.omit({ coordinates: true });

const requiredUpdateProps = { type: true, id: true } as const;

const PlaceUpdateSchema =
  PlaceElementSchema.partial().required(requiredUpdateProps);

const PathUpdateSchema =
  PathElementSchema.partial().required(requiredUpdateProps);

const PolygonUpdateSchema =
  PolygonElementSchema.partial().required(requiredUpdateProps);

const CircleUpdateSchema =
  CircleElementSchema.partial().required(requiredUpdateProps);

const MarkerUpdateSchema =
  MarkerElementSchema.partial().required(requiredUpdateProps);

const HighlighterUpdateSchema =
  HighlighterElementSchema.partial().required(requiredUpdateProps);

const TextUpdateSchema = TextElementSchema.partial()
  .required(requiredUpdateProps)
  .omit({
    coordinates: true,
    name: true,
  });

const NoteUpdateSchema = NoteElementSchema.partial()
  .required(requiredUpdateProps)
  .omit({
    coordinates: true,
    name: true,
  });

const ImageUpdateSchema =
  ImageElementSchema.partial().required(requiredUpdateProps);

export const ElementUpdateSchema = z.discriminatedUnion("type", [
  PlaceUpdateSchema,
  PathUpdateSchema,
  PolygonUpdateSchema,
  CircleUpdateSchema,
  MarkerUpdateSchema,
  HighlighterUpdateSchema,
  TextUpdateSchema,
  NoteUpdateSchema,
  ImageUpdateSchema,
]);

export interface PlaceElementCreate extends zInfer<typeof PlaceCreateSchema> {}
export interface PathElementCreate extends zInfer<typeof PathCreateSchema> {}
export interface PolygonElementCreate
  extends zInfer<typeof PolygonCreateSchema> {}
export interface CircleElementCreate
  extends zInfer<typeof CircleCreateSchema> {}
export interface MarkerElementCreate
  extends zInfer<typeof MarkerCreateSchema> {}
export interface HighlighterElementCreate
  extends zInfer<typeof HighlighterCreateSchema> {}
export interface TextElementCreate extends zInfer<typeof TextCreateSchema> {}
export interface NoteElementCreate extends zInfer<typeof NoteCreateSchema> {}
export interface ImageElementCreate extends zInfer<typeof ImageCreateSchema> {}

export interface PlaceElementRead extends zInfer<typeof PlaceReadSchema> {}
export interface PathElementRead extends zInfer<typeof PathReadSchema> {}
export interface PolygonElementRead extends zInfer<typeof PolygonReadSchema> {}
export interface CircleElementRead extends zInfer<typeof CircleReadSchema> {}
export interface MarkerElementRead extends zInfer<typeof MarkerReadSchema> {}
export interface HighlighterElementRead
  extends zInfer<typeof HighlighterReadSchema> {}
export interface TextElementRead extends zInfer<typeof TextReadSchema> {}
export interface NoteElementRead extends zInfer<typeof NoteReadSchema> {}
export interface ImageElementRead extends zInfer<typeof ImageReadSchema> {}
export interface LinkElementRead extends zInfer<typeof LinkReadSchema> {}

export interface PlaceElementUpdate extends zInfer<typeof PlaceUpdateSchema> {}
export interface PathElementUpdate extends zInfer<typeof PathUpdateSchema> {}
export interface PolygonElementUpdate
  extends zInfer<typeof PolygonUpdateSchema> {}
export interface CircleElementUpdate
  extends zInfer<typeof CircleUpdateSchema> {}
export interface MarkerElementUpdate
  extends zInfer<typeof MarkerUpdateSchema> {}
export interface HighlighterElementUpdate
  extends zInfer<typeof HighlighterUpdateSchema> {}
export interface TextElementUpdate extends zInfer<typeof TextUpdateSchema> {}
export interface NoteElementUpdate extends zInfer<typeof NoteUpdateSchema> {}
export interface ImageElementUpdate extends zInfer<typeof ImageUpdateSchema> {}

export type ElementCreate =
  | PlaceElementCreate
  | PathElementCreate
  | PolygonElementCreate
  | CircleElementCreate
  | MarkerElementCreate
  | HighlighterElementCreate
  | ImageElementCreate
  | TextElementCreate
  | NoteElementCreate;

export type ElementUpdate =
  | PlaceElementUpdate
  | PathElementUpdate
  | PolygonElementUpdate
  | CircleElementUpdate
  | MarkerElementUpdate
  | HighlighterElementUpdate
  | TextElementUpdate
  | NoteElementUpdate
  | ImageElementUpdate;

/**
 * @group Elements
 */
export type Element =
  | PlaceElementRead
  | PathElementRead
  | PolygonElementRead
  | CircleElementRead
  | MarkerElementRead
  | HighlighterElementRead
  | TextElementRead
  | NoteElementRead
  | ImageElementRead
  | LinkElementRead;

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
