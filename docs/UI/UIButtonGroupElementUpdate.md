***

The parameters for updating a button group element.

See [UIButtonGroupElement](UIButtonGroupElement.md) for more details.

# Remarks

`id` and `type` are required to update the button group element.

# Properties

## type

> **type**: `"ButtonGroup"`

***

## id

> **id**: `string`

The ID of the element.

***

## align?

> `optional` **align**: `"start"` | `"end"`

The alignment of the button group.

### Default Value

`"end"`

***

## items?

> `optional` **items**: ([`UIFlexibleSpaceElementCreate`](UIFlexibleSpaceElementCreate.md) | [`UIButtonElementCreate`](UIButtonElementCreate.md) | [`UITextElementCreate`](UITextElementCreate.md))\[]

The items to add to the button group.

***

## onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

### Returns

`void`
