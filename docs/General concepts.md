# General Concepts

This guide covers common patterns and concepts used throughout the Felt SDK.

By following these patterns consistently throughout the SDK, we aim to make the API predictable and easy to use while maintaining flexibility for future enhancements.


## Use of promises

All methods in the Felt SDK are asynchronous and return Promises. This means you'll need to use `await` or `.then()` when calling them:

```typescript
const layer = await felt.getLayer("layer-1");
felt.getElements().then(elements => {
  console.log(elements);
});
```

## Getting entities

The SDK follows a consistent pattern for getting entities. For each entity type, there are usually two methods:

1. A singular getter for retrieving one entity by ID:
```typescript
const layer = await felt.getLayer("layer-1");
const element = await felt.getElement("element-1");
```

2. A plural getter that accepts constraints for retrieving multiple entities:
```typescript
const layers = await felt.getLayers({ ids: ["layer-1", "layer-2"] });
const legendItems = await felt.getLegendItems({ layerIds: ["layer-1", "layer-2"] });
```

3. The plural getters allow you to pass no constraints, in which case they'll return all entities of that type:
```typescript
const layers = await felt.getLayers();
const elements = await felt.getLegendItems();
```

## Change listeners

Each entity type has a corresponding change listener method following the pattern `on{EntityType}Change`:

```typescript
const unsubscribe = felt.onLayerChange({
  options: { id: "layer-1" },
  handler: ({ layer }) => {
    console.log("Layer updated:", layer);
  }
});
```

This is true of selection, which acts as a kind-of entity in its own right:
```typescript
const selection = await felt.getSelection();
const unsubscribe =felt.onSelectionChange({
  handler: ({ selection }) => {
    console.log("Selection updated:", selection);
  }
});
```

### Cleanup functions

All change listeners return an unsubscribe function that should be called when you no longer need the listener:

```typescript
const unsubscribe = felt.onLayerChange({
  options: { id: "layer-1" },
  handler: ({ layer }) => {
    console.log("Layer changed:", layer);
  }
});

// Later, when you're done listening:
unsubscribe();
```

This is particularly important in frameworks like React where you should clean up listeners when components unmount:

```typescript
useEffect(() => {
  const unsubscribe = felt.onViewportMove({
    handler: (viewport) => {
      console.log("Viewport changed:", viewport);
    }
  });
  
  // Clean up when the component unmounts
  return () => unsubscribe();
}, []);
```

### Handler and options structure

Change listeners always take a single object parameter containing both `options` and `handler`. This structure makes it easier to add new options in the future without breaking existing code:

```typescript
// Current API
felt.onElementChange({
  options: { id: "element-1" },
  handler: ({ element }) => { /* ... */ }
});

// If we need to add new options later, no breaking changes:
felt.onElementChange({
  options: { 
    id: "element-1",
    newOption: "value" // Can add new options without breaking existing code
  },
  handler: ({ element }) => { /* ... */ }
});
```

## Entity nodes

When dealing with mixed collections of entities (like in selection events), each entity is wrapped in an `EntityNode` object that includes type information:

```typescript
felt.onSelectionChange({
  handler: ({ selection }) => {
    selection.forEach(node => {
      console.log(node.type);    // e.g., "element", "layer", "feature", ...
      console.log(node.entity);  // The actual entity object
      
      if (node.type === "element") {
        // TypeScript knows this is an Element
        console.log(node.entity.attributes);
      }
    });
  }
});
```
