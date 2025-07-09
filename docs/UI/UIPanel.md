***

A UI panel that can be added to the map using [UiController.createOrUpdatePanel](UiController.md#createorupdatepanel).

Panels are containers for UI elements with title, body, footer, and close button.
Body and footer elements are arranged in vertical stacks.

### Body

Main content area that scrolls when content exceeds available space.

### Footer

Sticky bottom section for action buttons (e.g., Save, Cancel).

### Close Button

Optional close icon in header. When `onClickClose` is provided, you must handle
panel cleanup and removal.

# Example

```typescript
// 1. Create panel ID
const panelId = await felt.createPanelId();

// 2. Create panel with close button and footer
await felt.createOrUpdatePanel({
  panel: {
    id: panelId,
    title: "My Panel",
    body: [
      { type: "Text", content: "Hello, world!" },
      { type: "TextInput", label: "Name", placeholder: "Enter your name" }
    ],
    footer: [
      {
        type: "ButtonRow",
        align: "end",
        items: [
          { type: "Button", label: "Cancel", onClick: () => handleCancel() },
          { type: "Button", label: "Save", onClick: () => handleSave() }
        ]
      }
    ],
    onClickClose: (args) => {
      // Clean up any state or resources
      cleanupResources();
      // Close the panel
      felt.deletePanel(panelId);
    }
  }
});
```

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
