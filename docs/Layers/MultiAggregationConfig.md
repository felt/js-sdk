***

Defines how to aggregate a value across features in a layer with multiple aggregations
returned at once.

# Type Parameters

| Type Parameter                                                         |
| ---------------------------------------------------------------------- |
| `T` *extends* [`AggregationMethod`](AggregationMethod.md) \| `"count"` |

# Properties

## methods

> **methods**: `T`\[]

The operations to use on the values from the features in the layer

***

## attribute?

> `optional` **attribute**: `string`

The attribute ID to use for the aggregation when aggregations other than "count" are used.

This can be omitted if the only aggregation is "count", but must be a numeric attribute
otherwise.

Use `getLayerSchema` to get the attributes available for a layer.
