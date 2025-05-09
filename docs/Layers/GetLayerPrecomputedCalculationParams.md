***

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getPrecomputedAggregates](LayersController.md#getprecomputedaggregates) method.

# Type Parameters

| Type Parameter                                                                  |
| ------------------------------------------------------------------------------- |
| `T` *extends* [`PrecomputedAggregationMethod`](PrecomputedAggregationMethod.md) |

# Properties

## layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

***

## gridConfig

> **gridConfig**: \{ `type`: `"h3"`; `resolution`: `number`; `method`: `"avg"` | `"max"` | `"min"` | `"sum"` | `"count"`; `attribute`: `string`; }

The grid configuration to use for the precomputed calculation.

| Name         | Type                                                  | Default value                    |
| ------------ | ----------------------------------------------------- | -------------------------------- |
| `type`       | `"h3"`                                                | -                                |
| `resolution` | `number`                                              | -                                |
| `method`     | `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"count"` | PrecomputedAggregateMethodSchema |
| `attribute`? | `string`                                              | -                                |

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Attribute filters for the features to include when calculating the aggregate value.

***

## boundary?

> `optional` **boundary**: [`GeometryFilter`](GeometryFilter.md)

The spatial boundary for the features to include when calculating the aggregate value.
