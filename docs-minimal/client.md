## Other

### ElementsController

The Elements controller allows you to get information about the elements on the
map, and make changes to their visibility.

#### Extended by

* [`FeltController`](client.md#feltcontroller)

#### Methods

##### getElement()

> **getElement**(`id`): `Promise`\<`null` | [`Element`](client.md#element-1)>

Get a single element from the map by its id.

###### Parameters

###### id

`string`

The id of the element you want to get.

###### Returns

`Promise`\<`null` | [`Element`](client.md#element-1)>

The requested element.

###### Example

```typescript
const element = await felt.getElement("element-1");
```

##### getElementGeometry()

> **getElementGeometry**(`id`): `Promise`\<`null` | [`GeoJsonGeometry`](client.md#geojsongeometry)>

Get the geometry of an element in GeoJSON geometry format.

For most element types, the geometry returned is based on the `coordinates`
property of the element, with some differences:

* For Circle elements, the geometry is a Polygon drawn from the `center` and
  `radius` properties.

* Path elements become MultiLineString geometries.

* Marker elements return a MultiLineString of the path traced by the user
  as they drew the marker. Note that this is not the polygon formed by filled-in
  "pen" stroke, which doesn't exactly follow the path traced by the user as it
  is smoothed and interpolated to create a continuous line.

* Text, Note and Image elements do not return geometry, so will return `null`.

###### Parameters

###### id

`string`

The id of the element you want to get the geometry of.

###### Returns

`Promise`\<`null` | [`GeoJsonGeometry`](client.md#geojsongeometry)>

###### Example

```typescript
const geometry = await felt.getElementGeometry("element-1");
console.log(geometry?.type, geometry?.coordinates);
```

##### getElements()

> **getElements**(`constraint`?): `Promise`\<(`null` | [`Element`](client.md#element-1))\[]>

Gets elements from the map, according to the constraints supplied. If no
constraints are supplied, all elements will be returned.

###### Parameters

###### constraint?

[`GetElementsConstraint`](client.md#getelementsconstraint)

The constraints to apply to the elements returned from the map.

###### Returns

`Promise`\<(`null` | [`Element`](client.md#element-1))\[]>

All elements on the map.

###### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

###### Example

```typescript
const elements = await felt.getElements();
```

##### getElementGroup()

> **getElementGroup**(`id`): `Promise`\<`null` | [`ElementGroup`](client.md#elementgroup)>

Get an element group from the map by its id.

###### Parameters

###### id

`string`

###### Returns

`Promise`\<`null` | [`ElementGroup`](client.md#elementgroup)>

The requested element group.

###### Example

```typescript
const elementGroup = await felt.getElementGroup("element-group-1");
```

##### getElementGroups()

> **getElementGroups**(`constraint`?): `Promise`\<(`null` | [`ElementGroup`](client.md#elementgroup))\[]>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

###### Parameters

###### constraint?

[`GetElementGroupsConstraint`](client.md#getelementgroupsconstraint)

The constraints to apply to the element groups returned from the map.

###### Returns

`Promise`\<(`null` | [`ElementGroup`](client.md#elementgroup))\[]>

The requested element groups.

###### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

##### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show element groups with the given ids.

###### Parameters

###### visibility

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

##### createElement()

> **createElement**(`element`): `Promise`\<[`Element`](client.md#element-1)>

Create a new element on the map.

###### Parameters

###### element

`ElementCreate`

###### Returns

`Promise`\<[`Element`](client.md#element-1)>

###### Example

```typescript
const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
```

##### updateElement()

> **updateElement**(`element`): `Promise`\<[`Element`](client.md#element-1)>

Update an element on the map.

###### Parameters

###### element

`ElementUpdate`

###### Returns

`Promise`\<[`Element`](client.md#element-1)>

###### Example

```typescript
// Update a place element's coordinates
await felt.updateElement({
  id: "element-1",
  coordinates: [10, 20]
});

// Update a polygon's style
await felt.updateElement({
  id: "element-2",
  color: "#ABC123",
  fillOpacity: 0.5
});
```

##### deleteElement()

> **deleteElement**(`id`): `Promise`\<`void`>

Delete an element from the map.

###### Parameters

###### id

`string`

###### Returns

`Promise`\<`void`>

###### Example

```typescript
await felt.deleteElement("element-1");
```

#### Events

##### onElementCreate()

> **onElementCreate**(`args`): `VoidFunction`

Adds a listener for when an element is created.

###### Parameters

###### args

###### handler

(`change`) => `void`

The handler that is called when an element is created.

This will fire when elements are created programatically, or when the
user starts creating an element with a drawing tool.

When the user creates an element with a drawing tool, it can begin in
an invalid state, such as if you've just placed a single point in a polygon.

You can use the `isBeingCreated` property to determine if the element is
still being created by a drawing tool.

If you want to know when the element is finished being created, you can
use the [\`onElementCreateEnd\`](client.md#onelementcreateend) listener.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementCreate({
  handler: (element) => console.log(element.id),
});

// later on...
unsubscribe();
```

##### onElementCreateEnd()

> **onElementCreateEnd**(`args`): `VoidFunction`

Listens for when a new element is finished being created by a drawing tool.

This differs from the [\`onElementCreate\`](client.md#onelementcreate) listener, which fires whenever an
element is first created. This fires when the user finishes creating an element
which could be after a series of interactions.

For example, when creating a polygon, the user places a series of points then
finishes by pressing Enter or Escape. Or when creating a Place element, they
add the marker, type a label, then finally deselect the element.

###### Parameters

###### args

###### handler

(`params`) => `void`

The handler to call whenever this event fires.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onToolCreatedElement({
  handler: (params) => console.log(params),
});

// later on...
unsubscribe();
```

##### onElementChange()

> **onElementChange**(`args`): `VoidFunction`

Adds a listener for when an element changes.

This will fire when an element is being edited, either on the map by the user
or programatically.

Like the [\`onElementCreate\`](client.md#onelementcreate) listener, this will fire when an element is
still being created by a drawing tool.

You can check the [\`isBeingCreated\`](client.md#isbeingcreated) property to determine if the element is
still being created by a drawing tool.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

The id of the element to listen for changes to.

###### handler

(`change`) => `void`

The handler that is called when the element changes.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: ({element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

##### onElementDelete()

> **onElementDelete**(`args`): `VoidFunction`

Adds a listener for when an element is deleted.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

The id of the element to listen for deletions of.

###### handler

() => `void`

The handler that is called when the element is deleted.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementDelete({
  options: { id: "element-1" },
  handler: () => console.log("element-1 deleted"),
});

// later on...
unsubscribe();
```

##### onElementGroupChange()

> **onElementGroupChange**(`args`): `VoidFunction`

Adds a listener for when an element group changes.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```

***

### ElementGroup

#### Properties

##### id

> **id**: `string`

A string identifying the element group.

##### name

> **name**: `string`

The name of the element group. This is shown in the legend.

##### caption

> **caption**: `null` | `string`

The caption of the element group. This is shown in the legend.

##### elementIds

> **elementIds**: `string`\[]

The ids of the elements in the element group.

###### Remarks

You can use these ids to get the full element objects via the [\`getElements\`](client.md#getelements) method.

##### visible

> **visible**: `boolean`

Whether the element group is visible or not.

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

***

### GetElementsConstraint

The constraints to apply when getting elements.

#### Extends

* `zInfer`\<*typeof* `GetElementsConstraintSchema`>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the elements to get.

###### Inherited from

`zInfer.ids`

***

### GetElementGroupsConstraint

The constraints to apply when getting element groups.

#### Extends

* `zInfer`\<*typeof* `GetElementGroupsConstraintSchema`>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the element groups to get.

###### Inherited from

`zInfer.ids`

***

### ElementChangeCallbackParams

The parameters for the [\`onElementChange\`](client.md#onelementchange) and the [\`onElementCreate\`](client.md#onelementcreate) listeners.

#### Properties

##### element

> **element**: `null` | [`Element`](client.md#element-1)

The new data for the element or null if the element was removed.

##### isBeingCreated

> **isBeingCreated**: `boolean`

Whether or not this element is still being created by a drawing tool.

For example, if the user begins drawing a polygon, they need to place
multiple points until they've ultimately completed the polygon. All
the time they are still placing points, this will be true.

For elements that require text entry (such as Places, Text and Notes)
this will be true all the time the user is typing text until the point
at which the user finishes, by pressing Escape for example.

If the user is editing an existing element, this will be false.

For elements that are created programatically, this will be false.

***

### ElementGroupChangeCallbackParams

The parameters for the [\`onElementGroupChange\`](client.md#onelementgroupchange) listener.

***

### InteractionsController

The Interactions controller allows you to observe interactions with the map

#### Extended by

* [`FeltController`](client.md#feltcontroller)

#### Events

##### onPointerClick()

> **onPointerClick**(`params`): `VoidFunction`

Allows you to be notified the user clicks on the map.

###### Parameters

###### params

###### handler

(`event`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onPointerClick({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```

##### onPointerMove()

> **onPointerMove**(`params`): `VoidFunction`

Allows you to be notified the user moves the mouse over the map.

###### Parameters

###### params

Params for the listener

###### handler

(`event`) => `void`

The handler function

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
// Track mouse movement and features under cursor
const unsubscribe = felt.onPointerMove({
  handler: (event) => {
    console.log("Mouse position:", event.center);
    console.log("Features under cursor:", event.features);
  }
});

// later on...
unsubscribe();
```

***

### MapInteractionEvent

The event object passed to the interaction listeners.

#### Properties

##### coordinate

> **coordinate**: [`LatLng`](client.md#latlng)

The cursor position in world coordinates.

##### point

> **point**: `object`

The pixel coordinates of the mouse cursor, relative to the map and measured from the top left corner.

###### x

> **x**: `number`

###### y

> **y**: `number`

##### features

> **features**: [`LayerFeature`](client.md#layerfeature)\[]

The vector features that are under the cursor.

##### rasterValues

> **rasterValues**: [`RasterValue`](client.md#rastervalue)\[]

The raster pixel values that are under the cursor.

***

### LayersController

The Layers controller allows you to get information about the layers on the
map, and make changes to their visibility.

Layers can be organised into groups, and their groups can also have their
visibility toggled.

#### Extended by

* [`FeltController`](client.md#feltcontroller)

#### Methods

##### getLayer()

> **getLayer**(`id`): `Promise`\<`null` | [`Layer`](client.md#layer-1)>

Get a single layer from the map by its id.

###### Parameters

###### id

`string`

The id of the layer you want to get.

###### Returns

`Promise`\<`null` | [`Layer`](client.md#layer-1)>

The requested layer.

###### Example

```typescript
const layer = await felt.getLayer("layer-1");
```

##### getLayers()

> **getLayers**(`constraint`?): `Promise`\<(`null` | [`Layer`](client.md#layer-1))\[]>

Gets layers from the map, according to the constraints supplied. If no
constraints are supplied, all layers will be returned.

###### Parameters

###### constraint?

[`GetLayersConstraint`](client.md#getlayersconstraint)

The constraints to apply to the layers returned from the map.

###### Returns

`Promise`\<(`null` | [`Layer`](client.md#layer-1))\[]>

All layers on the map.

###### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

###### Example

```typescript
const layers = await felt.getLayers();
```

##### setLayerVisibility()

> **setLayerVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layers with the given ids.

###### Parameters

###### visibility

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

##### setLayerStyle()

> **setLayerStyle**(`params`): `Promise`\<`void`>

Set the style for a layer using FSL, the Felt Style Language.

Changes are only for this session, and not persisted. This is useful to make
temporary changes to a layer's style, such as to highlight a particular layer
or feature.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

If the style you set is invalid, you will receive an error explaining the problem
in the rejected promise value.

###### Parameters

###### params

###### id

`string`

The id of the layer to set the style for.

###### style

`object`

The style to set for the layer.

###### Returns

`Promise`\<`void`>

###### Example

```typescript
// first get the current style
const oldStyle = (await felt.getLayer("layer-1")).style;

felt.setLayerStyle({ id: "layer-1", style: {
  ...oldStyle,
  paint: {
    ...oldStyle.paint,
    color: "red",
  },
} });
```

##### setLayerLegendVisibility()

> **setLayerLegendVisibility**(`params`): `Promise`\<`void`>

Hide or show layers with the given ids from the legend.

###### Parameters

###### params

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

##### createLayersFromGeoJson()

> **createLayersFromGeoJson**(`params`): `Promise`\<`null` | \{ `layerGroup`: [`LayerGroup`](client.md#layergroup); `layers`: [`Layer`](client.md#layer-1)\[]; }>

Adds layers to the map from file or URL sources.

###### Parameters

###### params

[`CreateLayersFromGeoJsonParams`](client.md#createlayersfromgeojsonparams)

###### Returns

`Promise`\<`null` | \{ `layerGroup`: [`LayerGroup`](client.md#layergroup); `layers`: [`Layer`](client.md#layer-1)\[]; }>

The layer groups that were created.

###### Remarks

This allows you to add temporary layers to the map that don't depend on
any processing by Felt. This is useful for viewing data from external sources or
remote files.

###### Example

```typescript
const layerFromFile = await felt.createLayersFromGeoJson({
  source: {
    type: "geoJsonFile",
    file: someFile,
  },
  name: "Parcels",
});

const layerFromUrl = await felt.createLayersFromGeoJson({
  source: {
    sourceType: "geoJsonUrl",
    url: "https://example.com/parcels.geojson",
  },
  name: "Parcels",
```

##### updateLayer()

> **updateLayer**(`params`): `Promise`\<[`Layer`](client.md#layer-1)>

Update a layer by passing a subset of the layer's properties.

Note that not all properties can be updated, so check the [UpdateLayerParams](client.md#updatelayerparams)
type to see which properties can be updated.

###### Parameters

###### params

[`UpdateLayerParams`](client.md#updatelayerparams)

###### Returns

`Promise`\<[`Layer`](client.md#layer-1)>

###### Example

```typescript
await felt.updateLayer({
  id: "layer-1",
  name: "My Layer",
  caption: "A description of the layer",
});
```

##### deleteLayer()

> **deleteLayer**(`id`): `Promise`\<`void`>

Delete a layer from the map by its id.

###### Parameters

###### id

`string`

###### Returns

`Promise`\<`void`>

###### Remarks

This only works for layers created via the SDK `createLayersFromGeoJson` method, not layers added via the Felt UI.

###### Example

```typescript
await felt.deleteLayer("layer-1");
```

##### getLayerGroup()

> **getLayerGroup**(`id`): `Promise`\<`null` | [`LayerGroup`](client.md#layergroup)>

Get a layer group from the map by its id.

###### Parameters

###### id

`string`

###### Returns

`Promise`\<`null` | [`LayerGroup`](client.md#layergroup)>

The requested layer group.

###### Example

```typescript
const layerGroup = await felt.getLayerGroup("layer-group-1");
```

##### getLayerGroups()

> **getLayerGroups**(`constraint`?): `Promise`\<(`null` | [`LayerGroup`](client.md#layergroup))\[]>

Gets layer groups from the map, according to the constraints supplied. If no
constraints are supplied, all layer groups will be returned in rendering order.

###### Parameters

###### constraint?

[`GetLayerGroupsConstraint`](client.md#getlayergroupsconstraint)

The constraints to apply to the layer groups returned from the map.

###### Returns

`Promise`\<(`null` | [`LayerGroup`](client.md#layergroup))\[]>

The requested layer groups.

###### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

##### setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layer groups with the given ids.

###### Parameters

###### visibility

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

##### setLayerGroupLegendVisibility()

> **setLayerGroupLegendVisibility**(`params`): `Promise`\<`void`>

Hide or show layer groups with the given ids from the legend.

###### Parameters

###### params

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerGroupLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

##### getLegendItem()

> **getLegendItem**(`id`): `Promise`\<`null` | [`LegendItem`](client.md#legenditem)>

Allows you to get the state of a single legend item.

###### Parameters

###### id

[`LegendItemIdentifier`](client.md#legenditemidentifier)

###### Returns

`Promise`\<`null` | [`LegendItem`](client.md#legenditem)>

###### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

##### getLegendItems()

> **getLegendItems**(`constraint`?): `Promise`\<(`null` | [`LegendItem`](client.md#legenditem))\[]>

Allows you to obtain the state of several legend items, by passing in
constraints describing which legend items you want.

If you do not pass any constraints, you will receive all legend items.

###### Parameters

###### constraint?

[`LegendItemsConstraint`](client.md#legenditemsconstraint)

###### Returns

`Promise`\<(`null` | [`LegendItem`](client.md#legenditem))\[]>

###### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

##### setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`): `Promise`\<`void`>

Hide or show legend items with the given identifiers.

###### Parameters

###### visibility

###### show

[`LegendItemIdentifier`](client.md#legenditemidentifier)\[]

###### hide

[`LegendItemIdentifier`](client.md#legenditemidentifier)\[]

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLegendItemVisibility({
  show: [{layerId: "layer-group-1", id: "item-1-0"}],
  hide: [{layerId: "layer-group-2", id: "item-2-0"}],
})
```

##### getLayerFilters()

> **getLayerFilters**(`layerId`): `Promise`\<`null` | [`LayerFilters`](client.md#layerfilters)>

Get the filters for a layer.

###### Parameters

###### layerId

`string`

###### Returns

`Promise`\<`null` | [`LayerFilters`](client.md#layerfilters)>

###### Remarks

The return type gives you the filters split up into the various sources
that make up the overall filters for a layer.

###### Example

```typescript
const filters = await felt.getLayerFilters("layer-1");
console.log(filters.combined, filters.style, filters.ephemeral, filters.components);
```

##### setLayerFilters()

> **setLayerFilters**(`params`): `Promise`\<`void`>

Sets the **ephemeral** filters for a layer.

###### Parameters

###### params

###### layerId

`string`

The layer that you want to set the filters for.

###### filters

[`Filters`](client.md#filters)

The filters to set for the layer. This will replace any ephemeral filters
that are currently set for the layer.

###### note

`string`

A note to display on the layer legend when this filter is applied. When the
note is shown, a reset button will also be shown, allowing the user to clear
the filter.

###### Returns

`Promise`\<`void`>

###### Example

```typescript
await felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});
```

##### getLayerBoundaries()

> **getLayerBoundaries**(`layerId`): `Promise`\<`null` | [`LayerBoundaries`](client.md#layerboundaries)>

Get the spatial boundaries that are filtering a layer.

###### Parameters

###### layerId

`string`

###### Returns

`Promise`\<`null` | [`LayerBoundaries`](client.md#layerboundaries)>

###### Remarks

The return type gives you the boundaries split up into the various sources
that make up the overall boundary for a layer.

The combined boundary is the intersection of the other sources of boundaries.

###### Example

```typescript
const boundaries = await felt.getLayerBoundaries("layer-1");

console.log(boundaries?.combined);
console.log(boundaries?.spatialFilters);
console.log(boundaries?.ephemeral);
```

##### setLayerBoundary()

> **setLayerBoundary**(`params`): `Promise`\<`void`>

Set the [\`ephemeral\`](client.md#ephemeral-1) boundary for one or more layers.

###### Parameters

###### params

###### layerIds

`string`\[]

The ids of the layers to set the boundary for.

###### boundary

`null` | [`GeometryFilter`](client.md#geometryfilter)

The boundary to set for the layer.

Passing `null` clears the ephemeral boundary for the layer.

###### Returns

`Promise`\<`void`>

###### Example

```typescript
await felt.setLayerBoundary({
  layerIds: ["layer-1", "layer-2"],
  boundary: { type: "MultiPolygon", coordinates: [[[100, 0], [101, 0], [101, 1], [100, 1], [100, 0]]] }
});
```

##### getRenderedFeatures()

> **getRenderedFeatures**(`params`?): `Promise`\<[`LayerFeature`](client.md#layerfeature)\[]>

Get the features that are currently **rendered** on the map in the viewport.

Note that this is explicitly about the features that are rendered, which isn't
necessarily a complete list of all the features in the viewport. This is because
of the way features are tiled: at low zoom levels or high feature densities, many
features are omitted from what is rendered on the screen.

###### Parameters

###### params?

[`GetRenderedFeaturesConstraint`](client.md#getrenderedfeaturesconstraint)

The constraints to apply to the features returned from the map.

###### Returns

`Promise`\<[`LayerFeature`](client.md#layerfeature)\[]>

###### Example

```typescript
const features = await felt.getRenderedFeatures();
```

##### getFeature()

> **getFeature**(`params`): `Promise`\<`null` | [`LayerFeature`](client.md#layerfeature)>

Get a feature from the map by its ID and layer ID.

The response is a [LayerFeature](client.md#layerfeature) object, which does not include the
geometry of the feature.

You may want to use this when you don't need the geometry of a feature,
but you know the ID of the feature you need.

###### Parameters

###### params

###### id

`string` | `number`

###### layerId

`string`

###### Returns

`Promise`\<`null` | [`LayerFeature`](client.md#layerfeature)>

###### Example

```typescript
const feature = await felt.getFeature({ layerId: "layer-1", id: 123 });
```

##### getFeatures()

> **getFeatures**(`params`): `Promise`\<\{ `features`: [`LayerFeature`](client.md#layerfeature)\[]; `count`: `number`; `previousPage`: `null` | `string`; `nextPage`: `null` | `string`; }>

Get a list of layer features.

###### Parameters

###### params

###### layerId

`string`

The ID of the layer to get features from.

###### filters

[`Filters`](client.md#filters)

Filters to be applied. These filters will merge with layer's own filters.

###### sorting

[`SortConfig`](client.md#sortconfig)

Attribute to sort by.

###### boundary

[`GeometryFilter`](client.md#geometryfilter)

The spatial boundary to be applied.

###### search

`string`

Search term to search by.

Search is case-insensitive and looks for matches across all feature properties.

###### pagination

`null` | `string`

Pagination token. It comes from either the `previousPage` or `nextPage`
properties of the previous response.

###### Returns

`Promise`\<\{ `features`: [`LayerFeature`](client.md#layerfeature)\[]; `count`: `number`; `previousPage`: `null` | `string`; `nextPage`: `null` | `string`; }>

The response is an object which contains:

* `features`: list of [LayerFeature](client.md#layerfeature) objects, which does not include
  the geometry of the feature but it does include its bounding box.
* `count`: the total number of features that match the query.
* `previousPage` & `nextPage`: The tokens to pass in the `pagination` param
  to navigate between pages.

###### Remarks

This list is paginated in sets of 20 features for each page. In order to paginate
between pages, the response includes `previousPage` and `nextPage` that are tokens
that should be sent in the `pagination` params for requesting sibling pages.

Text search is case-insensitive and looks for matches across all feature properties.

###### Example

```typescript
const page1Response = await felt.getFeatures({
  layerId: "layer-1",
  search: "abc123",
  pagination: undefined,
});

// Note that the search term here matches the one for the first page.
if (page1Response.nextPage) {
  const page2Response = await felt.getFeatures({
    layerId: "layer-1",
    search: "abc123",
    pagination: page1Response.nextPage,
  });
}
```

##### getGeoJsonFeature()

> **getGeoJsonFeature**(`params`): `Promise`\<`null` | [`GeoJsonFeature`](client.md#geojsonfeature)>

Get a feature in GeoJSON format from the map by its ID and layer ID.

The response is a GeoJSON Feature object with the complete geometry of the
feature. Note that for some *very* large geometries, the response may take a
long time to return, and may return a very large object.

###### Parameters

###### params

###### id

`string` | `number`

###### layerId

`string`

###### Returns

`Promise`\<`null` | [`GeoJsonFeature`](client.md#geojsonfeature)>

###### Example

```typescript
const feature = await felt.getGeoJsonFeature({ layerId: "layer-1", id: 123 });
```

##### getCategoryData()

> **getCategoryData**(`params`): `Promise`\<[`GetLayerCategoriesGroup`](client.md#getlayercategoriesgroup)\[]>

Gets values from a layer grouped by a given attribute.

###### Parameters

###### params

[`GetLayerCategoriesParams`](client.md#getlayercategoriesparams)

###### Returns

`Promise`\<[`GetLayerCategoriesGroup`](client.md#getlayercategoriesgroup)\[]>

###### Remarks

Groups features in your layer by unique values in the specified attribute and calculates
a value for each group. By default, this value is the count of features in each group.

You can apply filters in two ways:

1. At the top level (using `boundary` and `filters`), which affects both what categories
   are included and how values are calculated
2. In the `values` configuration, which only affects the values but keeps all categories

This two-level filtering is particularly useful when you want to compare subsets of data
while maintaining consistent categories. For example, you might want to show the distribution
of all building types in a city, but only count buildings built after 2000 in each category.

###### Example

```typescript
// Basic grouping: Count of buildings by type
const buildingsByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type"
});

// Filtered grouping: Only count buildings in downtown
const downtownBuildingsByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type",
  boundary: [-122.43, 47.60, -122.33, 47.62]  // downtown boundary
});

// Advanced: Show all building types, but only sum floor area of recent buildings
const recentBuildingAreaByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type",
  values: {
    filters: ["year_built", "gte", 2000],
    aggregation: {
      method: "sum",
      attribute: "floor_area"
    }
  }
});

// Compare residential density across neighborhoods while only counting recent buildings
const newBuildingDensityByNeighborhood = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "neighborhood",
  values: {
    filters: ["year_built", "gte", 2000],
    aggregation: {
      method: "avg",
      attribute: "units_per_acre"
    }
  }
});
```

##### getHistogramData()

> **getHistogramData**(`params`): `Promise`\<[`GetLayerHistogramBin`](client.md#getlayerhistogrambin)\[]>

Gets a histogram of values from a layer for a given attribute.

###### Parameters

###### params

[`GetLayerHistogramParams`](client.md#getlayerhistogramparams)

###### Returns

`Promise`\<[`GetLayerHistogramBin`](client.md#getlayerhistogrambin)\[]>

###### Remarks

Creates bins (ranges) for numeric data and counts how many features fall into each bin,
or returns aggregated values for each bin.

You can control how the bins are created using the `steps` parameter, choosing from
several methods like equal intervals, quantiles, or natural breaks (Jenks), or passing
in the step values directly if you know how you want to bin the data.

Like getCategoryData, you can apply filters in two ways:

1. At the top level (using `boundary` and `filters`), which affects both how the bins
   are calculated and what features are counted in each bin
2. In the `values` configuration, which only affects what gets counted but keeps the
   bin ranges the same

This is particularly useful when you want to compare distributions while keeping
consistent bin ranges. For example, you might want to compare the distribution of
building heights in different years while using the same height ranges.

###### Example

```typescript
// Basic histogram: Building heights in 5 natural break bins
const buildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: { type: "jenks", count: 5 }
});

// Compare old vs new buildings using the same height ranges
const oldBuildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: [0, 20, 50, 100, 200, 500],
  values: {
    filters: ["year_built", "lt", 1950]
  }
});

const newBuildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: [0, 20, 50, 100, 200, 500],  // Same ranges as above
  values: {
    filters: ["year_built", "gte", 1950]
  }
});
```

##### getAggregates()

> **getAggregates**\<`T`>(`params`): `Promise`\<`Record`\<`T`, `null` | `number`>>

Calculates a single aggregate value for a layer based on the provided configuration.

###### Type Parameters

• **T** *extends* `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"` | `"count"`

###### Parameters

###### params

[`GetLayerCalculationParams`](client.md#getlayercalculationparamst)\<`T`>

###### Returns

`Promise`\<`Record`\<`T`, `null` | `number`>>

###### Remarks

Performs statistical calculations on your data, like counting features or computing
averages, sums, etc. You can focus your calculation on specific areas or subsets
of your data using boundaries and filters.

When no aggregation is specified, it counts features. When an aggregation is provided,
it performs that calculation (average, sum, etc.) on the specified attribute.

###### Example

```typescript
// Count all residential buildings
const residentialCount = await felt.getAggregates({
  layerId: "buildings",
  filters: ["type", "eq", "residential"]
});

// Calculate average home value in a specific neighborhood
const avgHomeValue = await felt.getAggregates({
  layerId: "buildings",
  boundary: [-122.43, 47.60, -122.33, 47.62],  // neighborhood boundary
  aggregation: {
    method: "avg",
    attribute: "assessed_value"
  }
});

// Find the maximum building height for buildings built after 2000
const maxNewBuildingHeight = await felt.getAggregates({
  layerId: "buildings",
  filters: ["year_built", "gte", 2000],
  aggregation: {
    method: "max",
    attribute: "height"
  }
});
```

##### getPrecomputedAggregates()

> **getPrecomputedAggregates**(`params`): `Promise`\<\{ `avg`: `null` | `number`; `max`: `null` | `number`; `min`: `null` | `number`; `sum`: `null` | `number`; `count`: `null` | `number`; }>

Calculates aggregates for spatial cells of a layer.

###### Parameters

###### params

[`GetLayerPrecomputedCalculationParams`](client.md#getlayerprecomputedcalculationparams)

###### Returns

`Promise`\<\{ `avg`: `null` | `number`; `max`: `null` | `number`; `min`: `null` | `number`; `sum`: `null` | `number`; `count`: `null` | `number`; }>

###### Remarks

Performs statistical calculations on spatial cells of a layer, returning min, max, avg, sum, and count. You can focus your calculation on specific areas or subsets
of your data using boundaries and filters. When using the count method, an attribute is not required.

###### Example

```typescript
const aggregates = await felt.getPrecomputedAggregates({
  layerId: "buildings",
  gridConfig: {
    type: "h3",
    resolution: 10,
    method: "avg",
    attribute: "assessed_value"
  },
});
```

##### getLayerSchema()

> **getLayerSchema**(`layerId`): `Promise`\<[`LayerSchema`](client.md#layerschema)>

Get the schema for a layer.

###### Parameters

###### layerId

`string`

###### Returns

`Promise`\<[`LayerSchema`](client.md#layerschema)>

###### Remarks

The schema describes the structure of the data in a layer, including the attributes
that are available on the features in the layer.

This can be useful to build generic UIs that need to know the structure of the data in
a layer, such as a dropdown to choose an attribute.

###### Example

```typescript
const schema = await felt.getLayerSchema("layer-1");
const attributeIds = schema.attributes.map((attr) => attr.id);
```

#### Events

##### onLayerChange()

> **onLayerChange**(`args`): `VoidFunction`

Adds a listener for when a layer changes.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

The id of the layer to listen for changes to.

###### handler

(`change`) => `void`

The handler that is called when the layer changes.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onLayerChange({
  options: { id: "layer-1" },
  handler: ({layer}) => console.log(layer.bounds),
});

// later on...
unsubscribe();
```

##### onLayerGroupChange()

> **onLayerGroupChange**(`args`): `VoidFunction`

Adds a listener for when a layer group changes.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onLayerGroupChange({
  options: { id: "layer-group-1" },
  handler: ({layerGroup}) => console.log(layerGroup.id),
});

// later on...
unsubscribe();
```

##### onLegendItemChange()

> **onLegendItemChange**(`args`): `VoidFunction`

Adds a listener for when a legend item changes.

###### Parameters

###### args

###### options

[`LegendItemIdentifier`](client.md#legenditemidentifier)

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onLegendItemChange({
  options: { layerId: "layer-1", id: "item-1-0" },
  handler: ({legendItem}) => console.log(legendItem.visible),
});

// later on...
unsubscribe();
```

##### onLayerFiltersChange()

> **onLayerFiltersChange**(`params`): `VoidFunction`

Adds a listener for when a layer's filters change.

###### Parameters

###### params

###### options

\{ `layerId`: `string`; }

###### options.layerId

`string`

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Remarks

This event fires whenever any type of filter changes on the layer, including
ephemeral filters set via the SDK, style-based filters, or filters set through
the Felt UI via Components.

###### Example

```typescript
const unsubscribe = felt.onLayerFiltersChange({
  options: { layerId: "layer-1" },
  handler: ({combined, ephemeral, style, components}) => {
    console.log("Layer filters updated:", {
      combined,  // All filters combined
      ephemeral, // Filters set via SDK
      style,     // Filters from layer style
      components // Filters from UI components
    });
  },
});

// later on...
unsubscribe();
```

##### onLayerBoundariesChange()

> **onLayerBoundariesChange**(`params`): `VoidFunction`

Adds a listener for when a layer's spatial boundaries change.

###### Parameters

###### params

###### options

\{ `layerId`: `string`; }

###### options.layerId

`string`

The id of the layer to listen for boundary changes on.

###### handler

(`boundaries`) => `void`

A function that is called when the boundaries change.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Remarks

This event fires whenever any type of spatial boundary changes on the layer, including
ephemeral boundaries set via the SDK or boundaries set through the Felt UI via
Spatial filter components.

###### Example

```typescript
const unsubscribe = felt.onLayerBoundariesChange({
  options: { layerId: "layer-1" },
  handler: ({combined, ephemeral, spatialFilters}) => {
    console.log("Layer boundaries updated:", {
      combined,  // All boundaries combined
      ephemeral, // Boundaries set via SDK
      spatialFilters // Boundaries set via UI
    });
  },
});

// later on...
unsubscribe();
```

***

### LayerFeature

A LayerFeature is a single geographical item in a layer.

It is intended to be a lightweight object that contains the properties of a
feature, but not the geometry. It is returned by methods like
[FeltController.getRenderedFeatures](client.md#getrenderedfeatures) and [FeltController.getFeature](client.md#getfeature),
and as part of the methods in the [SelectionController](client.md#selectioncontroller)

The geometry can be obtained via the [FeltController.getGeoJsonFeature](client.md#getgeojsonfeature)
method, which returns a [GeoJsonFeature](client.md#geojsonfeature) object.

#### Properties

##### id

> **id**: `string` | `number`

The identifier of the feature, unique within the layer.

##### isDeterministicId

> **isDeterministicId**: `boolean`

Whether the id is deterministic.

###### Remarks

If the id is deterministic, it means that the id can be used to reference the feature
in the layer and therefore in all the SDK feature-related methods.

When the id is not deterministic, the feature cannot be referenced on SDK methods like [FeltController.getFeature](client.md#getfeature)
or [SelectionController.selectFeature](client.md#selectfeature-1).

For layers created and processed on Felt servers, the feature IDs are deterministic because Felt ensures every feature is correctly identified in vector tiles.
This cannot be guaranteed for layers created using a GeoJSON source on the SDK (see [LayersController.createLayersFromGeoJson](client.md#createlayersfromgeojson))
where the ID will only be deterministic if GeoJSON features have an `id` property.

##### layerId

> **layerId**: `string`

The identifier of the layer that the feature belongs to.

##### geometryType

> **geometryType**: `"Polygon"` | `"MultiPolygon"` | `"LineString"` | `"MultiLineString"` | `"Point"` | `"MultiPoint"` | `string` & `object`

The type of geometry of the feature.

###### Remarks

Because LayerFeatures can be read from tiled features, it's
possible that this `geometryType` won't match the `geometry.type` of the
[GeoJsonFeature](client.md#geojsonfeature) returned by [FeltController.getGeoJsonFeature](client.md#getgeojsonfeature).

For example, this may return `LineString` but the full feature is a `MultiLineString`,
or, similarly `Polygon` here may be a `MultiPolygon` in the full feature.

As a result, you should treat this property as being indicative only.

##### bbox

> **bbox**: `undefined` | \[`number`, `number`, `number`, `number`]

The bounding box of the feature.

###### Remarks

Because LayerFeatures can be read from tiled features and considering
that feature geometry can go through multiple tiles, it's possible that this
is not the complete bounding box of the feature.

##### properties

> **properties**: [`GeoJsonProperties`](client.md#geojsonproperties)

The properties of the feature, as a bag of attributes.

***

### RasterValue

A raster pixel value for a specific layer.

#### Properties

##### value

> **value**: `number`

The value of the pixel.

##### layerId

> **layerId**: `string`

The ID of the layer that the pixel belongs to.

##### categoryName

> **categoryName**: `null` | `string`

The name of the category that the pixel belongs to.

##### color

> **color**: `null` | \{ `r`: `number`; `g`: `number`; `b`: `number`; `a`: `number`; }

The color of the pixel. Each value is between 0 and 255.

***

### LayerFilters

The filters that are currently set on a layer.

A layer's filters are the combination of various different places
in which filters can be applied.

#### Properties

##### style

> **style**: [`Filters`](client.md#filters)

Filters that are set in the layer's style. These are the lowest level
of filters, and can only be set by editing the map.

##### components

> **components**: [`Filters`](client.md#filters)

Filters that are set in the layer's components, which are interactive
elements in the legend. These can be set by viewers for their own session,
but their default value can be set by the map creator.

##### ephemeral

> **ephemeral**: [`Filters`](client.md#filters)

Filters that are set ephemerally by viewers in their own session.

These are the filters that are set when the [\`setLayerFilters\`](client.md#setlayerfilters) method is
called. There is no way to set these in the Felt UI - they can only be
set using the SDK.

##### combined

> **combined**: [`Filters`](client.md#filters)

The combined result of all the filters set on the layer.

***

### LayerBoundaries

All the different sources for boundaries for a layer, including their combined result.

#### Properties

##### spatialFilters

> **spatialFilters**: `null` | [`MultiPolygonGeometry`](client.md#multipolygongeometry)

Boundaries set by drawing spatial filters on the map.

When there are multiple spatial filters, they are combined into a multi-polygon.

##### ephemeral

> **ephemeral**: `null` | [`GeometryFilter`](client.md#geometryfilter)

Boundaries that are set ephemerally by viewers in their own session.

These are the filters that are set when the [LayersController.setLayerBoundary](client.md#setlayerboundary)
method is called. There is no way to set these in the Felt UI - they can only be
set using the SDK.

##### combined

> **combined**: `null` | [`MultiPolygonGeometry`](client.md#multipolygongeometry)

The combined result of all the boundaries set on the layer.

Each different source of boundary is intersected to produce the combined result.

***

### AggregationConfig

Defines how to aggregate a value across features in a layer.

#### Extends

* `zInfer`\<*typeof* `AggregationConfigSchema`>

#### Properties

##### attribute

> **attribute**: `string`

The attribute to use for the aggregation. This must be a numeric attribute.

###### Inherited from

`zInfer.attribute`

##### method

> **method**: `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"`

The method to use for the aggregation.

###### Overrides

`zInfer.method`

***

### MultiAggregationConfig\<T>

Defines how to aggregate a value across features in a layer with multiple aggregations
returned at once.

#### Extends

* `zInfer`\<*typeof* `MutliAggregationConfigSchema`>

#### Type Parameters

• **T** *extends* [`AggregationMethod`](client.md#aggregationmethod) | `"count"`

#### Properties

##### methods

> **methods**: `T`\[]

The operations to use on the values from the features in the layer

###### Overrides

`zInfer.methods`

##### attribute?

> `optional` **attribute**: `string`

The attribute to use for the aggregation when aggregations other than "count" are used.

This can be omitted if the only aggregation is "count", but must be a numeric attribute
otherwise.

###### Overrides

`zInfer.attribute`

***

### ValueConfiguration

Configuration for filtering and aggregating values across features.

This can be used to restrict the features considered for aggregation via the `boundary`
and `filters` properties.

It can also be used to specify how to aggregate the values via the `aggregation` property.

#### Extends

* `zInfer`\<*typeof* `ValueConfigurationSchema`>

#### Properties

##### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for what to count or aggregate.

###### Overrides

`zInfer.boundary`

##### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters to determine what gets counted or aggregated.

###### Overrides

`zInfer.filters`

##### aggregation?

> `optional` **aggregation**: [`AggregationConfig`](client.md#aggregationconfig)

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

For example, instead of counting buildings in each category, you might want
to sum their square footage or average their assessed values.

###### Overrides

`zInfer.aggregation`

***

### GetLayerCategoriesParams

The parameters for getting categories from a layer, passed to
the [LayersController.getCategoryData](client.md#getcategorydata) method.

#### Extends

* `zInfer`\<*typeof* `GetLayerCategoriesParamsSchema`>

#### Properties

##### layerId

> **layerId**: `string`

The ID of the layer to get categories from.

###### Inherited from

`zInfer.layerId`

##### attribute

> **attribute**: `string`

The attribute to use for categorization.

###### Inherited from

`zInfer.attribute`

##### limit?

> `optional` **limit**: `number`

The maximum number of categories to return.

###### Inherited from

`zInfer.limit`

##### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters for the features to include when calculating the categories.

###### Overrides

`zInfer.filters`

##### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for the features to include when calculating the categories.

###### Overrides

`zInfer.boundary`

##### values?

> `optional` **values**: [`ValueConfiguration`](client.md#valueconfiguration)

Configuration for filtering and aggregating values while preserving the full set of
categories in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent categories. For example:

* Show all building types in a city, but only count recent buildings in each type
* Keep all neighborhood categories but only sum up residential square footage

Unlike top-level filters which affect both what categories appear AND their values,
filters in this configuration only affect the values while keeping all possible
categories in the results.

###### Overrides

`zInfer.values`

***

### GetLayerCategoriesGroup

A single category from the response from the [LayersController.getCategoryData](client.md#getcategorydata) method.

#### Extends

* `zInfer`\<*typeof* `GetLayerCategoriesGroupSchema`>

#### Properties

##### key

> **key**: `string` | `number` | `boolean`

The category for which the value was calculated.

###### Inherited from

`zInfer.key`

##### value

> **value**: `null` | `number`

The value calculated for the category, whether a count, sum, average, etc.

`null` is returned if there are no features in the category as opposed to zero,
so as not to confuse with a real zero value from some aggregation.

###### Inherited from

`zInfer.value`

***

### GetLayerHistogramParams

The params used to request a histogram of values from a layer, passed to
the [LayersController.getHistogramData](client.md#gethistogramdata) method.

#### Extends

* `zInfer`\<*typeof* `GetLayerHistogramParamsSchema`>

#### Properties

##### values?

> `optional` **values**: `object`

Configuration for filtering and aggregating values while preserving the full set of
bin ranges in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent ranges. For example:

* Use the same height ranges for comparing old vs new buildings

Unlike top-level filters which affect both what ranges appear AND their values,
filters in this configuration only affect the values while keeping all possible
ranges in the results.

###### boundary?

> `optional` **boundary**: \[`number`, `number`]\[] | \[`number`, `number`, `number`, `number`] | \{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`]\[]\[]; } | \{ `type`: `"MultiPolygon"`; `coordinates`: \[`number`, `number`]\[]\[]\[]; }

###### Type declaration

\[`number`, `number`]\[]

\[`number`, `number`, `number`, `number`]

\{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`]\[]\[]; }

\{ `type`: `"MultiPolygon"`; `coordinates`: \[`number`, `number`]\[]\[]\[]; }

###### filters?

> `optional` **filters**: `null` | `boolean` | \[`null` | `string`, `"in"` | `"ni"`, `null` | (`null` | `string` | `number` | `boolean`)\[]] | \[`null` | `string`, `"lt"` | `"gt"` | `"le"` | `"ge"` | `"eq"` | `"ne"` | `"cn"` | `"nc"` | `"is"` | `"isnt"`, `null` | `string` | `number` | `boolean`] | [`FilterTernary`](client.md#filterternary)

###### aggregation?

> `optional` **aggregation**: `object`

###### aggregation.method

> **method**: `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"` = `AggregateMethodSchema`

The operation to use on the values from the features in the layer

###### aggregation.attribute

> **attribute**: `string`

The attribute to use for the aggregation. This must be a numeric attribute.

###### Inherited from

`zInfer.values`

##### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters for the features to include when calculating the histogram bins.

###### Overrides

`zInfer.filters`

##### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for the features to include when calculating the histogram bins.

###### Overrides

`zInfer.boundary`

***

### GetLayerHistogramBin

One bin from the response from the [LayersController.getHistogramData](client.md#gethistogramdata) method.

#### Extends

* `zInfer`\<*typeof* `GetLayerHistogramBinSchema`>

#### Properties

##### min

> **min**: `number`

The left edge of the bin.

###### Inherited from

`zInfer.min`

##### max

> **max**: `number`

The right edge of the bin.

###### Inherited from

`zInfer.max`

##### value

> **value**: `number`

The number of features in the bin.

###### Inherited from

`zInfer.value`

***

### GetLayerCalculationParams\<T>

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getAggregates](client.md#getaggregates) method.

#### Extends

* `TypeOf`\<*typeof* `GetLayerCalculationParamsSchema`>

#### Type Parameters

• **T** *extends* [`AggregationMethod`](client.md#aggregationmethod) | `"count"`

#### Properties

##### layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

###### Inherited from

`z.infer.layerId`

##### aggregation

> **aggregation**: [`MultiAggregationConfig`](client.md#multiaggregationconfigt)\<`T`>

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

###### Overrides

`z.infer.aggregation`

##### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters for the features to include when calculating the aggregate value.

###### Overrides

`z.infer.filters`

##### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for the features to include when calculating the aggregate value.

###### Overrides

`z.infer.boundary`

***

### CountGridConfig

The grid configuration for a count-based precomputed aggregate value. Compared to the
[AggregatedGridConfig](client.md#aggregatedgridconfig), the `attribute` property is not required, because the count
is the same regardless of the attribute.

Used inside [GetLayerPrecomputedCalculationParams](client.md#getlayerprecomputedcalculationparams).

#### Extends

* `zInfer`\<*typeof* `CountGridConfigSchema`>

#### Properties

##### resolution

> **resolution**: `number`

The resolution of the grid to use for the precomputed calculation.

###### Inherited from

`zInfer.resolution`

##### type

> **type**: `"h3"`

The type of grid to use for the precomputed calculation.

###### Overrides

`zInfer.type`

##### method

> **method**: `"count"`

The method to use for the precomputed calculation, which in this case is always "count".

###### Overrides

`zInfer.method`

***

### AggregatedGridConfig

The grid configuration for an aggregated precomputed aggregate value. This requires
an `attribute` property, because the numeric aggregation requires it.

If you just want to count the features in each grid cell, use the [CountGridConfig](client.md#countgridconfig)
instead, where you are not required to specify an `attribute`.

Used inside [GetLayerPrecomputedCalculationParams](client.md#getlayerprecomputedcalculationparams).

#### Extends

* `zInfer`\<*typeof* `AggregatedGridConfigSchema`>

#### Properties

##### resolution

> **resolution**: `number`

The resolution of the grid to use for the precomputed calculation.

###### Inherited from

`zInfer.resolution`

##### attribute

> **attribute**: `string`

The attribute to use for the precomputed calculation.

This must be a numeric attribute;

###### Inherited from

`zInfer.attribute`

##### type

> **type**: `"h3"`

The type of grid to use for the precomputed calculation.

###### Overrides

`zInfer.type`

##### method

> **method**: `"avg"` | `"max"` | `"min"` | `"sum"`

The method to use for the precomputed calculation.

###### Overrides

`zInfer.method`

***

### GetLayerPrecomputedCalculationParams

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getPrecomputedAggregates](client.md#getprecomputedaggregates) method.

#### Extends

* `TypeOf`\<*typeof* `GetLayerPrecomputedCalculationParamsSchema`>

#### Properties

##### layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

###### Inherited from

`z.infer.layerId`

##### gridConfig

> **gridConfig**: [`GridConfig`](client.md#gridconfig-1)

The grid configuration to use for the precomputed calculation.

###### Overrides

`z.infer.gridConfig`

##### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters for the features to include when calculating the aggregate value.

###### Overrides

`z.infer.filters`

##### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for the features to include when calculating the aggregate value.

###### Overrides

`z.infer.boundary`

***

### LayerCommon

The common properties for all layers.

#### Extended by

* [`DataOnlyLayer`](client.md#dataonlylayer)
* [`RasterLayer`](client.md#rasterlayer)
* [`VectorLayer`](client.md#vectorlayer)

#### Properties

##### id

> **id**: `string`

A string identifying the layer

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

##### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

The current processing status of the layer.

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer in \[west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](client.md#feltboundary)

***

### RasterLayer

A raster layer is a layer that contains raster data that can be rendered on the map

#### Extends

* [`LayerCommon`](client.md#layercommon)

#### Properties

##### id

> **id**: `string`

A string identifying the layer

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`id`](client.md#id-11)

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`groupId`](client.md#groupid)

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`name`](client.md#name-2)

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`caption`](client.md#caption-2)

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`description`](client.md#description)

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`visible`](client.md#visible-2)

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`shownInLegend`](client.md#showninlegend-2)

##### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`style`](client.md#style-1)

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

The current processing status of the layer.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`status`](client.md#status)

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer in \[west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](client.md#feltboundary)

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`bounds`](client.md#bounds-1)

##### geometryType

> **geometryType**: `"Raster"`

Identifies the type of geometry in the layer.

##### source

> **source**: [`RasterLayerSource`](client.md#rasterlayersource)

The source of the raster layer's data.

***

### RasterLayerSource

The source of a raster layer's data.

#### Properties

##### imageTileTemplateUrl

> **imageTileTemplateUrl**: `string`

A URL template for fetching image tiles for the raster.

##### encodedTileTemplateUrl

> **encodedTileTemplateUrl**: `string`

A URL template for fetching encoded tiles for the raster.

The encoded raster value can be calculated from the red, green, and blue values of the pixel
using the following formula:

```
base + ((RED << 16) + (GREEN <<8) + BLUE) * interval
```

or

```
base + (RED * 256 * 256 + GREEN * 256 + BLUE) * interval
```

##### bands

> **bands**: [`RasterBand`](client.md#rasterband)\[]

List of encoded raster bands

***

### RasterBand

The RasterBand interface describes the metadata for a raster band, necessary for
calculating the encoded raster value from the red, green, and blue values of the pixel.

#### Properties

##### base

> **base**: `number`

Encoding base value as a floating point number

##### interval

> **interval**: `number`

Encoding interval as a floating point number

##### bandIndex

> **bandIndex**: `number`

1-based index of the band in the raster

***

### VectorLayer

A vector layer is a layer that contains vector data that can be rendered on the map

#### Extends

* [`LayerCommon`](client.md#layercommon)

#### Properties

##### id

> **id**: `string`

A string identifying the layer

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`id`](client.md#id-11)

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`groupId`](client.md#groupid)

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`name`](client.md#name-2)

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`caption`](client.md#caption-2)

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`description`](client.md#description)

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`visible`](client.md#visible-2)

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`shownInLegend`](client.md#showninlegend-2)

##### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`style`](client.md#style-1)

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

The current processing status of the layer.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`status`](client.md#status)

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer in \[west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](client.md#feltboundary)

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`bounds`](client.md#bounds-1)

##### geometryType

> **geometryType**: `"Polygon"` | `"Point"` | `"Line"`

Identifies the type of geometry in the layer.

##### source

> **source**: [`GeoJsonUrlVectorSource`](client.md#geojsonurlvectorsource) | [`FeltTiledVectorSource`](client.md#felttiledvectorsource) | `Omit`\<[`GeoJsonDataVectorSource`](client.md#geojsondatavectorsource), `"data"`>

The source of the vector layer's data.

***

### GeoJsonUrlVectorSource

A GeoJSON URL source is a layer that is populated from a GeoJSON file at a remote URL.

These sources are ones that have not been uploaded to and processed by Felt, and as such
their capabilities are limited.

For instance, they cannot be filtered, nor can statistics be fetched for them.

#### Extends

* `zInfer`\<*typeof* `GeoJsonUrlVectorSourceSchema`>

#### Properties

##### type

> **type**: `"geoJsonUrl"`

Identifies this as a GeoJSON URL source.

###### Inherited from

`zInfer.type`

##### url

> **url**: `string`

The remote URL of the GeoJSON file used to populate the layer.

###### Inherited from

`zInfer.url`

##### refreshInterval?

> `optional` **refreshInterval**: `null` | `number`

The interval in milliseconds between automatic refreshes of the GeoJSON.

The value must be in the range of 250ms - 5 minutes (300,000ms).

If the value is `null`, the GeoJSON will not be refreshed automatically.

###### Inherited from

`zInfer.refreshInterval`

***

### GeoJsonDataVectorSource

A GeoJSON data source is a layer that is populated from GeoJSON data, such as
from a local file, or programatically-created data.

#### Properties

##### type

> **type**: `"geoJsonData"`

Identifies this as a GeoJSON data source.

##### data

> **data**: `object`

The GeoJSON data for the layer.

This must be a GeoJSON FeatureCollection.

***

### GeoJsonFileVectorSource

A GeoJSON file source is a layer that is populated from a GeoJSON file
on your local machine.

This is an input-only type. It is converted to a [GeoJsonDataVectorSource](client.md#geojsondatavectorsource)
when passed to [LayersController.createLayersFromGeoJson](client.md#createlayersfromgeojson).

#### Extends

* `zInfer`\<*typeof* `GeoJsonFileVectorSourceSchema`>

#### Properties

##### type

> **type**: `"geoJsonFile"`

Identifies this as a GeoJSON file source.

###### Inherited from

`zInfer.type`

##### file

> **file**: `File`

The GeoJSON file for the layer.

###### Inherited from

`zInfer.file`

***

### UpdateLayerParams

The value you need to pass to [LayersController.updateLayer](client.md#updatelayer)

#### Extends

* `Omit`\<`zInfer`\<*typeof* `UpdateLayerSchema`>, `"style"` | `"source"`>

#### Properties

##### id

> **id**: `string`

The id of the layer to update.

###### Inherited from

`Omit.id`

##### shownInLegend?

> `optional` **shownInLegend**: `boolean`

Changes whether the layer is shown in the legend.

###### Inherited from

`Omit.shownInLegend`

##### name?

> `optional` **name**: `string`

Changes the name of the layer.

###### Inherited from

`Omit.name`

##### caption?

> `optional` **caption**: `string`

Changes the caption of the layer.

###### Inherited from

`Omit.caption`

##### description?

> `optional` **description**: `string`

Changes the description of the layer.

###### Inherited from

`Omit.description`

##### bounds?

> `optional` **bounds**: \[`number`, `number`, `number`, `number`]

Changes the bounds of the layer.

###### Inherited from

`Omit.bounds`

##### style?

> `optional` **style**: `object`

The style of the layer.

##### source?

> `optional` **source**: [`GeoJsonUrlVectorSource`](client.md#geojsonurlvectorsource) | [`GeoJsonDataVectorSource`](client.md#geojsondatavectorsource) | [`GeoJsonFileVectorSource`](client.md#geojsonfilevectorsource)

Updates the source of the layer.

Only layers that have a GeoJSON source can have their source udpated.

For URL sources, if you pass the same URL again it will cause the data to be
refreshed.

***

### DataOnlyLayer

A data-only layer doesn't have any geometry, but can be used to join with other layers

#### Extends

* [`LayerCommon`](client.md#layercommon)

#### Properties

##### id

> **id**: `string`

A string identifying the layer

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`id`](client.md#id-11)

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`groupId`](client.md#groupid)

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`name`](client.md#name-2)

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`caption`](client.md#caption-2)

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`description`](client.md#description)

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`visible`](client.md#visible-2)

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`shownInLegend`](client.md#showninlegend-2)

##### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`style`](client.md#style-1)

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

The current processing status of the layer.

###### Inherited from

[`LayerCommon`](client.md#layercommon).[`status`](client.md#status)

##### geometryType

> **geometryType**: `null`

Indicates that this layer has no geometry.

##### bounds

> **bounds**: `null`

This is always null for data-only layers.

###### Overrides

[`LayerCommon`](client.md#layercommon).[`bounds`](client.md#bounds-1)

***

### LayerGroup

#### Properties

##### id

> **id**: `string`

A string identifying the layer group.

##### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

##### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

##### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

###### Remarks

You can use these ids to get the full layer objects via the [\`getLayers\`](client.md#getlayers) method.

##### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group in \[west, south, east, north] order.

[FeltBoundary](client.md#feltboundary)

***

### GetLayersConstraint

The constraints to apply when getting layers.

#### Extends

* `zInfer`\<*typeof* `GetLayersConstraintSchema`>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the layers to get.

###### Inherited from

`zInfer.ids`

***

### GetLayerGroupsConstraint

The constraints to apply when getting layer groups.

#### Extends

* `zInfer`\<*typeof* `GetLayerGroupsFilterSchema`>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the layer groups to get.

###### Inherited from

`zInfer.ids`

***

### LayerChangeCallbackParams

The parameters for the [\`onLayerChange\`](client.md#onlayerchange) listener.

#### Properties

##### layer

> **layer**: `null` | [`Layer`](client.md#layer-1)

The new data for the layer or null if the layer was removed.

***

### LayerGroupChangeCallbackParams

The parameters for the [\`onLayerGroupChange\`](client.md#onlayergroupchange) listener.

***

### LegendItem

A legend item, which often represents a sub-class of features in a
layer in the case of categorical or classed layers.

#### Extends

* [`LegendItemIdentifier`](client.md#legenditemidentifier)

#### Properties

##### title

> **title**: `string` | `string`\[]

The title of the legend item.

##### titleDependsOnZoom

> **titleDependsOnZoom**: `boolean`

Whether the title depends on the zoom level or not. If it does, you
need to call [\`getLegendItem\`](client.md#getlegenditem) when the zoom level changes.

Note that as the zoom level changes, the [\`onLegendItemChange\`](client.md#onlegenditemchange) handler
will not be called, so you need to call [\`getLegendItem\`](client.md#getlegenditem) yourself.

##### visible

> **visible**: `boolean`

Whether the legend item is visible or not.

##### id

> **id**: `string`

The id of the legend item.

###### Inherited from

[`LegendItemIdentifier`](client.md#legenditemidentifier).[`id`](client.md#id-17)

##### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

###### Inherited from

[`LegendItemIdentifier`](client.md#legenditemidentifier).[`layerId`](client.md#layerid-4)

***

### LegendItemIdentifier

The identifier for a legend item. It is a compound key of the layer to
which the legend item belongs and the legend item's own id.

#### Extends

* `zInfer`\<*typeof* `LegendItemIdentifierSchema`>

#### Extended by

* [`LegendItem`](client.md#legenditem)

#### Properties

##### id

> **id**: `string`

The id of the legend item.

###### Inherited from

`zInfer.id`

##### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

###### Inherited from

`zInfer.layerId`

***

### LegendItemsConstraint

Constraints for legend items. If nothing is passed, all legend items will be returned.

#### Extends

* `zInfer`\<*typeof* `LegendItemsConstraintSchema`>

#### Properties

##### ids?

> `optional` **ids**: `object`\[]

Array of legend item identifiers to constrain by.

###### id

> **id**: `string`

The id of the legend item.

###### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

###### Inherited from

`zInfer.ids`

##### layerIds?

> `optional` **layerIds**: `string`\[]

Array of layer ids to constrain legend items by.

###### Inherited from

`zInfer.layerIds`

***

### LegendItemChangeCallbackParams

The parameters for the [\`onLegendItemChange\`](client.md#onlegenditemchange) listener.

#### Properties

##### legendItem

> **legendItem**: `null` | [`LegendItem`](client.md#legenditem)

The new data for the legend item or null if the legend item was removed.

***

### GetRenderedFeaturesConstraint

Constraints for the [\`getRenderedFeatures\`](client.md#getrenderedfeatures) method. This can include layer constriants, spatial constraints, or both. If no constraints are
provided, all rendered features will be returned.

#### Extends

* `zInfer`\<*typeof* `GetRenderedFeaturesConstraintSchema`>

#### Properties

##### areaQuery?

> `optional` **areaQuery**: \{ `coordinates`: [`LatLng`](client.md#latlng); } | \{ `boundary`: \[`number`, `number`, `number`, `number`]; }

The area to query for rendered features. This can be specific coordinates or a [FeltBoundary](client.md#feltboundary). If omitted, the entire viewport will be queried.

###### Overrides

`zInfer.areaQuery`

##### layerIds?

> `optional` **layerIds**: `string`\[]

The ids of the layers to get rendered features for.

###### Inherited from

`zInfer.layerIds`

***

### LayerSchema

The schema that describes the structure of the features in a layer.

#### Remarks

This can be useful to build generic UIs that need to know the structure of the data in
a layer, such as a dropdown to choose an attribute.

#### Properties

##### featureCount

> **featureCount**: `number`

The total number of features in the layer.

##### attributes

> **attributes**: [`LayerSchemaAttribute`](client.md#layerschemaattribute)\[]

Array of attribute schemas describing the properties available on features in this layer.

***

### LayerSchemaCommonAttribute

The common schema for all attributes.

#### Extended by

* [`LayerSchemaBooleanAttribute`](client.md#layerschemabooleanattribute)
* [`LayerSchemaDateAttribute`](client.md#layerschemadateattribute)
* [`LayerSchemaDateTimeAttribute`](client.md#layerschemadatetimeattribute)
* [`LayerSchemaNumericAttribute`](client.md#layerschemanumericattribute)
* [`LayerSchemaTextAttribute`](client.md#layerschematextattribute)

#### Properties

##### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

##### displayName

> **displayName**: `string`

The human-readable name of this attribute.

##### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

##### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

***

### LayerSchemaNumericAttribute

The schema for a numeric attribute on a layer.

#### Extends

* [`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute)

#### Properties

##### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`id`](client.md#id-5)

##### displayName

> **displayName**: `string`

The human-readable name of this attribute.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`displayName`](client.md#displayname)

##### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`detailedType`](client.md#detailedtype)

##### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`distinctCount`](client.md#distinctcount)

##### type

> **type**: `"numeric"`

Indicates this is a numeric attribute.

##### sampleValues

> **sampleValues**: `object`\[]

A small sample of values for this attribute and their frequency.

###### value

> **value**: `number`

###### count

> **count**: `number`

##### min

> **min**: `number`

The minimum value present for this attribute across all features.

##### max

> **max**: `number`

The maximum value present for this attribute across all features.

***

### LayerSchemaTextAttribute

The schema for a text attribute on a layer.

#### Extends

* [`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute)

#### Properties

##### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`id`](client.md#id-5)

##### displayName

> **displayName**: `string`

The human-readable name of this attribute.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`displayName`](client.md#displayname)

##### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`detailedType`](client.md#detailedtype)

##### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`distinctCount`](client.md#distinctcount)

##### type

> **type**: `"text"`

Indicates this is a text attribute.

##### sampleValues

> **sampleValues**: `object`\[]

A small sample of string values for this attribute and their frequency.

###### value

> **value**: `string`

###### count

> **count**: `number`

***

### LayerSchemaBooleanAttribute

The schema for a boolean attribute on a layer.

#### Extends

* [`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute)

#### Properties

##### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`id`](client.md#id-5)

##### displayName

> **displayName**: `string`

The human-readable name of this attribute.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`displayName`](client.md#displayname)

##### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`detailedType`](client.md#detailedtype)

##### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`distinctCount`](client.md#distinctcount)

##### type

> **type**: `"boolean"`

Indicates this is a boolean attribute.

##### sampleValues

> **sampleValues**: `object`\[]

A representative sample of boolean values for this attribute and their frequency.

###### value

> **value**: `boolean`

###### count

> **count**: `number`

***

### LayerSchemaDateAttribute

The schema for a date attribute on a layer.

#### Extends

* [`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute)

#### Properties

##### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`id`](client.md#id-5)

##### displayName

> **displayName**: `string`

The human-readable name of this attribute.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`displayName`](client.md#displayname)

##### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`detailedType`](client.md#detailedtype)

##### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`distinctCount`](client.md#distinctcount)

##### type

> **type**: `"date"`

Indicates this is a date attribute.

##### min

> **min**: `string`

The earliest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).

##### max

> **max**: `string`

The latest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).

##### sampleValues

> **sampleValues**: `object`\[]

A representative sample of date values for this attribute and their frequency.

###### value

> **value**: `string`

###### count

> **count**: `number`

***

### LayerSchemaDateTimeAttribute

The schema for a datetime attribute on a layer.

#### Extends

* [`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute)

#### Properties

##### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`id`](client.md#id-5)

##### displayName

> **displayName**: `string`

The human-readable name of this attribute.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`displayName`](client.md#displayname)

##### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`detailedType`](client.md#detailedtype)

##### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

###### Inherited from

[`LayerSchemaCommonAttribute`](client.md#layerschemacommonattribute).[`distinctCount`](client.md#distinctcount)

##### type

> **type**: `"datetime"`

Indicates this is a datetime attribute.

##### min

> **min**: `string`

The earliest datetime present for this attribute in ISO8601 format.

##### max

> **max**: `string`

The latest datetime present for this attribute in ISO8601 format.

##### sampleValues

> **sampleValues**: `object`\[]

A representative sample of datetime values for this attribute and their frequency.

###### value

> **value**: `string`

###### count

> **count**: `number`

***

### CreateLayersFromGeoJsonParams

The parameters for the [LayersController.createLayersFromGeoJson](client.md#createlayersfromgeojson) method.

#### Extends

* `Omit`\<`zInfer`\<*typeof* `CreateLayersFromGeoJsonSchema`>, `"source"` | `"geometryStyles"`>

#### Properties

##### name

> **name**: `string`

The name of the layer to create.

###### Inherited from

`Omit.name`

##### source

> **source**: [`GeoJsonUrlVectorSource`](client.md#geojsonurlvectorsource) | [`GeoJsonDataVectorSource`](client.md#geojsondatavectorsource) | [`GeoJsonFileVectorSource`](client.md#geojsonfilevectorsource)

The source of the GeoJSON data.

##### bounds?

> `optional` **bounds**: \[`number`, `number`, `number`, `number`]

Sets the bounds of the layer.

###### Inherited from

`Omit.bounds`

##### caption?

> `optional` **caption**: `string`

Sets the caption of the layer.

###### Inherited from

`Omit.caption`

##### description?

> `optional` **description**: `string`

Sets the description of the layer.

###### Inherited from

`Omit.description`

##### geometryStyles?

> `optional` **geometryStyles**: `object`

The styles to apply to each geometry on the layer.

Each style should be a valid FSL style, as described in [Layer.style](client.md#style-1).

These are optional, and if missing will use a default style determined by
Felt, which you can consider to be undefined behaviour.

###### Point?

> `optional` **Point**: `object`

###### Line?

> `optional` **Line**: `object`

###### Polygon?

> `optional` **Polygon**: `object`

###### Example

```typescript
const layer = await layersController.createLayersFromGeoJson({
  name: "My Layer",
  geometryStyles: {
    Point: {
      paint: { color: "red", size: 8 },
    },
    Line: {
      paint: { color: "blue", size: 4 },
      config: { labelAttribute: ["name"] },
      label: { minZoom: 0 },
    },
    Polygon: {
      paint: { color: "green", strokeColor: "darkgreen" },
    },
  },
});
```

***

### FeltController

This is the main interface for interacting with a Felt map.

This interface is composed of the various controllers, each having a
different area of responsibility.

All the methods are listed here, but each controller is documented on its
own to make it easier to find related methods and events.

#### Extends

* [`ViewportController`](client.md#viewportcontroller).[`UiController`](client.md#uicontroller).[`LayersController`](client.md#layerscontroller).[`ElementsController`](client.md#elementscontroller).[`SelectionController`](client.md#selectioncontroller).[`InteractionsController`](client.md#interactionscontroller).[`ToolsController`](client.md#toolscontroller).[`MiscController`](client.md#misccontroller)

#### Methods

##### getElement()

> **getElement**(`id`): `Promise`\<`null` | [`Element`](client.md#element-1)>

Get a single element from the map by its id.

###### Parameters

###### id

`string`

The id of the element you want to get.

###### Returns

`Promise`\<`null` | [`Element`](client.md#element-1)>

The requested element.

###### Example

```typescript
const element = await felt.getElement("element-1");
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`getElement`](client.md#getelement)

##### getElementGeometry()

> **getElementGeometry**(`id`): `Promise`\<`null` | [`GeoJsonGeometry`](client.md#geojsongeometry)>

Get the geometry of an element in GeoJSON geometry format.

For most element types, the geometry returned is based on the `coordinates`
property of the element, with some differences:

* For Circle elements, the geometry is a Polygon drawn from the `center` and
  `radius` properties.

* Path elements become MultiLineString geometries.

* Marker elements return a MultiLineString of the path traced by the user
  as they drew the marker. Note that this is not the polygon formed by filled-in
  "pen" stroke, which doesn't exactly follow the path traced by the user as it
  is smoothed and interpolated to create a continuous line.

* Text, Note and Image elements do not return geometry, so will return `null`.

###### Parameters

###### id

`string`

The id of the element you want to get the geometry of.

###### Returns

`Promise`\<`null` | [`GeoJsonGeometry`](client.md#geojsongeometry)>

###### Example

```typescript
const geometry = await felt.getElementGeometry("element-1");
console.log(geometry?.type, geometry?.coordinates);
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`getElementGeometry`](client.md#getelementgeometry)

##### getElements()

> **getElements**(`constraint`?): `Promise`\<(`null` | [`Element`](client.md#element-1))\[]>

Gets elements from the map, according to the constraints supplied. If no
constraints are supplied, all elements will be returned.

###### Parameters

###### constraint?

[`GetElementsConstraint`](client.md#getelementsconstraint)

The constraints to apply to the elements returned from the map.

###### Returns

`Promise`\<(`null` | [`Element`](client.md#element-1))\[]>

All elements on the map.

###### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

###### Example

```typescript
const elements = await felt.getElements();
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`getElements`](client.md#getelements)

##### getElementGroup()

> **getElementGroup**(`id`): `Promise`\<`null` | [`ElementGroup`](client.md#elementgroup)>

Get an element group from the map by its id.

###### Parameters

###### id

`string`

###### Returns

`Promise`\<`null` | [`ElementGroup`](client.md#elementgroup)>

The requested element group.

###### Example

```typescript
const elementGroup = await felt.getElementGroup("element-group-1");
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`getElementGroup`](client.md#getelementgroup)

##### getElementGroups()

> **getElementGroups**(`constraint`?): `Promise`\<(`null` | [`ElementGroup`](client.md#elementgroup))\[]>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

###### Parameters

###### constraint?

[`GetElementGroupsConstraint`](client.md#getelementgroupsconstraint)

The constraints to apply to the element groups returned from the map.

###### Returns

`Promise`\<(`null` | [`ElementGroup`](client.md#elementgroup))\[]>

The requested element groups.

###### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`getElementGroups`](client.md#getelementgroups)

##### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show element groups with the given ids.

###### Parameters

###### visibility

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`setElementGroupVisibility`](client.md#setelementgroupvisibility)

##### createElement()

> **createElement**(`element`): `Promise`\<[`Element`](client.md#element-1)>

Create a new element on the map.

###### Parameters

###### element

`ElementCreate`

###### Returns

`Promise`\<[`Element`](client.md#element-1)>

###### Example

```typescript
const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`createElement`](client.md#createelement)

##### updateElement()

> **updateElement**(`element`): `Promise`\<[`Element`](client.md#element-1)>

Update an element on the map.

###### Parameters

###### element

`ElementUpdate`

###### Returns

`Promise`\<[`Element`](client.md#element-1)>

###### Example

```typescript
// Update a place element's coordinates
await felt.updateElement({
  id: "element-1",
  coordinates: [10, 20]
});

// Update a polygon's style
await felt.updateElement({
  id: "element-2",
  color: "#ABC123",
  fillOpacity: 0.5
});
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`updateElement`](client.md#updateelement)

##### deleteElement()

> **deleteElement**(`id`): `Promise`\<`void`>

Delete an element from the map.

###### Parameters

###### id

`string`

###### Returns

`Promise`\<`void`>

###### Example

```typescript
await felt.deleteElement("element-1");
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`deleteElement`](client.md#deleteelement)

##### getLayer()

> **getLayer**(`id`): `Promise`\<`null` | [`Layer`](client.md#layer-1)>

Get a single layer from the map by its id.

###### Parameters

###### id

`string`

The id of the layer you want to get.

###### Returns

`Promise`\<`null` | [`Layer`](client.md#layer-1)>

The requested layer.

###### Example

```typescript
const layer = await felt.getLayer("layer-1");
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getLayer`](client.md#getlayer)

##### getLayers()

> **getLayers**(`constraint`?): `Promise`\<(`null` | [`Layer`](client.md#layer-1))\[]>

Gets layers from the map, according to the constraints supplied. If no
constraints are supplied, all layers will be returned.

###### Parameters

###### constraint?

[`GetLayersConstraint`](client.md#getlayersconstraint)

The constraints to apply to the layers returned from the map.

###### Returns

`Promise`\<(`null` | [`Layer`](client.md#layer-1))\[]>

All layers on the map.

###### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

###### Example

```typescript
const layers = await felt.getLayers();
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getLayers`](client.md#getlayers)

##### setLayerVisibility()

> **setLayerVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layers with the given ids.

###### Parameters

###### visibility

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`setLayerVisibility`](client.md#setlayervisibility)

##### setLayerStyle()

> **setLayerStyle**(`params`): `Promise`\<`void`>

Set the style for a layer using FSL, the Felt Style Language.

Changes are only for this session, and not persisted. This is useful to make
temporary changes to a layer's style, such as to highlight a particular layer
or feature.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

If the style you set is invalid, you will receive an error explaining the problem
in the rejected promise value.

###### Parameters

###### params

###### id

`string`

The id of the layer to set the style for.

###### style

`object`

The style to set for the layer.

###### Returns

`Promise`\<`void`>

###### Example

```typescript
// first get the current style
const oldStyle = (await felt.getLayer("layer-1")).style;

felt.setLayerStyle({ id: "layer-1", style: {
  ...oldStyle,
  paint: {
    ...oldStyle.paint,
    color: "red",
  },
} });
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`setLayerStyle`](client.md#setlayerstyle)

##### setLayerLegendVisibility()

> **setLayerLegendVisibility**(`params`): `Promise`\<`void`>

Hide or show layers with the given ids from the legend.

###### Parameters

###### params

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`setLayerLegendVisibility`](client.md#setlayerlegendvisibility)

##### createLayersFromGeoJson()

> **createLayersFromGeoJson**(`params`): `Promise`\<`null` | \{ `layerGroup`: [`LayerGroup`](client.md#layergroup); `layers`: [`Layer`](client.md#layer-1)\[]; }>

Adds layers to the map from file or URL sources.

###### Parameters

###### params

[`CreateLayersFromGeoJsonParams`](client.md#createlayersfromgeojsonparams)

###### Returns

`Promise`\<`null` | \{ `layerGroup`: [`LayerGroup`](client.md#layergroup); `layers`: [`Layer`](client.md#layer-1)\[]; }>

The layer groups that were created.

###### Remarks

This allows you to add temporary layers to the map that don't depend on
any processing by Felt. This is useful for viewing data from external sources or
remote files.

###### Example

```typescript
const layerFromFile = await felt.createLayersFromGeoJson({
  source: {
    type: "geoJsonFile",
    file: someFile,
  },
  name: "Parcels",
});

const layerFromUrl = await felt.createLayersFromGeoJson({
  source: {
    sourceType: "geoJsonUrl",
    url: "https://example.com/parcels.geojson",
  },
  name: "Parcels",
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`createLayersFromGeoJson`](client.md#createlayersfromgeojson)

##### updateLayer()

> **updateLayer**(`params`): `Promise`\<[`Layer`](client.md#layer-1)>

Update a layer by passing a subset of the layer's properties.

Note that not all properties can be updated, so check the [UpdateLayerParams](client.md#updatelayerparams)
type to see which properties can be updated.

###### Parameters

###### params

[`UpdateLayerParams`](client.md#updatelayerparams)

###### Returns

`Promise`\<[`Layer`](client.md#layer-1)>

###### Example

```typescript
await felt.updateLayer({
  id: "layer-1",
  name: "My Layer",
  caption: "A description of the layer",
});
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`updateLayer`](client.md#updatelayer)

##### deleteLayer()

> **deleteLayer**(`id`): `Promise`\<`void`>

Delete a layer from the map by its id.

###### Parameters

###### id

`string`

###### Returns

`Promise`\<`void`>

###### Remarks

This only works for layers created via the SDK `createLayersFromGeoJson` method, not layers added via the Felt UI.

###### Example

```typescript
await felt.deleteLayer("layer-1");
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`deleteLayer`](client.md#deletelayer)

##### getLayerGroup()

> **getLayerGroup**(`id`): `Promise`\<`null` | [`LayerGroup`](client.md#layergroup)>

Get a layer group from the map by its id.

###### Parameters

###### id

`string`

###### Returns

`Promise`\<`null` | [`LayerGroup`](client.md#layergroup)>

The requested layer group.

###### Example

```typescript
const layerGroup = await felt.getLayerGroup("layer-group-1");
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getLayerGroup`](client.md#getlayergroup)

##### getLayerGroups()

> **getLayerGroups**(`constraint`?): `Promise`\<(`null` | [`LayerGroup`](client.md#layergroup))\[]>

Gets layer groups from the map, according to the constraints supplied. If no
constraints are supplied, all layer groups will be returned in rendering order.

###### Parameters

###### constraint?

[`GetLayerGroupsConstraint`](client.md#getlayergroupsconstraint)

The constraints to apply to the layer groups returned from the map.

###### Returns

`Promise`\<(`null` | [`LayerGroup`](client.md#layergroup))\[]>

The requested layer groups.

###### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getLayerGroups`](client.md#getlayergroups)

##### setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layer groups with the given ids.

###### Parameters

###### visibility

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`setLayerGroupVisibility`](client.md#setlayergroupvisibility)

##### setLayerGroupLegendVisibility()

> **setLayerGroupLegendVisibility**(`params`): `Promise`\<`void`>

Hide or show layer groups with the given ids from the legend.

###### Parameters

###### params

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerGroupLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`setLayerGroupLegendVisibility`](client.md#setlayergrouplegendvisibility)

##### getLegendItem()

> **getLegendItem**(`id`): `Promise`\<`null` | [`LegendItem`](client.md#legenditem)>

Allows you to get the state of a single legend item.

###### Parameters

###### id

[`LegendItemIdentifier`](client.md#legenditemidentifier)

###### Returns

`Promise`\<`null` | [`LegendItem`](client.md#legenditem)>

###### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getLegendItem`](client.md#getlegenditem)

##### getLegendItems()

> **getLegendItems**(`constraint`?): `Promise`\<(`null` | [`LegendItem`](client.md#legenditem))\[]>

Allows you to obtain the state of several legend items, by passing in
constraints describing which legend items you want.

If you do not pass any constraints, you will receive all legend items.

###### Parameters

###### constraint?

[`LegendItemsConstraint`](client.md#legenditemsconstraint)

###### Returns

`Promise`\<(`null` | [`LegendItem`](client.md#legenditem))\[]>

###### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getLegendItems`](client.md#getlegenditems)

##### setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`): `Promise`\<`void`>

Hide or show legend items with the given identifiers.

###### Parameters

###### visibility

###### show

[`LegendItemIdentifier`](client.md#legenditemidentifier)\[]

###### hide

[`LegendItemIdentifier`](client.md#legenditemidentifier)\[]

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLegendItemVisibility({
  show: [{layerId: "layer-group-1", id: "item-1-0"}],
  hide: [{layerId: "layer-group-2", id: "item-2-0"}],
})
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`setLegendItemVisibility`](client.md#setlegenditemvisibility)

##### getLayerFilters()

> **getLayerFilters**(`layerId`): `Promise`\<`null` | [`LayerFilters`](client.md#layerfilters)>

Get the filters for a layer.

###### Parameters

###### layerId

`string`

###### Returns

`Promise`\<`null` | [`LayerFilters`](client.md#layerfilters)>

###### Remarks

The return type gives you the filters split up into the various sources
that make up the overall filters for a layer.

###### Example

```typescript
const filters = await felt.getLayerFilters("layer-1");
console.log(filters.combined, filters.style, filters.ephemeral, filters.components);
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getLayerFilters`](client.md#getlayerfilters)

##### setLayerFilters()

> **setLayerFilters**(`params`): `Promise`\<`void`>

Sets the **ephemeral** filters for a layer.

###### Parameters

###### params

###### layerId

`string`

The layer that you want to set the filters for.

###### filters

[`Filters`](client.md#filters)

The filters to set for the layer. This will replace any ephemeral filters
that are currently set for the layer.

###### note

`string`

A note to display on the layer legend when this filter is applied. When the
note is shown, a reset button will also be shown, allowing the user to clear
the filter.

###### Returns

`Promise`\<`void`>

###### Example

```typescript
await felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`setLayerFilters`](client.md#setlayerfilters)

##### getLayerBoundaries()

> **getLayerBoundaries**(`layerId`): `Promise`\<`null` | [`LayerBoundaries`](client.md#layerboundaries)>

Get the spatial boundaries that are filtering a layer.

###### Parameters

###### layerId

`string`

###### Returns

`Promise`\<`null` | [`LayerBoundaries`](client.md#layerboundaries)>

###### Remarks

The return type gives you the boundaries split up into the various sources
that make up the overall boundary for a layer.

The combined boundary is the intersection of the other sources of boundaries.

###### Example

```typescript
const boundaries = await felt.getLayerBoundaries("layer-1");

console.log(boundaries?.combined);
console.log(boundaries?.spatialFilters);
console.log(boundaries?.ephemeral);
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getLayerBoundaries`](client.md#getlayerboundaries)

##### setLayerBoundary()

> **setLayerBoundary**(`params`): `Promise`\<`void`>

Set the [\`ephemeral\`](client.md#ephemeral-1) boundary for one or more layers.

###### Parameters

###### params

###### layerIds

`string`\[]

The ids of the layers to set the boundary for.

###### boundary

`null` | [`GeometryFilter`](client.md#geometryfilter)

The boundary to set for the layer.

Passing `null` clears the ephemeral boundary for the layer.

###### Returns

`Promise`\<`void`>

###### Example

```typescript
await felt.setLayerBoundary({
  layerIds: ["layer-1", "layer-2"],
  boundary: { type: "MultiPolygon", coordinates: [[[100, 0], [101, 0], [101, 1], [100, 1], [100, 0]]] }
});
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`setLayerBoundary`](client.md#setlayerboundary)

##### getRenderedFeatures()

> **getRenderedFeatures**(`params`?): `Promise`\<[`LayerFeature`](client.md#layerfeature)\[]>

Get the features that are currently **rendered** on the map in the viewport.

Note that this is explicitly about the features that are rendered, which isn't
necessarily a complete list of all the features in the viewport. This is because
of the way features are tiled: at low zoom levels or high feature densities, many
features are omitted from what is rendered on the screen.

###### Parameters

###### params?

[`GetRenderedFeaturesConstraint`](client.md#getrenderedfeaturesconstraint)

The constraints to apply to the features returned from the map.

###### Returns

`Promise`\<[`LayerFeature`](client.md#layerfeature)\[]>

###### Example

```typescript
const features = await felt.getRenderedFeatures();
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getRenderedFeatures`](client.md#getrenderedfeatures)

##### getFeature()

> **getFeature**(`params`): `Promise`\<`null` | [`LayerFeature`](client.md#layerfeature)>

Get a feature from the map by its ID and layer ID.

The response is a [LayerFeature](client.md#layerfeature) object, which does not include the
geometry of the feature.

You may want to use this when you don't need the geometry of a feature,
but you know the ID of the feature you need.

###### Parameters

###### params

###### id

`string` | `number`

###### layerId

`string`

###### Returns

`Promise`\<`null` | [`LayerFeature`](client.md#layerfeature)>

###### Example

```typescript
const feature = await felt.getFeature({ layerId: "layer-1", id: 123 });
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getFeature`](client.md#getfeature)

##### getFeatures()

> **getFeatures**(`params`): `Promise`\<\{ `features`: [`LayerFeature`](client.md#layerfeature)\[]; `count`: `number`; `previousPage`: `null` | `string`; `nextPage`: `null` | `string`; }>

Get a list of layer features.

###### Parameters

###### params

###### layerId

`string`

The ID of the layer to get features from.

###### filters

[`Filters`](client.md#filters)

Filters to be applied. These filters will merge with layer's own filters.

###### sorting

[`SortConfig`](client.md#sortconfig)

Attribute to sort by.

###### boundary

[`GeometryFilter`](client.md#geometryfilter)

The spatial boundary to be applied.

###### search

`string`

Search term to search by.

Search is case-insensitive and looks for matches across all feature properties.

###### pagination

`null` | `string`

Pagination token. It comes from either the `previousPage` or `nextPage`
properties of the previous response.

###### Returns

`Promise`\<\{ `features`: [`LayerFeature`](client.md#layerfeature)\[]; `count`: `number`; `previousPage`: `null` | `string`; `nextPage`: `null` | `string`; }>

The response is an object which contains:

* `features`: list of [LayerFeature](client.md#layerfeature) objects, which does not include
  the geometry of the feature but it does include its bounding box.
* `count`: the total number of features that match the query.
* `previousPage` & `nextPage`: The tokens to pass in the `pagination` param
  to navigate between pages.

###### Remarks

This list is paginated in sets of 20 features for each page. In order to paginate
between pages, the response includes `previousPage` and `nextPage` that are tokens
that should be sent in the `pagination` params for requesting sibling pages.

Text search is case-insensitive and looks for matches across all feature properties.

###### Example

```typescript
const page1Response = await felt.getFeatures({
  layerId: "layer-1",
  search: "abc123",
  pagination: undefined,
});

// Note that the search term here matches the one for the first page.
if (page1Response.nextPage) {
  const page2Response = await felt.getFeatures({
    layerId: "layer-1",
    search: "abc123",
    pagination: page1Response.nextPage,
  });
}
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getFeatures`](client.md#getfeatures)

##### getGeoJsonFeature()

> **getGeoJsonFeature**(`params`): `Promise`\<`null` | [`GeoJsonFeature`](client.md#geojsonfeature)>

Get a feature in GeoJSON format from the map by its ID and layer ID.

The response is a GeoJSON Feature object with the complete geometry of the
feature. Note that for some *very* large geometries, the response may take a
long time to return, and may return a very large object.

###### Parameters

###### params

###### id

`string` | `number`

###### layerId

`string`

###### Returns

`Promise`\<`null` | [`GeoJsonFeature`](client.md#geojsonfeature)>

###### Example

```typescript
const feature = await felt.getGeoJsonFeature({ layerId: "layer-1", id: 123 });
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getGeoJsonFeature`](client.md#getgeojsonfeature)

##### getCategoryData()

> **getCategoryData**(`params`): `Promise`\<[`GetLayerCategoriesGroup`](client.md#getlayercategoriesgroup)\[]>

Gets values from a layer grouped by a given attribute.

###### Parameters

###### params

[`GetLayerCategoriesParams`](client.md#getlayercategoriesparams)

###### Returns

`Promise`\<[`GetLayerCategoriesGroup`](client.md#getlayercategoriesgroup)\[]>

###### Remarks

Groups features in your layer by unique values in the specified attribute and calculates
a value for each group. By default, this value is the count of features in each group.

You can apply filters in two ways:

1. At the top level (using `boundary` and `filters`), which affects both what categories
   are included and how values are calculated
2. In the `values` configuration, which only affects the values but keeps all categories

This two-level filtering is particularly useful when you want to compare subsets of data
while maintaining consistent categories. For example, you might want to show the distribution
of all building types in a city, but only count buildings built after 2000 in each category.

###### Example

```typescript
// Basic grouping: Count of buildings by type
const buildingsByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type"
});

// Filtered grouping: Only count buildings in downtown
const downtownBuildingsByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type",
  boundary: [-122.43, 47.60, -122.33, 47.62]  // downtown boundary
});

// Advanced: Show all building types, but only sum floor area of recent buildings
const recentBuildingAreaByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type",
  values: {
    filters: ["year_built", "gte", 2000],
    aggregation: {
      method: "sum",
      attribute: "floor_area"
    }
  }
});

// Compare residential density across neighborhoods while only counting recent buildings
const newBuildingDensityByNeighborhood = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "neighborhood",
  values: {
    filters: ["year_built", "gte", 2000],
    aggregation: {
      method: "avg",
      attribute: "units_per_acre"
    }
  }
});
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getCategoryData`](client.md#getcategorydata)

##### getHistogramData()

> **getHistogramData**(`params`): `Promise`\<[`GetLayerHistogramBin`](client.md#getlayerhistogrambin)\[]>

Gets a histogram of values from a layer for a given attribute.

###### Parameters

###### params

[`GetLayerHistogramParams`](client.md#getlayerhistogramparams)

###### Returns

`Promise`\<[`GetLayerHistogramBin`](client.md#getlayerhistogrambin)\[]>

###### Remarks

Creates bins (ranges) for numeric data and counts how many features fall into each bin,
or returns aggregated values for each bin.

You can control how the bins are created using the `steps` parameter, choosing from
several methods like equal intervals, quantiles, or natural breaks (Jenks), or passing
in the step values directly if you know how you want to bin the data.

Like getCategoryData, you can apply filters in two ways:

1. At the top level (using `boundary` and `filters`), which affects both how the bins
   are calculated and what features are counted in each bin
2. In the `values` configuration, which only affects what gets counted but keeps the
   bin ranges the same

This is particularly useful when you want to compare distributions while keeping
consistent bin ranges. For example, you might want to compare the distribution of
building heights in different years while using the same height ranges.

###### Example

```typescript
// Basic histogram: Building heights in 5 natural break bins
const buildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: { type: "jenks", count: 5 }
});

// Compare old vs new buildings using the same height ranges
const oldBuildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: [0, 20, 50, 100, 200, 500],
  values: {
    filters: ["year_built", "lt", 1950]
  }
});

const newBuildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: [0, 20, 50, 100, 200, 500],  // Same ranges as above
  values: {
    filters: ["year_built", "gte", 1950]
  }
});
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getHistogramData`](client.md#gethistogramdata)

##### getAggregates()

> **getAggregates**\<`T`>(`params`): `Promise`\<`Record`\<`T`, `null` | `number`>>

Calculates a single aggregate value for a layer based on the provided configuration.

###### Type Parameters

• **T** *extends* `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"` | `"count"`

###### Parameters

###### params

[`GetLayerCalculationParams`](client.md#getlayercalculationparamst)\<`T`>

###### Returns

`Promise`\<`Record`\<`T`, `null` | `number`>>

###### Remarks

Performs statistical calculations on your data, like counting features or computing
averages, sums, etc. You can focus your calculation on specific areas or subsets
of your data using boundaries and filters.

When no aggregation is specified, it counts features. When an aggregation is provided,
it performs that calculation (average, sum, etc.) on the specified attribute.

###### Example

```typescript
// Count all residential buildings
const residentialCount = await felt.getAggregates({
  layerId: "buildings",
  filters: ["type", "eq", "residential"]
});

// Calculate average home value in a specific neighborhood
const avgHomeValue = await felt.getAggregates({
  layerId: "buildings",
  boundary: [-122.43, 47.60, -122.33, 47.62],  // neighborhood boundary
  aggregation: {
    method: "avg",
    attribute: "assessed_value"
  }
});

// Find the maximum building height for buildings built after 2000
const maxNewBuildingHeight = await felt.getAggregates({
  layerId: "buildings",
  filters: ["year_built", "gte", 2000],
  aggregation: {
    method: "max",
    attribute: "height"
  }
});
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getAggregates`](client.md#getaggregates)

##### getPrecomputedAggregates()

> **getPrecomputedAggregates**(`params`): `Promise`\<\{ `avg`: `null` | `number`; `max`: `null` | `number`; `min`: `null` | `number`; `sum`: `null` | `number`; `count`: `null` | `number`; }>

Calculates aggregates for spatial cells of a layer.

###### Parameters

###### params

[`GetLayerPrecomputedCalculationParams`](client.md#getlayerprecomputedcalculationparams)

###### Returns

`Promise`\<\{ `avg`: `null` | `number`; `max`: `null` | `number`; `min`: `null` | `number`; `sum`: `null` | `number`; `count`: `null` | `number`; }>

###### Remarks

Performs statistical calculations on spatial cells of a layer, returning min, max, avg, sum, and count. You can focus your calculation on specific areas or subsets
of your data using boundaries and filters. When using the count method, an attribute is not required.

###### Example

```typescript
const aggregates = await felt.getPrecomputedAggregates({
  layerId: "buildings",
  gridConfig: {
    type: "h3",
    resolution: 10,
    method: "avg",
    attribute: "assessed_value"
  },
});
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getPrecomputedAggregates`](client.md#getprecomputedaggregates)

##### getLayerSchema()

> **getLayerSchema**(`layerId`): `Promise`\<[`LayerSchema`](client.md#layerschema)>

Get the schema for a layer.

###### Parameters

###### layerId

`string`

###### Returns

`Promise`\<[`LayerSchema`](client.md#layerschema)>

###### Remarks

The schema describes the structure of the data in a layer, including the attributes
that are available on the features in the layer.

This can be useful to build generic UIs that need to know the structure of the data in
a layer, such as a dropdown to choose an attribute.

###### Example

```typescript
const schema = await felt.getLayerSchema("layer-1");
const attributeIds = schema.attributes.map((attr) => attr.id);
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`getLayerSchema`](client.md#getlayerschema)

##### getMapDetails()

> **getMapDetails**(): `Promise`\<[`MapDetails`](client.md#mapdetails)>

Gets the details of the map.

###### Returns

`Promise`\<[`MapDetails`](client.md#mapdetails)>

###### Example

```typescript
const details = await felt.getMapDetails();
console.log({
  id: details.id,
  title: details.title,
  description: details.description,
});
```

###### Inherited from

[`MiscController`](client.md#misccontroller).[`getMapDetails`](client.md#getmapdetails-1)

##### getSelection()

> **getSelection**(): `Promise`\<[`EntityNode`](client.md#entitynode)\[]>

Gets the current selection as a list of entity identifiers.

###### Returns

`Promise`\<[`EntityNode`](client.md#entitynode)\[]>

###### Example

```typescript
const selection = await felt.getSelection();
```

###### Inherited from

[`SelectionController`](client.md#selectioncontroller).[`getSelection`](client.md#getselection-1)

##### selectFeature()

> **selectFeature**(`params`): `Promise`\<`void`>

Selects a feature on a layer. This will show the feature's popup, modal or
sidebar (if configured) and highlight the feature.

###### Parameters

###### params

[`FeatureSelection`](client.md#featureselection)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.selectFeature({
  id: 123,
  layerId: "my-layer",
  showPopup: true,
  fitViewport: { maxZoom: 15 },
});
```

###### Inherited from

[`SelectionController`](client.md#selectioncontroller).[`selectFeature`](client.md#selectfeature-1)

##### clearSelection()

> **clearSelection**(`params`?): `Promise`\<`void`>

Clears the current selection. This clears the selection of

###### Parameters

###### params?

The parameters to clear the selection. If this is not provided,
both features and elements will be cleared.

###### features

`boolean`

Whether to clear the features from the selection.

###### elements

`boolean`

Whether to clear the elements from the selection.

###### Returns

`Promise`\<`void`>

###### Example

```typescript

// Removes all features and elements from the selection
felt.clearSelection();

// Removes only features from the selection
felt.clearSelection({ features: true });

// Removes only elements from the selection
felt.clearSelection({ elements: true });
```

###### Default

```typescript
{ features: true, elements: true }
```

###### Inherited from

[`SelectionController`](client.md#selectioncontroller).[`clearSelection`](client.md#clearselection-1)

##### setTool()

> **setTool**(`tool`): `void`

Sets the tool to use for drawing elements on the map.

###### Parameters

###### tool

The tool to set.

`null` | `ToolType`

###### Returns

`void`

###### Example

```typescript
// Set the tool to "marker"
await felt.setTool("marker");

// put down the tool
await felt.setTool(null);
```

###### Inherited from

[`ToolsController`](client.md#toolscontroller).[`setTool`](client.md#settool-1)

##### getTool()

> **getTool**(): `Promise`\<`null` | `ToolType`>

Gets the current tool, if any is in use.

###### Returns

`Promise`\<`null` | `ToolType`>

The current tool, or `null` if no tool is in use.

###### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

###### Inherited from

[`ToolsController`](client.md#toolscontroller).[`getTool`](client.md#gettool-1)

##### onToolChange()

> **onToolChange**(`args`): `VoidFunction`

Listens for changes to the current tool.

###### Parameters

###### args

###### handler

(`tool`) => `void`

This callback is called with the current tool whenever the tool changes.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onToolChange({
  handler: tool => console.log(tool),
});

// later on...
unsubscribe();
```

###### Inherited from

[`ToolsController`](client.md#toolscontroller).[`onToolChange`](client.md#ontoolchange-1)

##### setToolSettings()

> **setToolSettings**(`settings`): `void`

Sets the settings for the current tool.

###### Parameters

###### settings

[`InputToolSettings`](client.md#inputtoolsettings)

The settings to set.

###### Returns

`void`

###### Example

```typescript
// Set the settings for the marker tool
await felt.setToolSettings({
  tool: "marker",
  color: "#FE17",
});
```

###### Inherited from

[`ToolsController`](client.md#toolscontroller).[`setToolSettings`](client.md#settoolsettings-1)

##### getToolSettings()

> **getToolSettings**\<`T`>(`tool`): `Promise`\<`ToolSettingsMap`\[`T`]>

Gets the settings for the chosen tool

###### Type Parameters

• **T** *extends* `ConfigurableToolType`

###### Parameters

###### tool

`T`

###### Returns

`Promise`\<`ToolSettingsMap`\[`T`]>

The settings for the chosen tool.

###### Example

```typescript
const settings = await felt.getToolSettings("marker");
```

###### Inherited from

[`ToolsController`](client.md#toolscontroller).[`getToolSettings`](client.md#gettoolsettings-1)

##### onToolSettingsChange()

> **onToolSettingsChange**(`args`): `VoidFunction`

Listens for changes to the settings on all tools.

###### Parameters

###### args

###### handler

(`settings`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onToolSettingsChange({
  handler: settings => console.log(settings),
});

// later on...
unsubscribe();
```

###### Inherited from

[`ToolsController`](client.md#toolscontroller).[`onToolSettingsChange`](client.md#ontoolsettingschange-1)

##### addPanel()

> **addPanel**(`args`): `void`

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

###### Parameters

###### args

[`AddPanelInput`](client.md#addpanelinput)

The arguments for the method.

###### Returns

`void`

###### Example

```typescript
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
```

###### Inherited from

[`UiController`](client.md#uicontroller).[`addPanel`](client.md#addpanel-1)

##### updatePanel()

> **updatePanel**(`panel`): `void`

Updates a panel.

Panel to update is identified by the `id` property.

###### Parameters

###### panel

[`UpdatePanelElementInput`](client.md#updatepanelelementinput)

The panel to update.

###### Returns

`void`

###### Remarks

Properties provided will override the existing properties.
Override is done at Panel level, so if you want to update a specific element,
you need to provide the entire element. For partial updates of elements, use
[updatePanelElements](client.md#updatepanelelements-1) instead.

###### Example

```typescript
await felt.updatePanel({
  id: "panel-1",
  title: "A new title for my panel", // only title changes
});
```

###### Inherited from

[`UiController`](client.md#uicontroller).[`updatePanel`](client.md#updatepanel-1)

##### deletePanel()

> **deletePanel**(`id`): `void`

Deletes a panel.

###### Parameters

###### id

`string`

The id of the panel to delete.

###### Returns

`void`

###### Example

```typescript
await felt.deletePanel("panel-1");
```

###### Inherited from

[`UiController`](client.md#uicontroller).[`deletePanel`](client.md#deletepanel-1)

##### addPanelElements()

> **addPanelElements**(`args`): `void`

Adds elements to a panel.

###### Parameters

###### args

[`AddPanelElementsInput`](client.md#addpanelelementsinput)

The arguments for the method.

###### Returns

`void`

###### Example

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

###### Inherited from

[`UiController`](client.md#uicontroller).[`addPanelElements`](client.md#addpanelelements-1)

##### updatePanelElements()

> **updatePanelElements**(`args`): `void`

Updates an element in a panel.

###### Parameters

###### args

[`UpdatePanelElementsInput`](client.md#updatepanelelementsinput)

The arguments for the method.

###### Returns

`void`

###### Example

```typescript
await felt.updatePanelElements({
  panelId: "panel-1",
  elements: {
    "element-1": { type: "Text", content: "Hello, world!" },
  },
});
```

###### Inherited from

[`UiController`](client.md#uicontroller).[`updatePanelElements`](client.md#updatepanelelements-1)

##### deletePanelElements()

> **deletePanelElements**(`args`): `void`

Deletes elements from a panel.

###### Parameters

###### args

[`DeletePanelElements`](client.md#deletepanelelements-2)

The arguments for the method.

###### Returns

`void`

###### Example

```typescript
await felt.deletePanelElements({
  panelId: "panel-1",
  elements: ["element-1", "element-2"],
});
```

###### Inherited from

[`UiController`](client.md#uicontroller).[`deletePanelElements`](client.md#deletepanelelements-1)

##### updateUiControls()

> **updateUiControls**(`controls`): `void`

Updates the UI controls on the embedded map.

###### Parameters

###### controls

[`UiControlsOptions`](client.md#uicontrolsoptions)

The controls to update.

###### Returns

`void`

###### Example

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

###### Inherited from

[`UiController`](client.md#uicontroller).[`updateUiControls`](client.md#updateuicontrols-1)

##### setOnMapInteractionsUi()

> **setOnMapInteractionsUi**(`options`): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

###### Parameters

###### options

[`OnMapInteractionsOptions`](client.md#onmapinteractionsoptions)

###### Returns

`void`

###### Example

```typescript
// Disable UI when hovering or selecting features
await felt.setOnMapInteractionsUi({
  featureSelectPanel: false,
  featureHoverPanel: false,
});
```

###### Inherited from

[`UiController`](client.md#uicontroller).[`setOnMapInteractionsUi`](client.md#setonmapinteractionsui-1)

##### showLayerDataTable()

> **showLayerDataTable**(`params`?): `Promise`\<`void`>

Shows a data table view for the specified layer, optionally sorted by a given attribute.

###### Parameters

###### params?

###### layerId

`string`

###### sorting

[`SortConfig`](client.md#sortconfig)

###### Returns

`Promise`\<`void`>

###### Example

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

###### Inherited from

[`UiController`](client.md#uicontroller).[`showLayerDataTable`](client.md#showlayerdatatable-1)

##### hideLayerDataTable()

> **hideLayerDataTable**(): `Promise`\<`void`>

Hides the data table.

###### Returns

`Promise`\<`void`>

###### Example

```typescript
await felt.hideLayerDataTable();
```

###### Inherited from

[`UiController`](client.md#uicontroller).[`hideLayerDataTable`](client.md#hidelayerdatatable-1)

##### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](client.md#viewportstate)>

Gets the current state of the viewport.

###### Returns

`Promise`\<[`ViewportState`](client.md#viewportstate)>

###### Example

```typescript
// Get current viewport state
const viewport = await felt.getViewport();
console.log({
  center: viewport.center,
  zoom: viewport.zoom,
});
```

###### Inherited from

[`ViewportController`](client.md#viewportcontroller).[`getViewport`](client.md#getviewport-1)

##### setViewport()

> **setViewport**(`viewport`): `void`

Moves the map to the specified location.

###### Parameters

###### viewport

[`SetViewportCenterZoomParams`](client.md#setviewportcenterzoomparams)

###### Returns

`void`

###### Example

```typescript
felt.setViewport({
  center: { latitude: 0, longitude: 0 },
  zoom: 10,
});
```

###### Inherited from

[`ViewportController`](client.md#viewportcontroller).[`setViewport`](client.md#setviewport-1)

##### getViewportConstraints()

> **getViewportConstraints**(): `Promise`\<`null` | [`ViewportConstraints`](client.md#viewportconstraints)>

Gets the current state of the viewport constraints.

###### Returns

`Promise`\<`null` | [`ViewportConstraints`](client.md#viewportconstraints)>

###### Example

```typescript
// Get current viewport constraints
const constraints = await felt.getViewportConstraints();
if (constraints) {
  console.log({
    bounds: constraints.bounds,
    minZoom: constraints.minZoom,
    maxZoom: constraints.maxZoom
  });
} else {
  console.log("No viewport constraints set");
}
```

###### Inherited from

[`ViewportController`](client.md#viewportcontroller).[`getViewportConstraints`](client.md#getviewportconstraints-1)

##### setViewportConstraints()

> **setViewportConstraints**(`constraints`): `void`

Constrains the map viewport so it stays inside certain bounds and/or certain zoom levels.

###### Parameters

###### constraints

`null` | `Partial`\<[`ViewportConstraints`](client.md#viewportconstraints)>

###### Returns

`void`

###### Examples

```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
  minZoom: 1,
  maxZoom: 23,
});
```

every constraint is optional

```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
});
```

if a constraint is null, it will be removed but keeping the others

```typescript
felt.setViewportConstraints({ bounds: null });
```

if method receives null, it will remove the constraints

```typescript
felt.setViewportConstraints(null);
```

###### Inherited from

[`ViewportController`](client.md#viewportcontroller).[`setViewportConstraints`](client.md#setviewportconstraints-1)

##### fitViewportToBounds()

> **fitViewportToBounds**(`bounds`): `void`

Fits the map to the specified bounds.

###### Parameters

###### bounds

[`ViewportFitBoundsParams`](client.md#viewportfitboundsparams)

###### Returns

`void`

###### Example

```typescript
const west = -122.4194;
const south = 37.7749;
const east = -122.4194;
const north = 37.7749;
felt.fitViewportToBounds({ bounds: [west, south, east, north] });
```

###### Inherited from

[`ViewportController`](client.md#viewportcontroller).[`fitViewportToBounds`](client.md#fitviewporttobounds-1)

#### Events

##### onElementCreate()

> **onElementCreate**(`args`): `VoidFunction`

Adds a listener for when an element is created.

###### Parameters

###### args

###### handler

(`change`) => `void`

The handler that is called when an element is created.

This will fire when elements are created programatically, or when the
user starts creating an element with a drawing tool.

When the user creates an element with a drawing tool, it can begin in
an invalid state, such as if you've just placed a single point in a polygon.

You can use the `isBeingCreated` property to determine if the element is
still being created by a drawing tool.

If you want to know when the element is finished being created, you can
use the [\`onElementCreateEnd\`](client.md#onelementcreateend) listener.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementCreate({
  handler: (element) => console.log(element.id),
});

// later on...
unsubscribe();
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`onElementCreate`](client.md#onelementcreate)

##### onElementCreateEnd()

> **onElementCreateEnd**(`args`): `VoidFunction`

Listens for when a new element is finished being created by a drawing tool.

This differs from the [\`onElementCreate\`](client.md#onelementcreate) listener, which fires whenever an
element is first created. This fires when the user finishes creating an element
which could be after a series of interactions.

For example, when creating a polygon, the user places a series of points then
finishes by pressing Enter or Escape. Or when creating a Place element, they
add the marker, type a label, then finally deselect the element.

###### Parameters

###### args

###### handler

(`params`) => `void`

The handler to call whenever this event fires.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onToolCreatedElement({
  handler: (params) => console.log(params),
});

// later on...
unsubscribe();
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`onElementCreateEnd`](client.md#onelementcreateend)

##### onElementChange()

> **onElementChange**(`args`): `VoidFunction`

Adds a listener for when an element changes.

This will fire when an element is being edited, either on the map by the user
or programatically.

Like the [\`onElementCreate\`](client.md#onelementcreate) listener, this will fire when an element is
still being created by a drawing tool.

You can check the [\`isBeingCreated\`](client.md#isbeingcreated) property to determine if the element is
still being created by a drawing tool.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

The id of the element to listen for changes to.

###### handler

(`change`) => `void`

The handler that is called when the element changes.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: ({element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`onElementChange`](client.md#onelementchange)

##### onElementDelete()

> **onElementDelete**(`args`): `VoidFunction`

Adds a listener for when an element is deleted.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

The id of the element to listen for deletions of.

###### handler

() => `void`

The handler that is called when the element is deleted.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementDelete({
  options: { id: "element-1" },
  handler: () => console.log("element-1 deleted"),
});

// later on...
unsubscribe();
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`onElementDelete`](client.md#onelementdelete)

##### onElementGroupChange()

> **onElementGroupChange**(`args`): `VoidFunction`

Adds a listener for when an element group changes.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```

###### Inherited from

[`ElementsController`](client.md#elementscontroller).[`onElementGroupChange`](client.md#onelementgroupchange)

##### onPointerClick()

> **onPointerClick**(`params`): `VoidFunction`

Allows you to be notified the user clicks on the map.

###### Parameters

###### params

###### handler

(`event`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onPointerClick({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```

###### Inherited from

[`InteractionsController`](client.md#interactionscontroller).[`onPointerClick`](client.md#onpointerclick)

##### onPointerMove()

> **onPointerMove**(`params`): `VoidFunction`

Allows you to be notified the user moves the mouse over the map.

###### Parameters

###### params

Params for the listener

###### handler

(`event`) => `void`

The handler function

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
// Track mouse movement and features under cursor
const unsubscribe = felt.onPointerMove({
  handler: (event) => {
    console.log("Mouse position:", event.center);
    console.log("Features under cursor:", event.features);
  }
});

// later on...
unsubscribe();
```

###### Inherited from

[`InteractionsController`](client.md#interactionscontroller).[`onPointerMove`](client.md#onpointermove)

##### onLayerChange()

> **onLayerChange**(`args`): `VoidFunction`

Adds a listener for when a layer changes.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

The id of the layer to listen for changes to.

###### handler

(`change`) => `void`

The handler that is called when the layer changes.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onLayerChange({
  options: { id: "layer-1" },
  handler: ({layer}) => console.log(layer.bounds),
});

// later on...
unsubscribe();
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`onLayerChange`](client.md#onlayerchange)

##### onLayerGroupChange()

> **onLayerGroupChange**(`args`): `VoidFunction`

Adds a listener for when a layer group changes.

###### Parameters

###### args

###### options

\{ `id`: `string`; }

###### options.id

`string`

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onLayerGroupChange({
  options: { id: "layer-group-1" },
  handler: ({layerGroup}) => console.log(layerGroup.id),
});

// later on...
unsubscribe();
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`onLayerGroupChange`](client.md#onlayergroupchange)

##### onLegendItemChange()

> **onLegendItemChange**(`args`): `VoidFunction`

Adds a listener for when a legend item changes.

###### Parameters

###### args

###### options

[`LegendItemIdentifier`](client.md#legenditemidentifier)

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onLegendItemChange({
  options: { layerId: "layer-1", id: "item-1-0" },
  handler: ({legendItem}) => console.log(legendItem.visible),
});

// later on...
unsubscribe();
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`onLegendItemChange`](client.md#onlegenditemchange)

##### onLayerFiltersChange()

> **onLayerFiltersChange**(`params`): `VoidFunction`

Adds a listener for when a layer's filters change.

###### Parameters

###### params

###### options

\{ `layerId`: `string`; }

###### options.layerId

`string`

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Remarks

This event fires whenever any type of filter changes on the layer, including
ephemeral filters set via the SDK, style-based filters, or filters set through
the Felt UI via Components.

###### Example

```typescript
const unsubscribe = felt.onLayerFiltersChange({
  options: { layerId: "layer-1" },
  handler: ({combined, ephemeral, style, components}) => {
    console.log("Layer filters updated:", {
      combined,  // All filters combined
      ephemeral, // Filters set via SDK
      style,     // Filters from layer style
      components // Filters from UI components
    });
  },
});

// later on...
unsubscribe();
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`onLayerFiltersChange`](client.md#onlayerfilterschange)

##### onLayerBoundariesChange()

> **onLayerBoundariesChange**(`params`): `VoidFunction`

Adds a listener for when a layer's spatial boundaries change.

###### Parameters

###### params

###### options

\{ `layerId`: `string`; }

###### options.layerId

`string`

The id of the layer to listen for boundary changes on.

###### handler

(`boundaries`) => `void`

A function that is called when the boundaries change.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Remarks

This event fires whenever any type of spatial boundary changes on the layer, including
ephemeral boundaries set via the SDK or boundaries set through the Felt UI via
Spatial filter components.

###### Example

```typescript
const unsubscribe = felt.onLayerBoundariesChange({
  options: { layerId: "layer-1" },
  handler: ({combined, ephemeral, spatialFilters}) => {
    console.log("Layer boundaries updated:", {
      combined,  // All boundaries combined
      ephemeral, // Boundaries set via SDK
      spatialFilters // Boundaries set via UI
    });
  },
});

// later on...
unsubscribe();
```

###### Inherited from

[`LayersController`](client.md#layerscontroller).[`onLayerBoundariesChange`](client.md#onlayerboundarieschange)

##### onSelectionChange()

> **onSelectionChange**(`params`): `VoidFunction`

Adds a listener for when the selection changes.

###### Parameters

###### params

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onSelectionChange({
  handler: ({selection}) => console.log(selection),
});

// later on...
unsubscribe();
```

###### Inherited from

[`SelectionController`](client.md#selectioncontroller).[`onSelectionChange`](client.md#onselectionchange-1)

##### onViewportMove()

> **onViewportMove**(`args`): `VoidFunction`

Adds a listener for when the viewport changes.

###### Parameters

###### args

###### handler

(`viewport`) => `void`

This callback is called with the current viewport state whenever
the viewport changes.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onViewportMove({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

###### Inherited from

[`ViewportController`](client.md#viewportcontroller).[`onViewportMove`](client.md#onviewportmove-1)

##### onViewportMoveEnd()

> **onViewportMoveEnd**(`args`): `VoidFunction`

Adds a listener for when the viewport move ends, which is when the user
stops dragging or zooming the map, animations have finished, or inertial
dragging ends.

###### Parameters

###### args

###### handler

(`viewport`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onViewportMoveEnd({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

###### Inherited from

[`ViewportController`](client.md#viewportcontroller).[`onViewportMoveEnd`](client.md#onviewportmoveend-1)

##### onMapIdle()

> **onMapIdle**(`args`): `VoidFunction`

Adds a listener for when the map is idle, which is defined as:

* No transitions are in progress
* The user is not interacting with the map, e.g. by panning or zooming
* All tiles for the current viewport have been loaded
* Any fade transitions (e.g. for labels) have completed

###### Parameters

###### args

###### handler

() => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onMapIdle({ handler: () => console.log("map is idle") });

// later on...
unsubscribe();
```

###### Inherited from

[`ViewportController`](client.md#viewportcontroller).[`onMapIdle`](client.md#onmapidle-1)

#### Properties

##### iframe

> `readonly` **iframe**: `null` | `HTMLIFrameElement`

The iframe element containing the Felt map, if it is an embedded map.

***

### FeltEmbedOptions

#### Extends

* `zInfer`\<*typeof* `FeltEmbedOptionsSchema`>

#### Properties

##### token?

> `optional` **token**: `string`

A short-lived (15 minutes) authentication token to use for showing embeds that are configured to be
private.

###### Inherited from

`zInfer.token`

***

### MiscController

#### Extended by

* [`FeltController`](client.md#feltcontroller)

#### Methods

##### getMapDetails()

> **getMapDetails**(): `Promise`\<[`MapDetails`](client.md#mapdetails)>

Gets the details of the map.

###### Returns

`Promise`\<[`MapDetails`](client.md#mapdetails)>

###### Example

```typescript
const details = await felt.getMapDetails();
console.log({
  id: details.id,
  title: details.title,
  description: details.description,
});
```

***

### SelectionController

The Selection controller allows you to listen for changes to the selection on the map.

#### Extended by

* [`FeltController`](client.md#feltcontroller)

#### Methods

##### getSelection()

> **getSelection**(): `Promise`\<[`EntityNode`](client.md#entitynode)\[]>

Gets the current selection as a list of entity identifiers.

###### Returns

`Promise`\<[`EntityNode`](client.md#entitynode)\[]>

###### Example

```typescript
const selection = await felt.getSelection();
```

##### selectFeature()

> **selectFeature**(`params`): `Promise`\<`void`>

Selects a feature on a layer. This will show the feature's popup, modal or
sidebar (if configured) and highlight the feature.

###### Parameters

###### params

[`FeatureSelection`](client.md#featureselection)

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.selectFeature({
  id: 123,
  layerId: "my-layer",
  showPopup: true,
  fitViewport: { maxZoom: 15 },
});
```

##### clearSelection()

> **clearSelection**(`params`?): `Promise`\<`void`>

Clears the current selection. This clears the selection of

###### Parameters

###### params?

The parameters to clear the selection. If this is not provided,
both features and elements will be cleared.

###### features

`boolean`

Whether to clear the features from the selection.

###### elements

`boolean`

Whether to clear the elements from the selection.

###### Returns

`Promise`\<`void`>

###### Example

```typescript

// Removes all features and elements from the selection
felt.clearSelection();

// Removes only features from the selection
felt.clearSelection({ features: true });

// Removes only elements from the selection
felt.clearSelection({ elements: true });
```

###### Default

```typescript
{ features: true, elements: true }
```

#### Events

##### onSelectionChange()

> **onSelectionChange**(`params`): `VoidFunction`

Adds a listener for when the selection changes.

###### Parameters

###### params

###### handler

(`change`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onSelectionChange({
  handler: ({selection}) => console.log(selection),
});

// later on...
unsubscribe();
```

***

### ElementNode

References an element on the map.

***

### ElementGroupNode

References an element group.

***

### LayerNode

References a layer on the map.

***

### LayerGroupNode

References a layer group on the map.

***

### FeatureNode

References a feature on the map.

***

### FeatureSelection

The options for selecting a feature in a layer.

#### Extends

* `zInfer`\<*typeof* `FeatureSelectionSchema`>

#### Properties

##### id

> **id**: `string` | `number`

The id of the feature to select.

###### Inherited from

`zInfer.id`

##### layerId

> **layerId**: `string`

The id of the layer that the feature belongs to.

###### Inherited from

`zInfer.layerId`

##### showPopup?

> `optional` **showPopup**: `boolean`

Whether to show the feature's popup, if it is configured in the layer's style.

###### Default

```ts
true
```

###### Inherited from

`zInfer.showPopup`

##### fitViewport?

> `optional` **fitViewport**: `boolean` | \{ `maxZoom`: `number`; }

Whether to center the view on the feature after selecting it.

When true, the viewport will be centered on the feature and zoomed to fit the feature
in the viewport. If you need to control the zoom level to prevent it zooming in too
far, you can pass an object with a `maxZoom` property.

This is useful for avoiding zooming in too far on point features, or if you want
to maintain the current zoom level.

###### Default

```ts
true
```

###### Inherited from

`zInfer.fitViewport`

***

### LatLng

Represents a point in world coordinates.

***

### GeoJsonFeature

A GeoJSON feature object, compliant with:
[https://datatracker.ietf.org/doc/html/rfc7946#section-3.2](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2)

#### Properties

##### geometry

> **geometry**: [`GeoJsonGeometry`](client.md#geojsongeometry)

The feature's geometry

##### properties

> **properties**: [`GeoJsonProperties`](client.md#geojsonproperties)

Properties associated with this feature.

##### bbox?

> `optional` **bbox**: \[`number`, `number`, `number`, `number`]

The bounding box of the feature in \[west, south, east, north] order.

##### id?

> `optional` **id**: `string` | `number`

A value that uniquely identifies this feature in a
[https://tools.ietf.org/html/rfc7946#section-3.2](https://tools.ietf.org/html/rfc7946#section-3.2).

***

### MultiPointGeometry

A GeoJSON multi-point geometry.

#### Remarks

You shouldn't expect this to come from Felt - it is here for completeness
of the GeoJSON spec.

***

### MultiPolygonGeometry

A GeoJSON multi-polygon geometry.

***

### LineStringGeometry

A GeoJSON line string geometry.

***

### MultiLineStringGeometry

A GeoJSON multi-line string geometry.

***

### SortConfig

Configuration for sorting data by a specific attribute

#### Extends

* `zInfer`\<*typeof* `SortConfigSchema`>

#### Properties

##### direction

> **direction**: `"asc"` | `"desc"`

The direction to sort in

###### Overrides

`zInfer.direction`

##### attribute

> **attribute**: `string`

The attribute to sort by. What this represents depends on the context.
For instance, when sorting features in a data table, the attribute is
the column to sort by.

###### Inherited from

`zInfer.attribute`

***

### ToolsController

The Tools controller allows you to let users draw elements on the map.

#### Extended by

* [`FeltController`](client.md#feltcontroller)

#### Methods

##### setTool()

> **setTool**(`tool`): `void`

Sets the tool to use for drawing elements on the map.

###### Parameters

###### tool

The tool to set.

`null` | `ToolType`

###### Returns

`void`

###### Example

```typescript
// Set the tool to "marker"
await felt.setTool("marker");

// put down the tool
await felt.setTool(null);
```

##### getTool()

> **getTool**(): `Promise`\<`null` | `ToolType`>

Gets the current tool, if any is in use.

###### Returns

`Promise`\<`null` | `ToolType`>

The current tool, or `null` if no tool is in use.

###### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

##### onToolChange()

> **onToolChange**(`args`): `VoidFunction`

Listens for changes to the current tool.

###### Parameters

###### args

###### handler

(`tool`) => `void`

This callback is called with the current tool whenever the tool changes.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onToolChange({
  handler: tool => console.log(tool),
});

// later on...
unsubscribe();
```

##### setToolSettings()

> **setToolSettings**(`settings`): `void`

Sets the settings for the current tool.

###### Parameters

###### settings

[`InputToolSettings`](client.md#inputtoolsettings)

The settings to set.

###### Returns

`void`

###### Example

```typescript
// Set the settings for the marker tool
await felt.setToolSettings({
  tool: "marker",
  color: "#FE17",
});
```

##### getToolSettings()

> **getToolSettings**\<`T`>(`tool`): `Promise`\<`ToolSettingsMap`\[`T`]>

Gets the settings for the chosen tool

###### Type Parameters

• **T** *extends* `ConfigurableToolType`

###### Parameters

###### tool

`T`

###### Returns

`Promise`\<`ToolSettingsMap`\[`T`]>

The settings for the chosen tool.

###### Example

```typescript
const settings = await felt.getToolSettings("marker");
```

##### onToolSettingsChange()

> **onToolSettingsChange**(`args`): `VoidFunction`

Listens for changes to the settings on all tools.

###### Parameters

###### args

###### handler

(`settings`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onToolSettingsChange({
  handler: settings => console.log(settings),
});

// later on...
unsubscribe();
```

***

### UiController

The UI controller allows you to control various aspects of the Felt UI in your map.

This includes enabling/disabling UI controls, managing on-map interactions, and controlling
the visibility of UI components like the data table.

#### Extended by

* [`FeltController`](client.md#feltcontroller)

#### Methods

##### addPanel()

> **addPanel**(`args`): `void`

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

###### Parameters

###### args

[`AddPanelInput`](client.md#addpanelinput)

The arguments for the method.

###### Returns

`void`

###### Example

```typescript
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
```

##### updatePanel()

> **updatePanel**(`panel`): `void`

Updates a panel.

Panel to update is identified by the `id` property.

###### Parameters

###### panel

[`UpdatePanelElementInput`](client.md#updatepanelelementinput)

The panel to update.

###### Returns

`void`

###### Remarks

Properties provided will override the existing properties.
Override is done at Panel level, so if you want to update a specific element,
you need to provide the entire element. For partial updates of elements, use
[updatePanelElements](client.md#updatepanelelements-1) instead.

###### Example

```typescript
await felt.updatePanel({
  id: "panel-1",
  title: "A new title for my panel", // only title changes
});
```

##### deletePanel()

> **deletePanel**(`id`): `void`

Deletes a panel.

###### Parameters

###### id

`string`

The id of the panel to delete.

###### Returns

`void`

###### Example

```typescript
await felt.deletePanel("panel-1");
```

##### addPanelElements()

> **addPanelElements**(`args`): `void`

Adds elements to a panel.

###### Parameters

###### args

[`AddPanelElementsInput`](client.md#addpanelelementsinput)

The arguments for the method.

###### Returns

`void`

###### Example

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

##### updatePanelElements()

> **updatePanelElements**(`args`): `void`

Updates an element in a panel.

###### Parameters

###### args

[`UpdatePanelElementsInput`](client.md#updatepanelelementsinput)

The arguments for the method.

###### Returns

`void`

###### Example

```typescript
await felt.updatePanelElements({
  panelId: "panel-1",
  elements: {
    "element-1": { type: "Text", content: "Hello, world!" },
  },
});
```

##### deletePanelElements()

> **deletePanelElements**(`args`): `void`

Deletes elements from a panel.

###### Parameters

###### args

[`DeletePanelElements`](client.md#deletepanelelements-2)

The arguments for the method.

###### Returns

`void`

###### Example

```typescript
await felt.deletePanelElements({
  panelId: "panel-1",
  elements: ["element-1", "element-2"],
});
```

##### updateUiControls()

> **updateUiControls**(`controls`): `void`

Updates the UI controls on the embedded map.

###### Parameters

###### controls

[`UiControlsOptions`](client.md#uicontrolsoptions)

The controls to update.

###### Returns

`void`

###### Example

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

##### setOnMapInteractionsUi()

> **setOnMapInteractionsUi**(`options`): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

###### Parameters

###### options

[`OnMapInteractionsOptions`](client.md#onmapinteractionsoptions)

###### Returns

`void`

###### Example

```typescript
// Disable UI when hovering or selecting features
await felt.setOnMapInteractionsUi({
  featureSelectPanel: false,
  featureHoverPanel: false,
});
```

##### showLayerDataTable()

> **showLayerDataTable**(`params`?): `Promise`\<`void`>

Shows a data table view for the specified layer, optionally sorted by a given attribute.

###### Parameters

###### params?

###### layerId

`string`

###### sorting

[`SortConfig`](client.md#sortconfig)

###### Returns

`Promise`\<`void`>

###### Example

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

##### hideLayerDataTable()

> **hideLayerDataTable**(): `Promise`\<`void`>

Hides the data table.

###### Returns

`Promise`\<`void`>

###### Example

```typescript
await felt.hideLayerDataTable();
```

***

### AddPanelInput

The input for adding a panel to the map by using [UiController.addPanel](client.md#addpanel-1).

#### Extends

* `zInfer`\<*typeof* `AddPanelInputSchema`>

#### Properties

##### panel

> **panel**: [`UIPanelInput`](client.md#uipanelinput)

The panel to add.

###### Overrides

`zInfer.panel`

##### placement?

> `optional` **placement**: \{ `after`: `string`; } | \{ `before`: `string`; } | \{ `at`: `"start"` | `"end"`; }

The placement of the panel on the right sidebar stack.

###### Default Value

`{ at: "end" }`

###### Overrides

`zInfer.placement`

***

### UpdatePanelElementInput

#### Extends

* `zInfer`\<*typeof* `UpdatePanelInputSchema`>

***

### AddPanelElementsInput

#### Extends

* `zInfer`\<*typeof* `AddPanelElementsInputSchema`>

***

### UpdatePanelElementsInput

#### Extends

* `zInfer`\<*typeof* `UpdatePanelElementsInputSchema`>

#### Properties

##### panelId

> **panelId**: `string`

The ID of the panel to update.

###### Inherited from

`zInfer.panelId`

##### elements

> **elements**: `Record`\<`string`, [`UIFlexibleSpaceElementInput`](client.md#uiflexiblespaceelementinput) | [`UIPanelElementsInput`](client.md#uipanelelementsinput)>

Dictionary of element IDs to the element to update.

###### Overrides

`zInfer.elements`

***

### DeletePanelElements

#### Extends

* `zInfer`\<*typeof* `DeletePanelElementsSchema`>

***

### UiControlsOptions

#### Extends

* `zInfer`\<*typeof* `UiControlsOptionsSchema`>

#### Properties

##### showLegend?

> `optional` **showLegend**: `boolean`

Whether or not the legend is shown.

###### Default Value

```ts
true
```

###### Inherited from

`zInfer.showLegend`

##### cooperativeGestures?

> `optional` **cooperativeGestures**: `boolean`

When co-operative gestures are enabled, the pan and zoom gestures are
adjusted to work better when the map is embedded in another page.

###### Remarks

On mobile devices, enabling co-operative gestures will allow the user to
pan past the embedded map with a single finger drag. To pan the map, they
must use two fingers.

On desktop devices, enabling co-operative gestures allows the user to
scroll past the embedded map using their scroll wheel or trackpad. To
zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while
scrolling.

###### Default Value

```ts
true
```

###### Inherited from

`zInfer.cooperativeGestures`

##### fullScreenButton?

> `optional` **fullScreenButton**: `boolean`

Whether or not the full screen button is shown in an embedded map.

###### Remarks

When clicked, this will open the map in a new tab or window.

###### Default Value

```ts
true
```

###### Inherited from

`zInfer.fullScreenButton`

##### geolocation?

> `optional` **geolocation**: `boolean`

Whether or not the geolocation button is shown in an embedded map.

###### Remarks

The geolocation feature will plot your position on the map. If you
click the button again, it will start tracking your position.

###### Default Value

```ts
false
```

###### Inherited from

`zInfer.geolocation`

##### zoomControls?

> `optional` **zoomControls**: `boolean`

Whether or not the zoom controls are shown in an embedded map.

###### Remarks

This does not affect whether or not the map can be zoomed, just
the display of the zoom controls in the bottom right corner of the map.

###### Default Value

```ts
true
```

###### Inherited from

`zInfer.zoomControls`

##### scaleBar?

> `optional` **scaleBar**: `boolean`

Whether or not the scale bar is shown in an embedded map.

###### Default Value

```ts
true
```

###### Inherited from

`zInfer.scaleBar`

***

### OnMapInteractionsOptions

The options for which parts of the Felt UI can be shown when interacting with
features and elements on the map.

Switching these off can be useful if you add your own click, selection or hover
handlers for features and elements.

#### Extends

* `zInfer`\<*typeof* `UiOnMapInteractionsOptionsSchema`>

#### Properties

##### featureSelectPanel?

> `optional` **featureSelectPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a selected
feature from being shown.

###### Inherited from

`zInfer.featureSelectPanel`

##### featureHoverPanel?

> `optional` **featureHoverPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a hovered
feature from being shown.

###### Inherited from

`zInfer.featureHoverPanel`

##### elementSelectPanel?

> `optional` **elementSelectPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a selected
element from being shown.

###### Inherited from

`zInfer.elementSelectPanel`

##### linkClickOpen?

> `optional` **linkClickOpen**: `boolean`

Set this to `false` to prevent clicking on a map link element from opening that link
in a new tab or window.

###### Inherited from

`zInfer.linkClickOpen`

##### imageLightboxOpen?

> `optional` **imageLightboxOpen**: `boolean`

Set this to `false` to prevent clicking on an image element from opening the image
in a lightbox.

###### Inherited from

`zInfer.imageLightboxOpen`

***

### UIButtonElementInput

Represents a button element in a panel.

#### Extends

* `UIElementLifecycle`.`Omit`\<`zInfer`\<*typeof* `uiButtonElementSchemas.input`>, `"onCreate"` | `"onDestroy"`>

#### Properties

##### label

> **label**: `string`

The label to display in the button.

###### Inherited from

`Omit.label`

##### onClick()

> **onClick**: () => `void`

Event handler for when the button is clicked.

###### Returns

`void`

###### Overrides

`Omit.onClick`

##### variant?

> `optional` **variant**: `"primary"` | `"outlined"` | `"transparent"` | `"transparentThin"`

The style variant of the button.

* `"primary"`: A solid button with Felt's primary background color (pink).
* `"outlined"`: A button with a border and no background color.
* `"transparent"`: A button with no background color and no border.
* `"transparentThin"`: Same as `transparent` but with lighter font weight.

###### Default Value

`"primary"`

###### Inherited from

`Omit.variant`

##### disabled?

> `optional` **disabled**: `boolean`

Whether the button is disabled.

###### Default Value

`false`

###### Inherited from

`Omit.disabled`

##### onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onCreate`

##### onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onDestroy`

***

### UIButtonGroupElementInput

Represents a button group element in a panel.

#### Remarks

This element is used to group buttons and text elements together.

#### Extends

* `UIElementLifecycle`.`Omit`\<`zInfer`\<*typeof* `uiButtonGroupElementSchemas.input`>, `"onCreate"` | `"onDestroy"`>

#### Properties

##### align?

> `optional` **align**: `"start"` | `"end"`

The alignment of the button group.

###### Default Value

`"start"`

###### Inherited from

`Omit.align`

##### onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onCreate`

##### onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onDestroy`

***

### UIDividerElementInput

Represents a divider element in a panel.

#### Remarks

This element is used to separate other elements in a panel.

#### Extends

* `UIElementLifecycle`.`Omit`\<`zInfer`\<*typeof* `uiDividerElementSchemas.input`>, `"onCreate"` | `"onDestroy"`>

#### Properties

##### onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onCreate`

##### onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onDestroy`

***

### UIFlexibleSpaceElementInput

Only accepted for [UIButtonGroupElementInput](client.md#uibuttongroupelementinput) elements.

#### Extends

* `UIElementLifecycle`.`Omit`\<`zInfer`\<*typeof* `uiFlexibleSpaceElementSchemas.input`>, `"onCreate"` | `"onDestroy"`>

#### Properties

##### onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onCreate`

##### onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onDestroy`

***

### UIPanelInput

The input panel to add to the map by using the [UiController.addPanel](client.md#addpanel-1) method.

#### Remarks

For the sake of convenience, the `id` of the panel and its elements are optional,
but it is recommended to provide them if you want to be able to perform updates.

#### Extends

* `zInfer`\<*typeof* `uiPanelSchemas.input`>

#### Properties

##### items

> **items**: [`UIPanelElementsInput`](client.md#uipanelelementsinput)\[]

The elements to add to the panel body.

###### Overrides

`zInfer.items`

##### title?

> `optional` **title**: `string`

The title to display in the panel header.

###### Inherited from

`zInfer.title`

##### footer?

> `optional` **footer**: [`UIPanelElementsInput`](client.md#uipanelelementsinput)\[]

The elements to add to the panel footer.

###### Overrides

`zInfer.footer`

##### onClose()?

> `optional` **onClose**: () => `void`

A function to call when panel's close button is clicked.

###### Returns

`void`

###### Overrides

`zInfer.onClose`

##### onCreate()?

> `optional` **onCreate**: (...`args`) => `void`

A function to call when the element is created.

###### Parameters

###### args

...`unknown`\[]

This function doesn't receive any parameters

###### Returns

`void`

###### Inherited from

`zInfer.onCreate`

##### onDestroy()?

> `optional` **onDestroy**: (...`args`) => `void`

A function to call when the element is destroyed.

###### Parameters

###### args

...`unknown`\[]

This function doesn't receive any parameters

###### Returns

`void`

###### Inherited from

`zInfer.onDestroy`

***

### UISelectElementInput

Represents a selector element in a panel.

#### Remarks

This element is used to select a single option from a list of options.

#### Extends

* `UIElementLifecycle`.`Omit`\<`zInfer`\<*typeof* `uiSelectElementSchemas.input`>, `"onCreate"` | `"onDestroy"`>

#### Properties

##### onChange()

> **onChange**: (`args`) => `void`

Event handler for when the value of the select changes.

###### Parameters

###### args

###### value

`string`

The new value of the select.

###### Returns

`void`

###### Overrides

`Omit.onChange`

##### onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onCreate`

##### onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onDestroy`

##### label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.

###### Inherited from

`Omit.label`

***

### UITextElementInput

Represents a text element in a panel.

#### Extends

* `UIElementLifecycle`.`Omit`\<`zInfer`\<*typeof* `uiTextElementSchemas.input`>, `"onCreate"` | `"onDestroy"`>

#### Properties

##### content

> **content**: `string`

The text to display in the element.

###### Inherited from

`Omit.content`

##### onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onCreate`

##### onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onDestroy`

***

### UITextInputElementInput

Represents a text input element.

#### Extends

* `UIElementLifecycle`.`Omit`\<`zInfer`\<*typeof* `uiTextInputElementSchemas.input`>, `"onCreate"` | `"onDestroy"`>

#### Properties

##### value

> **value**: `string`

The value of the input. Use `""` for empty values.

###### Inherited from

`Omit.value`

##### placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the input.

###### Inherited from

`Omit.placeholder`

##### onChange()?

> `optional` **onChange**: (`args`) => `void`

Event handler for when the value of the input changes.

###### Parameters

###### args

###### value

`string`

The new value of the input.

###### Returns

`void`

###### Overrides

`Omit.onChange`

##### onBlur()?

> `optional` **onBlur**: (`args`) => `void`

Event handler for when the input loses focus.

###### Parameters

###### args

###### value

`string`

The input value when the input loses focus.

###### Returns

`void`

###### Overrides

`Omit.onBlur`

##### onFocus()?

> `optional` **onFocus**: (`args`) => `void`

Event handler for when the input gains focus.

###### Parameters

###### args

###### value

`string`

The input value when the input gains focus.

###### Returns

`void`

###### Overrides

`Omit.onFocus`

##### onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onCreate`

##### onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

###### Returns

`void`

###### Inherited from

`UIElementLifecycle.onDestroy`

##### label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.

###### Inherited from

`Omit.label`

***

### ViewportController

The viewport controller allows you to control the viewport of the map.

You can get the current viewport, move the viewport, and be notified when
the viewport changes.

#### Extended by

* [`FeltController`](client.md#feltcontroller)

#### Methods

##### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](client.md#viewportstate)>

Gets the current state of the viewport.

###### Returns

`Promise`\<[`ViewportState`](client.md#viewportstate)>

###### Example

```typescript
// Get current viewport state
const viewport = await felt.getViewport();
console.log({
  center: viewport.center,
  zoom: viewport.zoom,
});
```

##### setViewport()

> **setViewport**(`viewport`): `void`

Moves the map to the specified location.

###### Parameters

###### viewport

[`SetViewportCenterZoomParams`](client.md#setviewportcenterzoomparams)

###### Returns

`void`

###### Example

```typescript
felt.setViewport({
  center: { latitude: 0, longitude: 0 },
  zoom: 10,
});
```

##### getViewportConstraints()

> **getViewportConstraints**(): `Promise`\<`null` | [`ViewportConstraints`](client.md#viewportconstraints)>

Gets the current state of the viewport constraints.

###### Returns

`Promise`\<`null` | [`ViewportConstraints`](client.md#viewportconstraints)>

###### Example

```typescript
// Get current viewport constraints
const constraints = await felt.getViewportConstraints();
if (constraints) {
  console.log({
    bounds: constraints.bounds,
    minZoom: constraints.minZoom,
    maxZoom: constraints.maxZoom
  });
} else {
  console.log("No viewport constraints set");
}
```

##### setViewportConstraints()

> **setViewportConstraints**(`constraints`): `void`

Constrains the map viewport so it stays inside certain bounds and/or certain zoom levels.

###### Parameters

###### constraints

`null` | `Partial`\<[`ViewportConstraints`](client.md#viewportconstraints)>

###### Returns

`void`

###### Examples

```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
  minZoom: 1,
  maxZoom: 23,
});
```

every constraint is optional

```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
});
```

if a constraint is null, it will be removed but keeping the others

```typescript
felt.setViewportConstraints({ bounds: null });
```

if method receives null, it will remove the constraints

```typescript
felt.setViewportConstraints(null);
```

##### fitViewportToBounds()

> **fitViewportToBounds**(`bounds`): `void`

Fits the map to the specified bounds.

###### Parameters

###### bounds

[`ViewportFitBoundsParams`](client.md#viewportfitboundsparams)

###### Returns

`void`

###### Example

```typescript
const west = -122.4194;
const south = 37.7749;
const east = -122.4194;
const north = 37.7749;
felt.fitViewportToBounds({ bounds: [west, south, east, north] });
```

#### Events

##### onViewportMove()

> **onViewportMove**(`args`): `VoidFunction`

Adds a listener for when the viewport changes.

###### Parameters

###### args

###### handler

(`viewport`) => `void`

This callback is called with the current viewport state whenever
the viewport changes.

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onViewportMove({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

##### onViewportMoveEnd()

> **onViewportMoveEnd**(`args`): `VoidFunction`

Adds a listener for when the viewport move ends, which is when the user
stops dragging or zooming the map, animations have finished, or inertial
dragging ends.

###### Parameters

###### args

###### handler

(`viewport`) => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onViewportMoveEnd({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

##### onMapIdle()

> **onMapIdle**(`args`): `VoidFunction`

Adds a listener for when the map is idle, which is defined as:

* No transitions are in progress
* The user is not interacting with the map, e.g. by panning or zooming
* All tiles for the current viewport have been loaded
* Any fade transitions (e.g. for labels) have completed

###### Parameters

###### args

###### handler

() => `void`

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onMapIdle({ handler: () => console.log("map is idle") });

// later on...
unsubscribe();
```

***

### ViewportCenterZoom

The input type for setting the viewport to a particular center and zoom.

#### Extends

* `zInfer`\<*typeof* `ViewportCenterZoomSchema`>

#### Properties

##### center

> **center**: [`LatLng`](client.md#latlng)

The center of the viewport in latitude and longitude.

###### Overrides

`zInfer.center`

##### zoom

> **zoom**: `number`

The zoom level of the viewport.

###### Overrides

`zInfer.zoom`

***

### ViewportState

The current state of the viewport, including the derived bounds.

#### Properties

##### center

> **center**: [`LatLng`](client.md#latlng)

The center of the viewport in latitude and longitude.

[LatLng](client.md#latlng)

##### zoom

> **zoom**: `number`

The zoom level of the viewport.

[FeltZoom](client.md#feltzoom)

##### bounds

> **bounds**: \[`number`, `number`, `number`, `number`]

The bounding box of the viewport in \[west, south, east, north] order.

This is derived, and depends on the center and zoom of the viewport, as
well as its size.

[FeltBoundary](client.md#feltboundary)

***

### SetViewportCenterZoomParams

The parameters for the [\`setViewport\`](client.md#setviewport-1) method.

#### Extends

* `zInfer`\<*typeof* `SetViewportCenterZoomParamsSchema`>

***

### ViewportConstraints

The constraints for the viewport. Used to ensure that the viewport stays
within certain bounds and zoom levels.

#### Properties

##### minZoom

> **minZoom**: `null` | `number`

The minimum zoom level for the viewport.

[FeltZoom](client.md#feltzoom)

##### maxZoom

> **maxZoom**: `null` | `number`

The maximum zoom level for the viewport.

[FeltZoom](client.md#feltzoom)

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounds for the viewport.

[FeltBoundary](client.md#feltboundary)

***

### ViewportFitBoundsParams

The parameters for the [\`fitViewportToBounds\`](client.md#fitviewporttobounds-1) method.

#### Extends

* `zInfer`\<*typeof* `ViewportFitBoundsParamsSchema`>

#### Properties

##### bounds

> **bounds**: \[`number`, `number`, `number`, `number`]

The bounds to fit the viewport to.

[FeltBoundary](client.md#feltboundary)

###### Overrides

`zInfer.bounds`

***

### Felt

> `const` **Felt**: `object`

The Felt SDK is a library for embedding Felt maps into your website,
allowing you to control and inspect the map programmatically.

#### Type declaration

##### embed()

Embeds a Felt map into the provided container, returning a promise that resolves
to a [FeltController](client.md#feltcontroller) object that you can use to control the map.

###### Parameters

###### container

`HTMLElement`

The container element to embed the map into.

###### mapId

`string`

The ID of the map to embed.

###### options?

[`FeltEmbedOptions`](client.md#feltembedoptions)

The options to configure the map.

###### Returns

`Promise`\<[`FeltController`](client.md#feltcontroller)>

A promise for a [FeltController](client.md#feltcontroller).

##### connect()

Binds to an existing Felt map iframe.

###### Parameters

###### feltWindow

`Pick`\<`Window`, `"postMessage"`>

The iframe element containing the Felt map.

###### Returns

`Promise`\<[`FeltController`](client.md#feltcontroller)>

***

### Element

> **Element**: `PlaceElementRead` | `PathElementRead` | `PolygonElementRead` | `CircleElementRead` | `MarkerElementRead` | `HighlighterElementRead` | `TextElementRead` | `NoteElementRead` | `ImageElementRead` | `LinkElementRead`

***

### FilterLogicGate

> **FilterLogicGate**: `"and"` | `"or"`

***

### FilterExpression

> **FilterExpression**: \[`null` | `string`, `"in"` | `"ni"`, `null` | (`null` | `string` | `number` | `boolean`)\[]] | \[`null` | `string`, `"lt"` | `"gt"` | `"le"` | `"ge"` | `"eq"` | `"ne"` | `"cn"` | `"nc"` | `"is"` | `"isnt"`, `null` | `string` | `number` | `boolean`]

***

### FilterTernary

> **FilterTernary**: \[[`FilterTernary`](client.md#filterternary) | [`FilterExpression`](client.md#filterexpression) | `null` | `boolean`, [`FilterLogicGate`](client.md#filterlogicgate), [`FilterTernary`](client.md#filterternary) | [`FilterExpression`](client.md#filterexpression) | `null` | `boolean`]

A `FilterTernary` is a tree structure for combining expressions with logical operators.

When combining three or more conditions, you must use proper nesting rather than a flat list.

#### Example

```typescript
// A simple filter with a single condition
const filter = [
  ["AREA", "gt", 30_000],
  "and",
  ["COLOR", "eq", "red"]
]

// A complex filter with multiple conditions
const filter = [
  ["AREA", "gt", 30_000],
  "and",
  [
    ["COLOR", "eq", "red"],
    "or",
    ["TYPE", "eq", "residential"]
  ]
]
```

***

### Filters

> **Filters**: [`FilterTernary`](client.md#filterternary) | [`FilterExpression`](client.md#filterexpression) | `null` | `boolean`

Filters can be used to change which features in a layer are rendered. Filters can be
applied to a layer by the [\`setLayerFilters\`](client.md#setlayerfilters) method on the Felt controller.

Filters use a tree structure for combining expressions with logical operators, called a
[FilterTernary](client.md#filterternary). When combining three or more conditions, you must use proper nesting
rather than a flat list.

See the examples below for the correct structure to use when building complex filters.

#### Remarks

The possible operators are:

* `lt`: Less than
* `gt`: Greater than
* `le`: Less than or equal to
* `ge`: Greater than or equal to
* `eq`: Equal to
* `ne`: Not equal to
* `cn`: Contains
* `nc`: Does not contain

The allowed boolean operators are:

* `and`: Logical AND
* `or`: Logical OR

#### Example

```typescript
// 1. Simple filter: single condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});

// 2. Basic compound filter: two conditions with AND
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],  // First condition
    "and",                   // Logic operator
    ["COLOR", "eq", "red"]   // Second condition
  ]
});

// 3. Complex filter: three or more conditions require nesting
// ⚠️ IMPORTANT: Filters use a tree structure, not a flat list
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // First condition
    "and",                                 // First logic operator
    [                                      // Nested group starts
      ["COLOR", "eq", "red"],              //   Second condition
      "and",                               //   Second logic operator
      ["TYPE", "eq", "residential"]        //   Third condition
    ]                                      // Nested group ends
  ]
});

// 4. Even more complex: four conditions with proper nesting
// Visual structure:
//          AND
//         /   \
//    condition  AND
//              /   \
//        condition  AND
//                  /   \
//            condition  condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // First condition
    "and",
    [
      ["COLOR", "eq", "red"],              // Second condition
      "and",
      [
        ["TYPE", "eq", "residential"],     // Third condition
        "and",
        ["YEAR", "gt", 2000]               // Fourth condition
      ]
    ]
  ]
});

// 5. Mixed operators: combining AND and OR
// Visual structure:
//          AND
//         /   \
//    condition  OR
//              /  \
//        condition condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // Must have large area
    "and",
    [
      ["COLOR", "eq", "red"],              // Must be either red
      "or",
      ["TYPE", "eq", "residential"]        // OR residential type
    ]
  ]
});
```

***

### GeometryFilter

> **GeometryFilter**: [`FeltBoundary`](client.md#feltboundary) | `PolygonGeometry` | [`MultiPolygonGeometry`](client.md#multipolygongeometry) | [`LngLatTuple`](client.md#lnglattuple)\[]

The common type for filtering data by a spatial boundary.

This can be either:

* `FeltBoundary`: a \[w, s, e, n] bounding box
* `PolygonGeometry`: a GeoJSON Polygon geometry
* `MultiPolygonGeometry`: a GeoJSON MultiPolygon geometry
* `LngLatTuple[]`: a list of coordinates describing a single ring of a polygon

***

### AggregationMethod

> **AggregationMethod**: `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"`

The method to use for the aggregation.

***

### PrecomputedAggregationMethod

> **PrecomputedAggregationMethod**: `"avg"` | `"max"` | `"min"` | `"sum"` | `"count"`

The method to use for the precomputed aggregation.

***

### GridType

> **GridType**: `"h3"`

The type of grid to use for precomputed aggregate values.

***

### GridConfig

> **GridConfig**: [`CountGridConfig`](client.md#countgridconfig) | [`AggregatedGridConfig`](client.md#aggregatedgridconfig)

Describes the type of grid to use for precomputed aggregate values.

***

### LayerProcessingStatus

> **LayerProcessingStatus**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

This describes the processing status of a layer.

The various values are:

* `processing`: The layer has been uploaded or updated and is still processing.
* `completed`: The layer has been processed and can be viewed on the map.
* `failed`: The layer failed to process and cannot be viewed on the map.
* `incomplete`: The layer has not been processed.

***

### Layer

> **Layer**: [`RasterLayer`](client.md#rasterlayer) | [`VectorLayer`](client.md#vectorlayer) | [`DataOnlyLayer`](client.md#dataonlylayer)

***

### FeltTiledVectorSource

> **FeltTiledVectorSource**: `object`

A tiled vector source is a layer that is populated from data the has been uploaded
to Felt, and processed into vector tiles.

#### Type declaration

##### type

> **type**: `"felt"`

Identifies this as a tiled vector source. Typically, these tiles will have been
uploaded to and processed by Felt.

##### tileTemplateUrl

> **tileTemplateUrl**: `string`

The template URL used for fetching tiles.

***

### LayerSchemaAttribute

> **LayerSchemaAttribute**: [`LayerSchemaNumericAttribute`](client.md#layerschemanumericattribute) | [`LayerSchemaTextAttribute`](client.md#layerschematextattribute) | [`LayerSchemaBooleanAttribute`](client.md#layerschemabooleanattribute) | [`LayerSchemaDateAttribute`](client.md#layerschemadateattribute) | [`LayerSchemaDateTimeAttribute`](client.md#layerschemadatetimeattribute)

A single attribute from the layer schema.

#### Remarks

Each feature in a layer has a set of attributes, and these types describe the
structure of a single attribute, including things like id, display name, type, and sample values.

***

### MapDetails

> **MapDetails**: `object`

The details of a map.

#### Type declaration

##### id

> **id**: `string`

The id of the map.

##### title

> **title**: `string`

The title of the map.

##### description

> **description**: `string` | `null`

The description of the map.

***

### EntityNode

> **EntityNode**: [`ElementNode`](client.md#elementnode) | [`ElementGroupNode`](client.md#elementgroupnode) | [`LayerNode`](client.md#layernode) | [`LayerGroupNode`](client.md#layergroupnode) | [`FeatureNode`](client.md#featurenode)

A reference to any kind of entity in the map.

#### Remarks

EntityNodes are used when you have some collection of entities and you need to

***

### LngLatTuple

> **LngLatTuple**: \[`number`, `number`]

A tuple representing a longitude and latitude coordinate.

This is used hen serializing geometry because that's the standard used in
GeoJSON.

***

### GeoJsonProperties

> **GeoJsonProperties**: `Record`\<`string`, `unknown`>

A GeoJSON properties object.

***

### GeoJsonGeometry

> **GeoJsonGeometry**: `PointGeometry` | `PolygonGeometry` | [`LineStringGeometry`](client.md#linestringgeometry) | [`MultiLineStringGeometry`](client.md#multilinestringgeometry) | [`MultiPolygonGeometry`](client.md#multipolygongeometry) | [`MultiPointGeometry`](client.md#multipointgeometry)

A GeoJSON geometry of any type

***

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

***

### SortDirection

> **SortDirection**: `"asc"` | `"desc"`

Specifies the direction to sort data in

***

### InputToolSettings

> **InputToolSettings**: `object` & `Partial`\<`PinToolSettings`> | `object` & `Partial`\<`LineToolSettings`> | `object` & `Partial`\<`RouteToolSettings`> | `object` & `Partial`\<`PolygonToolSettings`> | `object` & `Partial`\<`CircleToolSettings`> | `object` & `Partial`\<`MarkerToolSettings`> | `object` & `Partial`\<`HighlighterToolSettings`> | `object` & `Partial`\<`TextToolSettings`> | `object` & `Partial`\<`NoteToolSettings`>

The parameters for changing the settings of each tool.

***

### ToolSettingsChangeEvent

> **ToolSettingsChangeEvent**: `object` & `PinToolSettings` | `object` & `LineToolSettings` | `object` & `RouteToolSettings` | `object` & `PolygonToolSettings` | `object` & `CircleToolSettings` | `object` & `MarkerToolSettings` | `object` & `HighlighterToolSettings` | `object` & `TextToolSettings` | `object` & `NoteToolSettings`

The result of listening for changes to the settings of each tool.

***

### UIPanelElementsInput

> **UIPanelElementsInput**: [`UITextElementInput`](client.md#uitextelementinput) | [`UIButtonElementInput`](client.md#uibuttonelementinput) | [`UITextInputElementInput`](client.md#uitextinputelementinput) | [`UIDividerElementInput`](client.md#uidividerelementinput) | [`UIButtonGroupElementInput`](client.md#uibuttongroupelementinput) | [`UISelectElementInput`](client.md#uiselectelementinput)

This is a union of all the possible elements that can be added to a panel.

#### Remarks

For the sake of convenience, `id` is optional but recommended if you want to be able to
perform updates.

***

### PlacementForUIElement

> **PlacementForUIElement**: \{ `after`: `string`; } | \{ `before`: `string`; } | \{ `at`: `"start"` | `"end"`; }

Used in [UiController.addPanel](client.md#addpanel-1) to specify the position of a panel in the stack
and in [UiController.addPanelElements](client.md#addpanelelements-1) to specify the position of an element in a panel.

In both cases, the default value is `{ at: "end" }`.

## Visibility

### SetVisibilityRequest

The parameters for the methods that change the visibility of entities.

#### Extends

* `zInfer`\<*typeof* `SetVisibilityRequestSchema`>

#### Properties

##### show?

> `optional` **show**: `string`\[]

The ids of the entities you want to change the visibility of.

###### Inherited from

`zInfer.show`
