***

The parameters for finding the area reachable from a point, passed to the
[RoutingController.getIsochrone](RoutingController.md#getisochrone) method.

# Properties

## origin

> **origin**: [`LatLng`](../Shared/LatLng.md)

The place to measure travel time from.

***

## routingMode

> **routingMode**: `"driving"` | `"cycling"` | `"walking"`

The mode of transport to measure travel time for.

### Remarks

`"flying"` is not accepted; the routing service only follows the road and
path network.

***

## minutes

> **minutes**: `number`

The travel time, in minutes, that bounds the reachable area.

### Remarks

Greater than 0 and at most 120.
