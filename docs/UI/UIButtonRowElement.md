***

Represents a row of buttons.

It is useful to group buttons together and align them.

Unlike on [UIGridContainerElement](UIGridContainerElement.md), buttons do not expand to fill the container.
Instead, they use the space they need and are wrapped to the next line when they overflow.

## Alignment

It is possible to align the button row to the start or end of the container.

### Start alignment

```typescript
{
  type: "ButtonRow",
  align: "start", // default value
  items: [
    { type: "Button", label: "Button 1" },
    { type: "Button", label: "Button 2" },
  ],
}
```

### End alignment

```typescript
{
  type: "ButtonRow",
  align: "end",
  items: [
    { type: "Button", label: "Button 1" },
    { type: "Button", label: "Button 2" },
  ],
}
```

### Overflow

When buttons overflow the container, they are wrapped to the next line.

```typescript
{
  type: "ButtonRow",
  items: [
    { type: "Button", label: "Button with a very long text" },
    { type: "Button", label: "Button 2" },
    { type: "Button", label: "Button 3" },
  ],
}
```

### With Grid container

```typescript
{
  type: "Grid",
  rowItemsJustify: "space-between",
  items: [
    {
      type: "Text",
      text: "Do you want to save the changes?",
    },
    {
      type: "ButtonRow",
      items: [
        { type: "Button", variant: "transparent", label: "Cancel" },
        { type: "Button", variant: "filled", tint: "primary", label: "Save" },
      ],
    },
  ],
}

# Properties

## type

> **type**: `"ButtonRow"`

***

## items

> **items**: [`UIButtonElement`](UIButtonElement.md)[]

The items to add to the button row.

***

## id

> **id**: `string`

The ID of the element.

***

## align?

> `optional` **align**: `"start"` \| `"end"`

The alignment of the button row.

### Default Value

`"start"`

***

## onCreate()?

> `optional` **onCreate**: (`args`: \{ `id`: `string`; \}) => `void`

A function to call when the element is created.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `id`: `string`; \} | The arguments passed to the function. |
| `args.id` | `string` | The id of the element. |

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: (`args`: \{ `id`: `string`; \}) => `void`

A function to call when the element is destroyed.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `id`: `string`; \} | The arguments passed to the function. |
| `args.id` | `string` | The id of the element. |

### Returns

`void`
```
