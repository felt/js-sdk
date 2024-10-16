## Other

### GetLayerGroupsFilter

Re-exports [GetLayerGroupsFilter](Layers.md#getlayergroupsfilter)

### GetLayersFilter

Re-exports [GetLayersFilter](Layers.md#getlayersfilter)

### LayerChangeCallbackParams

Re-exports [LayerChangeCallbackParams](Layers.md#layerchangecallbackparams)

### LayerGroupChangeCallbackParams

Re-exports [LayerGroupChangeCallbackParams](Layers.md#layergroupchangecallbackparams)

### LayerProcessingStatus

Re-exports [LayerProcessingStatus](Layers.md#layerprocessingstatus)

### UiControlsOptions

Re-exports [UiControlsOptions](UI.md#uicontrolsoptions)

### SetViewportCenterZoomParams

Re-exports [SetViewportCenterZoomParams](Viewport.md#setviewportcenterzoomparams)

### ViewportCenterZoom

Re-exports [ViewportCenterZoom](Viewport.md#viewportcenterzoom)

### ViewportFitBoundsParams

Re-exports [ViewportFitBoundsParams](Viewport.md#viewportfitboundsparams)

### ViewportState

Re-exports [ViewportState](Viewport.md#viewportstate)

### ElementChangeCallbackParams

Re-exports [ElementChangeCallbackParams](Elements.md#elementchangecallbackparams)

### ElementGroupChangeCallbackParams

Re-exports [ElementGroupChangeCallbackParams](Elements.md#elementgroupchangecallbackparams)

### GetElementGroupsFilter

Re-exports [GetElementGroupsFilter](Elements.md#getelementgroupsfilter)

### GetElementsFilter

Re-exports [GetElementsFilter](Elements.md#getelementsfilter)

### FeltEmbedOptions

#### Properties

##### uiControls

> **uiControls**: `object` = `UiControlsOptionsSchema`

[UiControlsOptions](UI.md#uicontrolsoptions)

| Name                   | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showLegend`?          | `boolean` | Whether or not the legend is shown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cooperativeGestures`? | `boolean` | When co-operative gestures are enabled, the pan and zoom gestures are adjusted to work better when the map is embedded in another page. **Remarks** On mobile devices, enabling co-operative gestures will allow the user to pan past the embedded map with a single finger drag. To pan the map, they must use two fingers. On desktop devices, enabling co-operative gestures allows the user to scroll past the embedded map using their scroll wheel or trackpad. To zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while scrolling. |
| `fullScreenButton`?    | `boolean` | Whether or not the full screen button is shown in an embedded map. **Remarks** When clicked, this will open the map in a new tab or window.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `geolocation`?         | `boolean` | Whether or not the geolocation button is shown in an embedded map. **Remarks** The geolocation feature will plot your position on the map. If you click the button again, it will start tracking your position.                                                                                                                                                                                                                                                                                                                                                |
| `zoomControls`?        | `boolean` | Whether or not the zoom controls are shown in an embedded map. **Remarks** This does not affect whether or not the map can be zoomed, just the display of the zoom controls in the bottom right corner of the map.                                                                                                                                                                                                                                                                                                                                             |
| `scaleBar`?            | `boolean` | Whether or not the scale bar is shown in an embedded map.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

##### initialViewport?

> `optional` **initialViewport**: `object`

[ViewportCenterZoom](Viewport.md#viewportcenterzoom)

| Name               | Type     | Default value | Description                                           |
| ------------------ | -------- | ------------- | ----------------------------------------------------- |
| `center`           | `object` | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `center.latitude`  | `number` | Latitude      | -                                                     |
| `center.longitude` | `number` | Longitude     | -                                                     |
| `zoom`             | `number` | FeltZoom      | The zoom level of the viewport.                       |

## Types

### FeltZoom

> **FeltZoom**: `number`

The zoom level of the map.

It is a floating-point number between 1 and 23, where 1 is the most
zoomed out and 23 is the most zoomed in.

***

### FeltBoundary

> **FeltBoundary**: \[`number`, `number`, `number`, `number`]

The edges of the map in the form of a bounding box.

The boundary is a tuple of the form `[west, south, east, north]`.

## Visibility

### SetVisibilityRequest

The parameters for the methods that change the visibility of entities.

#### Properties

##### show?

> `optional` **show**: `string`\[]

The ids of the entities you want to change the visibility of.

##### hide?

> `optional` **hide**: `string`\[]
