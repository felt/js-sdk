# Working with selection

The Felt SDK provides methods to read and react to selection changes in your map. Selection refers to the currently highlighted entities (elements, features, etc.) that the user has clicked on or selected through other means.

## Reading selection

You can get the current selection state using `getSelection()`:

```typescript
const selection = await felt.getSelection();
```

This returns an array of `EntityNode` objects, each representing a selected entity. The selection can include various types of entities at the
same time, such as elements and features.

## Reacting to selection changes

To stay in sync with selection changes, use the `onSelectionChange` method:

```typescript
const unsubscribe = felt.onSelectionChange({
  handler: ({ selection }) => {
    // selection is an array of EntityNode objects
    console.log("Selected entities:", selection);
    
    // Check what's selected
    selection.forEach(node => {
      console.log("Entity type:", node.type);
      console.log("Entity ID:", node.entity.id);
    });
  }
});

// Don't forget to clean up when you're done
unsubscribe();
```

## Best practices

1. **Clean up listeners**: Always store and call the unsubscribe function when you no longer need to listen for selection changes:

```typescript
const unsubscribe = felt.onSelectionChange({
  handler: ({ selection }) => {
    // Handle selection...
  }
});

// Later, when you're done:
unsubscribe();
```

2. **Handle empty selection**: Remember that the selection array might be empty if nothing is selected:

```typescript
const unsubscribe = felt.onSelectionChange({
  handler: ({ selection }) => {
    if (selection.length === 0) {
      console.log("Nothing is selected");
      return;
    }
    // Handle selection...
  }
});
```


By following these patterns, you can build robust interactions based on what users select in your Felt map.
