/**
 * @group Callbacks
 */
export interface SelectionChangeParams {
  handler: (change: SelectionChange) => void;
}

/**
 * The payload to the `onSelectionChange` handler.
 *
 * @group Callbacks
 */
export interface SelectionChange {
  /**
   * The new selection. In the case where there are multiple entities selected,
   * the array describes the chronological and semeantic order of the selection.
   *
   * Entities of the same type that are selected later will appear later in the
   * list, but there are cases where multiple entity types can be selected at once,
   * such as elements and features. In this case, the order of the _types_ of entities
   * tells you which are considered more semantically important.
   *
   * For example, if a feature and element are selected, the feature will be at the
   * tail of the list because pressing Escape will deselect the feature first, then
   * pressing Escape again will deselect the element.
   */
  selection: Array<EntityIdentifier>;
}

/**
 * Identifies an element on the map.
 *
 * @interface
 * @group Identifiers
 */
export type ElementIdentifier = {
  type: "element";
  id: string;
};

/**
 * Identifies an element group.
 *
 * @interface
 * @group Identifiers
 */
export type ElementGroupIdentifier = {
  type: "elementGroup";
  id: string;
};

/**
 * Identifies a layer on the map.
 *
 * @interface
 * @group Identifiers
 */
export type LayerIdentifier = {
  type: "layer";
  id: string;
};

/**
 * Identifies a layer group on the map.
 *
 * @interface
 * @group Identifiers
 */
export type LayerGroupIdentifier = {
  type: "layerGroup";
  id: string;
};

/**
 * Identifies a feature on the map, and the layer it belongs to.
 *
 * @interface
 * @group Identifiers
 */
export type FeatureIdentifier = {
  type: "feature";
  layerId: string;
  id: string | number;
};

/**
 * An identifier for an entity on the map.
 *
 * @group Identifiers
 */
export type EntityIdentifier =
  | ElementIdentifier
  | ElementGroupIdentifier
  | LayerIdentifier
  | LayerGroupIdentifier
  | FeatureIdentifier;
