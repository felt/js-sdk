***

Represents a text element in a panel.
Markdown is supported.

# Examples

### simple

```typescript
{
  type: "Text",
  content: "Hello, world!",
}
```

### with links

```typescript
{
  type: "Text",
  content: "Fill the form https://www.google.com.",
}
```

### markdown

```typescript
{
  type: "Text",
  content: "**Hello**, _world_!",
}
```

### complex markdown

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
