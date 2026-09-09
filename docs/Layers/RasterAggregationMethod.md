***

> **RasterAggregationMethod**: `"min"` | `"max"` | `"avg"` | `"sum"` | `"median"` | `"stddev"` | `"majority"` | `"area"`

A statistic that can be calculated for a raster band.

`area` is the ground area of the selected pixels, in square metres. `majority`
is the most common value, and applies only to a band holding whole numbers.

Neither `sum` nor `area` is available for a line boundary, because both need a
ground area for each pixel and a line only samples points. A request for a
statistic that the band or the boundary cannot answer throws.
