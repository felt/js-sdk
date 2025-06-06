***

> **GeometryFilter** = [`FeltBoundary`](../Shared/FeltBoundary.md) | [`PolygonGeometry`](../Shared/PolygonGeometry.md) | [`MultiPolygonGeometry`](../Shared/MultiPolygonGeometry.md) | [`LngLatTuple`](../Shared/LngLatTuple.md)\[]

The common type for filtering data by a spatial boundary.

This can be either:

* `FeltBoundary`: a \[w, s, e, n] bounding box
* `PolygonGeometry`: a GeoJSON Polygon geometry
* `MultiPolygonGeometry`: a GeoJSON MultiPolygon geometry
* `LngLatTuple[]`: a list of coordinates describing a single ring of a polygon
