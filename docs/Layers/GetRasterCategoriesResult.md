***

The response from the [LayersController.getRasterCategoryData](LayersController.md#getrastercategorydata) method.

# Properties

## categories

> **categories**: [`RasterCategory`](RasterCategory.md)\[]

The categories, most frequent first.

***

## total

> **total**: `number`

How many distinct values the band holds within the scope, which is larger
than the number of categories returned when `limit` drops some.
