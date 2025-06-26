***

The parameters for updating a button element.

See [UIButtonElement](UIButtonElement.md) for more details.

# Remarks

`id` and `type` are required to identify the element to update.

# Properties

## type

> **type**: `"Button"`

***

## id

> **id**: `string`

The ID of the element.

***

## label?

> `optional` **label**: `string`

The label to display in the button.

***

## variant?

> `optional` **variant**: `"filled"` | `"transparent"` | `"outlined"` | `"transparentThin"` | `"outlinedThin"`

The style variant of the button.

* `"filled"`: a button with background.
  * `background` color is based on button's `tint` (defaults to `default` tint)
* `"transparent"`: a transparent button that gets a subtle dark background when hovered.
  * `text` color is based on button's `tint` (defaults to `default` tint)
* `"outlined"`: a transparent button with a border.
  * `text` and `border` colors are based on button's `tint` (defaults to `default` tint)

Thin variants: styles are the same as the regular variants, but with lighter font weight.

* `"transparentThin"`
* `"outlinedThin"`

### Default Value

`"filled"`

***

## tint?

> `optional` **tint**: `"default"` | `"primary"` | `"accent"` | `"danger"`

The tint of the button.

* `"primary"`: Felt's primary color (pink).
* `"default"`: Felt's theme-based light/dark colors.
* `"accent"`: Felt's accent color (blue).
* `"danger"`: Felt's danger color (red).

### Default Value

`"default"`

***

## disabled?

> `optional` **disabled**: `boolean`

Whether the button is disabled.

### Default Value

`false`

***

## onClick()?

> `optional` **onClick**: (`args`: \{ `id`: `string`; }) => `void`

The action to perform when the button is clicked.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the button.                 |

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
