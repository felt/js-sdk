***

The parameters for creating a grid container element.

See [UIGridContainerElement](UIGridContainerElement.md) for more details.

# Properties

## type

> **type**: `"Grid"`

***

## items

> **items**: ([`UIButtonElementCreate`](UIButtonElementCreate.md) | [`UITextElementCreate`](UITextElementCreate.md) | [`UIDividerElementCreate`](UIDividerElementCreate.md) | [`UITextInputElementCreate`](UITextInputElementCreate.md) | [`UISelectElementCreate`](UISelectElementCreate.md) | [`UIFlexibleSpaceElementCreate`](UIFlexibleSpaceElementCreate.md) | [`UIButtonRowElementCreate`](UIButtonRowElementCreate.md) | [`UICheckboxGroupElementCreate`](UICheckboxGroupElementCreate.md) | [`UIRadioGroupElementCreate`](UIRadioGroupElementCreate.md) | [`UIToggleGroupElementCreate`](UIToggleGroupElementCreate.md))\[]

The items to add to the grid container.

***

## grid?

> `optional` **grid**: `string`

The grid to use for the container.
It is the exact same as CSS's shorthand property `grid`.

### Example

### horizontal stack

two columns, the first column is 50px wide, the second column takes the remaining space

```typescript
{
  type: "Grid",
  grid: "auto-flow / 50px 1fr",
  items: [...]
}
```

### See

[https://developer.mozilla.org/en-US/docs/Web/CSS/grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) for more details.

***

## verticalAlignment?

> `optional` **verticalAlignment**: `"center"` | `"top"` | `"bottom"`

The alignment of the items in the grid.
Only takes effect on horizontal stacks.

### Default Value

`"top"`

***

## horizontalDistribution?

> `optional` **horizontalDistribution**: `"center"` | `"start"` | `"end"` | `"space-between"` | `"space-around"` | `"space-evenly"`

The distribution of the items in the grid.
Only takes effect on horizontal stacks.

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

## id?

> `optional` **id**: `string`

The ID of the element.

### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

### Default Value

`undefined`
