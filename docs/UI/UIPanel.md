***

Represents a panel in the UI.
It can be added to the map by using the [UiController.createPanel](UiController.md#createpanel) method.

A panel is a container for other UI elements.
It can have a title, a body, a footer as well as a close button.

The body and footer are arrays of UI elements and turn into vertical stacks of elements.
The close button is a button that can be used to close the panel.

### Body

Body is the main content of the panel. It is scrollable which means
that it can contain a lot of elements.

### Footer

Footer is sticky to the bottom of the panel, and can be used to add actions to the panel (e.g. save, cancel, etc.).
Normally, it should contain a `ButtonGroup` element with a `Cancel` and `Save` button. Using `ButtonGroup` is recommended
because it will automatically align the buttons to the end of the panel giving it a nice look.

# Examples

```typescript
{
  title: "My Panel",
  body: [
    { type: "Text", text: "Hello" },
  ],
});
```

```typescript
{
  title: "My Panel",
  body: [
    { type: "Text", text: "Introduce your name and last name" },
    { type: "TextInput", label: "Name", value: "", placeholder: "John", onChange: (value) => setName(value) },
    { type: "TextInput", label: "Last name", value: "", placeholder: "Doe", onChange: (value) => setLastName(value) },
  ],
  footer: [
    { type: "ButtonGroup", items: [
      { type: "Button", label: "Reset", onClick: () => alert("Reset") },
      { type: "Button", label: "Save", onClick: () => alert("Save") },
    ] },
  ],
});
```

# Properties

## type

> **type**: `"Panel"`

***

## body

> **body**: [`UIPanelElements`](UIPanelElements.md)\[]

The elements to add to the panel body.

***

## id

> **id**: `string`

The ID of the element.

***

## title?

> `optional` **title**: `string`

The title to display in the panel header.

***

## footer?

> `optional` **footer**: [`UIPanelElements`](UIPanelElements.md)\[]

The elements to add to the panel footer.

***

## onClose()?

> `optional` **onClose**: () => `void`

A function to call when panel's close button is clicked.

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
