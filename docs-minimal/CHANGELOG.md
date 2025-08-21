# @feltmaps/js-sdk

## 1.8.0

### Minor Changes

* 336538b: Improve controller method documentation

### Patch Changes

* 7b04db4: Update filter docs

## 1.7.0

### Minor Changes

* f40a75c: Update getPrecomputedAggregates types
* 4c4ebfd: Add UIIframeElement to custom ui panel
* b87393f: Better docs, types and method consistency for Custom Panels API
* aff926a: Return UIPanel on custom panel API methods
* f5ca219: Speed up initial Felt/SDK connection
* 0b06e28: Add support for align and distribute items on grid container
* bd1952f: Merge create and update panel methods and require using createPanelId
* 27cc597: Add UIGridContainerElement to custom ui panel
* f2fcd2a: Add checkbox, radio and toggle controls to custom ui panel
* 15a35a5: Add method getPrecomputedAggregates
* 6ce4a76: Rename UIPanel onClose to onClickClose
* c16c55a: Support disabled on custom ui control option
* 2688f9c: Add UIButtonRowElement to custom ui panel
* 49d8895: Add Custom UI API for action triggers
* 0754363: Add new variants, drop thin variants and add tint prop to UIButtonElement
* 535e539: Include element id on every custom ui callback args
* b848937: Add tool setting to hide/show inspector
* 1e8e6f1: Return UIActionTrigger on custom action trigger API methods
* 2b0f08f: Add Custom UI API for panels
* f73dccf: Remove UIButtonGroupElement from custom ui panel

### Patch Changes

* 58bd6dd: Add isDeterministicId to LayerFeature
* 07b27c6: Export bundled controller types file for consumption as single file
* 41e1612: Update getAggregates examples to be correct
* 475c98e: Update getAggregates + MultiAggregationConfig docs
* ea5c7ff: Run patch on prepare, not install
* 4c83cfe: Don't try to patch packages not in dev mode
* 2008356: Documentation improvements
* 2fd720d: Use singular for custom ui types
* a1c6322: Make custom panel API consistent with other methods

## 1.6.0

### Minor Changes

* 160ca6d: Implement getFeatures method on LayersController
* 6a1e536: Widen allowed boundary types
* 56077be: Add setLayerBoundary, getLayerBoundaries, onLayerBoundaryChange

## 1.5.1

### Patch Changes

* ac68984: Update getLayerSchema example

## 1.5.0

### Minor Changes

* d327b46: Add `afterCreation` option in pin tool settings to control what happens after creating a Place
* 6a66d40: Add updateLayer and expand createLayersFromGeoJson options
* 6504fea: Change documentation for getElementGeoemtry to document Highlighter and Marker functionality, and allow holes in Highlighter geometry
* cf6711e: Make programmatic element CRUD types more accurate
* 4c83c60: Add programmatic element creation, editing and deletion
* 46e8ddc: Add onElementChange and onElementDelete
* 3e87812: Adds APIs to use Felt's drawing tools on read-only maps
* d877a83: Add getFeature for getting a single feature as GeoJSON with full detail geometry
* 7f1d6aa: Add "interaction" to element schema
* cf1dd7c: Improve Text and Note types and docs
* 1f6a386: Add getViewportConstraints and setViewportConstraints methods definition
* b059b70: Add onLayerFiltersChange to allow listening to changes to layer filters, be it ephemeral, style or widget filters that changed.
* 19b41ce: Improve createLayer API
* c20e605: Add setLayerLegendVisibility and setLayerGroupLegendVisibility methods definition
* cbfd3fd: Reject promises when method handlers are invalid
* 0915f48: Add showLayerDataTable and hideLayerDataTable methods
* 9620df9: Change Circle.coordinates for Circle.center
* 63c3042: Add getLayerSchema method
* 69cc0a9: Fix spelling mistake in types
* 87304d8: Fix geometry filter type
* 1f22654: Add screen point to pointer events
* b0e4149: Improves type readability and docs
* 65bf269: Add createLayer and deleteLayer
* 4bd0ae9: Add getMapDetails method definition
* 5f903fb: Update Layer type and createLayerFromGeoJson to separate out Source concept
* 597a8d6: Return coordinates on Circle and Place elements as they are only a single point.
* f2f4289: Add layer stats methods

### Patch Changes

* 993fd44: Allow workers to be SDK clients
* 417b8f4: Fixes incorrect value in documentation and updates links to other methods
* 9620df9: Improve element docs
* f0892c4: Improve documentation
* bb79037: Fix per-geometry styling for created layers

## 1.4.0

### Minor Changes

* 555a25a: Add clearSelection method
* 1f5d950: Add option to pass auth token when embedding

## 1.3.0

### Minor Changes

* 4bbde62: Allow setting a note to show with layer filters

## 1.2.0

### Minor Changes

* 7badd4b: Add onMapIdle event
* 41efd53: Add selectFeature method to select feature by layer and feature ID
* 208c492: Add areaQuery param to getRenderedFeatures

## 1.1.0

### Minor Changes

* 5f607ec: Return style with layers, and allow updating layer styles via setLayerStyle

### Patch Changes

* 3a8bec8: Fix API reference link in README

## 1.0.2

### Major Changes

* Release v1 of Felt JS SDK
