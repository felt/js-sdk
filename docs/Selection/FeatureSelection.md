***

The options for selecting a feature in a layer.

## Properties

### id

> **id**: `string` | `number`

The id of the feature to select.

***

### layerId

> **layerId**: `string`

The id of the layer that the feature belongs to.

***

### showPopup?

> `optional` **showPopup**: `boolean`

Whether to show the feature's popup, if it is configured in the layer's style.

#### Default

```ts
true
```

***

### fitViewport?

> `optional` **fitViewport**: `boolean` | \{`maxZoom`: `number`; }

Whether to center the view on the feature after selecting it.

When true, the viewport will be centered on the feature and zoomed to fit the feature
in the viewport. If you need to control the zoom level to prevent it zooming in too
far, you can pass an object with a `maxZoom` property.

This is useful for avoiding zooming in too far on point features, or if you want
to maintain the current zoom level.

#### Default

```ts
true
```
