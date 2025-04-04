***

These are generic types that are used across multiple modules.

# Other

# LatLng

Represents a point in world coordinates.

## Properties

### latitude

> **latitude**: `number`

### longitude

> **longitude**: `number`

***

# GeoJsonFeature

A GeoJSON feature object, compliant with:
https://datatracker.ietf.org/doc/html/rfc7946#section-3.2

## Properties

### type

> **type**: `"Feature"`

### bbox?

> `optional` **bbox**: \[`number`, `number`, `number`, `number`\]

The bounding box of the feature in [west, south, east, north] order.

### geometry

> **geometry**: [`GeoJsonGeometry`](#geojsongeometry)

The feature's geometry

### id?

> `optional` **id**: `string` \| `number`

A value that uniquely identifies this feature in a
https://tools.ietf.org/html/rfc7946#section-3.2.

### properties

> **properties**: [`GeoJsonProperties`](#geojsonproperties)

Properties associated with this feature.

***

# PointGeometry

## Properties

### type

> **type**: `"Point"`

### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)

***

# MultiPointGeometry

A GeoJSON multi-point geometry.

## Remarks

You shouldn't expect this to come from Felt - it is here for completeness
of the GeoJSON spec.

## Properties

### type

> **type**: `"MultiPoint"`

### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[]

***

# PolygonGeometry

## Properties

### type

> **type**: `"Polygon"`

### coordinates

> **coordinates**: \[`number`, `number`\][][]

***

# MultiPolygonGeometry

A GeoJSON multi-polygon geometry.

## Properties

### type

> **type**: `"MultiPolygon"`

### coordinates

> **coordinates**: \[`number`, `number`\][][][]

***

# LineStringGeometry

A GeoJSON line string geometry.

## Properties

### type

> **type**: `"LineString"`

### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[]

***

# MultiLineStringGeometry

A GeoJSON multi-line string geometry.

## Properties

### type

> **type**: `"MultiLineString"`

### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[][]

***

# SortConfig

Configuration for sorting data by a specific attribute

## Properties

### direction

> **direction**: `"asc"` \| `"desc"`

The direction to sort in

### attribute

> **attribute**: `string`

The attribute to sort by. What this represents depends on the context.
For instance, when sorting features in a data table, the attribute is
the column to sort by.

***

# LngLatTuple

> **LngLatTuple** = \[`number`, `number`\]

A tuple representing a longitude and latitude coordinate.

This is used hen serializing geometry because that's the standard used in
GeoJSON.

***

# GeoJsonProperties

> **GeoJsonProperties** = `Record`\<`string`, `unknown`\>

A GeoJSON properties object.

***

# GeoJsonGeometry

> **GeoJsonGeometry** = [`PointGeometry`](#pointgeometry) \| [`PolygonGeometry`](#polygongeometry) \| [`LineStringGeometry`](#linestringgeometry) \| [`MultiLineStringGeometry`](#multilinestringgeometry) \| [`MultiPolygonGeometry`](#multipolygongeometry) \| [`MultiPointGeometry`](#multipointgeometry)

A GeoJSON geometry of any type

***

# FeltZoom

> **FeltZoom** = `z.infer`\<*typeof* `FeltZoomSchema`\>

The zoom level of the map.

It is a floating-point number between 1 and 23, where 1 is the most
zoomed out and 23 is the most zoomed in.

***

# FeltBoundary

> **FeltBoundary** = `z.infer`\<*typeof* `FeltBoundarySchema`\>

The edges of the map in the form of a bounding box.

The boundary is a tuple of the form `[west, south, east, north]`.

***

# SortDirection

> **SortDirection** = `z.infer`\<*typeof* `SortDirectionSchema`\>

Specifies the direction to sort data in

# Visibility

# SetVisibilityRequest

The parameters for the methods that change the visibility of entities.

## Properties

### show?

> `optional` **show**: `string`[]

The ids of the entities you want to change the visibility of.

### hide?

> `optional` **hide**: `string`[]
