/**
 * A feature is a single geographical item in a layer.
 * The unique ID for a feature is a compound key made up of the layer ID and the feature ID.
 */
export interface Feature {
  /**
   * The identifier of the feature, unique within the layer.
   */
  id: string | number;

  /**
   * The identifier of the layer that the feature belongs to.
   */
  layerId: string;

  /**
   * The type of geometry of the feature.
   */
  geometryType:
    | "Point"
    | "LineString"
    | "Polygon"
    | "MultiPolygon"
    | (string & {});

  /**
   * The properties of the feature, as a bag of attributes.
   */
  properties: Record<string, unknown>;
}
