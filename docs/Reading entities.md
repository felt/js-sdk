# Reading entities

The Felt SDK provides several methods for reading data from your map's entities (layers, elements, etc.) and staying in sync with their changes. This guide will show you how to read entity data and react to changes.

## Getting entities

The Felt SDK provides both singular and plural versions of getter methods for various entity types. This allows you to retrieve either a single entity or multiple entities of the same type.

For example, for layers:
```typescript
// Get a single layer
const layer = await felt.getLayer("layer-1");

// Get all layers
const layers = await felt.getLayers();
```

### Using constraints

All of the methods that return multiple entities accept constraint parameters to filter the results:

```typescript
// Get elements with specific IDs
const elements = await felt.getElements({
  ids: ["element-1", "element-2"]
});

// Get legend items belonging to a layer
const legendItems = await felt.getLegendItems({
  layerIds: ["layer-1"],
});
```

## Reacting to changes

To stay in sync with entities, use the appropriate `on[EntityType]Change` method. For example, to monitor layer changes:

```typescript
felt.onLayerChange({
  options: {id: "layer-1"},
  handler: ({layer}) => {
    console.log(layer.visible);
  }
});
```

## Best practices

1. **Cleanup**: Always store and call the unsubscribe functions when you're done listening for changes so that the listener doesn't continue to run in the background.

2. **Error handling**: When getting entities, remember that the methods may return `null` if the entity doesn't exist:

```typescript
const layer = await felt.getLayer("layer-1");
if (layer) {
  // Layer exists, safe to use
  console.log(layer.visible);
} else {
  // Layer not found
  console.log("Layer not found");
}
```

3. **Batch operations**: When you need multiple entities, use the bulk methods (`getLayers`, `getElements`, etc.) with constraints rather than making multiple individual calls:

```typescript
// Better approach
const layers = await felt.getLayers({ ids: ["layer-1", "layer-2"] });

// Less efficient approach
const layer1 = await felt.getLayer("layer-1");
const layer2 = await felt.getLayer("layer-2");
```

This approach to reading and monitoring entities gives you full control over your map's data and allows you to build interactive applications that stay in sync with the map's state.
