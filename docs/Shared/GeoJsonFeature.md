***

A GeoJSON feature object, compliant with:
[https://datatracker.ietf.org/doc/html/rfc7946#section-3.2](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2)

# Properties

## type

> **type**: `"Feature"`

***

## geometry

> **geometry**: [`GeoJsonGeometry`](GeoJsonGeometry.md)

The feature's geometry

***

## properties

> **properties**: [`GeoJsonProperties`](GeoJsonProperties.md)

Properties associated with this feature.

***

## bbox?

> `optional` **bbox**: \[`number`, `number`, `number`, `number`]

The bounding box of the feature in \[west, south, east, north] order.

***

## id?

> `optional` **id**: `string` | `number`

A value that uniquely identifies this feature in a
[https://tools.ietf.org/html/rfc7946#section-3.2](https://tools.ietf.org/html/rfc7946#section-3.2).
