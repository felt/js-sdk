***

The Routing controller asks Felt's routing service for routes and
isochrones, returning their geometry without drawing anything on the map.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## getRoute()

> **getRoute**(`params`: [`GetRouteParams`](GetRouteParams.md)): `Promise`\<[`GetRouteResult`](GetRouteResult.md)>

Plans a route through a list of waypoints and returns its line, length and
travel time.

### Parameters

| Parameter | Type                                  |
| --------- | ------------------------------------- |
| `params`  | [`GetRouteParams`](GetRouteParams.md) |

### Returns

`Promise`\<[`GetRouteResult`](GetRouteResult.md)>

A promise for the route's geometry, distance in metres and
duration in seconds.

### Remarks

* The route follows the road and path network for the given `routingMode`;
  it does not route by air.
* Nothing is drawn on the map. To show the route, create a Path element
  from `geometry.coordinates` with [createElement](../Elements/ElementsController.md#createelement).
* The promise rejects with the routing service's message when no route can
  be found between the waypoints, or when routing is unavailable.

### Example

```typescript
const route = await felt.getRoute({
  waypoints: [
    { latitude: 37.8, longitude: -122.27 },
    { latitude: 37.81, longitude: -122.26 },
  ],
  routingMode: "driving",
});

console.log(`${route.distance} m, ${route.duration} s`);

await felt.createElement({
  type: "Path",
  coordinates: [route.geometry.coordinates],
  routingMode: "driving",
});
```

***

## getIsochrone()

> **getIsochrone**(`params`: [`GetIsochroneParams`](GetIsochroneParams.md)): `Promise`\<[`GetIsochroneResult`](GetIsochroneResult.md)>

Finds the area reachable from a point within a travel time.

### Parameters

| Parameter | Type                                          |
| --------- | --------------------------------------------- |
| `params`  | [`GetIsochroneParams`](GetIsochroneParams.md) |

### Returns

`Promise`\<[`GetIsochroneResult`](GetIsochroneResult.md)>

A promise for the reachable area as a MultiPolygon.

### Remarks

* The reachable area is measured along the road and path network for the
  given `routingMode`; it does not route by air.
* Nothing is drawn on the map. To show the area, create a Polygon element
  from `geometry.coordinates` with [createElement](../Elements/ElementsController.md#createelement).
* Isochrones are only available on workspace plans that include them; the
  promise rejects with the routing service's message when the map's
  workspace is not entitled, when no reachable area can be found, or when
  routing is unavailable.

### Example

```typescript
const isochrone = await felt.getIsochrone({
  origin: { latitude: 37.8, longitude: -122.27 },
  routingMode: "walking",
  minutes: 15,
});

await felt.createElement({
  type: "Polygon",
  coordinates: isochrone.geometry.coordinates,
});
```
