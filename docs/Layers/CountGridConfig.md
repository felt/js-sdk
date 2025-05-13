***

The grid configuration for a count-based precomputed aggregate value. Compared to the
[AggregatedGridConfig](AggregatedGridConfig.md), the `attribute` property is not required, because the count
is the same regardless of the attribute.

Used inside [GetLayerPrecomputedCalculationParams](GetLayerPrecomputedCalculationParams.md).

# Properties

## resolution

> **resolution**: `number`

The resolution of the grid to use for the precomputed calculation.

***

## type

> **type**: `"h3"`

The type of grid to use for the precomputed calculation.

***

## method

> **method**: `"count"`

The method to use for the precomputed calculation, which in this case is always "count".
