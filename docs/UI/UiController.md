***

The UI controller allows you to control various aspects of the Felt UI in your embedded map.

This includes enabling/disabling UI controls, managing on-map interactions, and controlling
the visibility of UI components like the data table.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

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
