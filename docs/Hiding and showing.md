# Hiding and showing

The Felt SDK provides methods to control the visibility of various entities like layers, layer groups, element groups, and legend items. These methods are designed to efficiently handle bulk operations.

## Understanding visibility requests

All visibility methods use a consistent structure that allows both showing and hiding entities in a single call:

```typescript
{
  show?: string[],  // IDs of entities to show
  hide?: string[]   // IDs of entities to hide
}
```

### Layers

Control visibility of layer groups using `setLayerVisibility`:

```typescript
felt.setLayerVisibility({
  show: ["layer-1", "layer-2"],
  hide: ["layer-3"]
});
```

### Layer groups

Control visibility of layer groups using `setLayerGroupVisibility`:

```typescript
felt.setLayerGroupVisibility({
  show: ["group-1", "group-2"],
  hide: ["group-3"]
});
```

### Element groups

Similarly, control element group visibility with `setElementGroupVisibility`:

```typescript
felt.setElementGroupVisibility({
  show: ["points-group"],
  hide: ["lines-group", "polygons-group"]
});
```

### Legend items

Legend items require both a layer ID and an item ID to identify them. Use `setLegendItemVisibility`:

```typescript
felt.setLegendItemVisibility({
  show: [
    { layerId: "layer-1", id: "item-1" },
    { layerId: "layer-1", id: "item-2" }
  ],
  hide: [
    { layerId: "layer-1", id: "item-3" }
  ]
});
```

## Common use cases

### Focusing on a single layer

To focus on a single layer by hiding all others, first get all layers and then use their IDs:

```typescript
const layers = await felt.getLayers();
const targetLayerId = "important-layer";

felt.setLayerVisibility({
  show: [targetLayerId],
  hide: layers
    .map(layer => layer?.id)
    .filter(id => id && id !== targetLayerId)
});
```

### Toggling visibility

When implementing a toggle, you can use empty arrays for the operation you don't need:

```typescript
function toggleLayer(layerId: string, visible: boolean) {
  felt.setLayerVisibility({
    show: visible ? [layerId] : [],
    hide: visible ? [] : [layerId]
  });
}
```

## Best practices

1. **Batch operations**: Use a single call with multiple IDs rather than making multiple calls:

```typescript
// Better approach
felt.setLayerVisibility({
  show: ["layer-1", "layer-2"],
  hide: ["layer-3", "layer-4"]
});

// Less efficient approach
felt.setLayerVisibility({ show: ["layer-1"] });
felt.setLayerVisibility({ show: ["layer-2"] });
felt.setLayerVisibility({ hide: ["layer-3"] });
felt.setLayerVisibility({ hide: ["layer-4"] });
```

2. **Omit unused properties**: When you only need to show or hide, omit the unused property rather than including it with an empty array:

```typescript
// Do this
felt.setLayerVisibility({
  show: ["layer-1"]
});
```
