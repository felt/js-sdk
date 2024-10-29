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

/**
 * A raster pixel value for a specific layer.
 *
 * @interface
 */
export type RasterValue = {
  /**
   * The value of the pixel.
   */
  value: number;

  /**
   * The ID of the layer that the pixel belongs to.
   */
  layerId: string;

  /**
   * The name of the category that the pixel belongs to.
   */
  categoryName: null | string;

  /**
   * The color of the pixel. Each value is between 0 and 255.
   */
  color: null | {
    r: number;
    g: number;
    b: number;
    a: number;
  };
};
