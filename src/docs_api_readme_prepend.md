# API Reference

To get started, 
```
const felt = await Felt.embed(
  document.querySelector("#container"),
  "FELT_MAP_ID",
  {
    uiControls: {
      cooperativeGestures: false,
      fullScreenButton: false,
      showLegend: false,
    },
  }
);


const layers = await map.getLayers();

```

View {@link Main} for a complete list of available functions. 
