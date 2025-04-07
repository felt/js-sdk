***

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getAggregates](LayersController.md#getaggregates) method.

# Type Parameters

| Type Parameter                                                         |
| ---------------------------------------------------------------------- |
| `T` *extends* [`AggregationMethod`](AggregationMethod.md) \| `"count"` |

# Properties

## layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

***

## aggregation

> **aggregation**: [`MultiAggregationConfig`](MultiAggregationConfig.md)\<`T`>

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Attribute filters for the features to include when calculating the aggregate value.

***

## boundary?

> `optional` **boundary**: [`GeometryFilter`](GeometryFilter.md)

The spatial boundary for the features to include when calculating the aggregate value.
