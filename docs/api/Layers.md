This is the doc comment for the layers module

## Contents

* [Layers](#layers)
  * [Layer](#layer)
    * [Extends](#extends)
    * [Properties](#properties)
      * [id](#id)
        * [Inherited from](#inherited-from)
      * [groupId](#groupid)
        * [Inherited from](#inherited-from-1)
      * [name](#name)
        * [Inherited from](#inherited-from-2)
      * [caption](#caption)
        * [Inherited from](#inherited-from-3)
      * [description](#description)
        * [Inherited from](#inherited-from-4)
      * [visible](#visible)
        * [Inherited from](#inherited-from-5)
      * [shownInLegend](#showninlegend)
        * [Inherited from](#inherited-from-6)
      * [status](#status)
        * [Inherited from](#inherited-from-7)
      * [geometryType](#geometrytype)
        * [Remarks](#remarks)
        * [Inherited from](#inherited-from-8)
      * [bounds](#bounds)
        * [Inherited from](#inherited-from-9)
  * [LayerGroup](#layergroup)
    * [Extends](#extends-1)
    * [Properties](#properties-1)
      * [id](#id-1)
        * [Inherited from](#inherited-from-10)
      * [name](#name-1)
        * [Inherited from](#inherited-from-11)
      * [caption](#caption-1)
        * [Inherited from](#inherited-from-12)
      * [layerIds](#layerids)
        * [Remarks](#remarks-1)
        * [Inherited from](#inherited-from-13)
      * [visible](#visible-1)
        * [Inherited from](#inherited-from-14)
      * [shownInLegend](#showninlegend-1)
        * [Inherited from](#inherited-from-15)
      * [bounds](#bounds-1)
        * [Inherited from](#inherited-from-16)
  * [GetLayerResponse](#getlayerresponse)
    * [Extends](#extends-2)
    * [Properties](#properties-2)
      * [id](#id-2)
        * [Inherited from](#inherited-from-17)
      * [groupId](#groupid-1)
        * [Inherited from](#inherited-from-18)
      * [name](#name-2)
        * [Inherited from](#inherited-from-19)
      * [caption](#caption-2)
        * [Inherited from](#inherited-from-20)
      * [description](#description-1)
        * [Inherited from](#inherited-from-21)
      * [visible](#visible-2)
        * [Inherited from](#inherited-from-22)
      * [shownInLegend](#showninlegend-2)
        * [Inherited from](#inherited-from-23)
      * [status](#status-1)
        * [Inherited from](#inherited-from-24)
      * [geometryType](#geometrytype-1)
        * [Remarks](#remarks-2)
        * [Inherited from](#inherited-from-25)
      * [bounds](#bounds-2)
        * [Inherited from](#inherited-from-26)
  * [GetLayerGroupResponse](#getlayergroupresponse)
    * [Extends](#extends-3)
    * [Properties](#properties-3)
      * [id](#id-3)
        * [Inherited from](#inherited-from-27)
      * [name](#name-3)
        * [Inherited from](#inherited-from-28)
      * [caption](#caption-3)
        * [Inherited from](#inherited-from-29)
      * [layerIds](#layerids-1)
        * [Remarks](#remarks-3)
        * [Inherited from](#inherited-from-30)
      * [visible](#visible-3)
        * [Inherited from](#inherited-from-31)
      * [shownInLegend](#showninlegend-3)
        * [Inherited from](#inherited-from-32)
      * [bounds](#bounds-3)
        * [Inherited from](#inherited-from-33)
  * [GetLayersFilter](#getlayersfilter)
    * [Extends](#extends-4)
    * [Properties](#properties-4)
      * [ids?](#ids)
        * [Inherited from](#inherited-from-34)
  * [GetLayerGroupsFilter](#getlayergroupsfilter)
    * [Extends](#extends-5)
    * [Properties](#properties-5)
      * [ids?](#ids-1)
        * [Inherited from](#inherited-from-35)
  * [LayerChangeCallbackParams](#layerchangecallbackparams)
    * [Properties](#properties-6)
      * [layer](#layer-1)
  * [LayerGroupChangeCallbackParams](#layergroupchangecallbackparams)
    * [Properties](#properties-7)
      * [layerGroup](#layergroup-1)
  * [LayerProcessingStatus](#layerprocessingstatus)
  * [GetLayersResponse](#getlayersresponse)
    * [Remarks](#remarks-4)
  * [GetLayerGroupsResponse](#getlayergroupsresponse)
* [Other](#other)
  * [GetLayersFilterSchema](#getlayersfilterschema)
    * [Type declaration](#type-declaration)
  * [GetLayerGroupsFilterSchema](#getlayergroupsfilterschema)
    * [Type declaration](#type-declaration-1)

## Layers

### Layer

#### Extends

* `TypeOf`\<*typeof* `LayerSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the layer

###### Inherited from

`z.infer.id`

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

###### Inherited from

`z.infer.caption`

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

###### Inherited from

`z.infer.description`

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"` = `LayerProcessingStatus`

The current processing status of the layer.

###### Inherited from

`z.infer.status`

##### geometryType

> **geometryType**: `null` | `string`

The geometry type of the layer.

###### Remarks

This will generally be one of:

* `"Point"`
* `"Line"`
* `"Polygon"`
* `"Raster"`
* `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

###### Inherited from

`z.infer.geometryType`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

###### Inherited from

`z.infer.bounds`

***

### LayerGroup

#### Extends

* `TypeOf`\<*typeof* `LayerGroupSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the layer group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

###### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

###### Inherited from

`z.infer.layerIds`

##### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group.

###### Inherited from

`z.infer.bounds`

***

### GetLayerResponse

The response from the `getLayer` method. If the layer doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetLayerResponseSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the layer

###### Inherited from

`z.infer.id`

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

###### Inherited from

`z.infer.caption`

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

###### Inherited from

`z.infer.description`

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"` = `LayerProcessingStatus`

The current processing status of the layer.

###### Inherited from

`z.infer.status`

##### geometryType

> **geometryType**: `null` | `string`

The geometry type of the layer.

###### Remarks

This will generally be one of:

* `"Point"`
* `"Line"`
* `"Polygon"`
* `"Raster"`
* `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

###### Inherited from

`z.infer.geometryType`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

###### Inherited from

`z.infer.bounds`

***

### GetLayerGroupResponse

The response from the `getLayerGroup` method. If the layer doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetLayerGroupResponseSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the layer group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

###### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

###### Inherited from

`z.infer.layerIds`

##### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group.

###### Inherited from

`z.infer.bounds`

***

### GetLayersFilter

The filter to apply to the layers. If this is not passed, all layers will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetLayersFilterSchema`](Layers.md#getlayersfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the layers to get.

###### Inherited from

`z.infer.ids`

***

### GetLayerGroupsFilter

The filter to apply to the layer groups. If this is not passed, all layer groups will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetLayerGroupsFilterSchema`](Layers.md#getlayergroupsfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the layer groups to get.

###### Inherited from

`z.infer.ids`

***

### LayerChangeCallbackParams

The parameters for the `onLayerChange` listener.

#### Properties

##### layer

> **layer**: `null` | [`Layer`](Layers.md#layer-1)

The new data for the layer or null if the layer was removed.

***

### LayerGroupChangeCallbackParams

The parameters for the `onLayerGroupChange` listener.

#### Properties

##### layerGroup

> **layerGroup**: `null` | [`LayerGroup`](Layers.md#layergroup-1)

***

### LayerProcessingStatus

> **LayerProcessingStatus**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

This describes the processing status of a layer.

The various values are:

* `processing`: The layer has been uploaded or updated and is still processing.
* `completed`: The layer has been processed and can be viewed on the map.
* `failed`: The layer failed to process and cannot be viewed on the map.
* `incomplete`: The layer has not been processed.

***

### GetLayersResponse

> **GetLayersResponse**: (`null` | `object`)\[]

The response from the `getLayers` method.

#### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

See [Layer](Layers.md#layer-1) for the structure of the layer object.

***

### GetLayerGroupsResponse

> **GetLayerGroupsResponse**: (`null` | `object`)\[]

The response from the `getLayerGroups` method.

## Other

### GetLayersFilterSchema

> `const` **GetLayersFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                   |
| ----- | -------------------------------------------------- | ----------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the layers to get. |

***

### GetLayerGroupsFilterSchema

> `const` **GetLayerGroupsFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                         |
| ----- | -------------------------------------------------- | ----------------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the layer groups to get. |
