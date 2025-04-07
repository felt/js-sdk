***

Configuration for filtering and aggregating values across features.

This can be used to restrict the features considered for aggregation via the `boundary`
and `filters` properties.

It can also be used to specify how to aggregate the values via the `aggregation` property.

# Properties

## boundary?

> `optional` **boundary**: [`GeometryFilter`](GeometryFilter.md)

The spatial boundary for what to count or aggregate.

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Attribute filters to determine what gets counted or aggregated.

***

## aggregation?

> `optional` **aggregation**: [`AggregationConfig`](AggregationConfig.md)

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

For example, instead of counting buildings in each category, you might want
to sum their square footage or average their assessed values.
