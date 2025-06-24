***

The parameters for creating a text element.

See [UITextElement](UITextElement.md) for more details.

# Remarks

`id` is optional but recommended if you want to be able to perform updates.

# Properties

## type

> **type**: `"Text"`

***

## content

> **content**: `string`

The text to display in the element.

***

## onCreate()?

> `optional` **onCreate**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when the element is created.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the element.                |

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when the element is destroyed.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the element.                |

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
