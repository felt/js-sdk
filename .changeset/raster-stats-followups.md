---
"@feltmaps/js-sdk": patch
---

Rename the `band` parameter to `bandId` across the raster statistics methods. `getRasterAggregates`, `getRasterHistogramData` and `getRasterCategoryData` no longer accept a line as their `boundary`, and the `RasterGeometryFilter` type is no longer exported.
