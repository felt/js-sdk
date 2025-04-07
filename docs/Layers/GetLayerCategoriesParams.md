***

The parameters for getting categories from a layer, passed to
the [LayersController.getCategoryData](LayersController.md#getcategorydata) method.

# Properties

## layerId

> **layerId**: `string`

The ID of the layer to get categories from.

***

## attribute

> **attribute**: `string`

The attribute to use for categorization.

***

## limit?

> `optional` **limit**: `number`

The maximum number of categories to return.

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Attribute filters for the features to include when calculating the categories.

***

## boundary?

> `optional` **boundary**: [`GeometryFilter`](GeometryFilter.md)

The spatial boundary for the features to include when calculating the categories.

***

## values?

> `optional` **values**: [`ValueConfiguration`](ValueConfiguration.md)

Configuration for filtering and aggregating values while preserving the full set of
categories in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent categories. For example:

* Show all building types in a city, but only count recent buildings in each type
* Keep all neighborhood categories but only sum up residential square footage

Unlike top-level filters which affect both what categories appear AND their values,
filters in this configuration only affect the values while keeping all possible
categories in the results.
