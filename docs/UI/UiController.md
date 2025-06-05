***

The UI controller allows you to control various aspects of the Felt UI in your map.

This includes enabling/disabling UI controls, managing on-map interactions, and controlling
the visibility of UI components like the data table.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## createActionTrigger()

> **createActionTrigger**(`args`: [`CreateActionTriggerParams`](CreateActionTriggerParams.md)): `void`

Creates an action trigger.
Action triggers are rendered on map's left sidebar as a button,
similar to other map extensions like measure and spatial filter.

The goal of action triggers is to allow users to perform actions on the map
by clicking on a button.

### Parameters

| Parameter | Type                                                        | Description                   |
| --------- | ----------------------------------------------------------- | ----------------------------- |
| `args`    | [`CreateActionTriggerParams`](CreateActionTriggerParams.md) | The arguments for the method. |

### Returns

`void`

### Example

```typescript
await felt.createActionTrigger({
  actionTrigger: {
    id: "layerTurnPurple", // not required but useful for further updates
    label: "Turn layer purple",
    onClick: async () => {
      await felt.setLayerStyle("layer-1", { ..., paint: { color: "purple" } });
    },
    disabled: false, // optional, defaults to false
  },
  placement: { at: "start" }, // optional, defaults to { at: "end" }
});
```

***

## updateActionTrigger()

> **updateActionTrigger**(`args`: [`UpdateActionTriggerParams`](UpdateActionTriggerParams.md)): `void`

Updates an action trigger.

Action trigger to update is identified by the `id` property.

### Parameters

| Parameter | Type                                                        | Description                   |
| --------- | ----------------------------------------------------------- | ----------------------------- |
| `args`    | [`UpdateActionTriggerParams`](UpdateActionTriggerParams.md) | The action trigger to update. |

### Returns

`void`

### Remarks

Properties provided will override the existing properties.

### Example

```typescript
await felt.updateActionTrigger({
  id: "layerTurnPurple",
  label: "Turn layer points purple", // only label changes
});
```

***

## deleteActionTrigger()

> **deleteActionTrigger**(`id`: `string`): `void`

Deletes an action trigger.

### Parameters

| Parameter | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| `id`      | `string` | The id of the action trigger to delete. |

### Returns

`void`

### Example

```typescript
await felt.deleteActionTrigger("layerTurnPurple");
```

***

## createPanel()

> **createPanel**(`args`: [`CreatePanelParams`](CreatePanelParams.md)): `void`

Creates a panel on map's right sidebar.

Panels are useful to extend Felt UI for your own use cases (e.g. a form, a settings panel, etc.)
by using Felt UI elements (e.g. Text, Button, etc.). This way the user experience is consistent
with the rest of Felt.

Panels have two sections:

* `body` - Body of the panel, scrollable.
* `footer` - It sticks to the bottom of the panel, useful to add submit buttons.

By default, the panel will be added to the end of the stack but you can
specify a placement to add it at a specific position in the stack.

Once created, you can add elements to the panel by using the [createPanelElements](UiController.md#createpanelelements) method or
perform partial updates of elements by using the [updatePanelElements](UiController.md#updatepanelelements) method.

When adding a panel, its id is optional as well as its elements' ids.
It is recommended to provide an id for the panel and its elements to make
it easier to update or delete them later.

### Parameters

| Parameter | Type                                        | Description                   |
| --------- | ------------------------------------------- | ----------------------------- |
| `args`    | [`CreatePanelParams`](CreatePanelParams.md) | The arguments for the method. |

### Returns

`void`

### Example

```typescript
await felt.createPanel({
   panel: {
      id: "panel-1", // not required but useful for further updates
      title: "My Panel",
      body: [
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
```

***

## updatePanel()

> **updatePanel**(`panel`: [`UpdatePanelParams`](UpdatePanelParams.md)): `void`

Updates a panel.

Panel to update is identified by the `id` property.

### Parameters

| Parameter | Type                                        | Description          |
| --------- | ------------------------------------------- | -------------------- |
| `panel`   | [`UpdatePanelParams`](UpdatePanelParams.md) | The panel to update. |

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
```

***

## deletePanel()

> **deletePanel**(`id`: `string`): `void`

Deletes a panel.

### Parameters

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `id`      | `string` | The id of the panel to delete. |

### Returns

`void`

### Example

```typescript
await felt.deletePanel("panel-1");
```

***

## createPanelElements()

> **createPanelElements**(`args`: [`CreatePanelElementsParams`](CreatePanelElementsParams.md)): `void`

Creates elements in a panel.

### Parameters

| Parameter | Type                                                        | Description                   |
| --------- | ----------------------------------------------------------- | ----------------------------- |
| `args`    | [`CreatePanelElementsParams`](CreatePanelElementsParams.md) | The arguments for the method. |

### Returns

`void`

### Example

```typescript
await felt.createPanelElements({
  panelId: "panel-1",
  elements: [
    {
      element: { type: "Text", content: "Hello, world!" },
      container: "body",
      placement: { at: "start" },
    },
  ],
});
```

***

## updatePanelElements()

> **updatePanelElements**(`args`: [`UpdatePanelElementsParams`](UpdatePanelElementsParams.md)): `void`

Updates an element in a panel.

### Parameters

| Parameter | Type                                                        | Description                   |
| --------- | ----------------------------------------------------------- | ----------------------------- |
| `args`    | [`UpdatePanelElementsParams`](UpdatePanelElementsParams.md) | The arguments for the method. |

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

> **deletePanelElements**(`args`: [`DeletePanelElementsParams`](DeletePanelElementsParams.md)): `void`

Deletes elements from a panel.

### Parameters

| Parameter | Type                                                        | Description                   |
| --------- | ----------------------------------------------------------- | ----------------------------- |
| `args`    | [`DeletePanelElementsParams`](DeletePanelElementsParams.md) | The arguments for the method. |

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
