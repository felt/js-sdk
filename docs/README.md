# API Reference

To get started:

```
import { Felt } from "@feltmaps/js-sdk";

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

**View [FeltController](Main/FeltController.md) for a complete list of available functions. [FeltEmbedOptions](Main/FeltEmbedOptions.md) enumerates initialization options.**

## Documents

* [CHANGELOG](CHANGELOG.md)

## Modules

* [Elements](Elements.md)
* [Interactions](Interactions.md)
* [Layers](Layers.md)
* [Main](Main.md)
* [Misc](Misc.md)
* [Selection](Selection.md)
* [Shared](Shared.md)
* [Tools](Tools.md)
* [UI](UI.md)
* [Viewport](Viewport.md)
