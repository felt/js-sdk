***

All the different sources for boundaries for a layer, including their combined result.

# Properties

## spatialFilters

> **spatialFilters**: `null` | [`MultiPolygonGeometry`](../Shared/MultiPolygonGeometry.md)

Boundaries set by drawing spatial filters on the map.

When there are multiple spatial filters, they are combined into a multi-polygon.

***

## ephemeral

> **ephemeral**: `null` | [`GeometryFilter`](GeometryFilter.md)

Boundaries that are set ephemerally by viewers in their own session.

These are the filters that are set when the [LayersController.setLayerBoundary](LayersController.md#setlayerboundary)
method is called. There is no way to set these in the Felt UI - they can only be
set using the SDK.

***

## combined

> **combined**: `null` | [`MultiPolygonGeometry`](../Shared/MultiPolygonGeometry.md)

The combined result of all the boundaries set on the layer.

Each different source of boundary is intersected to produce the combined result.
