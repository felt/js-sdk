***

The travel time that an isochrone Polygon covers.

# Remarks

Felt computes an isochrone's shape as the area reachable from `origin` within
`minutes` by `mode`, following roads and paths.

# Properties

## mode

> **mode**: `"driving"` | `"cycling"` | `"walking"`

The mode of transport used to travel from the origin.

***

## minutes

> **minutes**: `number`

The travel time in whole minutes, from 1 to 120.

***

## origin

> **origin**: [`LngLatTuple`](../Shared/LngLatTuple.md)

The point that travel time is measured from.
