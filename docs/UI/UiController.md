***

The UI controller allows you to enable and disable UI controls on the
embedded map.

## Extended by

* [`FeltController`](../Main/FeltController.md)

## Methods

### updateUiControls()

> **updateUiControls**(`controls`: [`UiControlsOptions`](UiControlsOptions.md)): `void`

Updates the UI controls on the embedded map.

#### Parameters

| Parameter  | Type                                        | Description             |
| ---------- | ------------------------------------------- | ----------------------- |
| `controls` | [`UiControlsOptions`](UiControlsOptions.md) | The controls to update. |

#### Returns

`void`

***

### setOnMapInteractionsUi()

> **setOnMapInteractionsUi**(`options`: [`OnMapInteractionsOptions`](OnMapInteractionsOptions.md)): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

#### Parameters

| Parameter | Type                                                      |
| --------- | --------------------------------------------------------- |
| `options` | [`OnMapInteractionsOptions`](OnMapInteractionsOptions.md) |

#### Returns

`void`
