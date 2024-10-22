This is the doc comment for the layers module

## Contents

* [Layer](#layer)
  * [Properties](#properties)
    * [id](#id)
    * [groupId](#groupid)
    * [name](#name)
    * [caption](#caption)
    * [description](#description)
    * [visible](#visible)
    * [shownInLegend](#showninlegend)
    * [status](#status)
    * [geometryType](#geometrytype)
    * [bounds](#bounds)
* [LayerGroup](#layergroup)
  * [Properties](#properties-1)
    * [id](#id-1)
    * [name](#name-1)
    * [caption](#caption-1)
    * [layerIds](#layerids)
    * [visible](#visible-1)
    * [shownInLegend](#showninlegend-1)
    * [bounds](#bounds-1)
* [GetLayerResponse](#getlayerresponse)
  * [Properties](#properties-2)
    * [id](#id-2)
    * [groupId](#groupid-1)
    * [name](#name-2)
    * [caption](#caption-2)
    * [description](#description-1)
    * [visible](#visible-2)
    * [shownInLegend](#showninlegend-2)
    * [status](#status-1)
    * [geometryType](#geometrytype-1)
    * [bounds](#bounds-2)
* [GetLayerGroupResponse](#getlayergroupresponse)
  * [Properties](#properties-3)
    * [id](#id-3)
    * [name](#name-3)
    * [caption](#caption-3)
    * [layerIds](#layerids-1)
    * [visible](#visible-3)
    * [shownInLegend](#showninlegend-3)
    * [bounds](#bounds-3)
* [GetLayersFilter](#getlayersfilter)
  * [Properties](#properties-4)
    * [ids?](#ids)
* [GetLayerGroupsFilter](#getlayergroupsfilter)
  * [Properties](#properties-5)
    * [ids?](#ids-1)
* [LayerChangeCallbackParams](#layerchangecallbackparams)
  * [Properties](#properties-6)
    * [layer](#layer-1)
* [LayerGroupChangeCallbackParams](#layergroupchangecallbackparams)
  * [Properties](#properties-7)
    * [layerGroup](#layergroup-1)
* [LegendItem](#legenditem)
  * [Properties](#properties-8)
    * [title](#title)
    * [titleDependsOnZoom](#titledependsonzoom)
    * [visible](#visible-4)
    * [id](#id-4)
    * [layerId](#layerid)
* [LegendItemIdentifier](#legenditemidentifier)
  * [Properties](#properties-9)
    * [id](#id-5)
    * [layerId](#layerid-1)
* [LegendItemsFilter](#legenditemsfilter)
  * [Properties](#properties-10)
    * [ids?](#ids-2)
    * [layerIds?](#layerids-2)
* [LegendItemChangeCallbackParams](#legenditemchangecallbackparams)
  * [Properties](#properties-11)
    * [legendItem](#legenditem-1)
* [GetLayersResponse](#getlayersresponse)
  * [Remarks](#remarks-4)
* [GetLayerGroupsResponse](#getlayergroupsresponse)

## Layer

### Properties

#### id

> **id**: `string`

The string identifying the layer

#### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

#### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

#### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

#### visible

> **visible**: `boolean`

Whether the layer is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

#### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"` = `LayerProcessingStatus`

The current processing status of the layer.

#### geometryType

> **geometryType**: `null` | `string`

The geometry type of the layer.

##### Remarks

This will generally be one of:

* `"Point"`
* `"Line"`
* `"Polygon"`
* `"Raster"`
* `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

#### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

***

## LayerGroup

### Properties

#### id

> **id**: `string`

A string identifying the layer group.

#### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

#### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

#### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

##### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

#### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

#### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group.

***

## GetLayerResponse

The response from the `getLayer` method. If the layer doesn't exist, the
response will be `null`.

### Properties

#### id

> **id**: `string`

The string identifying the layer

#### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

#### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

#### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

#### visible

> **visible**: `boolean`

Whether the layer is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

#### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"` = `LayerProcessingStatus`

The current processing status of the layer.

#### geometryType

> **geometryType**: `null` | `string`

The geometry type of the layer.

##### Remarks

This will generally be one of:

* `"Point"`
* `"Line"`
* `"Polygon"`
* `"Raster"`
* `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

#### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

***

## GetLayerGroupResponse

The response from the `getLayerGroup` method. If the layer doesn't exist, the
response will be `null`.

### Properties

#### id

> **id**: `string`

A string identifying the layer group.

#### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

#### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

#### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

##### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

#### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

#### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group.

***

## GetLayersFilter

The filter to apply to the layers. If this is not passed, all layers will be returned.

### Properties

#### ids?

> `optional` **ids**: `string`\[]

The ids of the layers to get.

***

## GetLayerGroupsFilter

The filter to apply to the layer groups. If this is not passed, all layer groups will be returned.

### Properties

#### ids?

> `optional` **ids**: `string`\[]

The ids of the layer groups to get.

***

## LayerChangeCallbackParams

The parameters for the `onLayerChange` listener.

### Properties

#### layer

> **layer**: `null` | [`Layer`](Layers.md#layer-1)

The new data for the layer or null if the layer was removed.

***

## LayerGroupChangeCallbackParams

The parameters for the `onLayerGroupChange` listener.

### Properties

#### layerGroup

> **layerGroup**: `null` | [`LayerGroup`](Layers.md#layergroup-1)

***

## LegendItem

A legend item, which often represents a sub-class of features in a
layer in the case of categorical or classed layers.

### Properties

#### title

> **title**: `string` | `string`\[]

The title of the legend item.

#### titleDependsOnZoom

> **titleDependsOnZoom**: `boolean`

Whether the title depends on the zoom level or not. If it does, you
need to call `getLegendItem` when the zoom level changes.

Note that as the zoom level changes, the `onLegendItemChange` handler
will not be called, so you need to call `getLegendItem` yourself.

#### visible

> **visible**: `boolean`

Whether the legend item is visible or not.

#### id

> **id**: `string`

The id of the legend item.

#### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

***

## LegendItemIdentifier

The identifier for a legend item. It is a compound key of the layer to
which the legend item belongs and the legend item's own id.

### Properties

#### id

> **id**: `string`

The id of the legend item.

#### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

***

## LegendItemsFilter

Filter for legend items. If nothing is passed, all legend items will be returned.

### Properties

#### ids?

> `optional` **ids**: `object`\[]

Array of legend item identifiers to filter by.

#### layerIds?

> `optional` **layerIds**: `string`\[]

Array of layer ids to filter legend items by.

***

## LegendItemChangeCallbackParams

The parameters for the `onLegendItemChange` listener.

### Properties

#### legendItem

> **legendItem**: `null` | [`LegendItem`](Layers.md#legenditem)

The new data for the legend item or null if the legend item was removed.

***

## GetLayersResponse

> **GetLayersResponse**: (`null` | `object`)\[]

The response from the `getLayers` method.

### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

See [Layer](Layers.md#layer-1) for the structure of the layer object.

***

## GetLayerGroupsResponse

> **GetLayerGroupsResponse**: (`null` | `object`)\[]

The response from the `getLayerGroups` method.
