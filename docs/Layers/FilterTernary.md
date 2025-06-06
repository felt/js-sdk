***

> **FilterTernary** = \[`FilterTernary` | [`FilterExpression`](FilterExpression.md) | `null` | `boolean`, [`FilterLogicGate`](FilterLogicGate.md), `FilterTernary` | [`FilterExpression`](FilterExpression.md) | `null` | `boolean`]

A `FilterTernary` is a tree structure for combining expressions with logical operators.

When combining three or more conditions, you must use proper nesting rather than a flat list.

# Example

```typescript
// A simple filter with a single condition
const filter = [
  ["AREA", "gt", 30_000],
  "and",
  ["COLOR", "eq", "red"]
]

// A complex filter with multiple conditions
const filter = [
  ["AREA", "gt", 30_000],
  "and",
  [
    ["COLOR", "eq", "red"],
    "or",
    ["TYPE", "eq", "residential"]
  ]
]
```
