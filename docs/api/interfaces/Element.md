## Extends

* `TypeOf`\<*typeof* `ElementSchema`>

## Properties

### id

> **id**: `string`

The string identifying the element

#### Inherited from

`z.infer.id`

***

### type

> **type**: `string`

The type of element, such as a Place, Polygon, Line, Route, etc.

#### Inherited from

`z.infer.type`

***

### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to, or null
if the element is not inside an element group.

#### Inherited from

`z.infer.groupId`

***

### name

> **name**: `null` | `string`

The name of the element can be displayed in the Legend, depending
on how the element's legend is configured in its style.

#### Inherited from

`z.infer.name`

***

### description

> **description**: `null` | `string`

The element description forms part of the element's metadata. This is visible
to users via the element info button in the legend.

#### Inherited from

`z.infer.description`
