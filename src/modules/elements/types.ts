import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  LatLngSchema,
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

const PinElementSchema = BaseFeltElementSchema.extend(Geographic.shape).extend({
  type: z.literal("Pin"),
  coordinates: PointGeometrySchema.shape.coordinates,

  symbol: z.string(),
  frame: z.enum(["frame-circle", "frame-square"]).nullable(),
  hideLabel: z.boolean(),
});
const PinReadSchema = PinElementSchema.omit({ coordinates: true });

const PathElementSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Path"),
    coordinates: MultiLineStringGeometrySchema.shape.coordinates,
    distanceMarker: z.boolean(),
    endCaps: z.boolean(),
    routingMode: z.enum(["driving", "cycling", "walking", "flying"]).optional(),
  });

const PathReadSchema = PathElementSchema.omit({ coordinates: true });

const PolygonElementSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Polygon"),
    coordinates: z.array(z.array(LatLngSchema)),

    fillOpacity: z.number().min(0).max(1),
    areaMarker: z.boolean(),
  });
const PolygonReadSchema = PolygonElementSchema.omit({
  coordinates: true,
});

const CircleElementSchema = BaseFeltElementSchema.extend(Geographic.shape)
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
const CircleReadSchema = CircleElementSchema.omit({ coordinates: true });

const MarkerElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Marker"),
  coordinates: z.array(z.array(LatLngSchema)),

  opacity: z.number().min(0).max(1),
  size: z.number().min(0).max(100),
});
const MarkerReadSchema = MarkerElementSchema.omit({ coordinates: true });

const HighlighterElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Highlighter"),
  coordinates: z.array(z.array(LatLngSchema)),

  opacity: z.number().min(0).max(1),
});
const HighlighterReadSchema = HighlighterElementSchema.omit({
  coordinates: true,
});

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

const TextElementSchema = BaseFeltElementSchema.extend(DerivedCoords.shape)
  .extend(Textual.shape)
  .extend({
    type: z.literal("Text"),
  });
const TextReadSchema = TextElementSchema.omit({ coordinates: true });

const NoteElementSchema = BaseFeltElementSchema.extend(DerivedCoords.shape)
  .extend(Textual.shape)
  .extend({
    type: z.literal("Note"),
    widthMultiplier: z.number().min(0),
  });
const NoteReadSchema = NoteElementSchema.omit({ coordinates: true });

const ImageElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Image"),
  coordinates: z.array(z.array(LatLngSchema)),
  imageUrl: z.string(),
  opacity: z.number().min(0).max(1),
});
const ImageReadSchema = ImageElementSchema.omit({ coordinates: true });

const LinkElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Link"),
  coordinates: z.array(z.array(LatLngSchema)),
  url: z.string(),
});
const LinkReadSchema = LinkElementSchema.omit({ coordinates: true });

const requiredCreateProps = { type: true, coordinates: true } as const;
const omitCreateProps = { id: true } as const;

export const PinCreateSchema = PinElementSchema.partial()
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
  .omit(omitCreateProps);

export const MarkerCreateSchema = MarkerElementSchema.partial()
  .required(requiredCreateProps)
  .omit(omitCreateProps);

export const HighlighterCreateSchema = HighlighterElementSchema.partial()
  .required(requiredCreateProps)
  .omit(omitCreateProps);

export const TextCreateSchema = TextElementSchema.partial()
  .required(requiredCreateProps)
  .omit({ ...omitCreateProps, coordinates: true });

export const NoteCreateSchema = NoteElementSchema.partial()
  .required(requiredCreateProps)
  .omit({ ...omitCreateProps, coordinates: true });

export const ImageCreateSchema = ImageElementSchema.partial()
  .required(requiredCreateProps)
  .omit(omitCreateProps);

export const ElementCreateSchema = z.discriminatedUnion("type", [
  PinCreateSchema,
  PathCreateSchema,
  PolygonCreateSchema,
  CircleCreateSchema,

  MarkerCreateSchema,
  HighlighterCreateSchema,

  ImageCreateSchema,

  TextCreateSchema,
  NoteCreateSchema,
]);

const requiredUpdateProps = { type: true, id: true } as const;

const PinUpdateSchema =
  PinElementSchema.partial().required(requiredUpdateProps);

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

const TextUpdateSchema =
  TextElementSchema.partial().required(requiredUpdateProps);

const NoteUpdateSchema =
  NoteElementSchema.partial().required(requiredUpdateProps);

const ImageUpdateSchema =
  ImageElementSchema.partial().required(requiredUpdateProps);

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

export interface PinElementCreate extends zInfer<typeof PinCreateSchema> {}
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

export interface PinElementRead extends zInfer<typeof PinReadSchema> {}
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

export interface PinElementUpdate extends zInfer<typeof PinUpdateSchema> {}
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
  | PinElementCreate
  | PathElementCreate
  | PolygonElementCreate
  | CircleElementCreate
  | MarkerElementCreate
  | HighlighterElementCreate
  | ImageElementCreate
  | TextElementCreate
  | NoteElementCreate;

export type ElementUpdate =
  | PinElementUpdate
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
  | PinElementRead
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
