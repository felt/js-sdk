---
"@feltmaps/js-sdk": minor
---

Add raster statistics methods: `getRasterAggregates`, `getRasterHistogramData`, `getRasterCategoryData` and `getRasterProfile`, each summarizing one band of a raster layer over the whole raster, a bounding box, a polygon, or a line. Raster bands now also carry an `id` to pass to those methods and a `displayName`.
