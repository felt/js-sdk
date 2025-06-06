***

The params used to request a histogram of values from a layer, passed to
the [LayersController.getHistogramData](LayersController.md#gethistogramdata) method.

# Properties

## layerId

> **layerId**: `string`

***

## attribute

> **attribute**: `string`

***

## steps

> **steps**: `number`\[] | { `type`: `"equal-intervals"`; `count`: `number`; } | { `type`: `"time-interval"`; `interval`: `"hour"` | `"day"` | `"week"` | `"month"` | `"year"`; }

***

## values?

> `optional` **values**: { `boundary?`: \[`number`, `number`]\[] | \[`number`, `number`, `number`, `number`] | { `type`: `"Polygon"`; `coordinates`: \[`number`, `number`]\[]\[]; } | { `type`: `"MultiPolygon"`; `coordinates`: \[`number`, `number`]\[]\[]\[]; }; `filters?`: `null` | `boolean` | \[`null` | `string`, `"in"` | `"ni"`, `null` | (`null` | `string` | `number` | `boolean`)\[]] | \[`null` | `string`, `"lt"` | `"gt"` | `"le"` | `"ge"` | `"eq"` | `"ne"` | `"cn"` | `"nc"` | `"is"` | `"isnt"`, `null` | `string` | `number` | `boolean`] | [`FilterTernary`](FilterTernary.md); `aggregation?`: { `method`: `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"`; `attribute`: `string`; }; }

Configuration for filtering and aggregating values while preserving the full set of
bin ranges in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent ranges. For example:

* Use the same height ranges for comparing old vs new buildings

Unlike top-level filters which affect both what ranges appear AND their values,
filters in this configuration only affect the values while keeping all possible
ranges in the results.

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `boundary?` | \[`number`, `number`]\[] | \[`number`, `number`, `number`, `number`] | { `type`: `"Polygon"`; `coordinates`: \[`number`, `number`]\[]\[]; } | { `type`: `"MultiPolygon"`; `coordinates`: \[`number`, `number`]\[]\[]\[]; } | - | - |
| `filters?` | `null` | `boolean` | \[`null` | `string`, `"in"` | `"ni"`, `null` | (`null` | `string` | `number` | `boolean`)\[]] | \[`null` | `string`, `"lt"` | `"gt"` | `"le"` | `"ge"` | `"eq"` | `"ne"` | `"cn"` | `"nc"` | `"is"` | `"isnt"`, `null` | `string` | `number` | `boolean`] | [`FilterTernary`](FilterTernary.md) | - | - |
| `aggregation?` | { `method`: `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"`; `attribute`: `string`; } | - | - |
| `aggregation.method` | `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"` | `AggregateMethodSchema` | The operation to use on the values from the features in the layer |
| `aggregation.attribute` | `string` | - | The attribute to use for the aggregation. This must be a numeric attribute. |

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Attribute filters for the features to include when calculating the histogram bins.

***

## boundary?

> `optional` **boundary**: [`GeometryFilter`](GeometryFilter.md)

The spatial boundary for the features to include when calculating the histogram bins.
