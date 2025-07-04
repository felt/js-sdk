## API Report File for "@feltmaps/js-sdk"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { au as AggregatedGridConfig } from './controller-9JZIE1UX.js';
import { av as AggregationConfig } from './controller-9JZIE1UX.js';
import { aw as AggregationMethod } from './controller-9JZIE1UX.js';
import { C as CircleElementCreate } from './controller-9JZIE1UX.js';
import { a as CircleElementRead } from './controller-9JZIE1UX.js';
import { b as CircleElementUpdate } from './controller-9JZIE1UX.js';
import { b8 as CircleToolSettings } from './controller-9JZIE1UX.js';
import { b9 as ConfigurableToolType } from './controller-9JZIE1UX.js';
import { ax as CountGridConfig } from './controller-9JZIE1UX.js';
import { bp as CreateActionTriggerParams } from './controller-9JZIE1UX.js';
import { K as CreateLayersFromGeoJsonParams } from './controller-9JZIE1UX.js';
import { bq as CreateOrUpdatePanelParams } from './controller-9JZIE1UX.js';
import { br as CreatePanelElementsParams } from './controller-9JZIE1UX.js';
import { O as DataOnlyLayer } from './controller-9JZIE1UX.js';
import { bs as DeletePanelElementsParams } from './controller-9JZIE1UX.js';
import { E as Element_2 } from './controller-9JZIE1UX.js';
import { c as ElementChangeCallbackParams } from './controller-9JZIE1UX.js';
import { d as ElementCreate } from './controller-9JZIE1UX.js';
import { e as ElementGroup } from './controller-9JZIE1UX.js';
import { f as ElementGroupChangeCallbackParams } from './controller-9JZIE1UX.js';
import { aM as ElementGroupNode } from './controller-9JZIE1UX.js';
import { aN as ElementNode } from './controller-9JZIE1UX.js';
import { B as ElementsController } from './controller-9JZIE1UX.js';
import { g as ElementUpdate } from './controller-9JZIE1UX.js';
import { aO as EntityNode } from './controller-9JZIE1UX.js';
import { aP as FeatureNode } from './controller-9JZIE1UX.js';
import { aQ as FeatureSelection } from './controller-9JZIE1UX.js';
import { aU as FeltBoundary } from './controller-9JZIE1UX.js';
import { F as FeltController } from './controller-9JZIE1UX.js';
import { Q as FeltTiledVectorSource } from './controller-9JZIE1UX.js';
import { aV as FeltZoom } from './controller-9JZIE1UX.js';
import { an as FilterExpression } from './controller-9JZIE1UX.js';
import { ao as FilterLogicGate } from './controller-9JZIE1UX.js';
import { aq as Filters } from './controller-9JZIE1UX.js';
import { ap as FilterTernary } from './controller-9JZIE1UX.js';
import { R as GeoJsonDataVectorSource } from './controller-9JZIE1UX.js';
import { aW as GeoJsonFeature } from './controller-9JZIE1UX.js';
import { S as GeoJsonFileVectorSource } from './controller-9JZIE1UX.js';
import { aX as GeoJsonGeometry } from './controller-9JZIE1UX.js';
import { aY as GeoJsonProperties } from './controller-9JZIE1UX.js';
import { W as GeoJsonUrlVectorSource } from './controller-9JZIE1UX.js';
import { ar as GeometryFilter } from './controller-9JZIE1UX.js';
import { G as GetElementGroupsConstraint } from './controller-9JZIE1UX.js';
import { h as GetElementsConstraint } from './controller-9JZIE1UX.js';
import { ay as GetLayerCalculationParams } from './controller-9JZIE1UX.js';
import { az as GetLayerCategoriesGroup } from './controller-9JZIE1UX.js';
import { aA as GetLayerCategoriesParams } from './controller-9JZIE1UX.js';
import { X as GetLayerGroupsConstraint } from './controller-9JZIE1UX.js';
import { aB as GetLayerHistogramBin } from './controller-9JZIE1UX.js';
import { aC as GetLayerHistogramParams } from './controller-9JZIE1UX.js';
import { aD as GetLayerPrecomputedCalculationParams } from './controller-9JZIE1UX.js';
import { Y as GetLayersConstraint } from './controller-9JZIE1UX.js';
import { Z as GetRenderedFeaturesConstraint } from './controller-9JZIE1UX.js';
import { aE as GridConfig } from './controller-9JZIE1UX.js';
import { aF as GridType } from './controller-9JZIE1UX.js';
import { H as HighlighterElementCreate } from './controller-9JZIE1UX.js';
import { i as HighlighterElementRead } from './controller-9JZIE1UX.js';
import { j as HighlighterElementUpdate } from './controller-9JZIE1UX.js';
import { ba as HighlighterToolSettings } from './controller-9JZIE1UX.js';
import { I as ImageElementCreate } from './controller-9JZIE1UX.js';
import { k as ImageElementRead } from './controller-9JZIE1UX.js';
import { l as ImageElementUpdate } from './controller-9JZIE1UX.js';
import { bb as InputToolSettings } from './controller-9JZIE1UX.js';
import { J as InteractionsController } from './controller-9JZIE1UX.js';
import { aZ as LatLng } from './controller-9JZIE1UX.js';
import { _ as Layer } from './controller-9JZIE1UX.js';
import { as as LayerBoundaries } from './controller-9JZIE1UX.js';
import { $ as LayerChangeCallbackParams } from './controller-9JZIE1UX.js';
import { a0 as LayerCommon } from './controller-9JZIE1UX.js';
import { ad as LayerFeature } from './controller-9JZIE1UX.js';
import { at as LayerFilters } from './controller-9JZIE1UX.js';
import { a1 as LayerGroup } from './controller-9JZIE1UX.js';
import { a2 as LayerGroupChangeCallbackParams } from './controller-9JZIE1UX.js';
import { aR as LayerGroupNode } from './controller-9JZIE1UX.js';
import { aS as LayerNode } from './controller-9JZIE1UX.js';
import { a3 as LayerProcessingStatus } from './controller-9JZIE1UX.js';
import { af as LayerSchema } from './controller-9JZIE1UX.js';
import { ag as LayerSchemaAttribute } from './controller-9JZIE1UX.js';
import { ah as LayerSchemaBooleanAttribute } from './controller-9JZIE1UX.js';
import { ai as LayerSchemaCommonAttribute } from './controller-9JZIE1UX.js';
import { aj as LayerSchemaDateAttribute } from './controller-9JZIE1UX.js';
import { ak as LayerSchemaDateTimeAttribute } from './controller-9JZIE1UX.js';
import { al as LayerSchemaNumericAttribute } from './controller-9JZIE1UX.js';
import { am as LayerSchemaTextAttribute } from './controller-9JZIE1UX.js';
import { aJ as LayersController } from './controller-9JZIE1UX.js';
import { a4 as LegendItem } from './controller-9JZIE1UX.js';
import { a5 as LegendItemChangeCallbackParams } from './controller-9JZIE1UX.js';
import { a6 as LegendItemIdentifier } from './controller-9JZIE1UX.js';
import { a7 as LegendItemsConstraint } from './controller-9JZIE1UX.js';
import { a_ as LineStringGeometry } from './controller-9JZIE1UX.js';
import { bc as LineToolSettings } from './controller-9JZIE1UX.js';
import { L as LinkElementRead } from './controller-9JZIE1UX.js';
import { a$ as LngLatTuple } from './controller-9JZIE1UX.js';
import { aK as MapDetails } from './controller-9JZIE1UX.js';
import { D as MapInteractionEvent } from './controller-9JZIE1UX.js';
import { M as MarkerElementCreate } from './controller-9JZIE1UX.js';
import { m as MarkerElementRead } from './controller-9JZIE1UX.js';
import { n as MarkerElementUpdate } from './controller-9JZIE1UX.js';
import { bd as MarkerToolSettings } from './controller-9JZIE1UX.js';
import { aL as MiscController } from './controller-9JZIE1UX.js';
import { aG as MultiAggregationConfig } from './controller-9JZIE1UX.js';
import { b0 as MultiLineStringGeometry } from './controller-9JZIE1UX.js';
import { b1 as MultiPointGeometry } from './controller-9JZIE1UX.js';
import { b2 as MultiPolygonGeometry } from './controller-9JZIE1UX.js';
import { N as NoteElementCreate } from './controller-9JZIE1UX.js';
import { o as NoteElementRead } from './controller-9JZIE1UX.js';
import { p as NoteElementUpdate } from './controller-9JZIE1UX.js';
import { be as NoteToolSettings } from './controller-9JZIE1UX.js';
import { bt as OnMapInteractionsOptions } from './controller-9JZIE1UX.js';
import { P as PathElementCreate } from './controller-9JZIE1UX.js';
import { q as PathElementRead } from './controller-9JZIE1UX.js';
import { r as PathElementUpdate } from './controller-9JZIE1UX.js';
import { bf as PinToolSettings } from './controller-9JZIE1UX.js';
import { s as PlaceElementCreate } from './controller-9JZIE1UX.js';
import { t as PlaceElementRead } from './controller-9JZIE1UX.js';
import { u as PlaceElementUpdate } from './controller-9JZIE1UX.js';
import { bg as PlaceFrame } from './controller-9JZIE1UX.js';
import { bw as PlacementForUIElement } from './controller-9JZIE1UX.js';
import { bh as PlaceSymbol } from './controller-9JZIE1UX.js';
import { b3 as PointGeometry } from './controller-9JZIE1UX.js';
import { v as PolygonElementCreate } from './controller-9JZIE1UX.js';
import { w as PolygonElementRead } from './controller-9JZIE1UX.js';
import { x as PolygonElementUpdate } from './controller-9JZIE1UX.js';
import { b4 as PolygonGeometry } from './controller-9JZIE1UX.js';
import { bi as PolygonToolSettings } from './controller-9JZIE1UX.js';
import { aH as PrecomputedAggregationMethod } from './controller-9JZIE1UX.js';
import { a8 as RasterBand } from './controller-9JZIE1UX.js';
import { a9 as RasterLayer } from './controller-9JZIE1UX.js';
import { aa as RasterLayerSource } from './controller-9JZIE1UX.js';
import { ae as RasterValue } from './controller-9JZIE1UX.js';
import { bj as RouteToolSettings } from './controller-9JZIE1UX.js';
import { aT as SelectionController } from './controller-9JZIE1UX.js';
import { ca as SetViewportCenterZoomParams } from './controller-9JZIE1UX.js';
import { b5 as SetVisibilityRequest } from './controller-9JZIE1UX.js';
import { b6 as SortConfig } from './controller-9JZIE1UX.js';
import { b7 as SortDirection } from './controller-9JZIE1UX.js';
import { T as TextElementCreate } from './controller-9JZIE1UX.js';
import { y as TextElementRead } from './controller-9JZIE1UX.js';
import { A as TextElementUpdate } from './controller-9JZIE1UX.js';
import { bk as TextToolSettings } from './controller-9JZIE1UX.js';
import { bo as ToolsController } from './controller-9JZIE1UX.js';
import { bl as ToolSettingsChangeEvent } from './controller-9JZIE1UX.js';
import { bm as ToolSettingsMap } from './controller-9JZIE1UX.js';
import { bn as ToolType } from './controller-9JZIE1UX.js';
import { c8 as UIActionTriggerCreate } from './controller-9JZIE1UX.js';
import { bz as UIButtonElement } from './controller-9JZIE1UX.js';
import { bA as UIButtonElementCreate } from './controller-9JZIE1UX.js';
import { bB as UIButtonElementUpdate } from './controller-9JZIE1UX.js';
import { bX as UIButtonRowElement } from './controller-9JZIE1UX.js';
import { bY as UIButtonRowElementCreate } from './controller-9JZIE1UX.js';
import { bZ as UIButtonRowElementUpdate } from './controller-9JZIE1UX.js';
import { b_ as UICheckboxGroupElement } from './controller-9JZIE1UX.js';
import { b$ as UICheckboxGroupElementCreate } from './controller-9JZIE1UX.js';
import { c0 as UICheckboxGroupElementUpdate } from './controller-9JZIE1UX.js';
import { c7 as UIControlElementOption } from './controller-9JZIE1UX.js';
import { c9 as UiController } from './controller-9JZIE1UX.js';
import { U as UiControlsOptions } from './controller-9JZIE1UX.js';
import { bI as UIDividerElement } from './controller-9JZIE1UX.js';
import { bJ as UIDividerElementCreate } from './controller-9JZIE1UX.js';
import { bK as UIDividerElementUpdate } from './controller-9JZIE1UX.js';
import { bF as UIFlexibleSpaceElement } from './controller-9JZIE1UX.js';
import { bG as UIFlexibleSpaceElementCreate } from './controller-9JZIE1UX.js';
import { bH as UIFlexibleSpaceElementUpdate } from './controller-9JZIE1UX.js';
import { bU as UIGridContainerElement } from './controller-9JZIE1UX.js';
import { bV as UIGridContainerElementCreate } from './controller-9JZIE1UX.js';
import { bW as UIGridContainerElementUpdate } from './controller-9JZIE1UX.js';
import { bx as UIPanel } from './controller-9JZIE1UX.js';
import { by as UIPanelCreateOrUpdate } from './controller-9JZIE1UX.js';
import { bR as UIPanelElement } from './controller-9JZIE1UX.js';
import { bS as UIPanelElementCreate } from './controller-9JZIE1UX.js';
import { bT as UIPanelElementUpdate } from './controller-9JZIE1UX.js';
import { c1 as UIRadioGroupElement } from './controller-9JZIE1UX.js';
import { c2 as UIRadioGroupElementCreate } from './controller-9JZIE1UX.js';
import { c3 as UIRadioGroupElementUpdate } from './controller-9JZIE1UX.js';
import { bO as UISelectElement } from './controller-9JZIE1UX.js';
import { bP as UISelectElementCreate } from './controller-9JZIE1UX.js';
import { bQ as UISelectElementUpdate } from './controller-9JZIE1UX.js';
import { bC as UITextElement } from './controller-9JZIE1UX.js';
import { bD as UITextElementCreate } from './controller-9JZIE1UX.js';
import { bE as UITextElementUpdate } from './controller-9JZIE1UX.js';
import { bL as UITextInputElement } from './controller-9JZIE1UX.js';
import { bM as UITextInputElementCreate } from './controller-9JZIE1UX.js';
import { bN as UITextInputElementUpdate } from './controller-9JZIE1UX.js';
import { c4 as UIToggleGroupElement } from './controller-9JZIE1UX.js';
import { c5 as UIToggleGroupElementCreate } from './controller-9JZIE1UX.js';
import { c6 as UIToggleGroupElementUpdate } from './controller-9JZIE1UX.js';
import { bu as UpdateActionTriggerParams } from './controller-9JZIE1UX.js';
import { ab as UpdateLayerParams } from './controller-9JZIE1UX.js';
import { bv as UpdatePanelElementsParams } from './controller-9JZIE1UX.js';
import { aI as ValueConfiguration } from './controller-9JZIE1UX.js';
import { ac as VectorLayer } from './controller-9JZIE1UX.js';
import { V as ViewportCenterZoom } from './controller-9JZIE1UX.js';
import { cb as ViewportConstraints } from './controller-9JZIE1UX.js';
import { ce as ViewportController } from './controller-9JZIE1UX.js';
import { cc as ViewportFitBoundsParams } from './controller-9JZIE1UX.js';
import { cd as ViewportState } from './controller-9JZIE1UX.js';
import { z } from './controller-9JZIE1UX.js';
import { z as z_2 } from 'zod';

