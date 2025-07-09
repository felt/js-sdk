***

The UI controller allows you to control various aspects of the Felt UI in your map.

This includes enabling/disabling UI controls, managing on-map interactions, and controlling
the visibility of UI components like the data table.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## createActionTrigger()

> **createActionTrigger**(`args`: [`CreateActionTriggerParams`](CreateActionTriggerParams.md)): `Promise`\<[`UIActionTriggerCreate`](UIActionTriggerCreate.md)>

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

`Promise`\<[`UIActionTriggerCreate`](UIActionTriggerCreate.md)>

### Example

```typescript
await felt.createActionTrigger({
  actionTrigger: {
    id: "enablePolygonTool", // optional. Required if you want to update the action trigger later
    label: "Draw polygon",
    onTrigger: async () => {
      felt.setTool("polygon");
    },
    disabled: false, // optional, defaults to false
  },
  placement: { at: "start" }, // optional, defaults to { at: "end" }
});
```

***

## updateActionTrigger()

> **updateActionTrigger**(`args`: [`UpdateActionTriggerParams`](UpdateActionTriggerParams.md)): `Promise`\<[`UIActionTriggerCreate`](UIActionTriggerCreate.md)>

Updates an action trigger.

Action trigger to update is identified by the `id` property.

### Parameters

| Parameter | Type                                                        | Description                   |
| --------- | ----------------------------------------------------------- | ----------------------------- |
| `args`    | [`UpdateActionTriggerParams`](UpdateActionTriggerParams.md) | The action trigger to update. |

### Returns

`Promise`\<[`UIActionTriggerCreate`](UIActionTriggerCreate.md)>

### Remarks

Properties provided will override the existing properties.

### Example

```typescript
await felt.updateActionTrigger({
  id: "enablePolygonTool",
  label: "Enable polygon tool", // only label changes
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
await felt.deleteActionTrigger("enablePolygonTool");
```

***

## createPanelId()

> **createPanelId**(): `Promise`\<`string`>

Creates a panel ID.

In order to create a panel using [createOrUpdatePanel](UiController.md#createorupdatepanel), you need to create a panel ID first.

### Returns

`Promise`\<`string`>

### Example

```typescript
const panelId = await felt.createPanelId();
```

***

## createOrUpdatePanel()

> **createOrUpdatePanel**(`args`: [`CreateOrUpdatePanelParams`](CreateOrUpdatePanelParams.md)): `Promise`\<[`UIPanel`](UIPanel.md)>

Creates or updates a panel.

Panels are rendered on the map's right sidebar and allow you to extend Felt UI
for your own use cases using Felt UI elements (e.g., Text, Button, etc.).

A panel is identified by its ID, which must be created using [createPanelId](UiController.md#createpanelid).
Custom IDs are not supported to prevent conflicts with other panels.

Panels have two main sections:

* `body` - The main content area of the panel, which is scrollable.
* `footer` - A section that sticks to the bottom of the panel, useful for
  action buttons like "Submit" or "Cancel".

Panel placement is controlled by the `initialPlacement` parameter. By default,
panels are added to the end of the panel stack, but you can specify a different
placement. Note that this placement cannot be changed after the panel is created.

Element IDs are required for targeted updates and deletions using the other
panel management methods. For complete panel refreshes with this method,
element IDs are optional but recommended for consistency.

For dynamic content management, consider these approaches:

* Use this method for complete panel refreshes (replaces all content)
* Use [createPanelElements](UiController.md#createpanelelements) to add new elements to existing panels
* Use [updatePanelElements](UiController.md#updatepanelelements) to modify specific existing elements
* Use [deletePanelElements](UiController.md#deletepanelelements) to remove specific elements

### Parameters

| Parameter | Type                                                        | Description                                       |
| --------- | ----------------------------------------------------------- | ------------------------------------------------- |
| `args`    | [`CreateOrUpdatePanelParams`](CreateOrUpdatePanelParams.md) | The arguments for creating or updating the panel. |

### Returns

`Promise`\<[`UIPanel`](UIPanel.md)>

### Example

```typescript
// 1. Create panel ID first (required)
const panelId = await felt.createPanelId();

// 2. Define reusable elements
const SELECT = { id: "layer-select", type: "Select", label: "Layer", options: [...] };
const ANALYZE_BTN = { id: "analyze-btn", type: "Button", label: "Analyze", onClick: handleAnalyze };
const STATUS_TEXT = { id: "status-text", type: "Text", content: "" };
const CLEAR_BTN = { id: "clear-btn", type: "Button", label: "Clear", onClick: handleClear };

// 3. Initial state
await felt.createOrUpdatePanel({
  panel: { id: panelId, title: "Data Analyzer", body: [SELECT, ANALYZE_BTN] }
});

// 4. Loading state (replaces entire panel)
await felt.createOrUpdatePanel({
  panel: {
    id: panelId,
    title: "Data Analyzer",
    body: [SELECT, ANALYZE_BTN, { ...STATUS_TEXT, content: "Loading..." }]
  }
});

// 5. Results state (replaces entire panel)
await felt.createOrUpdatePanel({
  panel: {
    id: panelId,
    title: "Data Analyzer",
    body: [SELECT, ANALYZE_BTN, { ...STATUS_TEXT, content: "**Results:**\n- Found 150 features" }, CLEAR_BTN]
  }
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

> **createPanelElements**(`args`: [`CreatePanelElementsParams`](CreatePanelElementsParams.md)): `Promise`\<[`UIPanel`](UIPanel.md)>

Creates elements in a panel.

### Parameters

| Parameter | Type                                                        | Description                   |
| --------- | ----------------------------------------------------------- | ----------------------------- |
| `args`    | [`CreatePanelElementsParams`](CreatePanelElementsParams.md) | The arguments for the method. |

### Returns

`Promise`\<[`UIPanel`](UIPanel.md)>

### Example

```typescript
await felt.createPanelElements({
  panelId,
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

> **updatePanelElements**(`args`: [`UpdatePanelElementsParams`](UpdatePanelElementsParams.md)): `Promise`\<[`UIPanel`](UIPanel.md)>

Updates an existing element in a panel. This method can only update elements that
already exist in the panel and have an ID.

### Parameters

| Parameter | Type                                                        | Description                   |
| --------- | ----------------------------------------------------------- | ----------------------------- |
| `args`    | [`UpdatePanelElementsParams`](UpdatePanelElementsParams.md) | The arguments for the method. |

### Returns

`Promise`\<[`UIPanel`](UIPanel.md)>

### Example

```typescript
// 1. Create panel with initial elements
const panelId = await felt.createPanelId();
const STATUS_TEXT = { id: "status-text", type: "Text", content: "Ready" };

await felt.createOrUpdatePanel({
  panel: {
    id: panelId,
    title: "My Panel",
    body: [STATUS_TEXT]
  }
});

// 2. Update the existing element
await felt.updatePanelElements({
  panelId,
  elements: [
    {
      element: {
        ...STATUS_TEXT,                    // Reuse the same element structure
        content: "Updated content"         // Only change what needs updating
      },
    },
  ],
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
  panelId,
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
