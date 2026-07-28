---
"@feltmaps/js-sdk": patch
---

Make `RasterLayerSource.encodedTileTemplateUrl` nullable (`string | null`). TileService layers (WMS, WMTS, ArcGIS) serve pre-rendered image tiles and have no encoded tile URL.