export { AggregatedGridConfig }

export { AggregationConfig }

export { AggregationMethod }

export { CircleElementCreate }

export { CircleElementRead }

export { CircleElementUpdate }

export { CircleToolSettings }

export { ConfigurableToolType }

export { CountGridConfig }

export { CreateActionTriggerParams }

export { CreateLayersFromGeoJsonParams }

export { CreateOrUpdatePanelParams }

export { CreatePanelElementsParams }

export { DataOnlyLayer }

export { DeletePanelElementsParams }

export { Element_2 as Element }

export { ElementChangeCallbackParams }

export { ElementCreate }

export { ElementGroup }

export { ElementGroupChangeCallbackParams }

export { ElementGroupNode }

export { ElementNode }

export { ElementsController }

export { ElementUpdate }

export { EntityNode }

export { FeatureNode }

export { FeatureSelection }

// @public
export const Felt: {
    embed(container: HTMLElement, mapId: string, options?: FeltEmbedOptions): Promise<FeltController>;
    connect(feltWindow: Pick<Window, "postMessage">): Promise<FeltController>;
};

export { FeltBoundary }

export { FeltController }

// Warning: (ae-forgotten-export) The symbol "FeltEmbedOptionsSchema" needs to be exported by the entry point client.d.ts
//
// @public
export interface FeltEmbedOptions extends z<typeof FeltEmbedOptionsSchema> {
    // (undocumented)
    initialViewport?: ViewportCenterZoom;
    // (undocumented)
    uiControls?: UiControlsOptions;
}

