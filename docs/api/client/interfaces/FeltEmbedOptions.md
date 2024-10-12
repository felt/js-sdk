## Extends

* `TypeOf`\<*typeof* `FeltEmbedOptionsSchema`>

## Properties

### uiControls

> **uiControls**: `object` = `UiControlsOptionsSchema`

[UiControlsOptions](../../types/interfaces/UiControlsOptions.md)

| Name                   | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showLegend`?          | `boolean` | Whether or not the legend is shown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cooperativeGestures`? | `boolean` | When co-operative gestures are enabled, the pan and zoom gestures are adjusted to work better when the map is embedded in another page. **Remarks** On mobile devices, enabling co-operative gestures will allow the user to pan past the embedded map with a single finger drag. To pan the map, they must use two fingers. On desktop devices, enabling co-operative gestures allows the user to scroll past the embedded map using their scroll wheel or trackpad. To zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while scrolling. |
| `fullScreenButton`?    | `boolean` | Whether or not the full screen button is shown in an embedded map. **Remarks** When clicked, this will open the map in a new tab or window.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `geolocation`?         | `boolean` | Whether or not the geolocation button is shown in an embedded map. **Remarks** The geolocation feature will plot your position on the map. If you click the button again, it will start tracking your position.                                                                                                                                                                                                                                                                                                                                                |
| `zoomControls`?        | `boolean` | Whether or not the zoom controls are shown in an embedded map. **Remarks** This does not affect whether or not the map can be zoomed, just the display of the zoom controls in the bottom right corner of the map.                                                                                                                                                                                                                                                                                                                                             |
| `scaleBar`?            | `boolean` | Whether or not the scale bar is shown in an embedded map.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Inherited from

`z.infer.uiControls`

***

### initialViewport?

> `optional` **initialViewport**: `object`

[ViewportCenterZoom](../../types/interfaces/ViewportCenterZoom.md)

| Name               | Type     | Default value | Description                                           |
| ------------------ | -------- | ------------- | ----------------------------------------------------- |
| `center`           | `object` | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `center.latitude`  | `number` | Latitude      | -                                                     |
| `center.longitude` | `number` | Longitude     | -                                                     |
| `zoom`             | `number` | FeltZoom      | The zoom level of the viewport.                       |

#### Inherited from

`z.infer.initialViewport`
