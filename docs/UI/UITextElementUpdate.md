***

The parameters for updating a text element.

See [UITextElement](UITextElement.md) for more details.

# Remarks

`id` and `type` are required to identify the element to update.

# Properties

## type

> **type**: `"Text"`

***

## id

> **id**: `string`

The ID of the element.

***

## content?

> `optional` **content**: `string`

The text to display in the element.

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
