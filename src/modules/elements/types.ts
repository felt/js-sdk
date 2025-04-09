import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  LngLatTupleSchema,
  MultiLineStringGeometrySchema,
  MultiPolygonGeometrySchema,
  PolygonGeometrySchema,
  type LngLatTuple,
} from "../shared/types";

const BaseFeltElementSchema = z.object({
  /**
   * The unique identifier for the element.
   */
  id: z.string(),

  /**
   * The ID of the element group that the element belongs to.
   * For elements that are not part of a group, this will be null.
   */
  groupId: z.string().nullable(),

  /**
   * The color of the element in some CSS-like format.
   *
   * @example
   * ```typescript
   * "#ABC123";
   * "rgb(255, 0, 0)";
   * "hsl(200, 100%, 50%)";
   * ```
   *
   * @default "#C93535"
   */
  color: z.string(),

  /**
   * The element's name. For elements that can show a label or text on
   * the map (e.g. a Place or Text element) this is the text that will be shown.
   *
   * For elements such as Polygons or Paths, the name is what is shown when
   * the element is selected by clicking on it.
   */
  name: z.string().nullable(),

  /**
   * Text describing the element, which is shown in an element's popup when it
   * is selected.
   *
   * Note that some elements are not selectable on the map, such as Notes, Text
   * and Markers, so their description will not be shown.
   */
  description: z.string().nullable(),

  /**
   * A set of key-value pairs that can be used to store arbitrary data about the element.
   *
   * This is most useful for associating additional data with an element that is not
   * part of the element's core data, such as a Place's address or some other
   * data.
   */
  attributes: z.record(z.string(), z.unknown()),

  /**
   * Whether the element is interactive.
   *
   * The `default` interaction mode means that the element can be selected and edited by
   * the user, if it was created by the SDK or by the user using a tool.
   *
   * If the interaction mode is `locked`, the element will not be editable by the user,
   * which is often used for elements that you don't want the user to edit or move by
   * accident.
   *
   * Elements that were created by the map author (i.e. not during an SDK "session") are
   * not editable and have special behaviour depending on their name, description and
   * attributes.
   *
   * @default "default"
   */
  interaction: z.enum(["default", "locked"]).optional(),
});

const Geographic = z.object({
  /**
   * The URL of an image that has been added to the element.
   */
  imageUrl: z.string().nullable(),
});

const Strokable = z.object({
  /**
   * A value between 0 and 1 that describes the opacity of the element's stroke.
   *
   * @default 1
   */
  strokeOpacity: z.number(),

  /**
   * The width of the element's stroke in pixels.
   *
   * @default 2
   */
  strokeWidth: z.number(),

  /**
   * The style of the element's stroke.
   *
   * @default "solid"
   */
  strokeStyle: z.enum(["solid", "dashed", "dotted"]),
});

const DistanceUnit = z.enum(["meter", "kilometer", "foot", "mile"]);

const PlaceElementSchema = BaseFeltElementSchema.extend(
  Geographic.shape,
).extend({
  type: z.literal("Place"),
  coordinates: LngLatTupleSchema,

  /**
   * The symbol that is rendered for the Place.
   *
   * This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
   * or one of the symbols available in Felt's symbol library.
   *
   * You can see the available symbols in the Felt UI when editing a Place
   * by hovering a symbol and converting the tooltip to kebab-case. For example,
   * the "Oil barrel" symbol is `oil-barrel`.
   */
  symbol: z.string(),

  /**
   * The frame that is rendered around the Place's symbol. This is
   * only available for non-emoji symbols.
   */
  frame: z.enum(["frame-circle", "frame-square"]).nullable(),

  /**
   * Whether the element's label is hidden on the map. This allows you
   * to add a name to the element and can show in popups, but not have
   * it visible on the map.
   *
   * This will also hide the faint placeholder label that is shown when
   * an editable Place is selected.
   *
   * @default false
   */
  hideLabel: z.boolean(),
});

const PathElementSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Path"),
    coordinates: MultiLineStringGeometrySchema.shape.coordinates,

    /**
     * Whether a distance marker is shown at the midpoint of the path.
     *
     * @default false
     */
    distanceMarker: z.boolean(),

    /**
     * Whether this represents a route, and if so, what mode of transport
     * is used.
     *
     * If this is `null`, the path is not considered to be a route, so while it
     * can have a `distanceMarker`, it will does not have a start or end cap.
     *
     * @default null
     */
    routingMode: z.enum(["driving", "cycling", "walking", "flying"]).nullable(),

    /**
     * Whether or not to show Start and End caps on the path. This is
     * only available if the `routingMode` is set.
     *
     * @default false
     */
    endCaps: z.boolean(),
  });

const PolygonElementSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Polygon"),
    coordinates: PolygonGeometrySchema.shape.coordinates,

    /**
     * The opacity of the polygon's fill, between 0 and 1.
     *
     * @default 0.25
     */
    fillOpacity: z.number().min(0).max(1),

    /**
     * Whether to show an area marker on the polygon.
     *
     * @default false
     */
    areaMarker: z.boolean(),
  });

const CircleElementSchema = BaseFeltElementSchema.extend(Geographic.shape)
  .extend(Strokable.shape)
  .extend({
    type: z.literal("Circle"),

    /**
     * The center of the circle.
     */
    center: LngLatTupleSchema,

    /**
     * The radius of the circle in meters.
     */
    radius: z.number(),

    /**
     * Whether to show a marker on the circle that indicates the radius
     *
     * @default false
     */
    radiusMarker: z.boolean(),

    /**
     * The angle at which the control point for setting the radius is displayed,
     * in degrees. When the `radiusMarker` is `true`, there is a dotted line rendered
     * from the center of the circle to the control point, and the marker is shown
     * at the midpoint of this line.
     *
     * @default 90
     */
    radiusDisplayAngle: z.number(),

    /**
     * The unit of the radius used when the `radiusMarker` is `true`.
     *
     * A value of `null` means that the unit matches the user's locale.
     *
     * @default null
     */
    radiusDisplayUnit: DistanceUnit.nullable(),

    /**
     * The opacity of the circle's fill.
     *
     * @default 0.25
     */
    fillOpacity: z.number().min(0).max(1),
  });

const MarkerElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Marker"),
  coordinates: MultiLineStringGeometrySchema.shape.coordinates,

  /**
   * The opacity of the marker, between 0 and 1.
   *
   * @default 1
   */
  opacity: z.number().min(0).max(1),

  /**
   * The size of the marker, used in conjunction with the `zoom` to determine
   * the actual size of the marker.
   *
   * @default 10
   */
  size: z.number().min(0).max(100),

  /**
   * The zoom level at which the marker was created. This is combined with
   * the `size` to determine the actual size of the marker.
   *
   * When creating a marker, if you don't supply this value it defaults to
   * the current zoom of the map when you call `createElement`.
   */
  zoom: z.number().min(0).max(23),
});

const HighlighterElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Highlighter"),

  /**
   * A multipolygon describing the area that is highlighted.
   *
   * If `renderHoles` is set to false, only the outer ring of each polygon
   * will be rendered, filling in the area inside the highlighted region.
   */
  coordinates: MultiPolygonGeometrySchema.shape.coordinates,

  /**
   * Whether to render the holes of the highlighted area.
   *
   * @default false
   */
  renderHoles: z.boolean(),

  /**
   * The opacity of the highlighter, between 0 and 1.
   *
   * @default 0.5
   */
  opacity: z.number().min(0).max(1),
});

const DerivedCoords = z.object({
  position: LngLatTupleSchema,
  rotation: z.number(),
  scale: z.number(),
  zoom: z.number().min(0).max(23),

  coordinates: PolygonGeometrySchema.shape.coordinates,
});

const Textual = z.object({
  /**
   * The text in the element.
   */
  text: z.string(),

  /**
   * The alignment of the text, either `left`, `center` or `right`.
   *
   * @default "center"
   */
  align: z.enum(["left", "center", "right"]),

  /**
   * The style of the text, either `italic`, `light`, `regular` or `caps`.
   *
   * @default "regular"
   */
  style: z.enum(["italic", "light", "regular", "caps"]),

  /**
   * The text shown in the element, which is identical to the `text` property.
   *
   * @remarks This is added for consistency with other elements that have a `name`
   * property.
   */
  name: z.string(),
});

const TextElementSchema = BaseFeltElementSchema.extend(DerivedCoords.shape)
  .extend(Textual.shape)
  .extend({ type: z.literal("Text") });

const NoteElementSchema = BaseFeltElementSchema.extend(DerivedCoords.shape)
  .extend(Textual.shape)
  .extend({ type: z.literal("Note"), widthScale: z.number().min(0) });

const ImageElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Image"),
  coordinates: MultiLineStringGeometrySchema.shape.coordinates,

  /**
   * The URL of the image that is rendered in this element
   */
  imageUrl: z.string(),

  /**
   * The opacity of the image, between 0 and 1.
   *
   * @default 1
   */
  opacity: z.number().min(0).max(1),
}).omit({ color: true });

const LinkElementSchema = BaseFeltElementSchema.extend({
  type: z.literal("Link"),
  coordinates: MultiLineStringGeometrySchema.shape.coordinates,

  /**
   * The URL of the link that is rendered in this element.
   */
  url: z.string(),
});

const requiredCreateProps = { type: true, coordinates: true } as const;
const omitCreateProps = { id: true } as const;

// NOTE: These derivations below could also be expressed using .required(requiredCreateProps)
// but when you do that, the documentation generation is unable to pass the comments on each
// field through.
export const PlaceCreateSchema = PlaceElementSchema.partial()
  .extend(PlaceElementSchema.pick(requiredCreateProps).shape)
  .omit(omitCreateProps);

export const PathCreateSchema = PathElementSchema.partial()
  .extend(PathElementSchema.pick(requiredCreateProps).shape)
  .omit(omitCreateProps);

export const PolygonCreateSchema = PolygonElementSchema.partial()
  .extend(PolygonElementSchema.pick(requiredCreateProps).shape)
  .omit(omitCreateProps);

export const CircleCreateSchema = CircleElementSchema.partial()
  .extend(
    CircleElementSchema.pick({ type: true, center: true, radius: true }).shape,
  )
  .omit(omitCreateProps);

export const MarkerCreateSchema = MarkerElementSchema.partial()
  .extend(MarkerElementSchema.pick(requiredCreateProps).shape)
  .omit(omitCreateProps);

export const HighlighterCreateSchema = HighlighterElementSchema.partial()
  .extend(HighlighterElementSchema.pick(requiredCreateProps).shape)
  .omit(omitCreateProps);

export const TextCreateSchema = TextElementSchema.partial()
  .omit({ ...omitCreateProps, coordinates: true, name: true, type: true })
  .extend({ type: z.literal("Text"), text: z.string() });

export const NoteCreateSchema = NoteElementSchema.partial()
  .omit({ ...omitCreateProps, coordinates: true, name: true, type: true })
  .extend({ type: z.literal("Note"), text: z.string() });

const ImageCreateSchema = ImageElementSchema.partial()
  .extend(
    ImageElementSchema.pick({ ...requiredCreateProps, imageUrl: true }).shape,
  )
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

const PlaceReadSchema = PlaceElementSchema;
const PathReadSchema = PathElementSchema.omit({ coordinates: true });
const PolygonReadSchema = PolygonElementSchema.omit({
  coordinates: true,
});
const CircleReadSchema = CircleElementSchema;
const MarkerReadSchema = MarkerElementSchema.omit({ coordinates: true });
const HighlighterReadSchema = HighlighterElementSchema.omit({
  coordinates: true,
});
const TextReadSchema = TextElementSchema.omit({ coordinates: true });
const NoteReadSchema = NoteElementSchema.omit({ coordinates: true });
const ImageReadSchema = ImageElementSchema.omit({ coordinates: true });
const LinkReadSchema = LinkElementSchema.omit({ coordinates: true });

const requiredUpdateProps = { type: true, id: true } as const;

const PlaceUpdateSchema = PlaceElementSchema.partial().extend(
  PlaceElementSchema.pick(requiredUpdateProps).shape,
);

const PathUpdateSchema = PathElementSchema.partial().extend(
  PathElementSchema.pick(requiredUpdateProps).shape,
);

const PolygonUpdateSchema = PolygonElementSchema.partial().extend(
  PolygonElementSchema.pick(requiredUpdateProps).shape,
);

const CircleUpdateSchema = CircleElementSchema.partial().extend(
  CircleElementSchema.pick(requiredUpdateProps).shape,
);

const MarkerUpdateSchema = MarkerElementSchema.partial().extend(
  MarkerElementSchema.pick(requiredUpdateProps).shape,
);

const HighlighterUpdateSchema = HighlighterElementSchema.partial().extend(
  HighlighterElementSchema.pick(requiredUpdateProps).shape,
);

const TextUpdateSchema = TextElementSchema.partial()
  .extend(TextElementSchema.pick(requiredUpdateProps).shape)
  .omit({ coordinates: true, name: true });

