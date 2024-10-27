To work with Felt embeds in React, we have a starter template that you can use as a starting
point.

This is available on GitHub in the [felt/js-sdk-starter-react](https://github.com/felt/js-sdk-starter-react)
repository.

In that repo, you will find a `feltUtils.ts` file that demonstrates some ways to make using the Felt SDK
in React easier.

## Embedding with `useFeltEmbed`

```tsx
function MyComponent() {
  // get the felt controller (or null if it's not loaded yet) and a ref to the map container
  // into which we can embed the map
  const { felt, mapRef } = useFeltEmbed("wPV9BqMuYQxmUraVWy9C89BNA", {
    uiControls: {
      cooperativeGestures: false,
      fullScreenButton: false,
      showLegend: false,
    },
  });

  return (
    <div>
      {/* the map container */}
      <div ref={mapRef} />

      {/* a component that uses the Felt controller */}
      <MyFeltApp felt={felt} />
    </div>
  );
}
```

<details>
<summary>useFeltEmbed implementation</summary>

```typescript
import {
  PmaFelt,
  FeltController,
  FeltEmbedOptions,
  Layer,
  LayerGroup,
} from "@feltjs/js-sdk";
import React from "react";

export function useFeltEmbed(mapId: string, embedOptions: FeltEmbedOptions) {
  const [felt, setFelt] = React.useState<FeltController | null>(null);
  const hasLoadedRef = React.useRef(false);
  const mapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    async function loadFelt() {
      if (hasLoadedRef.current) return;
      if (!mapRef.current) return;

      hasLoadedRef.current = true;
      const felt = await Felt.embed(mapRef.current, mapId, embedOptions);
      setFelt(felt);
    }

    loadFelt();
  }, []);

  return {
    felt,
    mapRef,
  };
}
```
</details>

## Getting live data

A common use case for building apps on Felt is to be notified when entities are updated. The main
example of this is when you want to change the visibility of say a layer, and have your own UI
reflect that change.

Rather than keeping track of the visibility of entities yourself, you can use the Felt SDK to listen
for changes to the visibility of entities.

Here is an example of how you might do this for layers assuming you already have a reference to
a `Layer` object, e.g. from calling `map.getLayers()`:

```typescript
export function useLiveLayer(felt: FeltController, initialLayer: Layer) {
  // start with the layer we were given
  const [currentLayer, setLayer] = React.useState<Layer | null>(initialLayer);

  // listen for changes to the layer and update our state accordingly
  React.useEffect(() => {
    return felt.onLayerChange({
      options: { id: initialLayer.id },
      handler: ({ layer }) => setLayer(layer),
    });
  }, [initialLayer.id]);

  // return the live layer
  return currentLayer;
}
```
