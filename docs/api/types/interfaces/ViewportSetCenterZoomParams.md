The parameters for the `viewport.goto` method.

[ViewportController.goto](ViewportController.md#goto)

## Extends

- `TypeOf`\<*typeof* `ViewportSetCenterZoomParamsSchema`\>

## Properties

### type

> **type**: `"center"`

#### Inherited from

`z.infer.type`

***

### location

> **location**: `object`

#### center?

> `optional` **center**: `object` = `LatLngSchema`

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
