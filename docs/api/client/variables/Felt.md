[**@feltjs/js-sdk**](../../README.md) • **Docs**

***

# Variable: Felt

> `const` **Felt**: `object`

The Felt SDK is a library for embedding Felt maps into your website,
allowing you to control and inspect the map programmatically.

## Type declaration

### embed()

Embeds a Felt map into the provided container.

#### Parameters

• **container**: `HTMLElement`

The container element to embed the map into.

• **mapId**: `string`

The ID of the map to embed.

• **options?**

The options to configure the map.

• **options.uiControls?** = `UiControlsOptionsSchema`

[UiControlsOptions](../../types/type-aliases/UiControlsOptions.md)

• **options.uiControls.showLegend?**: `boolean` = `...`

Whether or not the legend is shown.

**Default Value**

```ts
true
```

• **options.uiControls.cooperativeGestures?**: `boolean` = `...`

When co-operative gestures are enabled, the pan and zoom gestures are
adjusted to work better when the map is embedded in another page.

**Remarks**

On mobile devices, enabling co-operative gestures will allow the user to
pan past the embedded map with a single finger drag. To pan the map, they
must use two fingers.

On desktop devices, enabling co-operative gestures allows the user to
scroll past the embedded map using their scroll wheel or trackpad. To
zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while
scrolling.

**Default Value**

```ts
true
```

• **options.uiControls.fullScreenButton?**: `boolean` = `...`

Whether or not the full screen button is shown in an embedded map.

**Remarks**

When clicked, this will open the map in a new tab or window.

**Default Value**

```ts
true
```

• **options.uiControls.geolocation?**: `boolean` = `...`

Whether or not the geolocation button is shown in an embedded map.

**Remarks**

The geolocation feature will plot your position on the map. If you
click the button again, it will start tracking your position.

**Default Value**

```ts
false
```

• **options.uiControls.zoomControls?**: `boolean` = `...`

Whether or not the zoom controls are shown in an embedded map.

**Remarks**

This does not affect whether or not the map can be zoomed, just
the display of the zoom controls in the bottom right corner of the map.

**Default Value**

```ts
true
```

• **options.uiControls.scaleBar?**: `boolean` = `...`

Whether or not the scale bar is shown in an embedded map.

**Default Value**

```ts
true
```

• **options.initialViewport?** = `...`

[ViewportCenterZoom](../../types/type-aliases/ViewportCenterZoom.md)

• **options.initialViewport.center?** = `LatLng`

The center of the viewport in latitude and longitude.

• **options.initialViewport.center.latitude?**: `number` = `Latitude`

• **options.initialViewport.center.longitude?**: `number` = `Longitude`

• **options.initialViewport.zoom?**: `number` = `FeltZoom`

The zoom level of the viewport.

#### Returns

`Promise`\<[`FeltControllerWithIframe`](../../types/interfaces/FeltControllerWithIframe.md)\>

### connect()

Binds to an existing Felt map iframe.

#### Parameters

• **feltWindow**: `Window`

The iframe element containing the Felt map.

#### Returns

`Promise`\<[`FeltController`](../../types/interfaces/FeltController.md)\>
