***

The parameters for creating a text input element.

See [UITextInputElement](UITextInputElement.md) for more details.

# Remarks

`id` is optional but recommended if you want to be able to perform updates.

# Properties

## type

> **type**: `"TextInput"`

***

## value

> **value**: `string`

The value of the input. Use `""` for empty values.

***

## placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the input.

***

## onChange()?

> `optional` **onChange**: (`args`: \{ `value`: `string`; }) => `void`

The function to call when the value of the input changes.

### Parameters

| Parameter    | Type                    |
| ------------ | ----------------------- |
| `args`       | \{ `value`: `string`; } |
| `args.value` | `string`                |

### Returns

`void`

***

## onBlur()?

> `optional` **onBlur**: (`args`: \{ `value`: `string`; }) => `void`

The function to call when the input is blurred.

### Parameters

| Parameter    | Type                    |
| ------------ | ----------------------- |
| `args`       | \{ `value`: `string`; } |
| `args.value` | `string`                |

### Returns

`void`

***

## onFocus()?

> `optional` **onFocus**: (`args`: \{ `value`: `string`; }) => `void`

The function to call when the input is focused.

### Parameters

| Parameter    | Type                    |
| ------------ | ----------------------- |
| `args`       | \{ `value`: `string`; } |
| `args.value` | `string`                |

### Returns

`void`

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

***

## label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.