// @internal (undocumented)
const FeltEmbedOptionsSchema: z_2.ZodObject<{
    origin: z_2.ZodOptional<z_2.ZodString>;
    token: z_2.ZodOptional<z_2.ZodString>;
    uiControls: z_2.ZodOptional<z_2.ZodObject<{
        showLegend: z_2.ZodOptional<z_2.ZodBoolean>;
        cooperativeGestures: z_2.ZodOptional<z_2.ZodBoolean>;
        fullScreenButton: z_2.ZodOptional<z_2.ZodBoolean>;
        geolocation: z_2.ZodOptional<z_2.ZodBoolean>;
        zoomControls: z_2.ZodOptional<z_2.ZodBoolean>;
        scaleBar: z_2.ZodOptional<z_2.ZodBoolean>;
    }, "strip", z_2.ZodTypeAny, {
        showLegend?: boolean | undefined;
        cooperativeGestures?: boolean | undefined;
        fullScreenButton?: boolean | undefined;
        geolocation?: boolean | undefined;
        zoomControls?: boolean | undefined;
        scaleBar?: boolean | undefined;
    }, {
        showLegend?: boolean | undefined;
        cooperativeGestures?: boolean | undefined;
        fullScreenButton?: boolean | undefined;
        geolocation?: boolean | undefined;
        zoomControls?: boolean | undefined;
        scaleBar?: boolean | undefined;
    }>>;
    initialViewport: z_2.ZodOptional<z_2.ZodObject<{
        center: z_2.ZodObject<{
            latitude: z_2.ZodNumber;
            longitude: z_2.ZodNumber;
        }, "strip", z_2.ZodTypeAny, {
            latitude: number;
            longitude: number;
        }, {
            latitude: number;
            longitude: number;
        }>;
        zoom: z_2.ZodNumber;
    }, "strip", z_2.ZodTypeAny, {
        center: {
            latitude: number;
            longitude: number;
        };
        zoom: number;
    }, {
        center: {
            latitude: number;
            longitude: number;
        };
        zoom: number;
    }>>;
}, "strip", z_2.ZodTypeAny, {
    origin?: string | undefined;
    token?: string | undefined;
    uiControls?: {
        showLegend?: boolean | undefined;
        cooperativeGestures?: boolean | undefined;
        fullScreenButton?: boolean | undefined;
        geolocation?: boolean | undefined;
        zoomControls?: boolean | undefined;
        scaleBar?: boolean | undefined;
    } | undefined;
    initialViewport?: {
        center: {
            latitude: number;
            longitude: number;
        };
        zoom: number;
    } | undefined;
}, {
    origin?: string | undefined;
    token?: string | undefined;
    uiControls?: {
        showLegend?: boolean | undefined;
        cooperativeGestures?: boolean | undefined;
        fullScreenButton?: boolean | undefined;
        geolocation?: boolean | undefined;
        zoomControls?: boolean | undefined;
        scaleBar?: boolean | undefined;
    } | undefined;
    initialViewport?: {
        center: {
            latitude: number;
            longitude: number;
        };
        zoom: number;
    } | undefined;
}>;

