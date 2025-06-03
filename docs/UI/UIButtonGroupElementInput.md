***

Represents a button group element in a panel.

# Remarks

This element is used to group buttons and text elements together.

# Properties

## type

> **type**: `"ButtonGroup"`

***

## items

> **items**: ([`UIButtonElementInput`](UIButtonElementInput.md) | [`UITextElementInput`](UITextElementInput.md) | [`UIFlexibleSpaceElementInput`](UIFlexibleSpaceElementInput.md))\[]

***

## align?

> `optional` **align**: `"start"` | `"end"`

The alignment of the button group.

### Default Value

`"start"`

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

***

## id?

> `optional` **id**: `string`
