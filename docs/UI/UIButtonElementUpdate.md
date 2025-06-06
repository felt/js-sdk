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

> `optional` **variant**: `"primary"` | `"outlined"` | `"transparent"` | `"transparentThin"`

The style variant of the button.

* `"primary"`: A solid button with Felt's primary background color (pink).
* `"outlined"`: A button with a border and no background color.
* `"transparent"`: A button with no background color and no border.
* `"transparentThin"`: Same as `transparent` but with lighter font weight.

### Default Value

`"primary"`

***

## disabled?

> `optional` **disabled**: `boolean`

Whether the button is disabled.

### Default Value

`false`

***

## onClick()?

> `optional` **onClick**: () => `void`

The action to perform when the button is clicked.

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
