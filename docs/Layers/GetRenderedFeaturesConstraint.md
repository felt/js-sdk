***

Constraints for the [\`getRenderedFeatures\`](LayersController.md#getrenderedfeatures) method. This can include layer constriants, spatial constraints, or both. If no constraints are
provided, all rendered features will be returned.

# Properties

## areaQuery?

> `optional` **areaQuery**: \{ `coordinates`: [`LatLng`](../Shared/LatLng.md); } | \{ `boundary`: \[`number`, `number`, `number`, `number`]; }

The area to query for rendered features. This can be specific coordinates or a [FeltBoundary](../Shared/FeltBoundary.md). If omitted, the entire viewport will be queried.

***

## layerIds?

> `optional` **layerIds**: `string`\[]

The ids of the layers to get rendered features for.
