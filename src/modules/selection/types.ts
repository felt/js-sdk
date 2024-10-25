import type { Element, ElementGroup } from "../elements/types";
import type { Feature } from "../layers/features/types";
import type { Layer, LayerGroup } from "../layers/types";

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
  entity: Feature;
};

/**
 * A reference to any kind of entity in the map.
 *
 * @group Entity Nodes
 */
export type EntityNode =
  | ElementNode
  | ElementGroupNode
  | LayerNode
  | LayerGroupNode
  | FeatureNode;
