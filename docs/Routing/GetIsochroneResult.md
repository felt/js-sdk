***

The response from the [RoutingController.getIsochrone](RoutingController.md#getisochrone) method.

# Properties

## geometry

> **geometry**: [`MultiPolygonGeometry`](../Shared/MultiPolygonGeometry.md)

The area reachable from the origin within the travel time.

### Remarks

Always a MultiPolygon, so a reachable area that is split into disconnected
parts keeps every part.
