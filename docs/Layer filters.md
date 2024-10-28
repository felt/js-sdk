# Layer filters

The Felt SDK allows you to filter which features are visible in a layer using expressions that evaluate against feature properties. Filters can come from different sources and are combined to determine what's visible.

By understanding how filters work and combine, you can create dynamic views of your data that respond to user interactions and application state.

## Understanding filter sources

Layer filters can come from multiple sources, which are combined to create the final filter:

1. **Style filters**: Set by the map creator in the Felt UI
2. **Component filters**: Set through interactive legend components
3. **Ephemeral filters**: Set temporarily through the SDK

You can inspect these different filter sources using `getLayerFilters`:

```typescript
const filters = await felt.getLayerFilters("layer-1");
console.log(filters.style);      // Base filters from the layer style
console.log(filters.components); // Filters from legend components
console.log(filters.ephemeral);  // Filters set through the SDK
console.log(filters.combined);   // The final result of combining all filters
```

## Setting filters

Use `setLayerFilters` to apply ephemeral filters to a layer:

```typescript
felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["POPULATION", "gt", 1000000]
});
```

### Filter operators

The following operators are available:

- Comparison: `lt` (less than), `gt` (greater than), `le` (less than or equal), `ge` (greater than or equal), `eq` (equal), `ne` (not equal)
- Text: `cn` (contains), `nc` (does not contain)
- Boolean: `and`, `or`

### Compound filters

You can combine multiple conditions using boolean operators:

```typescript
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["POPULATION", "gt", 1000000],
    "and",
    ["COUNTRY", "eq", "USA"]
  ]
});
```

## Practical example: Filtering by selected feature

Here's a common use case where we filter a layer to show only features that match a property of a selected feature:

```typescript
// Listen for selection changes
felt.onSelectionChange({
  handler: async ({ selection }) => {
    // Find the first selected feature
    const selectedFeature = selection.find(node => node.type === "feature");
    
    if (selectedFeature) {
      // Get the state code from the selected feature
      const stateCode = selectedFeature.entity.properties.STATE_CODE;
      
      // Filter the counties layer to show only counties in the selected state
      felt.setLayerFilters({
        layerId: "counties-layer",
        filters: ["STATE_CODE", "eq", stateCode]
      });
    } else {
      // Clear the filter when nothing is selected
      felt.setLayerFilters({
        layerId: "counties-layer",
        filters: null
      });
    }
  }
});
```

## Best practices

1. **Clear filters**: Set filters to `null` to remove them entirely:

```typescript
felt.setLayerFilters({
  layerId: "layer-1",
  filters: null
});
```

2. **Check existing filters**: Remember that your ephemeral filters combine with existing style and component filters:

```typescript
const filters = await felt.getLayerFilters("layer-1");

// Check if there are any style filters before adding ephemeral ones
if (filters.style) {
  console.log("This layer already has style filters");
}
```

3. **Type safety**: Use TypeScript to ensure your filter expressions are valid:

```typescript
import type { Filters } from "@feltjs/sdk";

const filter: Filters = ["POPULATION", "gt", 1000000];
felt.setLayerFilters({
  layerId: "layer-1",
  filters: filter
});
```
