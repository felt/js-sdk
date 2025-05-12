***

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getPrecomputedAggregates](LayersController.md#getprecomputedaggregates) method.

# Properties

## layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

***

## gridConfig

> **gridConfig**: \{ `type`: `"h3"`; `resolution`: `number`; `method`: `"avg"` | `"max"` | `"min"` | `"sum"` | `"count"`; `attribute`: `string`; }

The grid configuration to use for the precomputed calculation.

| Name         | Type                                                  | Default value                    | Description                                                                                                                                            |
| ------------ | ----------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`       | `"h3"`                                                | GridTypeSchema                   | The type of grid to use for the precomputed calculation.                                                                                               |
| `resolution` | `number`                                              | -                                | The resolution of the grid to use for the precomputed calculation.                                                                                     |
| `method`     | `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"count"` | PrecomputedAggregateMethodSchema | The method to use for the precomputed calculation.                                                                                                     |
| `attribute`? | `string`                                              | -                                | The attribute to use for the precomputed calculation. This can be omitted if the aggregation method is "count". Must be a numeric attribute otherwise. |

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Attribute filters for the features to include when calculating the aggregate value.

***

## boundary?

> `optional` **boundary**: [`GeometryFilter`](GeometryFilter.md)

The spatial boundary for the features to include when calculating the aggregate value.
