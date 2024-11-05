***

> **Filters**: [`FilterTernary`](FilterTernary.md) | [`FilterExpression`](FilterExpression.md) | `null` | `boolean`

Filters can be used to change which features in a layer are rendered. Filters can be
applied to a layer by the `setLayerFilters` method on the Felt controller.

## Remarks

The possible operators are:

* `lt`: Less than
* `gt`: Greater than
* `le`: Less than or equal to
* `ge`: Greater than or equal to
* `eq`: Equal to
* `ne`: Not equal to
* `cn`: Contains
* `nc`: Does not contain

The allowed boolean operators are:

* `and`: Logical AND
* `or`: Logical OR

## Example

```typescript
// a simple filter
felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});

// compound filters can be constructed using boolean logic:
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [["AREA", "gt", 30_000], "and", ["COLOR", "eq", "red"]]
})
```
