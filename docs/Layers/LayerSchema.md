***

The schema that describes the structure of the features in a layer.

# Remarks

This can be useful to build generic UIs that need to know the structure of the data in
a layer, such as a dropdown to choose an attribute.

# Properties

## featureCount

> **featureCount**: `number`

The total number of features in the layer.

***

## attributes

> **attributes**: [`LayerSchemaAttribute`](LayerSchemaAttribute.md)\[]

Array of attribute schemas describing the properties available on features in this layer.
