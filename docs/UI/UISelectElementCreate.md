***

The parameters for creating a select element.

See [UISelectElement](UISelectElement.md) for more details.

# Remarks

`id` is optional but recommended if you want to be able to perform updates.

# Properties

## type

> **type**: `"Select"`

***

## options

> **options**: \{ `label`: `string`; `value`: `string`; }\[]

The options to display in the select.

| Name    | Type     |
| ------- | -------- |
| `label` | `string` |
| `value` | `string` |

***

## onChange()

> **onChange**: (`args`: \{ `value`: `string`; `id`: `string`; }) => `void`

The function to call when the value of the select changes.

### Parameters

| Parameter    | Type                                    | Description                           |
| ------------ | --------------------------------------- | ------------------------------------- |
| `args`       | \{ `value`: `string`; `id`: `string`; } | The arguments passed to the function. |
| `args.value` | `string`                                | The value of the select.              |
| `args.id`    | `string`                                | The id of the select element.         |

### Returns

`void`

***

## value?

> `optional` **value**: `string`

The value of the select.

***

## placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the select.

***

## search?

> `optional` **search**: `boolean`

Whether the select should allow searching through the options.

### Default Value

`false`

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

***

## label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.