export { FeltTiledVectorSource }

export { FeltZoom }

export { FilterExpression }

export { FilterLogicGate }

export { Filters }

export { FilterTernary }

export { GeoJsonDataVectorSource }

export { GeoJsonFeature }

export { GeoJsonFileVectorSource }

export { GeoJsonGeometry }

export { GeoJsonProperties }

export { GeoJsonUrlVectorSource }

export { GeometryFilter }

export { GetElementGroupsConstraint }

export { GetElementsConstraint }

export { GetLayerCalculationParams }

export { GetLayerCategoriesGroup }

export { GetLayerCategoriesParams }

export { GetLayerGroupsConstraint }

export { GetLayerHistogramBin }

export { GetLayerHistogramParams }

export { GetLayerPrecomputedCalculationParams }

export { GetLayersConstraint }

export { GetRenderedFeaturesConstraint }

export { GridConfig }

export { GridType }

export { HighlighterElementCreate }

export { HighlighterElementRead }

export { HighlighterElementUpdate }

export { HighlighterToolSettings }

export { ImageElementCreate }

export { ImageElementRead }

export { ImageElementUpdate }

export { InputToolSettings }

export { InteractionsController }

export { LatLng }

export { Layer }

export { LayerBoundaries }

export { LayerChangeCallbackParams }

