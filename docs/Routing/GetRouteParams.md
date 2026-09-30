***

The parameters for planning a route, passed to the
[RoutingController.getRoute](RoutingController.md#getroute) method.

# Properties

## waypoints

> **waypoints**: [`LatLng`](../Shared/LatLng.md)\[]

The places the route passes through, in order, from start to end.

### Remarks

Between 2 and 50 waypoints.

***

## routingMode

> **routingMode**: `"driving"` | `"cycling"` | `"walking"`

The mode of transport the route is planned for, which decides which roads
and paths it can use.

### Remarks

`"flying"` is not accepted; the routing service only follows the road and
path network.
