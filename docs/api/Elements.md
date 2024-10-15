This is the doc comment for the elements module

## Contents

* [Elements](#elements)
  * [ElementGroup](#elementgroup)
    * [Extends](#extends)
    * [Properties](#properties)
      * [id](#id)
        * [Inherited from](#inherited-from)
      * [name](#name)
        * [Inherited from](#inherited-from-1)
      * [caption](#caption)
        * [Inherited from](#inherited-from-2)
      * [elementIds](#elementids)
        * [Remarks](#remarks)
        * [Inherited from](#inherited-from-3)
      * [visible](#visible)
        * [Inherited from](#inherited-from-4)
      * [shownInLegend](#showninlegend)
        * [Inherited from](#inherited-from-5)
  * [GetElementResponse](#getelementresponse)
    * [Extends](#extends-1)
    * [Properties](#properties-1)
      * [id](#id-1)
        * [Inherited from](#inherited-from-6)
      * [type](#type)
        * [Inherited from](#inherited-from-7)
      * [groupId](#groupid)
        * [Inherited from](#inherited-from-8)
      * [name](#name-1)
        * [Inherited from](#inherited-from-9)
      * [description](#description)
        * [Inherited from](#inherited-from-10)
  * [GetElementGroupResponse](#getelementgroupresponse)
    * [Extends](#extends-2)
    * [Properties](#properties-2)
      * [id](#id-2)
        * [Inherited from](#inherited-from-11)
      * [name](#name-2)
        * [Inherited from](#inherited-from-12)
      * [caption](#caption-1)
        * [Inherited from](#inherited-from-13)
      * [elementIds](#elementids-1)
        * [Remarks](#remarks-1)
        * [Inherited from](#inherited-from-14)
      * [visible](#visible-1)
        * [Inherited from](#inherited-from-15)
      * [shownInLegend](#showninlegend-1)
        * [Inherited from](#inherited-from-16)
  * [GetElementsFilter](#getelementsfilter)
    * [Extends](#extends-3)
    * [Properties](#properties-3)
      * [ids?](#ids)
        * [Inherited from](#inherited-from-17)
  * [GetElementGroupsFilter](#getelementgroupsfilter)
    * [Extends](#extends-4)
    * [Properties](#properties-4)
      * [ids?](#ids-1)
        * [Inherited from](#inherited-from-18)
  * [ElementChangeCallbackParams](#elementchangecallbackparams)
    * [Properties](#properties-5)
      * [element](#element)
  * [ElementGroupChangeCallbackParams](#elementgroupchangecallbackparams)
    * [Properties](#properties-6)
      * [elementGroup](#elementgroup-1)
  * [GetElementsResponse](#getelementsresponse)
    * [Remarks](#remarks-2)
  * [GetElementGroupsResponse](#getelementgroupsresponse)
* [Other](#other)
  * [Element](#element-1)
    * [Extends](#extends-5)
    * [Properties](#properties-7)
      * [id](#id-3)
        * [Inherited from](#inherited-from-19)
      * [type](#type-1)
        * [Inherited from](#inherited-from-20)
      * [groupId](#groupid-1)
        * [Inherited from](#inherited-from-21)
      * [name](#name-3)
        * [Inherited from](#inherited-from-22)
      * [description](#description-1)
        * [Inherited from](#inherited-from-23)
  * [GetElementsFilterSchema](#getelementsfilterschema)
    * [Type declaration](#type-declaration)
  * [GetElementGroupsFilterSchema](#getelementgroupsfilterschema)
    * [Type declaration](#type-declaration-1)

## Elements

### ElementGroup

#### Extends

* `TypeOf`\<*typeof* `ElementGroupSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the element group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the element group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the element group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### elementIds

> **elementIds**: `string`\[]

The ids of the elements in the element group.

###### Remarks

You can use these ids to get the full element objects via the `getElements` method.

###### Inherited from

`z.infer.elementIds`

##### visible

> **visible**: `boolean`

Whether the element group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

***

### GetElementResponse

The response from the `getElement` method. If the element doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetElementResponseSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the element

###### Inherited from

`z.infer.id`

##### type

> **type**: `string`

The type of element, such as a Place, Polygon, Line, Route, etc.

###### Inherited from

`z.infer.type`

##### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to, or null
if the element is not inside an element group.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `null` | `string`

The name of the element can be displayed in the Legend, depending
on how the element's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### description

> **description**: `null` | `string`

The element description forms part of the element's metadata. This is visible
to users via the element info button in the legend.

###### Inherited from

`z.infer.description`

***

### GetElementGroupResponse

The response from the `getElementGroup` method. If the element doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetElementGroupResponseSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the element group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the element group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the element group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### elementIds

> **elementIds**: `string`\[]

The ids of the elements in the element group.

###### Remarks

You can use these ids to get the full element objects via the `getElements` method.

###### Inherited from

`z.infer.elementIds`

##### visible

> **visible**: `boolean`

Whether the element group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

***

### GetElementsFilter

The filter to apply to the elements. If this is not passed, all elements will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetElementsFilterSchema`](Elements.md#getelementsfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the elements to get.

###### Inherited from

`z.infer.ids`

***

### GetElementGroupsFilter

The filter to apply to the element groups. If this is not passed, all element groups will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetElementGroupsFilterSchema`](Elements.md#getelementgroupsfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the element groups to get.

###### Inherited from

`z.infer.ids`

***

### ElementChangeCallbackParams

The parameters for the `onElementChange` listener.

#### Properties

##### element

> **element**: `null` | [`Element`](Elements.md#element)

The new data for the element or null if the element was removed.

***

### ElementGroupChangeCallbackParams

The parameters for the `onElementGroupChange` listener.

#### Properties

##### elementGroup

> **elementGroup**: `null` | [`ElementGroup`](Elements.md#elementgroup-1)

***

### GetElementsResponse

> **GetElementsResponse**: (`null` | `object`)\[]

The response from the `getElements` method.

#### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

See [Element](Elements.md#element) for the structure of the element object.

***

### GetElementGroupsResponse

> **GetElementGroupsResponse**: (`null` | `object`)\[]

The response from the `getElementGroups` method.

## Other

### Element

#### Extends

* `TypeOf`\<*typeof* `ElementSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the element

###### Inherited from

`z.infer.id`

##### type

> **type**: `string`

The type of element, such as a Place, Polygon, Line, Route, etc.

###### Inherited from

`z.infer.type`

##### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to, or null
if the element is not inside an element group.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `null` | `string`

The name of the element can be displayed in the Legend, depending
on how the element's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### description

> **description**: `null` | `string`

The element description forms part of the element's metadata. This is visible
to users via the element info button in the legend.

###### Inherited from

`z.infer.description`

***

### GetElementsFilterSchema

> `const` **GetElementsFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                     |
| ----- | -------------------------------------------------- | ------------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the elements to get. |

***

### GetElementGroupsFilterSchema

> `const` **GetElementGroupsFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                           |
| ----- | -------------------------------------------------- | ------------------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the element groups to get. |
