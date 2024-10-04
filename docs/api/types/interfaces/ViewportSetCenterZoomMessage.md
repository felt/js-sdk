[**@feltjs/js-sdk**](../../README.md) • **Docs**

***

# Interface: ViewportSetCenterZoomMessage

## Extends

- `TypeOf`\<*typeof* `ViewportSetCenterZoomMessage`\>

## Properties

### type

> **type**: `"center"`

#### Inherited from

`z.infer.type`

***

### location

> **location**: `object`

#### center?

> `optional` **center**: `object` = `LatLng`

The center of the viewport in latitude and longitude.

#### center.latitude

> **latitude**: `number` = `Latitude`

#### center.longitude

> **longitude**: `number` = `Longitude`

#### zoom?

> `optional` **zoom**: `number` = `FeltZoom`

The zoom level of the viewport.

#### Inherited from

`z.infer.location`