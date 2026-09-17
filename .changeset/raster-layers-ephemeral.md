---
"@feltmaps/js-sdk": minor
---

Add a `rasterLayers` controller so extensions can emit their own ephemeral,
client-only raster layers backed by a typed array buffer. Includes
`createEphemeralRasterLayer`, `updateEphemeralRasterLayer`,
`setEphemeralRasterLayerCoordinates`, and `deleteEphemeralRasterLayer`. The
RGBA8 pixel buffer is transferred to the map for zero-copy, near-realtime
updates.
