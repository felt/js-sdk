***

The parameters for updating a checkbox group element.

See [UICheckboxGroupElement](UICheckboxGroupElement.md) for more details.

# Properties

## type

> **type**: `"CheckboxGroup"`

***

## id

> **id**: `string`

The ID of the element.

***

## value?

> `optional` **value**: `string`\[] = `valueSchema`

The value of the checkbox group.

### Default Value

`[]`

***

## options?

> `optional` **options**: [`UIControlElementOption`](UIControlElementOption.md)\[]

The options to display in the checkbox group.

***

## onChange()?

> `optional` **onChange**: (`args`: \{ `value`: `string`\[]; `id`: `string`; }) => `void`

The function to call when the value of the checkbox group changes.

### Parameters

| Parameter    | Type                                       | Description                           |
| ------------ | ------------------------------------------ | ------------------------------------- |
| `args`       | \{ `value`: `string`\[]; `id`: `string`; } | The arguments passed to the function. |
| `args.value` | `string`\[]                                | Array of the selected values.         |
| `args.id`    | `string`                                   | The id of the checkbox group element. |

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
