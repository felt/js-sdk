## Other

### GetLayerGroupsFilter

Re-exports [GetLayerGroupsFilter](modules/layers/types.md#getlayergroupsfilter)

### GetLayersFilter

Re-exports [GetLayersFilter](modules/layers/types.md#getlayersfilter)

### LayerChangeCallbackParams

Re-exports [LayerChangeCallbackParams](modules/layers/types.md#layerchangecallbackparams)

### LayerGroupChangeCallbackParams

Re-exports [LayerGroupChangeCallbackParams](modules/layers/types.md#layergroupchangecallbackparams)

### LayerProcessingStatus

Re-exports [LayerProcessingStatus](modules/layers/types.md#layerprocessingstatus)

### UiControlsOptions

Re-exports [UiControlsOptions](modules/ui/types.md#uicontrolsoptions)

### SetViewportCenterZoomParams

Re-exports [SetViewportCenterZoomParams](modules/viewport/types.md#setviewportcenterzoomparams)

### ViewportCenterZoom

Re-exports [ViewportCenterZoom](modules/viewport/types.md#viewportcenterzoom)

### ViewportFitBoundsParams

Re-exports [ViewportFitBoundsParams](modules/viewport/types.md#viewportfitboundsparams)

### ViewportState

Re-exports [ViewportState](modules/viewport/types.md#viewportstate)

### ElementChangeCallbackParams

Re-exports [ElementChangeCallbackParams](modules/elements/types.md#elementchangecallbackparams)

### ElementGroupChangeCallbackParams

Re-exports [ElementGroupChangeCallbackParams](modules/elements/types.md#elementgroupchangecallbackparams)

### GetElementGroupsFilter

Re-exports [GetElementGroupsFilter](modules/elements/types.md#getelementgroupsfilter)

### GetElementsFilter

Re-exports [GetElementsFilter](modules/elements/types.md#getelementsfilter)

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

#### Extends

* `TypeOf`\<*typeof* `SetVisibilityRequestSchema`>

#### Properties

##### show?

> `optional` **show**: `string`\[]

The ids of the entities you want to change the visibility of.

###### Inherited from

`z.infer.show`

##### hide?

> `optional` **hide**: `string`\[]

###### Inherited from

`z.infer.hide`
