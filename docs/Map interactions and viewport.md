# Map Interactions and Viewport

The Felt SDK provides methods to control the map's viewport (the visible area of the map) and handle user interactions like clicking and hovering
on the viewport.

## Working with the viewport

### Getting viewport state

You can get the current viewport state using `getViewport()`:

```typescript
const viewport = await felt.getViewport();
console.log(viewport.center); // { latitude: number, longitude: number }
console.log(viewport.zoom);   // number
```

### Setting the viewport

There are two main ways to set the viewport: moving to a specific point, or fitting to bounds.

#### Moving to a point

Use `setViewport()` to move the map to a specific location:

```typescript
felt.setViewport({
  center: {
    latitude: 37.7749,
    longitude: -122.4194
  },
  zoom: 12
});
```

#### Fitting to bounds

Use `fitViewportToBounds()` to adjust the viewport to show a specific rectangular area:

```typescript
felt.fitViewportToBounds({
  bounds: [
    west,   // minimum longitude
    south,  // minimum latitude
    east,   // maximum longitude
    north   // maximum latitude
  ]
});
```

### Responding to viewport changes

To stay in sync with viewport changes, use the `onViewportMove` method:

```typescript
const unsubscribe = felt.onViewportMove({
  handler: (viewport) => {
    console.log("New center:", viewport.center);
    console.log("New zoom:", viewport.zoom);
  }
});

// Clean up when done
unsubscribe();
```

## Map interactions

### Click events

Listen for click events on the map using `onPointerClick`:

```typescript
const unsubscribe = felt.onPointerClick({
  handler: (event) => {
    // Location of the click
    console.log("Click location:", event.center);
    
    // Features under the click
    console.log("Clicked features:", event.features);
  }
});
```

### Hover events

Track mouse movement over the map using `onPointerMove`:

```typescript
const unsubscribe = felt.onPointerMove({
  handler: (event) => {
    // Current mouse location
    console.log("Mouse location:", event.center);
    
    // Features under the cursor
    console.log("Hovered features:", event.features);
  }
});
```

## Best practices

1. **Cleanup**: Always store and call unsubscribe functions when you're done listening for events:

```typescript
const unsubscribe = felt.onPointerMove({
  handler: (event) => {
    // Handle event...
  }
});

// Later, when you're done:
unsubscribe();
```

2. **Throttling**: For pointer move events, consider throttling your handler if you're doing expensive operations:

```typescript
import { throttle } from "lodash";

felt.onPointerMove({
  handler: throttle((event) => {
    // Handle frequent mouse moves...
  }, 100) // Limit to once every 100ms
});
```


By using these viewport controls and interaction handlers, you can create rich, interactive experiences with your Felt map.
