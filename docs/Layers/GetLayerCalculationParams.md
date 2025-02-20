***

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getAggregates](LayersController.md#getaggregates) method.

## Type Parameters

| Type Parameter                                                         |
| ---------------------------------------------------------------------- |
| `T` *extends* [`AggregationMethod`](AggregationMethod.md) \| `"count"` |

## Properties

### layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

***

### filters?

> `optional` **filters**: [`Filters`](Filters.md)

Attribute filters to determine what gets counted or aggregated.

***

### boundary?

> `optional` **boundary**: \[`number`, `number`, `number`, `number`] | [`PolygonGeometry`](../Shared/PolygonGeometry.md) | [`LngLatTuple`](../Shared/LngLatTuple.md)\[]

A spatial boundary to filter what gets counted or aggregated. This can be either
a \[w, s, e, n] bounding box, a GeoJSON Polygon geometry, or a list of coordinates
that form a polyline.

***

### aggregation

> **aggregation**: [`MultiAggregationConfig`](MultiAggregationConfig.md)\<`T`>

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.
