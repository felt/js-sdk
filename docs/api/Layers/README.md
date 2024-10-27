***

Layers in a Felt map hold geospatial data, but also configure how the data is rendered
both on the map and in the legend. The data can be vector data such as Points, Lines, or Polygons,
or raster data such as satellite images.

Each Layer can be grouped under a LayerGroup, and has associated LegendItems that represent
how the layer is rendered in the legend.

You can control the visibility of layers, layer groups, and legend items using the
`setLayerVisibility`, `setLayerGroupVisibility`, and `setLegendItemVisibility` methods.

When a Layer is styled to as categorical data or "classed" numeric data, there will be
a LegendItem for each category or class. Each LegendItem can be controlled for visibility
independently of the Layer, so you can turn on and off each category or class individually.

## Index

### Interfaces

* [Feature](Feature.md)

### Controller

* [LayersController](LayersController.md)

### Filters

* [FilterLogicGate](FilterLogicGate.md)
* [FilterExpression](FilterExpression.md)
* [FilterTernary](FilterTernary.md)

### Filters

Filters can be used to change which features in a layer are rendered. Filters can be
applied to a layer by the `setLayerFilters` method on the Felt controller.

* [Filters](Filters.md)

### Filters

The filters that are currently set on a layer.

A layer's filters are the combination of various different places
in which filters can be applied.

* [LayerFilters](LayerFilters.md)

### LayerGroups

* [LayerGroup](LayerGroup.md)
* [GetLayerGroupsConstraint](GetLayerGroupsConstraint.md)
* [LayerGroupChangeCallbackParams](LayerGroupChangeCallbackParams.md)

### Layers

* [Layer](Layer.md)
* [GetLayersConstraint](GetLayersConstraint.md)
* [LayerChangeCallbackParams](LayerChangeCallbackParams.md)
* [LayerProcessingStatus](LayerProcessingStatus.md)

### LegendItems

* [LegendItem](LegendItem.md)
* [LegendItemIdentifier](LegendItemIdentifier.md)
* [LegendItemsConstraint](LegendItemsConstraint.md)
* [LegendItemChangeCallbackParams](LegendItemChangeCallbackParams.md)
