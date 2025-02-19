***

Defines how to aggregate a value across features in a layer with multiple aggregations
returned at once.

## Type Parameters

| Type Parameter                                                         |
| ---------------------------------------------------------------------- |
| `T` *extends* [`AggregationMethod`](AggregationMethod.md) \| `"count"` |

## Properties

### attribute

> **attribute**: `string`

The attribute to use for the aggregation. This must be a numeric attribute.

***

### methods

> **methods**: `T`\[]

The operations to use on the values from the features in the layer