export { LayerCommon }

export { LayerFeature }

export { LayerFilters }

export { LayerGroup }

export { LayerGroupChangeCallbackParams }

export { LayerGroupNode }

export { LayerNode }

export { LayerProcessingStatus }

export { LayerSchema }

export { LayerSchemaAttribute }

export { LayerSchemaBooleanAttribute }

export { LayerSchemaCommonAttribute }

export { LayerSchemaDateAttribute }

export { LayerSchemaDateTimeAttribute }

export { LayerSchemaNumericAttribute }

export { LayerSchemaTextAttribute }

export { LayersController }

export { LegendItem }

export { LegendItemChangeCallbackParams }

export { LegendItemIdentifier }

export { LegendItemsConstraint }

export { LineStringGeometry }

export { LineToolSettings }

export { LinkElementRead }

export { LngLatTuple }

export { MapDetails }

export { MapInteractionEvent }

export { MarkerElementCreate }

export { MarkerElementRead }

export { MarkerElementUpdate }

export { MarkerToolSettings }

export { MiscController }

export { MultiAggregationConfig }

export { MultiLineStringGeometry }

export { MultiPointGeometry }

export { MultiPolygonGeometry }

export { NoteElementCreate }

export { NoteElementRead }

export { NoteElementUpdate }

export { NoteToolSettings }

