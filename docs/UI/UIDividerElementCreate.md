***

The parameters for creating a divider element.

See [UIDividerElement](UIDividerElement.md) for more details.

# Remarks

`id` is optional but recommended if you want to be able to delete the element.

# Properties

## type

> **type**: `"Divider"`

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

The ID of the element.

### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

### Default Value

`undefined`
