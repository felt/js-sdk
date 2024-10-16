This is the doc comment for the elements module

## Contents

* [Element](#element)
  * [Properties](#properties)
    * [id](#id)
    * [type](#type)
    * [groupId](#groupid)
    * [name](#name)
    * [description](#description)
* [ElementGroup](#elementgroup)
  * [Properties](#properties-1)
    * [id](#id-1)
    * [name](#name-1)
    * [caption](#caption)
    * [elementIds](#elementids)
    * [visible](#visible)
    * [shownInLegend](#showninlegend)
* [GetElementResponse](#getelementresponse)
  * [Properties](#properties-2)
    * [id](#id-2)
    * [type](#type-1)
    * [groupId](#groupid-1)
    * [name](#name-2)
    * [description](#description-1)
* [GetElementGroupResponse](#getelementgroupresponse)
  * [Properties](#properties-3)
    * [id](#id-3)
    * [name](#name-3)
    * [caption](#caption-1)
    * [elementIds](#elementids-1)
    * [visible](#visible-1)
    * [shownInLegend](#showninlegend-1)
* [GetElementsFilter](#getelementsfilter)
  * [Properties](#properties-4)
    * [ids?](#ids)
* [GetElementGroupsFilter](#getelementgroupsfilter)
  * [Properties](#properties-5)
    * [ids?](#ids-1)
* [ElementChangeCallbackParams](#elementchangecallbackparams)
  * [Properties](#properties-6)
    * [element](#element-1)
* [ElementGroupChangeCallbackParams](#elementgroupchangecallbackparams)
  * [Properties](#properties-7)
    * [elementGroup](#elementgroup-1)
* [GetElementsResponse](#getelementsresponse)
  * [Remarks](#remarks-2)
* [GetElementGroupsResponse](#getelementgroupsresponse)
* [GetElementsFilterSchema](#getelementsfilterschema)
  * [Type declaration](#type-declaration)
* [GetElementGroupsFilterSchema](#getelementgroupsfilterschema)
  * [Type declaration](#type-declaration-1)

## Element

### Properties

#### id

> **id**: `string`

The string identifying the element

#### type

> **type**: `string`

The type of element, such as a Place, Polygon, Line, Route, etc.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to, or null
if the element is not inside an element group.

#### name

> **name**: `null` | `string`

The name of the element can be displayed in the Legend, depending
on how the element's legend is configured in its style.

#### description

> **description**: `null` | `string`

The element description forms part of the element's metadata. This is visible
to users via the element info button in the legend.

***

## ElementGroup

### Properties

#### id

> **id**: `string`

A string identifying the element group.

#### name

> **name**: `string`

The name of the element group. This is shown in the legend.

#### caption

> **caption**: `null` | `string`

The caption of the element group. This is shown in the legend.

#### elementIds

> **elementIds**: `string`\[]

The ids of the elements in the element group.

##### Remarks

You can use these ids to get the full element objects via the `getElements` method.

#### visible

> **visible**: `boolean`

Whether the element group is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

***

## GetElementResponse

The response from the `getElement` method. If the element doesn't exist, the
response will be `null`.

### Properties

#### id

> **id**: `string`

The string identifying the element

#### type

> **type**: `string`

The type of element, such as a Place, Polygon, Line, Route, etc.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to, or null
if the element is not inside an element group.

#### name

> **name**: `null` | `string`

The name of the element can be displayed in the Legend, depending
on how the element's legend is configured in its style.

#### description

> **description**: `null` | `string`

The element description forms part of the element's metadata. This is visible
to users via the element info button in the legend.

***

## GetElementGroupResponse

The response from the `getElementGroup` method. If the element doesn't exist, the
response will be `null`.

### Properties

#### id

> **id**: `string`

A string identifying the element group.

#### name

> **name**: `string`

The name of the element group. This is shown in the legend.

#### caption

> **caption**: `null` | `string`

The caption of the element group. This is shown in the legend.

#### elementIds

> **elementIds**: `string`\[]

The ids of the elements in the element group.

##### Remarks

You can use these ids to get the full element objects via the `getElements` method.

#### visible

> **visible**: `boolean`

Whether the element group is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

***

## GetElementsFilter

The filter to apply to the elements. If this is not passed, all elements will be returned.

### Properties

#### ids?

> `optional` **ids**: `string`\[]

The ids of the elements to get.

***

## GetElementGroupsFilter

The filter to apply to the element groups. If this is not passed, all element groups will be returned.

### Properties

#### ids?

> `optional` **ids**: `string`\[]

The ids of the element groups to get.

***

## ElementChangeCallbackParams

The parameters for the `onElementChange` listener.

### Properties

#### element

> **element**: `null` | [`Element`](Elements.md#element-1)

The new data for the element or null if the element was removed.

***

## ElementGroupChangeCallbackParams

The parameters for the `onElementGroupChange` listener.

### Properties

#### elementGroup

> **elementGroup**: `null` | [`ElementGroup`](Elements.md#elementgroup-1)

***

## GetElementsResponse

> **GetElementsResponse**: (`null` | `object`)\[]

The response from the `getElements` method.

### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

See [Element](Elements.md#element-1) for the structure of the element object.

***

## GetElementGroupsResponse

> **GetElementGroupsResponse**: (`null` | `object`)\[]

The response from the `getElementGroups` method.

***

## GetElementsFilterSchema

> `const` **GetElementsFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

### Type declaration

| Name  | Type                                               | Description                     |
| ----- | -------------------------------------------------- | ------------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the elements to get. |

***

## GetElementGroupsFilterSchema

> `const` **GetElementGroupsFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

### Type declaration

| Name  | Type                                               | Description                           |
| ----- | -------------------------------------------------- | ------------------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the element groups to get. |
