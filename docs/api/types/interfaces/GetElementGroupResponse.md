The response from the `getElementGroup` method. If the element doesn't exist, the
response will be `null`.

## Extends

- `TypeOf`\<*typeof* `GetElementGroupResponseSchema`\>

## Properties

### id

> **id**: `string`

A string identifying the element group.

#### Inherited from

`z.infer.id`

***

### name

> **name**: `string`

The name of the element group. This is shown in the legend.

#### Inherited from

`z.infer.name`

***

### caption

> **caption**: `null` \| `string`

The caption of the element group. This is shown in the legend.

#### Inherited from

`z.infer.caption`

***

### elementIds

> **elementIds**: `string`[]

The ids of the elements in the element group.

#### Remarks

You can use these ids to get the full element objects via the `getElements` method.

#### Inherited from

`z.infer.elementIds`

***

### visible

> **visible**: `boolean`

Whether the element group is visible or not.

#### Inherited from

`z.infer.visible`

***

### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

#### Inherited from

`z.infer.shownInLegend`
