# @feltmaps/js-sdk

## 1.5.0-next.16

### Minor Changes

- 6504fea: Change documentation for getElementGeoemtry to document Highlighter and Marker functionality, and allow holes in Highlighter geometry
- 9620df9: Change Circle.coordinates for Circle.center

### Patch Changes

- 417b8f4: Fixes incorrect value in documentation and updates links to other methods
- 9620df9: Improve element docs
- f0892c4: Improve documentation

## 1.5.0-next.15

### Patch Changes

- 993fd44: Allow workers to be SDK clients

## 1.5.0-next.14

### Patch Changes

- bb79037: Fix per-geometry styling for created layers

## 1.5.0-next.13

### Minor Changes

- 65bf269: Add createLayer and deleteLayer

## 1.5.0-next.12

### Minor Changes

- 69cc0a9: Fix spelling mistake in types

## 1.5.0-next.11

### Minor Changes

- 63c3042: Add getLayerSchema method

## 1.5.0-next.10

### Minor Changes

- d877a83: Add getFeature for getting a single feature as GeoJSON with full detail geometry
- b0e4149: Improves type readability and docs

## 1.5.0-next.9

### Minor Changes

- 7f1d6aa: Add "interaction" to element schema

## 1.5.0-next.8

### Minor Changes

- d327b46: Add `afterCreation` option in pin tool settings to control what happens after creating a Place
- b059b70: Add onLayerFiltersChange to allow listening to changes to layer filters, be it ephemeral, style or widget filters that changed.

## 1.5.0-next.7

### Minor Changes

- 0915f48: Add showLayerDataTable and hideLayerDataTable methods
- 597a8d6: Return coordinates on Circle and Place elements as they are only a single point.

## 1.5.0-next.6

### Minor Changes

- f2f4289: Add layer stats methods

## 1.5.0-next.5

### Minor Changes

- 4bd0ae9: Add getMapDetails method definition

## 1.5.0-next.4

### Minor Changes

- cf6711e: Make programmatic element CRUD types more accurate
- 46e8ddc: Add onElementChange and onElementDelete

## 1.5.0-next.3

### Minor Changes

- 4c83c60: Add programmatic element creation, editing and deletion

## 1.5.0-next.2

### Minor Changes

- 1f6a386: Add getViewportConstraints and setViewportConstraints methods definition

## 1.5.0-next.0

### Minor Changes

- 3e87812: Adds APIs to use Felt's drawing tools on read-only maps
- c20e605: Add setLayerLegendVisibility and setLayerGroupLegendVisibility methods definition

## 1.4.0

### Minor Changes

- 555a25a: Add clearSelection method
- 1f5d950: Add option to pass auth token when embedding

## 1.3.0

### Minor Changes

- 4bbde62: Allow setting a note to show with layer filters

## 1.2.0

### Minor Changes

- 7badd4b: Add onMapIdle event
- 41efd53: Add selectFeature method to select feature by layer and feature ID
- 208c492: Add areaQuery param to getRenderedFeatures

## 1.1.0

### Minor Changes

- 5f607ec: Return style with layers, and allow updating layer styles via setLayerStyle

### Patch Changes

- 3a8bec8: Fix API reference link in README

## 1.0.2

### Major Changes

- Release v1 of Felt JS SDK
