***

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getPrecomputedAggregates](LayersController.md#getprecomputedaggregates) method.

# Properties

## layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

***

## gridConfig

> **gridConfig**: [`GridConfig`](GridConfig.md)

The grid configuration to use for the precomputed calculation.

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Attribute filters for the features to include when calculating the aggregate value.

***

## boundary?

> `optional` **boundary**: [`GeometryFilter`](GeometryFilter.md)

The spatial boundary for the features to include when calculating the aggregate value.
