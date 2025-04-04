***

# Properties

## type

> **type**: `"Polygon"`

***

## coordinates

> **coordinates**: \[`number`, `number`]\[]\[]

The coordinates of a polygon. The first array is the exterior ring, and
any subsequent arrays are the interior rings.

Each ring must have at least 4 points: 3 to make a valid triangle and the
last to close the path, which must be identical to the first.
