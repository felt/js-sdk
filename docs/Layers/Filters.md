***

> **Filters**: [`FilterTernary`](FilterTernary.md) | [`FilterExpression`](FilterExpression.md) | `null` | `boolean`

Filters can be used to change which features in a layer are rendered. Filters can be
applied to a layer by the [setLayerFilters](LayersController.md#setlayerfilters) method on the Felt controller.

Filters use a tree structure for combining expressions with logical operators, called a [FilterTernary](FilterTernary.md).
When combining three or more conditions, you must use proper nesting rather than a flat list.

See the examples below for the correct structure to use when building complex filters.

# Remarks

The possible operators are:

* `lt`: Less than
* `gt`: Greater than
* `le`: Less than or equal to
* `ge`: Greater than or equal to
* `eq`: Equal to
* `ne`: Not equal to
* `cn`: Contains
* `nc`: Does not contain
* `is`: Is
* `isnt`: Is not
* `in`: In
* `ni`: Not in

The allowed boolean operators are:

* `and`: Logical AND
* `or`: Logical OR

# Example

```typescript
// 1. Simple filter: single condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});

// 2. Basic compound filter: two conditions with AND
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],  // First condition
    "and",                   // Logic operator
    ["COLOR", "eq", "red"]   // Second condition
  ]
});

// 3. Complex filter: three or more conditions require nesting
// ⚠️ IMPORTANT: Filters use a tree structure, not a flat list
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // First condition
    "and",                                 // First logic operator
    [                                      // Nested group starts
      ["COLOR", "eq", "red"],              //   Second condition
      "and",                               //   Second logic operator
      ["TYPE", "eq", "residential"]        //   Third condition
    ]                                      // Nested group ends
  ]
});

// 4. Even more complex: four conditions with proper nesting
// Visual structure:
//          AND
//         /   \
//    condition  AND
//              /   \
//        condition  AND
//                  /   \
//            condition  condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // First condition
    "and",
    [
      ["COLOR", "eq", "red"],              // Second condition
      "and",
      [
        ["TYPE", "eq", "residential"],     // Third condition
        "and",
        ["YEAR", "gt", 2000]               // Fourth condition
      ]
    ]
  ]
});

// 5. Mixed operators: combining AND and OR
// Visual structure:
//          AND
//         /   \
//    condition  OR
//              /  \
//        condition condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // Must have large area
    "and",
    [
      ["COLOR", "eq", "red"],              // Must be either red
      "or",
      ["TYPE", "eq", "residential"]        // OR residential type
    ]
  ]
});
```
