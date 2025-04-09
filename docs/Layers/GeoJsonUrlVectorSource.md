***

A GeoJSON URL source is a layer that is populated from a GeoJSON file at a remote URL.

These sources are ones that have not been uploaded to and processed by Felt, and as such
their capabilities are limited.

For instance, they cannot be filtered, nor can statistics be fetched for them.

# Properties

## type

> **type**: `"geoJsonUrl"`

Identifies this as a GeoJSON URL source.

***

## url

> **url**: `string`

The remote URL of the GeoJSON file used to populate the layer.
