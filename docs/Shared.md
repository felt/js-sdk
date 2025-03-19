***

These are generic types that are used across multiple modules.

# Other

## LatLng

Represents a point in world coordinates.

### Properties

#### latitude

> **latitude**: `number`

#### longitude

> **longitude**: `number`

***

## PointGeometry

### Properties

#### type

> **type**: `"Point"`

#### coordinates

> **coordinates**: \[`number`, `number`\] = `LngLatTupleSchema`

***

## PolygonGeometry

### Properties

#### type

> **type**: `"Polygon"`

#### coordinates

> **coordinates**: \[`number`, `number`\][][]

***

## MultiPolygonGeometry

A GeoJSON multi-polygon geometry.

### Properties

#### type

> **type**: `"MultiPolygon"`

#### coordinates

> **coordinates**: \[`number`, `number`\][][][]

***

## LineStringGeometry

A GeoJSON line string geometry.

### Properties

#### type

> **type**: `"LineString"`

#### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[]

***

## MultiLineStringGeometry

A GeoJSON multi-line string geometry.

### Properties

#### type

> **type**: `"MultiLineString"`

#### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[][]

***

## LngLatTuple

> **LngLatTuple** = \[`number`, `number`\]

A tuple representing a longitude and latitude coordinate.

This is used hen serializing geometry because that's the standard used in
GeoJSON.

***

## Geometry

> **Geometry** = [`PointGeometry`](#pointgeometry) \| [`PolygonGeometry`](#polygongeometry) \| [`LineStringGeometry`](#linestringgeometry) \| [`MultiLineStringGeometry`](#multilinestringgeometry) \| [`MultiPolygonGeometry`](#multipolygongeometry)

A GeoJSON geometry of any type

***

## FeltZoom

> **FeltZoom** = `z.infer`\<*typeof* `FeltZoomSchema`\>

The zoom level of the map.

It is a floating-point number between 1 and 23, where 1 is the most
zoomed out and 23 is the most zoomed in.

***

## FeltBoundary

> **FeltBoundary** = `z.infer`\<*typeof* `FeltBoundarySchema`\>

The edges of the map in the form of a bounding box.

The boundary is a tuple of the form `[west, south, east, north]`.

# Visibility

## SetVisibilityRequest

The parameters for the methods that change the visibility of entities.

### Properties

#### show?

> `optional` **show**: `string`[]

The ids of the entities you want to change the visibility of.

#### hide?

> `optional` **hide**: `string`[]
