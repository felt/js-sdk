import type { FeltController } from "~/client";
import type { SelectionController } from "~/modules/selection";
import type {
  GeoJsonFeature,
  GeoJsonGeometry,
  GeoJsonProperties,
} from "~/modules/shared";

/**
 * A LayerFeature is a single geographical item in a layer.
 *
 * It is intended to be a lightweight object that contains the properties of a
 * feature, but not the geometry. It is returned by methods like
 * {@link FeltController.getRenderedFeatures} and {@link FeltController.getFeature},
 * and as part of the methods in the {@link SelectionController}
 *
 * The geometry can be obtained via the {@link FeltController.getGeoJsonFeature}
 * method, which returns a {@link GeoJsonFeature} object.
 */
export interface LayerFeature {
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
  geometryType: GeoJsonGeometry["type"] | (string & {});

  /**
   * The properties of the feature, as a bag of attributes.
   */
  properties: GeoJsonProperties;
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
