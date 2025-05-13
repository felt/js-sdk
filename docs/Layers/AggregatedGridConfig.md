***

The grid configuration for an aggregated precomputed aggregate value. This requires
an `attribute` property, because the numeric aggregation requires it.

If you just want to count the features in each grid cell, use the [CountGridConfig](CountGridConfig.md)
instead, where you are not required to specify an `attribute`.

Used inside [GetLayerPrecomputedCalculationParams](GetLayerPrecomputedCalculationParams.md).

# Properties

## resolution

> **resolution**: `number`

The resolution of the grid to use for the precomputed calculation.

***

## attribute

> **attribute**: `string`

The attribute to use for the precomputed calculation.

This must be a numeric attribute;

***

## type

> **type**: `"h3"`

The type of grid to use for the precomputed calculation.

***

## method

> **method**: `"avg"` | `"max"` | `"min"` | `"sum"`

The method to use for the precomputed calculation.
