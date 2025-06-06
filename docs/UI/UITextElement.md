***

Represents a text element in a panel.
Markdown is supported.

# Examples

```typescript
{
  type: "Text",
  content: "Hello, world!",
}
```

```typescript
{
  type: "Text",
  content: "Fill the form https://www.google.com.",
}
```

```typescript
{
  type: "Text",
  content: "**Hello**, _world_!",
}
```

Complex markdown syntax is supported like tables, images, quotes, etc.

```typescript
{
  type: "Text",
  content: `

# Heading

This is a paragraph.

## Subheading

This is a paragraph.

| Name | Age |
| ---- | --- |
| John | 25 |
| Jane | 30 |

![Image](https://via.placeholder.com/150)

> This is a quote.

[Link](https://www.google.com)
`,
}
```

# Properties

## type

> **type**: `"Text"`

***

## content

> **content**: `string`

The text to display in the element.

***

## id

> **id**: `string`

The ID of the element.

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
