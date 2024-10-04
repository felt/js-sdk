[**@feltjs/js-sdk**](../../README.md) • **Docs**

***

# Type Alias: ViewportSetCenterZoomMessage

> **ViewportSetCenterZoomMessage**: `object`

## Type declaration

### type

> **type**: `"center"`

### location

> **location**: `object`

### location.center?

> `optional` **center**: `object` = `LatLng`

The center of the viewport in latitude and longitude.

### location.center.latitude

> **latitude**: `number` = `Latitude`

### location.center.longitude

> **longitude**: `number` = `Longitude`

### location.zoom?

> `optional` **zoom**: `number` = `FeltZoom`

The zoom level of the viewport.
