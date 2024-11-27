***

Constraints for the `getRenderedFeatures` method. This can include layer constriants, spatial constraints, or both. If no constraints are
provided, all rendered features will be returned.

## Properties

### layerIds?

> `optional` **layerIds**: `string`\[]

The ids of the layers to get rendered features for.

***

### areaQuery?

> `optional` **areaQuery**: \{`coordinates`: `LatLngSchema`; } | \{`boundary`: `FeltBoundarySchema`; }

The area to query for rendered features. This can be specific coordinates or a boundary. If omitted, the entire viewport will be queried.
