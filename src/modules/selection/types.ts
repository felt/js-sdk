import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import type { Element, ElementGroup } from "../elements/types";
import type { LayerFeature } from "../layers/features/types";
import type { Layer, LayerGroup } from "../layers/types";

/**
 * A reference to any kind of entity in the map.
 *
 * @remarks
 * EntityNodes are used when you have some collection of entities and you need to
 *
 * @group Entity Node
 */
export type EntityNode =
  | ElementNode
  | ElementGroupNode
  | LayerNode
  | LayerGroupNode
  | FeatureNode;

/**
 * References an element on the map.
 *
 * @interface
 * @group Entity Nodes
 */
export type ElementNode = {
  type: "element";
  entity: Element;
};

/**
 * References an element group.
 *
 * @interface
 * @group Entity Nodes
 */
export type ElementGroupNode = {
  type: "elementGroup";
  entity: ElementGroup;
};

/**
 * References a layer on the map.
 *
 * @interface
 * @group Entity Nodes
 */
export type LayerNode = {
  type: "layer";
  entity: Layer;
};

/**
 * References a layer group on the map.
 *
 * @interface
 * @group Entity Nodes
 */
export type LayerGroupNode = {
  type: "layerGroup";
  entity: LayerGroup;
};

/**
 * References a feature on the map.
 *
 * @interface
 * @group Entity Nodes
 */
export type FeatureNode = {
  type: "feature";
  entity: LayerFeature;
};

/**
 * The options for selecting a feature in a layer.
 */
export interface FeatureSelection
  extends zInfer<typeof FeatureSelectionSchema> {}
/**
 * @ignore
 */
export const FeatureSelectionSchema = z.object({
  /**
   * The id of the feature to select.
   */
  id: z.string().or(z.number()),

  /**
   * The id of the layer that the feature belongs to.
   */
  layerId: z.string(),

  /**
   * Whether to show the feature's popup, if it is configured in the layer's style.
   *
   * @default true
   */
  showPopup: z.boolean().optional(),

  /**
   * Whether to center the view on the feature after selecting it.
   *
   * When true, the viewport will be centered on the feature and zoomed to fit the feature
   * in the viewport. If you need to control the zoom level to prevent it zooming in too
   * far, you can pass an object with a `maxZoom` property.
   *
   * This is useful for avoiding zooming in too far on point features, or if you want
   * to maintain the current zoom level.
   *
   * @default true
   */
  fitViewport: z
    .boolean()
    .or(z.object({ maxZoom: z.number() }))
    .optional(),
});
