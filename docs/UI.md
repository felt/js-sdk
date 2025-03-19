***

The UI part of the Felt SDK allows you to enable and disable certain
UI features such as the legend and the full screen button.

# UiControlsOptions

## Properties

### showLegend?

> `optional` **showLegend**: `boolean`

Whether or not the legend is shown.

#### Default Value

```ts
true
```

### cooperativeGestures?

> `optional` **cooperativeGestures**: `boolean`

When co-operative gestures are enabled, the pan and zoom gestures are
adjusted to work better when the map is embedded in another page.

#### Remarks

On mobile devices, enabling co-operative gestures will allow the user to
pan past the embedded map with a single finger drag. To pan the map, they
must use two fingers.

On desktop devices, enabling co-operative gestures allows the user to
scroll past the embedded map using their scroll wheel or trackpad. To
zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while
scrolling.

#### Default Value

```ts
true
```

### fullScreenButton?

> `optional` **fullScreenButton**: `boolean`

Whether or not the full screen button is shown in an embedded map.

#### Remarks

When clicked, this will open the map in a new tab or window.

#### Default Value

```ts
true
```

### geolocation?

> `optional` **geolocation**: `boolean`

Whether or not the geolocation button is shown in an embedded map.

#### Remarks

The geolocation feature will plot your position on the map. If you
click the button again, it will start tracking your position.

#### Default Value

```ts
false
```

### zoomControls?

> `optional` **zoomControls**: `boolean`

Whether or not the zoom controls are shown in an embedded map.

#### Remarks

This does not affect whether or not the map can be zoomed, just
the display of the zoom controls in the bottom right corner of the map.

#### Default Value

```ts
true
```

### scaleBar?

> `optional` **scaleBar**: `boolean`

Whether or not the scale bar is shown in an embedded map.

#### Default Value

```ts
true
```

***

# OnMapInteractionsOptions

The options for which parts of the Felt UI can be shown when interacting with
features and elements on the map.

Switching these off can be useful if you add your own click, selection or hover
handlers for features and elements.

## Properties

### featureSelectPanel?

> `optional` **featureSelectPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a selected
feature from being shown.

### featureHoverPanel?

> `optional` **featureHoverPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a hovered
feature from being shown.

### elementSelectPanel?

> `optional` **elementSelectPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a selected
element from being shown.

### linkClickOpen?

> `optional` **linkClickOpen**: `boolean`

Set this to `false` to prevent clicking on a map link element from opening that link
in a new tab or window.

### imageLightboxOpen?

> `optional` **imageLightboxOpen**: `boolean`

Set this to `false` to prevent clicking on an image element from opening the image
in a lightbox.

***

# UiController

The UI controller allows you to enable and disable UI controls on the
embedded map.

## Extended by

- [`FeltController`](Main.md#feltcontroller)

## Methods

### updateUiControls()

> **updateUiControls**(`controls`: [`UiControlsOptions`](#uicontrolsoptions)): `void`

Updates the UI controls on the embedded map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `controls` | [`UiControlsOptions`](#uicontrolsoptions) | The controls to update. |

#### Returns

`void`

### setOnMapInteractionsUi()

> **setOnMapInteractionsUi**(`options`: [`OnMapInteractionsOptions`](#onmapinteractionsoptions)): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OnMapInteractionsOptions`](#onmapinteractionsoptions) |

#### Returns

`void`
