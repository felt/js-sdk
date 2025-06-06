***

Layers in a Felt map hold geospatial data, but also configure how the data is rendered
both on the map and in the legend. The data can be vector data such as Points, Lines, or Polygons,
or raster data such as satellite images.

Each Layer can be grouped under a LayerGroup, and has associated LegendItems that represent
how the layer is rendered in the legend.

You can control the visibility of layers, layer groups, and legend items using the
[\`setLayerVisibility\`](Layers/LayersController.md#setlayervisibility), [\`setLayerGroupVisibility\`](Layers/LayersController.md#setlayergroupvisibility), and [\`setLegendItemVisibility\`](Layers/LayersController.md#setlegenditemvisibility) methods.

When a Layer is styled to as categorical data or "classed" numeric data, there will be
a `LegendItem` for each category or class. Each `LegendItem` can be controlled for visibility
independently of the Layer, so you can turn on and off each category or class individually.

# Controller

* [LayersController](Layers/LayersController.md)

# Features

* [LayerFeature](Layers/LayerFeature.md)
* [RasterValue](Layers/RasterValue.md)

# Filters

* [LayerFilters](Layers/LayerFilters.md)
* [LayerBoundaries](Layers/LayerBoundaries.md)
* [FilterLogicGate](Layers/FilterLogicGate.md)
* [FilterExpression](Layers/FilterExpression.md)
* [FilterTernary](Layers/FilterTernary.md)
* [Filters](Layers/Filters.md)
* [GeometryFilter](Layers/GeometryFilter.md)

# Layer Groups

* [LayerGroup](Layers/LayerGroup.md)
* [GetLayerGroupsConstraint](Layers/GetLayerGroupsConstraint.md)
* [LayerGroupChangeCallbackParams](Layers/LayerGroupChangeCallbackParams.md)

# Layer Schema

* [LayerSchema](Layers/LayerSchema.md)
* [LayerSchemaCommonAttribute](Layers/LayerSchemaCommonAttribute.md)
* [LayerSchemaNumericAttribute](Layers/LayerSchemaNumericAttribute.md)
* [LayerSchemaTextAttribute](Layers/LayerSchemaTextAttribute.md)
* [LayerSchemaBooleanAttribute](Layers/LayerSchemaBooleanAttribute.md)
* [LayerSchemaDateAttribute](Layers/LayerSchemaDateAttribute.md)
* [LayerSchemaDateTimeAttribute](Layers/LayerSchemaDateTimeAttribute.md)
* [LayerSchemaAttribute](Layers/LayerSchemaAttribute.md)

# Layer sources

* [RasterLayerSource](Layers/RasterLayerSource.md)
* [RasterBand](Layers/RasterBand.md)
* [GeoJsonUrlVectorSource](Layers/GeoJsonUrlVectorSource.md)
* [GeoJsonDataVectorSource](Layers/GeoJsonDataVectorSource.md)
* [GeoJsonFileVectorSource](Layers/GeoJsonFileVectorSource.md)
* [FeltTiledVectorSource](Layers/FeltTiledVectorSource.md)

# Layers

* [LayerCommon](Layers/LayerCommon.md)
* [RasterLayer](Layers/RasterLayer.md)
* [VectorLayer](Layers/VectorLayer.md)
* [UpdateLayerParams](Layers/UpdateLayerParams.md)
* [DataOnlyLayer](Layers/DataOnlyLayer.md)
* [GetLayersConstraint](Layers/GetLayersConstraint.md)
* [LayerChangeCallbackParams](Layers/LayerChangeCallbackParams.md)
* [GetRenderedFeaturesConstraint](Layers/GetRenderedFeaturesConstraint.md)
* [CreateLayersFromGeoJsonParams](Layers/CreateLayersFromGeoJsonParams.md)
* [LayerProcessingStatus](Layers/LayerProcessingStatus.md)
* [Layer](Layers/Layer.md)

# Legend Items

* [LegendItem](Layers/LegendItem.md)
* [LegendItemIdentifier](Layers/LegendItemIdentifier.md)
* [LegendItemsConstraint](Layers/LegendItemsConstraint.md)
* [LegendItemChangeCallbackParams](Layers/LegendItemChangeCallbackParams.md)

# Stats

* [AggregationConfig](Layers/AggregationConfig.md)
* [MultiAggregationConfig](Layers/MultiAggregationConfig.md)
* [ValueConfiguration](Layers/ValueConfiguration.md)
* [GetLayerCategoriesParams](Layers/GetLayerCategoriesParams.md)
* [GetLayerCategoriesGroup](Layers/GetLayerCategoriesGroup.md)
* [GetLayerHistogramParams](Layers/GetLayerHistogramParams.md)
* [GetLayerHistogramBin](Layers/GetLayerHistogramBin.md)
* [GetLayerCalculationParams](Layers/GetLayerCalculationParams.md)
* [CountGridConfig](Layers/CountGridConfig.md)
* [AggregatedGridConfig](Layers/AggregatedGridConfig.md)
* [GetLayerPrecomputedCalculationParams](Layers/GetLayerPrecomputedCalculationParams.md)
* [AggregationMethod](Layers/AggregationMethod.md)
* [PrecomputedAggregationMethod](Layers/PrecomputedAggregationMethod.md)
* [GridType](Layers/GridType.md)
* [GridConfig](Layers/GridConfig.md)
