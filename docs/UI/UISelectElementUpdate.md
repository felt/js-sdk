***

The parameters for updating a select element.

See [UISelectElement](UISelectElement.md) for more details.

# Remarks

`id` and `type` are required to identify the element to update.

# Properties

## type

> **type**: `"Select"`

***

## id

> **id**: `string`

The ID of the element.

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

## options?

> `optional` **options**: [`UIControlElementOption`](UIControlElementOption.md)\[]

The options to display in the select.

***

## onChange()?

> `optional` **onChange**: (`args`: \{ `value`: `string`; `id`: `string`; }) => `void`

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

## label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.
