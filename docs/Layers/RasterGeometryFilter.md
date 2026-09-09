***

> **RasterGeometryFilter**: [`GeometryFilter`](GeometryFilter.md) | [`LineStringGeometry`](../Shared/LineStringGeometry.md) | [`MultiLineStringGeometry`](../Shared/MultiLineStringGeometry.md)

The spatial boundary for a raster statistic.

Raster statistics accept everything a vector statistic accepts, and also accept
a line. A polygon or bounding box selects the pixels whose centres fall inside
it. A line is sampled along its length instead, so its statistics are weighted
by distance rather than by area.
