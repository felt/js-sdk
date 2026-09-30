***

The response from the [RoutingController.getRoute](RoutingController.md#getroute) method.

# Properties

## geometry

> **geometry**: [`LineStringGeometry`](../Shared/LineStringGeometry.md)

The route's line, following the road and path network through every
waypoint.

### Remarks

GeoJSON, so it can be passed straight to methods that take a line, such as
[getRasterProfile](../Layers/LayersController.md#getrasterprofile).

***

## distance

> **distance**: `number`

The length of the route along the roads and paths it follows, in metres.

***

## duration

> **duration**: `number`

The travel time along the route, in seconds.
