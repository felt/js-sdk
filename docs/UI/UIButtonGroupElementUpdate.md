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

> `optional` **items**: ([`UIButtonElementCreate`](UIButtonElementCreate.md) | [`UITextElementCreate`](UITextElementCreate.md) | [`UIFlexibleSpaceElementCreate`](UIFlexibleSpaceElementCreate.md))\[]

The items to add to the button group.

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
