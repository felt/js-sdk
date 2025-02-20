***

A single category from the response from the [LayersController.getLayerCategories](LayersController.md#getlayercategories) method.

## Properties

### key

> **key**: `string` | `number` | `boolean`

The category for which the value was calculated.

***

### value

> **value**: `null` | `number`

The value calculated for the category, whether a count, sum, average, etc.

`null` is returned if there are no features in the category as opposed to zero,
so as not to confuse with a real zero value from some aggregation.
