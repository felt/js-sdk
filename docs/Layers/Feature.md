***

A feature is a single geographical item in a layer.
The unique ID for a feature is a compound key made up of the layer ID and the feature ID.

# Properties

## id

> **id**: `string` | `number`

The identifier of the feature, unique within the layer.

***

## layerId

> **layerId**: `string`

The identifier of the layer that the feature belongs to.

***

## geometryType

> **geometryType**: `"Point"` | `"Polygon"` | `"LineString"` | `"MultiPolygon"` | `string` & \{}

The type of geometry of the feature.

***

## properties

> **properties**: `Record`\<`string`, `unknown`>

The properties of the feature, as a bag of attributes.
