***

Represents a text input element.

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

Event handler for when the value of the input changes.

### Parameters

| Parameter    | Type                    | Description                 |
| ------------ | ----------------------- | --------------------------- |
| `args`       | \{ `value`: `string`; } |                             |
| `args.value` | `string`                | The new value of the input. |

### Returns

`void`

***

## onBlur()?

> `optional` **onBlur**: (`args`: \{ `value`: `string`; }) => `void`

Event handler for when the input loses focus.

### Parameters

| Parameter    | Type                    | Description                                 |
| ------------ | ----------------------- | ------------------------------------------- |
| `args`       | \{ `value`: `string`; } |                                             |
| `args.value` | `string`                | The input value when the input loses focus. |

### Returns

`void`

***

## onFocus()?

> `optional` **onFocus**: (`args`: \{ `value`: `string`; }) => `void`

Event handler for when the input gains focus.

### Parameters

| Parameter    | Type                    | Description                                 |
| ------------ | ----------------------- | ------------------------------------------- |
| `args`       | \{ `value`: `string`; } |                                             |
| `args.value` | `string`                | The input value when the input gains focus. |

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

***

## label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.
