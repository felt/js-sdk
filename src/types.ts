/**
 * Options for embedding a Felt map, letting you enable and disable certain features.
 *
 * @public
 */
export interface FeltEmbedOptions {
  /**
   * @internal
   */
  origin?: string;

  /**
   * Enables the legend in the embedded map.
   *
   * @defaultValue true
   */
  showLegend?: boolean;

  /**
   * Allows embedded maps to not interrupt the scrolling flow of the parent page
   *
   * On desktop devices, this prevents using the mouse wheel or trackpad to zoom
   * in and out without holding either the Command (macOS) or Control (Windows/Linus)
   * key.
   *
   * On mobile devices, this requires two fingers to pan the map.
   *
   * If your embedded map is part of a longer, scrollable page, you should set this
   * to `true`.
   *
   * If your embedded map is fullscreen, you should set this to `false`.
   *
   * @defaultValue true
   */
  cooperativeGestures?: boolean;

  /**
   * Enables full screen button in the embedded map, which will open the map in a
   * new tab when clicked.
   *
   * @defaultValue true
   */
  fullScreenButton?: boolean;

  /**
   * Enables the geolocation feature in the embedded map. This adds a button to the UI
   * that allows the user's location to be tracked and displayed on the map.
   *
   * @defaultValue false
   */
  geolocation?: boolean;

  /**
   * Enables the zoom controls in the embedded map. This only affects the visibility of
   * the buttons, not whether the map can be zoomed or not.
   *
   * @defaultValue true
   */
  zoomControls?: boolean;

  /**
   * Enables the scale bar in the embedded map.
   *
   * @defaultValue true
   */
  scaleBar?: boolean;

  /**
   * Sets the initial viewport of the map. When this is left blank, the map will use
   * the default viewport for the map. The default viewport is either set by the map
   * author or calculated based on the map's contents.
   *
   * {@link ZoomCenterViewport}
   */
  initialViewport?: ZoomCenterViewport;
}

/**
 * A viewport with a zoom level and a center point that defines
 *
 * @public
 */
export interface ZoomCenterViewport {
  /**
   * The zoom number of the viewport, which is a number between 1 and 23.
   */
  zoom: number;

  /**
   * The point to place in the center of the viewport.
   */
  center: GeoPoint;
}

/**
 * Describes the viewport of a map as returned by the API. This includes the
 * center and zoom, but also the bounds which are derived, and depend on the
 * size of the viewport.
 *
 * @public
 */
export interface ReadViewport extends ZoomCenterViewport {
  bounds: [west: number, south: number, east: number, north: number];
}

/**
 * Describes a position in world coordinates.
 * @public
 */
export interface GeoPoint {
  latitude: number;
  longitude: number;
}
