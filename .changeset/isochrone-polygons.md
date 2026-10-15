---
"@feltmaps/js-sdk": minor
---

Add isochrone polygons and the isochrone tool. `createElement` accepts a Polygon with an `isochrone` of `origin`, `mode` and `minutes` in place of `coordinates`, and Felt computes the shape as the area reachable within that travel time. Polygon elements now read back their `isochrone`, or `null` for a polygon drawn from coordinates, and `updateElement` recomputes the shape from a new `isochrone`. The `"isochrone"` tool can be selected with `setTool`, and its style, mode and minutes set with `setToolSettings`.
