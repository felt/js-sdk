***

# Properties

## id

> **id**: `string`

The ID of the element.

***

## title?

> `optional` **title**: `string`

The title to display in the panel header.

***

## onClickClose()?

> `optional` **onClickClose**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when panel's close button is clicked.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the panel.                  |

### Returns

`void`

***

## type?

> `optional` **type**: `"Panel"`

***

## body?

> `optional` **body**: [`UIPanelElementCreate`](UIPanelElementCreate.md)\[]

The elements to add to the panel body.

***

## footer?

> `optional` **footer**: [`UIPanelElementCreate`](UIPanelElementCreate.md)\[]

The elements to add to the panel footer.

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
