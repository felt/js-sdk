***

The parameters for creating a radio group element.

See [UIRadioGroupElement](UIRadioGroupElement.md) for more details.

# Properties

## type

> **type**: `"RadioGroup"`

***

## options

> **options**: [`UIControlElementOption`](UIControlElementOption.md)\[]

The options to display in the radio group.

***

## onChange()

> **onChange**: (`args`: \{ `value`: `undefined` | `string`; `id`: `string`; }) => `void`

The function to call when the value of the radio group changes.

### Parameters

| Parameter    | Type                                                   | Description                           |
| ------------ | ------------------------------------------------------ | ------------------------------------- |
| `args`       | \{ `value`: `undefined` \| `string`; `id`: `string`; } | The arguments passed to the function. |
| `args.value` | `undefined` \| `string`                                | The selected value.                   |
| `args.id`    | `string`                                               | The id of the radio group element.    |

### Returns

`void`

***

## value?

> `optional` **value**: `string` = `valueSchema`

The value of the radio group.

### Default Value

`undefined`

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
