***

The parameters for creating a toggle group element.

Every group is labeled using `label` property and it can contain one or more togglees.

# Properties

## type

> **type**: `"ToggleGroup"`

***

## options

> **options**: \{ `label`: `string`; `value`: `string`; }\[]

The options to display in the toggle group.

| Name    | Type     |
| ------- | -------- |
| `label` | `string` |
| `value` | `string` |

***

## value

> **value**: `string`\[] = `valueSchema`

The value of the toggle group.

### Default Value

`[]`

***

## onChange()

> **onChange**: (`args`: \{ `value`: `string`\[]; `id`: `string`; }) => `void`

The function to call when the value of the toggle group changes.

### Parameters

| Parameter    | Type                                       | Description                           |
| ------------ | ------------------------------------------ | ------------------------------------- |
| `args`       | \{ `value`: `string`\[]; `id`: `string`; } | The arguments passed to the function. |
| `args.value` | `string`\[]                                | Array of the selected values.         |
| `args.id`    | `string`                                   | The id of the toggle group element.   |

### Returns

`void`

***

## id

> **id**: `string`

The ID of the element.

***

## alignment?

> `optional` **alignment**: `"start"` | `"end"`

The alignment of the toggle group.

### Default Value

`"start"`

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
