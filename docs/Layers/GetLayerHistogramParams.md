***

The params used to request a histogram of values from a layer, passed to
the [LayersController.getLayerHistogram](LayersController.md#getlayerhistogram) method.

## Properties

### layerId

> **layerId**: `string`

***

### attribute

> **attribute**: `string`

***

### steps

> **steps**: `number`\[] | \{ `type`: `"continuous"`; } | \{ `type`: `"jenks"` | `"quantiles"` | `"equal-intervals"` | `"stddev"` | `"geo-intervals"`; `count`: `number`; } | \{ `type`: `"time-interval"`; `value`: `string`; }

***

### values?

> `optional` **values**: \{ `boundary`: \[`number`, `number`]\[] | \[`number`, `number`, `number`, `number`] | \{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`]\[]\[]; }; `filters`: `null` | `boolean` | \[`null` | `string`, `"in"` | `"ni"`, `null` | (`null` | `string` | `number` | `boolean`)\[]] | \[`null` | `string`, `"lt"` | `"gt"` | `"le"` | `"ge"` | `"eq"` | `"ne"` | `"cn"` | `"nc"` | `"is"` | `"isnt"`, `null` | `string` | `number` | `boolean`] | [`FilterTernary`](FilterTernary.md); `aggregation`: \{ `method`: `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"`; `attribute`: `string`; }; }

Configuration for filtering and aggregating values while preserving the full set of
bin ranges in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent ranges. For example:

* Use the same height ranges for comparing old vs new buildings

Unlike top-level filters which affect both what ranges appear AND their values,
filters in this configuration only affect the values while keeping all possible
ranges in the results.

| Name                    | Type                                                                                                                                                                                                                                                                                                                                        | Default value         | Description                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------- |
| `boundary`?             | \[`number`, `number`]\[] \| \[`number`, `number`, `number`, `number`] \| \{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`]\[]\[]; }                                                                                                                                                                                              | -                     | -                                                                           |
| `filters`?              | `null` \| `boolean` \| \[`null` \| `string`, `"in"` \| `"ni"`, `null` \| (`null` \| `string` \| `number` \| `boolean`)\[]] \| \[`null` \| `string`, `"lt"` \| `"gt"` \| `"le"` \| `"ge"` \| `"eq"` \| `"ne"` \| `"cn"` \| `"nc"` \| `"is"` \| `"isnt"`, `null` \| `string` \| `number` \| `boolean`] \| [`FilterTernary`](FilterTernary.md) | -                     | -                                                                           |
| `aggregation`?          | \{ `method`: `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`; `attribute`: `string`; }                                                                                                                                                                                                                                               | -                     | -                                                                           |
| `aggregation.method`    | `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`                                                                                                                                                                                                                                                                                      | AggregateMethodSchema | The operation to use on the values from the features in the layer           |
| `aggregation.attribute` | `string`                                                                                                                                                                                                                                                                                                                                    | -                     | The attribute to use for the aggregation. This must be a numeric attribute. |
