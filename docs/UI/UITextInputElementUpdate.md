***

The parameters for updating a text input element.

See [UITextInputElement](UITextInputElement.md) for more details.

# Remarks

`id` and `type` are required to identify the element to update.

# Properties

## type

> **type**: `"TextInput"`

***

## id

> **id**: `string`

The ID of the element.

***

## value?

> `optional` **value**: `string`

The value of the input. Use `""` for empty values.

***

## placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the input.

***

## onChange()?

> `optional` **onChange**: (`args`: \{ `value`: `string`; `id`: `string`; }) => `void`

The function to call when the value of the input changes.

### Parameters

| Parameter    | Type                                    | Description                           |
| ------------ | --------------------------------------- | ------------------------------------- |
| `args`       | \{ `value`: `string`; `id`: `string`; } | The arguments passed to the function. |
| `args.value` | `string`                                | The value of the input.               |
| `args.id`    | `string`                                | The id of the input element.          |

### Returns

`void`

***

## onBlur()?

> `optional` **onBlur**: (`args`: \{ `value`: `string`; `id`: `string`; }) => `void`

The function to call when the input is blurred.

### Parameters

| Parameter    | Type                                    | Description                           |
| ------------ | --------------------------------------- | ------------------------------------- |
| `args`       | \{ `value`: `string`; `id`: `string`; } | The arguments passed to the function. |
| `args.value` | `string`                                | The value of the input.               |
| `args.id`    | `string`                                | The id of the input element.          |

### Returns

`void`

***

## onFocus()?

> `optional` **onFocus**: (`args`: \{ `value`: `string`; `id`: `string`; }) => `void`

The function to call when the input is focused.

### Parameters

| Parameter    | Type                                    | Description                           |
| ------------ | --------------------------------------- | ------------------------------------- |
| `args`       | \{ `value`: `string`; `id`: `string`; } | The arguments passed to the function. |
| `args.value` | `string`                                | The value of the input.               |
| `args.id`    | `string`                                | The id of the input element.          |

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