const NoteUpdateSchema = NoteElementSchema.partial()
  .extend(NoteElementSchema.pick(requiredUpdateProps).shape)
  .omit({ coordinates: true, name: true });

const ImageUpdateSchema = ImageElementSchema.partial().extend(
  ImageElementSchema.pick(requiredUpdateProps).shape,
);

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

export interface PlaceElementCreate extends zInfer<typeof PlaceCreateSchema> {
  coordinates: LngLatTuple;
}

export interface PathElementCreate extends zInfer<typeof PathCreateSchema> {
  coordinates: LngLatTuple[][];
}
export interface PolygonElementCreate
  extends zInfer<typeof PolygonCreateSchema> {
  coordinates: LngLatTuple[][];
}
export interface CircleElementCreate extends zInfer<typeof CircleCreateSchema> {
  center: LngLatTuple;
}
export interface MarkerElementCreate extends zInfer<typeof MarkerCreateSchema> {
  coordinates: LngLatTuple[][];
}
export interface HighlighterElementCreate
  extends zInfer<typeof HighlighterCreateSchema> {
  coordinates: LngLatTuple[][][];
}
export interface TextElementCreate extends zInfer<typeof TextCreateSchema> {
  position: LngLatTuple;
}
export interface NoteElementCreate extends zInfer<typeof NoteCreateSchema> {
  position: LngLatTuple;
}
export interface ImageElementCreate extends zInfer<typeof ImageCreateSchema> {}

export interface PlaceElementRead extends zInfer<typeof PlaceReadSchema> {
  coordinates: LngLatTuple;
}
export interface PathElementRead extends zInfer<typeof PathReadSchema> {}
export interface PolygonElementRead extends zInfer<typeof PolygonReadSchema> {}
export interface CircleElementRead extends zInfer<typeof CircleReadSchema> {
  center: LngLatTuple;
}
export interface MarkerElementRead extends zInfer<typeof MarkerReadSchema> {}
export interface HighlighterElementRead
  extends zInfer<typeof HighlighterReadSchema> {}
export interface TextElementRead extends zInfer<typeof TextReadSchema> {
  position: LngLatTuple;
}
export interface NoteElementRead extends zInfer<typeof NoteReadSchema> {
  position: LngLatTuple;
}
export interface ImageElementRead extends zInfer<typeof ImageReadSchema> {}
export interface LinkElementRead extends zInfer<typeof LinkReadSchema> {}

export interface PlaceElementUpdate extends zInfer<typeof PlaceUpdateSchema> {
  coordinates?: LngLatTuple;
}
export interface PathElementUpdate extends zInfer<typeof PathUpdateSchema> {
  coordinates?: LngLatTuple[][];
}
export interface PolygonElementUpdate
  extends zInfer<typeof PolygonUpdateSchema> {
  coordinates?: LngLatTuple[][];
}
export interface CircleElementUpdate extends zInfer<typeof CircleUpdateSchema> {
  center?: LngLatTuple;
}
export interface MarkerElementUpdate extends zInfer<typeof MarkerUpdateSchema> {
  coordinates?: LngLatTuple[][];
}
export interface HighlighterElementUpdate
  extends zInfer<typeof HighlighterUpdateSchema> {
  coordinates?: LngLatTuple[][][];
}
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
   * You can use these ids to get the full element objects via the {@link ElementsController.getElements | `getElements`} method.
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
 * The parameters for the {@link ElementsController.onElementChange | `onElementChange`} and the {@link ElementsController.onElementCreate | `onElementCreate`} listeners.
 *
 * @group Elements
 */
export interface ElementChangeCallbackParams {
  /**
   * The new data for the element or null if the element was removed.
   */
  element: Element | null;

  /**
   * Whether or not this element is still being created by a drawing tool.
   *
   * For example, if the user begins drawing a polygon, they need to place
   * multiple points until they've ultimately completed the polygon. All
   * the time they are still placing points, this will be true.
   *
   * For elements that require text entry (such as Places, Text and Notes)
   * this will be true all the time the user is typing text until the point
   * at which the user finishes, by pressing Escape for example.
   *
   * If the user is editing an existing element, this will be false.
   *
   * For elements that are created programatically, this will be false.
   */
  isBeingCreated: boolean;
}

/**
 * The parameters for the {@link ElementsController.onElementGroupChange | `onElementGroupChange`} listener.
 *
 * @group Element Groups
 */
export interface ElementGroupChangeCallbackParams {
  elementGroup: ElementGroup | null;
}
