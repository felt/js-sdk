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

***

## refreshInterval?

> `optional` **refreshInterval**: `null` | `number`

The interval in milliseconds between automatic refreshes of the GeoJSON.

The value must be in the range of 250ms - 5 minutes (300,000ms).

If the value is `null`, the GeoJSON will not be refreshed automatically.
