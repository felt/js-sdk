***

The UI controller allows you to control various aspects of the Felt UI in your map.

This includes enabling/disabling UI controls, managing on-map interactions, and controlling
the visibility of UI components like the data table.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## addPanel()

> **addPanel**(`args`: [`AddPanelInput`](AddPanelInput.md)): `void`

Adds a panel.
Panels are rendered on the right side of the map.

By default, the panel will be added to the end of the stack but you can
specify a placement to add it at a specific position in the stack.

When adding a panel, its id is optional as well as its elements' ids.
It is recommended to provide an id for the panel and its elements to make
it easier to update or delete them later.

Panels have two sections:

* `items` - Body of the panel, scrollable.
* `footer` - It sticks to the bottom of the panel, useful to add submit buttons.

### Parameters

| Parameter | Type                                | Description                   |
| --------- | ----------------------------------- | ----------------------------- |
| `args`    | [`AddPanelInput`](AddPanelInput.md) | The arguments for the method. |

### Returns

`void`

### Example

````typescript
await felt.addPanel({
   panel: {
      id: "panel-1", // not required but useful for further updates
      title: "My Panel",
      items: [
         {
            type: "Text",
            content: "Hello, world!",
         },
         {
            type: "TextInput",
            label: "Name",
            placeholder: "Enter your name",
            value: "",
            onChange: ({ value }) => setName(value),
         },
      ],
      footer: [
         {
            type: "Button",
            label: "Submit",
            onClick: () => submitForm(),
         },
      ],
   },
   placement: { at: "start" }, // add the panel to the start of the stack
});

***

## updatePanel()

> **updatePanel**(`panel`: [`UpdatePanelElementInput`](UpdatePanelElementInput.md)): `void`

Updates a panel.

Panel to update is identified by the `id` property.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `panel` | [`UpdatePanelElementInput`](UpdatePanelElementInput.md) | The panel to update. |

### Returns

`void`

### Remarks

Properties provided will override the existing properties.
Override is done at Panel level, so if you want to update a specific element,
you need to provide the entire element. For partial updates of elements, use
[updatePanelElements](UiController.md#updatepanelelements) instead.

### Example

```typescript
await felt.updatePanel({
  id: "panel-1",
  title: "A new title for my panel", // only title changes
});

***

## deletePanel()

> **deletePanel**(`id`: `string`): `void`

Deletes a panel.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the panel to delete. |

### Returns

`void`

### Example

```typescript
await felt.deletePanel("panel-1");
````

***

## addPanelElements()

> **addPanelElements**(`args`: [`AddPanelElementsInput`](AddPanelElementsInput.md)): `void`

Adds elements to a panel.

### Parameters

| Parameter | Type                                                | Description                   |
| --------- | --------------------------------------------------- | ----------------------------- |
| `args`    | [`AddPanelElementsInput`](AddPanelElementsInput.md) | The arguments for the method. |

### Returns

`void`

### Example

```typescript
await felt.addPanelElements({
  panelId: "panel-1",
  elements: [
    {
      element: { type: "Text", content: "Hello, world!" },
      on: "items",
      placement: { at: "start" },
    },
  ],
});
```

***

## updatePanelElements()

> **updatePanelElements**(`args`: [`UpdatePanelElementsInput`](UpdatePanelElementsInput.md)): `void`

Updates an element in a panel.

### Parameters

| Parameter | Type                                                      | Description                   |
| --------- | --------------------------------------------------------- | ----------------------------- |
| `args`    | [`UpdatePanelElementsInput`](UpdatePanelElementsInput.md) | The arguments for the method. |

### Returns

`void`

### Example

```typescript
await felt.updatePanelElements({
  panelId: "panel-1",
  elements: {
    "element-1": { type: "Text", content: "Hello, world!" },
  },
});
```

***

## deletePanelElements()

> **deletePanelElements**(`args`: [`DeletePanelElements`](DeletePanelElements.md)): `void`

Deletes elements from a panel.

### Parameters

| Parameter | Type                                            | Description                   |
| --------- | ----------------------------------------------- | ----------------------------- |
| `args`    | [`DeletePanelElements`](DeletePanelElements.md) | The arguments for the method. |

### Returns

`void`

### Example

```typescript
await felt.deletePanelElements({
  panelId: "panel-1",
  elements: ["element-1", "element-2"],
});
```

***

## updateUiControls()

> **updateUiControls**(`controls`: [`UiControlsOptions`](UiControlsOptions.md)): `void`

Updates the UI controls on the embedded map.

### Parameters

| Parameter  | Type                                        | Description             |
| ---------- | ------------------------------------------- | ----------------------- |
| `controls` | [`UiControlsOptions`](UiControlsOptions.md) | The controls to update. |

### Returns

`void`

### Example

```typescript
// Show some UI controls
await felt.updateUiControls({
  showLegend: true,
  fullScreenButton: true,
});

// Disable some UI options
await felt.updateUiControls({
  cooperativeGestures: false,
  geolocation: false,
});
```

***

## setOnMapInteractionsUi()

> **setOnMapInteractionsUi**(`options`: [`OnMapInteractionsOptions`](OnMapInteractionsOptions.md)): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

### Parameters

| Parameter | Type                                                      |
| --------- | --------------------------------------------------------- |
| `options` | [`OnMapInteractionsOptions`](OnMapInteractionsOptions.md) |

### Returns

`void`

### Example

```typescript
// Disable UI when hovering or selecting features
await felt.setOnMapInteractionsUi({
  featureSelectPanel: false,
  featureHoverPanel: false,
});
```

***

## showLayerDataTable()

> **showLayerDataTable**(`params`?: \{ `layerId`: `string`; `sorting`: [`SortConfig`](../Shared/SortConfig.md); }): `Promise`\<`void`>

Shows a data table view for the specified layer, optionally sorted by a given attribute.

### Parameters

| Parameter         | Type                                                                          |
| ----------------- | ----------------------------------------------------------------------------- |
| `params`?         | \{ `layerId`: `string`; `sorting`: [`SortConfig`](../Shared/SortConfig.md); } |
| `params.layerId`? | `string`                                                                      |
| `params.sorting`? | [`SortConfig`](../Shared/SortConfig.md)                                       |

### Returns

`Promise`\<`void`>

### Example

```typescript
// Show data table with default sorting
await felt.showLayerDataTable({
  layerId: "layer-1",
});

// Show data table sorted by height in descending order
await felt.showLayerDataTable({
  layerId: "layer-1",
  sorting: {
    attribute: "height",
    direction: "desc",
  },
});

// Show the data table pane with no table visible
await felt.showLayerDataTable();
```

***

## hideLayerDataTable()

> **hideLayerDataTable**(): `Promise`\<`void`>

Hides the data table.

### Returns

`Promise`\<`void`>

### Example

```typescript
await felt.hideLayerDataTable();
```
