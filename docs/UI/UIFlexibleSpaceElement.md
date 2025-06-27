***

Represents a flexible space element in a container.

When rendered...

* inside [UIGridContainerElement](UIGridContainerElement.md), it will add extra gap between items. It can be controlled by `grid` property.
* inside [UIPanelElement](UIPanelElement.md) `body` or `footer`, since they work as vertically stacks, it will add extra gap between items.
* inside [UIButtonGroupElement](UIButtonGroupElement.md), it will take the remaining space.

# Examples

Buttons with a flexible space between makes them more visually separated.

```typescript
{
  type: "ButtonGroup",
  items: [
    { type: "Button", label: "Button 1", onClick: () => {} },
    { type: "FlexibleSpace" },
    { type: "Button", label: "Button 2", onClick: () => {} },
  ],
}
```

Paragraphs with a flexible space between makes them more visually separated.

```typescript
{
  type: "Panel",
  body: [
    { type: "Paragraph", text: "Paragraph 1" },
    { type: "FlexibleSpace" },
    { type: "Paragraph", text: "Paragraph 2" },
  ],
}
```

Horizontal stack of buttons with a flexible space between makes them more visually separated.

```typescript
{
  type: "Grid",
  grid: "auto-flow / auto 1fr auto",
  items: [
    { type: "Button", label: "Button 1", onClick: () => {} },
    { type: "FlexibleSpace" },
    { type: "Button", label: "Button 2", onClick: () => {} },
  ],
}
```

# Properties

## type

> **type**: `"FlexibleSpace"`

***

## id

> **id**: `string`

The ID of the element.

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
