***

The parameters for updating a button row element.

See [UIButtonRowElement](UIButtonRowElement.md) for more details.

# Properties

## type

> **type**: `"ButtonRow"`

***

## id

> **id**: `string`

The ID of the element.

***

## align?

> `optional` **align**: `"start"` | `"end"`

The alignment of the button row.

### Default Value

`"start"`

***

## items?

> `optional` **items**: [`UIButtonElementCreate`](UIButtonElementCreate.md)\[]

The items to add to the button row.

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
