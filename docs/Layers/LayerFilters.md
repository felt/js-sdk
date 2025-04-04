***

The filters that are currently set on a layer.

A layer's filters are the combination of various different places
in which filters can be applied.

# Properties

## style

> **style**: [`Filters`](Filters.md)

Filters that are set in the layer's style. These are the lowest level
of filters, and can only be set by editing the map.

***

## components

> **components**: [`Filters`](Filters.md)

Filters that are set in the layer's components, which are interactive
elements in the legend. These can be set by viewers for their own session,
but their default value can be set by the map creator.

***

## ephemeral

> **ephemeral**: [`Filters`](Filters.md)

Filters that are set ephemerally by viewers in their own session.

These are the filters that are set when the [\`setLayerFilters\`](LayersController.md#setlayerfilters) method is
called. There is no way to set these in the Felt UI - they can only be
set using the SDK.

***

## combined

> **combined**: [`Filters`](Filters.md)

The combined result of all the filters set on the layer.
