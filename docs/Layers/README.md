***

Layers in a Felt map hold geospatial data, but also configure how the data is rendered
both on the map and in the legend. The data can be vector data such as Points, Lines, or Polygons,
or raster data such as satellite images.

Each Layer can be grouped under a LayerGroup, and has associated LegendItems that represent
how the layer is rendered in the legend.

You can control the visibility of layers, layer groups, and legend items using the
[\`setLayerVisibility\`](LayersController.md#setlayervisibility), [\`setLayerGroupVisibility\`](LayersController.md#setlayergroupvisibility), and [\`setLegendItemVisibility\`](LayersController.md#setlegenditemvisibility) methods.

When a Layer is styled to as categorical data or "classed" numeric data, there will be
a `LegendItem` for each category or class. Each `LegendItem` can be controlled for visibility
independently of the Layer, so you can turn on and off each category or class individually.

# Controller

* [LayersController](LayersController.md)

# Interfaces

* [LayerBoundaries](LayerBoundaries.md)
* [LayerFeature](LayerFeature.md)
* [RasterValue](RasterValue.md)
* [AggregationConfig](AggregationConfig.md)
* [MultiAggregationConfig](MultiAggregationConfig.md)
* [ValueConfiguration](ValueConfiguration.md)
* [GetLayerCategoriesParams](GetLayerCategoriesParams.md)
* [GetLayerCategoriesGroup](GetLayerCategoriesGroup.md)
* [GetLayerHistogramParams](GetLayerHistogramParams.md)
* [GetLayerHistogramBin](GetLayerHistogramBin.md)
* [GetLayerCalculationParams](GetLayerCalculationParams.md)
* [CreateLayersFromGeoJsonParams](CreateLayersFromGeoJsonParams.md)

# Type Aliases

* [LayerBoundary](LayerBoundary.md)
* [AggregationMethod](AggregationMethod.md)
* [GeometryFilter](GeometryFilter.md)

# Filters

* [LayerFilters](LayerFilters.md)
* [FilterLogicGate](FilterLogicGate.md)
* [FilterExpression](FilterExpression.md)
* [FilterTernary](FilterTernary.md)
* [Filters](Filters.md)

# Layer Groups

* [LayerGroup](LayerGroup.md)
* [GetLayerGroupsConstraint](GetLayerGroupsConstraint.md)
* [LayerGroupChangeCallbackParams](LayerGroupChangeCallbackParams.md)

# Layer Schema

* [LayerSchema](LayerSchema.md)
* [LayerSchemaCommonAttribute](LayerSchemaCommonAttribute.md)
* [LayerSchemaNumericAttribute](LayerSchemaNumericAttribute.md)
* [LayerSchemaTextAttribute](LayerSchemaTextAttribute.md)
* [LayerSchemaBooleanAttribute](LayerSchemaBooleanAttribute.md)
* [LayerSchemaDateAttribute](LayerSchemaDateAttribute.md)
* [LayerSchemaDateTimeAttribute](LayerSchemaDateTimeAttribute.md)
* [LayerSchemaAttribute](LayerSchemaAttribute.md)

# Layer sources

* [RasterLayerSource](RasterLayerSource.md)
* [RasterBand](RasterBand.md)
* [GeoJsonUrlVectorSource](GeoJsonUrlVectorSource.md)
* [GeoJsonDataVectorSource](GeoJsonDataVectorSource.md)
* [GeoJsonFileVectorSource](GeoJsonFileVectorSource.md)
* [FeltTiledVectorSource](FeltTiledVectorSource.md)

# Layers

* [LayerCommon](LayerCommon.md)
* [RasterLayer](RasterLayer.md)
* [VectorLayer](VectorLayer.md)
* [UpdateLayerParams](UpdateLayerParams.md)
* [DataOnlyLayer](DataOnlyLayer.md)
* [GetLayersConstraint](GetLayersConstraint.md)
* [LayerChangeCallbackParams](LayerChangeCallbackParams.md)
* [GetRenderedFeaturesConstraint](GetRenderedFeaturesConstraint.md)
* [LayerProcessingStatus](LayerProcessingStatus.md)
* [Layer](Layer.md)

# Legend Items

* [LegendItem](LegendItem.md)
* [LegendItemIdentifier](LegendItemIdentifier.md)
* [LegendItemsConstraint](LegendItemsConstraint.md)
* [LegendItemChangeCallbackParams](LegendItemChangeCallbackParams.md)
