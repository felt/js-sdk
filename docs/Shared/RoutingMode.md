***

> **RoutingMode**: `"driving"` | `"cycling"` | `"walking"` | `"flying"`

The mode of transport a route is planned for.

# Remarks

* `"driving"`, `"cycling"` and `"walking"` follow the road and path network.
* `"flying"` is a straight line between points, and is only available on
  route elements and the route tool; Felt's routing service cannot route by
  air, so [getRoute](../Routing/RoutingController.md#getroute) and
  [getIsochrone](../Routing/RoutingController.md#getisochrone) do not accept it.
