***

A GeoJSON file source is a layer that is populated from a GeoJSON file
on your local machine.

This is an input-only type. It is converted to a [GeoJsonDataVectorSource](GeoJsonDataVectorSource.md)
when passed to [LayersController.createLayersFromGeoJson](LayersController.md#createlayersfromgeojson).

# Properties

## type

> **type**: `"geoJsonFile"`

Identifies this as a GeoJSON file source.

***

## file

> **file**: `File`

The GeoJSON file for the layer.
