***

The schema for a boolean attribute on a layer.

# Properties

## id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](LayersController.md#getcategorydata), [LayersController.getHistogramData](LayersController.md#gethistogramdata),
and [LayersController.getAggregates](LayersController.md#getaggregates) methods.

***

## displayName

> **displayName**: `string`

The human-readable name of this attribute.

***

## detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

***

## distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

***

## type

> **type**: `"boolean"`

Indicates this is a boolean attribute.

***

## sampleValues

> **sampleValues**: \{ `value`: `boolean`; `count`: `number`; }\[]

A representative sample of boolean values for this attribute and their frequency.

| Name    | Type      |
| ------- | --------- |
| `value` | `boolean` |
| `count` | `number`  |
