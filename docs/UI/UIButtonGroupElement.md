***

Represents a button group element in a panel.
A button group is an horizontal container of buttons and text elements.

# Example

Thanks to the FlexibleSpace element, button 1 and text 1 are aligned to the start of the panel,
while button 2 is aligned to the end.

```typescript
{
  type: "ButtonGroup",
  items: [
    { type: "Button", label: "Button 1", onClick: () => {} },
    { type: "Text", content: "Text 1" },
    { type: "FlexibleSpace" },
    { type: "Button", label: "Button 2", onClick: () => {} },
  ],
}
```

# Properties

## type

> **type**: `"ButtonGroup"`

***

## items

> **items**: ([`UIFlexibleSpaceElement`](UIFlexibleSpaceElement.md) | [`UIButtonElement`](UIButtonElement.md) | [`UITextElement`](UITextElement.md))\[]

The items to add to the button group.

***

## id

> **id**: `string`

The ID of the element.

***

## align?

> `optional` **align**: `"start"` | `"end"`

The alignment of the button group.

### Default Value

`"end"`

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
