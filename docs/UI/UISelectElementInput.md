***

Represents a selector element in a panel.

# Remarks

This element is used to select a single option from a list of options.

# Properties

## type

> **type**: `"Select"`

***

## options

> **options**: \{ `label`: `string`; `value`: `string`; }\[]

| Name    | Type     |
| ------- | -------- |
| `label` | `string` |
| `value` | `string` |

***

## onChange()

> **onChange**: (`args`: \{ `value`: `string`; }) => `void`

Event handler for when the value of the select changes.

### Parameters

| Parameter    | Type                    | Description                  |
| ------------ | ----------------------- | ---------------------------- |
| `args`       | \{ `value`: `string`; } |                              |
| `args.value` | `string`                | The new value of the select. |

### Returns

`void`

***

## value?

> `optional` **value**: `string`

***

## search?

> `optional` **search**: `boolean`

***

## placeholder?

> `optional` **placeholder**: `string`

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
