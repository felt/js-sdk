***

Represents a panel in the UI.
It can be added to the map by using the [UiController.createOrUpdatePanel](UiController.md#createorupdatepanel) method.

A panel is a container for other UI elements.
It can have a title, a body, a footer as well as a close button.

The body and footer are arrays of UI elements and turn into vertical stacks of elements.

The close button is a button rendered in the top right corner of the panel that can be
used to close the panel and is only visible if `onClickClose` is provided.
Usually, you want to call [UiController.deletePanel](UiController.md#deletepanel) when the close button is clicked,
e.g. `onClickClose: () => felt.deletePanel("my-panel")`.

### Body

Body is the main content of the panel. It is scrollable which means
that it can contain a lot of elements.

### Footer

Footer is sticky to the bottom of the panel, and can be used to add actions to the panel (e.g. save, cancel, etc.).

# Examples

### basic

```typescript
{
  title: "My Panel",
  body: [
    { type: "Text", text: "Hello" },
  ],
}
```

### closable

````typescript
{
  id: "my-panel",
  title: "My Panel",
  onClickClose: () => felt.deletePanel("my-panel"),
}

@example
### form
```typescript
{
  title: "My Panel",
  body: [
    { type: "Text", text: "Introduce your name and last name" },
    { type: "TextInput", label: "Name", value: "", placeholder: "John", onChange: (value) => setName(value) },
    { type: "TextInput", label: "Last name", value: "", placeholder: "Doe", onChange: (value) => setLastName(value) },
  ],
  footer: [
    {
      type: "Grid",
      grid: "auto-flow / 1fr auto auto",
      items: [
        { type: "FlexibleSpace" }, // this will make the buttons to be aligned to the end of the panel
        { type: "Button", label: "Reset", onClick: () => alert("Reset") },
        { type: "Button", label: "Save", onClick: () => alert("Save") },
      ],
    },
  ],
}
````

# Properties

## type

> **type**: `"Panel"`

***

## id

> **id**: `string`

The ID of the panel obtained from [UiController.createPanelId](UiController.md#createpanelid).

### Remarks

Custom IDs are not supported.

***

## title?

> `optional` **title**: `string`

The title to display in the panel header.

***

## body?

> `optional` **body**: [`UIPanelElement`](UIPanelElement.md)\[]

The elements to add to the panel body.

***

## footer?

> `optional` **footer**: [`UIPanelElement`](UIPanelElement.md)\[]

The elements to add to the panel footer.

***

## onClickClose()?

> `optional` **onClickClose**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when panel's close button is clicked.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the panel.                  |

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