export { OnMapInteractionsOptions }

export { PathElementCreate }

export { PathElementRead }

export { PathElementUpdate }

export { PinToolSettings }

export { PlaceElementCreate }

export { PlaceElementRead }

export { PlaceElementUpdate }

export { PlaceFrame }

export { PlacementForUIElement }

export { PlaceSymbol }

export { PointGeometry }

export { PolygonElementCreate }

export { PolygonElementRead }

export { PolygonElementUpdate }

export { PolygonGeometry }

export { PolygonToolSettings }

export { PrecomputedAggregationMethod }

export { RasterBand }

export { RasterLayer }

export { RasterLayerSource }

export { RasterValue }

export { RouteToolSettings }

export { SelectionController }

export { SetViewportCenterZoomParams }

export { SetVisibilityRequest }

export { SortConfig }

export { SortDirection }

export { TextElementCreate }

export { TextElementRead }

export { TextElementUpdate }

export { TextToolSettings }

export { ToolsController }

export { ToolSettingsChangeEvent }

export { ToolSettingsMap }

export { ToolType }

export { UIActionTriggerCreate }

export { UIButtonElement }

export { UIButtonElementCreate }

export { UIButtonElementUpdate }

export { UIButtonRowElement }

export { UIButtonRowElementCreate }

export { UIButtonRowElementUpdate }

export { UICheckboxGroupElement }

export { UICheckboxGroupElementCreate }

export { UICheckboxGroupElementUpdate }

export { UIControlElementOption }

export { UiController }

export { UiControlsOptions }

export { UIDividerElement }

export { UIDividerElementCreate }

export { UIDividerElementUpdate }

export { UIFlexibleSpaceElement }

export { UIFlexibleSpaceElementCreate }

export { UIFlexibleSpaceElementUpdate }

export { UIGridContainerElement }

export { UIGridContainerElementCreate }

export { UIGridContainerElementUpdate }

export { UIPanel }

export { UIPanelCreateOrUpdate }

export { UIPanelElement }

export { UIPanelElementCreate }

export { UIPanelElementUpdate }

export { UIRadioGroupElement }

export { UIRadioGroupElementCreate }

export { UIRadioGroupElementUpdate }

export { UISelectElement }

export { UISelectElementCreate }

export { UISelectElementUpdate }

export { UITextElement }

export { UITextElementCreate }

export { UITextElementUpdate }

export { UITextInputElement }

export { UITextInputElementCreate }

export { UITextInputElementUpdate }

export { UIToggleGroupElement }

export { UIToggleGroupElementCreate }

export { UIToggleGroupElementUpdate }

export { UpdateActionTriggerParams }

export { UpdateLayerParams }

export { UpdatePanelElementsParams }

export { ValueConfiguration }

export { VectorLayer }

export { ViewportCenterZoom }

export { ViewportConstraints }

export { ViewportController }

export { ViewportFitBoundsParams }

export { ViewportState }

// (No @packageDocumentation comment for this package)

```
