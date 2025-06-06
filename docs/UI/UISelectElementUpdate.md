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

## options?

> `optional` **options**: \{ `label`: `string`; `value`: `string`; }\[]

The options to display in the select.

| Name    | Type     |
| ------- | -------- |
| `label` | `string` |
| `value` | `string` |

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

## onChange()?

> `optional` **onChange**: (`args`: \{ `value`: `string`; }) => `void`

The function to call when the value of the select changes.

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

## label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.
