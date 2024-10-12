import * as z from "zod";

/**
 * @category Elements
 * @group Entities
 */
export interface Element extends z.infer<typeof ElementSchema> {}
const ElementSchema = z.object({
  /**
   * The string identifying the element
   */
  id: z.string(),

  /**
   * The type of element, such as a Place, Polygon, Line, Route, etc.
   */
  type: z.string(),

  /**
   * The ID of the element group that the element belongs to, or null
   * if the element is not inside an element group.
   */
  groupId: z.string().nullable(),

  /**
   * The name of the element can be displayed in the Legend, depending
   * on how the element's legend is configured in its style.
   */
  name: z.string().nullable(),

  /**
   * The element description forms part of the element's metadata. This is visible
   * to users via the element info button in the legend.
   */
  description: z.string().nullable(),
});

/**
 * @category Elements
 * @group Entities
 */
export interface ElementGroup extends z.infer<typeof ElementGroupSchema> {}
const ElementGroupSchema = z.object({
  /**
   * A string identifying the element group.
   */
  id: z.string(),

  /**
   * The name of the element group. This is shown in the legend.
   */
  name: z.string(),

  /**
   * The caption of the element group. This is shown in the legend.
   */
  caption: z.string().nullable(),

  /**
   * The ids of the elements in the element group.
   *
   * @remarks
   * You can use these ids to get the full element objects via the `getElements` method.
   */
  elementIds: z.array(z.string()),

  /**
   * Whether the element group is visible or not.
   */
  visible: z.boolean(),

  /**
   * Whether the element group is shown in the legend or not.
   */
  shownInLegend: z.boolean(),
});

/**
 * The response from the `getElement` method. If the element doesn't exist, the
 * response will be `null`.
 *
 * @category Elements
 */
export interface GetElementResponse
  extends z.infer<typeof GetElementResponseSchema> {}
const GetElementResponseSchema = ElementSchema;

/**
 * The response from the `getElementGroup` method. If the element doesn't exist, the
 * response will be `null`.
 *
 * @category Elements
 */
export interface GetElementGroupResponse
  extends z.infer<typeof GetElementGroupResponseSchema> {}
const GetElementGroupResponseSchema = ElementGroupSchema;

/**
 * The filter to apply to the elements. If this is not passed, all elements will be returned.
 *
 * @category Elements
 */
export interface GetElementsFilter
  extends z.infer<typeof GetElementsFilterSchema> {}
export const GetElementsFilterSchema = z.object({
  /**
   * The ids of the elements to get.
   */
  ids: z.array(z.string()).optional(),
});

/**
 * The response from the `getElements` method.
 *
 * @remarks
 * The elements in the map, ordered by the order specified in Felt. This is not
 * necessarily the order that they are drawn in, as Felt draws points above
 * lines and lines above polygons, for instance.
 *
 * See {@link Element} for the structure of the element object.
 *
 * @category Elements
 */
export type GetElementsResponse = z.infer<typeof GetElementsResponseSchema>;
const GetElementsResponseSchema = z.array(ElementSchema.nullable());

/**
 * The filter to apply to the element groups. If this is not passed, all element groups will be returned.
 *
 * @category Elements
 */
export interface GetElementGroupsFilter
  extends z.infer<typeof GetElementGroupsFilterSchema> {}
export const GetElementGroupsFilterSchema = z.object({
  /**
   * The ids of the element groups to get.
   */
  ids: z.array(z.string()).optional(),
});

/**
 * The response from the `getElementGroups` method.
 *
 * @category Elements
 */
export type GetElementGroupsResponse = z.infer<
  typeof GetElementGroupsResponseSchema
>;
const GetElementGroupsResponseSchema = z.array(ElementGroupSchema.nullable());

/**
 * The parameters for the `onElementChange` listener.
 *
 * @category Elements
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
 * @category Elements
 */
export interface ElementGroupChangeCallbackParams {
  elementGroup: ElementGroup | null;
}
