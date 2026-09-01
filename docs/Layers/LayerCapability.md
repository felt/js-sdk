***

> **LayerCapability**: `"serverPersistence"` | `"serverQuery"` | `"serverStats"` | `"localData"`

A capability that a layer supports.

Layers hosted by Felt and layers created in the browser with
[LayersController.createLayersFromGeoJson](LayersController.md#createlayersfromgeojson) support different subsets of the SDK,
so use [LayersController.getLayerCapabilities](LayersController.md#getlayercapabilities) to find out which methods a
particular layer can serve.

The various values are:

* `serverPersistence`: the layer exists server-side, so it can be duplicated with
  [LayersController.duplicateLayer](LayersController.md#duplicatelayer) and persists as part of the map.
* `serverQuery`: the layer has a server-side query endpoint, which backs the `search`,
  `sorting`, `filters`, `boundary` and `pagination` parameters of
  [LayersController.getFeatures](LayersController.md#getfeatures), as well as
  [LayersController.setLayerBoundary](LayersController.md#setlayerboundary) and the data table.
* `serverStats`: statistics for the layer are computed server-side, which backs
  [LayersController.getPrecomputedAggregates](LayersController.md#getprecomputedaggregates) and the jenks breaks used by
  classed numeric styles.
* `localData`: the layer's full GeoJSON collection is held in the browser, which backs
  [LayersController.getFeature](LayersController.md#getfeature), [LayersController.getFeatures](LayersController.md#getfeatures),
  [LayersController.getGeoJsonFeature](LayersController.md#getgeojsonfeature) and locally-computed statistics
  ([LayersController.getCategoryData](LayersController.md#getcategorydata),
  [LayersController.getHistogramData](LayersController.md#gethistogramdata) and
  [LayersController.getAggregates](LayersController.md#getaggregates)) on layers created with
  [LayersController.createLayersFromGeoJson](LayersController.md#createlayersfromgeojson).
