***

> **GridConfig**: \{ `type`: `"h3"`; `resolution`: `number`; `method`: `"avg"` | `"max"` | `"min"` | `"sum"` | `"count"`; `attribute`: `string`; }

# Type declaration

## type

> **type**: `"h3"` = `GridTypeSchema`

The type of grid to use for the precomputed calculation.

## resolution

> **resolution**: `number`

The resolution of the grid to use for the precomputed calculation.

## method

> **method**: `"avg"` | `"max"` | `"min"` | `"sum"` | `"count"` = `PrecomputedAggregateMethodSchema`

The method to use for the precomputed calculation.

## attribute?

> `optional` **attribute**: `string`

The attribute to use for the precomputed calculation. This can be omitted if the aggregation method is "count".
Must be a numeric attribute otherwise.
