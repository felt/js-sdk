***

A LayerFeature is a single geographical item in a layer.

It is intended to be a lightweight object that contains the properties of a
feature, but not the geometry. It is returned by methods like
[FeltController.getRenderedFeatures](LayersController.md#getrenderedfeatures) and [FeltController.getFeature](LayersController.md#getfeature),
and as part of the methods in the [SelectionController](../Selection/SelectionController.md)

The geometry can be obtained via the [FeltController.getGeoJsonFeature](LayersController.md#getgeojsonfeature)
method, which returns a [GeoJsonFeature](../Shared/GeoJsonFeature.md) object.

# Properties

## id

> **id**: `string` | `number`

The identifier of the feature, unique within the layer.

***

## isDeterministicId

> **isDeterministicId**: `boolean`

Whether the id is deterministic.

### Remarks

If the id is deterministic, it means that the id can be used to reference the feature
in the layer and therefore in all the SDK feature-related methods.

When the id is not deterministic, the feature cannot be referenced on SDK methods like [FeltController.getFeature](LayersController.md#getfeature)
or [SelectionController.selectFeature](../Selection/SelectionController.md#selectfeature).

For layers created using Felt, the id is deterministic because Felt ensures every feature is correctly referenciable on vector tiles.
This cannot be guaranteed for layers created using a GeoJSON source on the SDK (see [LayersController.createLayersFromGeoJson](LayersController.md#createlayersfromgeojson))
where the ID will only be deterministic if GeoJSON features have an `id` property.

***

## layerId

> **layerId**: `string`

The identifier of the layer that the feature belongs to.

***

## geometryType

> **geometryType**: `"Polygon"` | `"MultiPolygon"` | `"LineString"` | `"MultiLineString"` | `"Point"` | `"MultiPoint"` | `string` & \{}

The type of geometry of the feature.

### Remarks

Because LayerFeatures can be read from tiled features, it's
possible that this `geometryType` won't match the `geometry.type` of the
[GeoJsonFeature](../Shared/GeoJsonFeature.md) returned by [FeltController.getGeoJsonFeature](LayersController.md#getgeojsonfeature).

For example, this may return `LineString` but the full feature is a `MultiLineString`,
or, similarly `Polygon` here may be a `MultiPolygon` in the full feature.

As a result, you should treat this property as being indicative only.

***

## bbox

> **bbox**: `undefined` | \[`number`, `number`, `number`, `number`]

The bounding box of the feature.

### Remarks

Because LayerFeatures can be read from tiled features and considering
that feature geometry can go through multiple tiles, it's possible that this
is not the complete bounding box of the feature.

***

## properties

> **properties**: [`GeoJsonProperties`](../Shared/GeoJsonProperties.md)

The properties of the feature, as a bag of attributes.
