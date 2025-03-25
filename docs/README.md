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

### View [FeltController](Main/FeltController.md) for a complete list of available functions. [FeltEmbedOptions](Main/FeltEmbedOptions.md) enumerates initialization options.

## Documents

* [CHANGELOG](CHANGELOG.md)

## Modules

* [Elements](Elements/README.md)
* [Interactions](Interactions/README.md)
* [Layers](Layers/README.md)
* [Main](Main/README.md)
* [Misc](Misc/README.md)
* [Selection](Selection/README.md)
* [Shared](Shared/README.md)
* [Tools](Tools/README.md)
* [UI](UI/README.md)
* [Viewport](Viewport/README.md)
