***

The response from the [LayersController.getRasterAggregates](LayersController.md#getrasteraggregates) method.

# Type Parameters

| Type Parameter                                                        |
| --------------------------------------------------------------------- |
| `T` *extends* [`RasterAggregationMethod`](RasterAggregationMethod.md) |

# Properties

## stats

> **stats**: `Record`\<`T`, `null` | `number`>

The value calculated for each requested statistic.

`null` is returned when the boundary and filters selected no pixels, as
opposed to zero, so as not to confuse an empty selection with a real zero.

***

## read

> **read**: [`RasterReadDetails`](RasterReadDetails.md)

How the pixels behind these statistics were read.

***

## percentiles?

> `optional` **percentiles**: [`RasterPercentile`](RasterPercentile.md)\[]

The requested percentiles, in the order they were requested. Present only
when percentile ranks were requested.
