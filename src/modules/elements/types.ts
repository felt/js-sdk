import { z } from "zod";
import type { zInfer } from "~/lib/utils";

/**
 * @group Elements
 */
export interface Element {
  /**
   * The string identifying the element
   */
  id: string;

  /**
   * The type of element, such as a Place, Polygon, Line, Route, etc.
   */
  type: string;

  /**
   * The ID of the element group that the element belongs to, or null
   * if the element is not inside an element group.
   */
  groupId: string | null;

  /**
   * The name of the element can be displayed in the Legend, depending
   * on how the element's legend is configured in its style.
   */
  name: string | null;

  /**
   * The element description forms part of the element's metadata. This is visible
   * to users via the element info button in the legend.
   */
  description: string | null;

  /**
   * The attributes of the element, which can be added via the Element Inspector
   * under the Detail tab.
   */
  attributes: Record<string, unknown>;
}

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
