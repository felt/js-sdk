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

## View [Main](Main.md) for a complete list of available functions. 

---

## Documents

- [CHANGELOG](documents/CHANGELOG.md)

## Modules

- [Elements](Elements.md)
- [Interactions](Interactions.md)
- [Layers](Layers.md)
- [Main](Main.md)
- [Misc](Misc.md)
- [Selection](Selection.md)
- [Shared](Shared.md)
- [Tools](Tools.md)
- [UI](UI.md)
- [Viewport](Viewport.md)
