## API Report File for "@feltmaps/js-sdk"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { au as AggregatedGridConfig } from './controller-D6A8BZsm.js';
import { av as AggregationConfig } from './controller-D6A8BZsm.js';
import { aw as AggregationMethod } from './controller-D6A8BZsm.js';
import { C as CircleElementCreate } from './controller-D6A8BZsm.js';
import { a as CircleElementRead } from './controller-D6A8BZsm.js';
import { b as CircleElementUpdate } from './controller-D6A8BZsm.js';
import { b8 as CircleToolSettings } from './controller-D6A8BZsm.js';
import { b9 as ConfigurableToolType } from './controller-D6A8BZsm.js';
import { ax as CountGridConfig } from './controller-D6A8BZsm.js';
import { K as CreateLayersFromGeoJsonParams } from './controller-D6A8BZsm.js';
import { O as DataOnlyLayer } from './controller-D6A8BZsm.js';
import { E as Element_2 } from './controller-D6A8BZsm.js';
import { c as ElementChangeCallbackParams } from './controller-D6A8BZsm.js';
import { d as ElementCreate } from './controller-D6A8BZsm.js';
import { e as ElementGroup } from './controller-D6A8BZsm.js';
import { f as ElementGroupChangeCallbackParams } from './controller-D6A8BZsm.js';
import { aM as ElementGroupNode } from './controller-D6A8BZsm.js';
import { aN as ElementNode } from './controller-D6A8BZsm.js';
import { B as ElementsController } from './controller-D6A8BZsm.js';
import { g as ElementUpdate } from './controller-D6A8BZsm.js';
import { aO as EntityNode } from './controller-D6A8BZsm.js';
import { aP as FeatureNode } from './controller-D6A8BZsm.js';
import { aQ as FeatureSelection } from './controller-D6A8BZsm.js';
import { aU as FeltBoundary } from './controller-D6A8BZsm.js';
import { F as FeltController } from './controller-D6A8BZsm.js';
import { Q as FeltTiledVectorSource } from './controller-D6A8BZsm.js';
import { aV as FeltZoom } from './controller-D6A8BZsm.js';
import { an as FilterExpression } from './controller-D6A8BZsm.js';
import { ao as FilterLogicGate } from './controller-D6A8BZsm.js';
import { aq as Filters } from './controller-D6A8BZsm.js';
import { ap as FilterTernary } from './controller-D6A8BZsm.js';
import { R as GeoJsonDataVectorSource } from './controller-D6A8BZsm.js';
import { aW as GeoJsonFeature } from './controller-D6A8BZsm.js';
import { S as GeoJsonFileVectorSource } from './controller-D6A8BZsm.js';
import { aX as GeoJsonGeometry } from './controller-D6A8BZsm.js';
import { aY as GeoJsonProperties } from './controller-D6A8BZsm.js';
import { W as GeoJsonUrlVectorSource } from './controller-D6A8BZsm.js';
import { ar as GeometryFilter } from './controller-D6A8BZsm.js';
import { G as GetElementGroupsConstraint } from './controller-D6A8BZsm.js';
import { h as GetElementsConstraint } from './controller-D6A8BZsm.js';
import { ay as GetLayerCalculationParams } from './controller-D6A8BZsm.js';
import { az as GetLayerCategoriesGroup } from './controller-D6A8BZsm.js';
import { aA as GetLayerCategoriesParams } from './controller-D6A8BZsm.js';
import { X as GetLayerGroupsConstraint } from './controller-D6A8BZsm.js';
import { aB as GetLayerHistogramBin } from './controller-D6A8BZsm.js';
import { aC as GetLayerHistogramParams } from './controller-D6A8BZsm.js';
import { aD as GetLayerPrecomputedCalculationParams } from './controller-D6A8BZsm.js';
import { Y as GetLayersConstraint } from './controller-D6A8BZsm.js';
import { Z as GetRenderedFeaturesConstraint } from './controller-D6A8BZsm.js';
import { aE as GridConfig } from './controller-D6A8BZsm.js';
import { aF as GridType } from './controller-D6A8BZsm.js';
import { H as HighlighterElementCreate } from './controller-D6A8BZsm.js';
import { i as HighlighterElementRead } from './controller-D6A8BZsm.js';
import { j as HighlighterElementUpdate } from './controller-D6A8BZsm.js';
import { ba as HighlighterToolSettings } from './controller-D6A8BZsm.js';
import { I as ImageElementCreate } from './controller-D6A8BZsm.js';
import { k as ImageElementRead } from './controller-D6A8BZsm.js';
import { l as ImageElementUpdate } from './controller-D6A8BZsm.js';
import { bb as InputToolSettings } from './controller-D6A8BZsm.js';
import { J as InteractionsController } from './controller-D6A8BZsm.js';
import { aZ as LatLng } from './controller-D6A8BZsm.js';
import { _ as Layer } from './controller-D6A8BZsm.js';
import { as as LayerBoundaries } from './controller-D6A8BZsm.js';
import { $ as LayerChangeCallbackParams } from './controller-D6A8BZsm.js';
import { a0 as LayerCommon } from './controller-D6A8BZsm.js';
import { ad as LayerFeature } from './controller-D6A8BZsm.js';
import { at as LayerFilters } from './controller-D6A8BZsm.js';
import { a1 as LayerGroup } from './controller-D6A8BZsm.js';
import { a2 as LayerGroupChangeCallbackParams } from './controller-D6A8BZsm.js';
import { aR as LayerGroupNode } from './controller-D6A8BZsm.js';
import { aS as LayerNode } from './controller-D6A8BZsm.js';
import { a3 as LayerProcessingStatus } from './controller-D6A8BZsm.js';
import { af as LayerSchema } from './controller-D6A8BZsm.js';
import { ag as LayerSchemaAttribute } from './controller-D6A8BZsm.js';
import { ah as LayerSchemaBooleanAttribute } from './controller-D6A8BZsm.js';
import { ai as LayerSchemaCommonAttribute } from './controller-D6A8BZsm.js';
import { aj as LayerSchemaDateAttribute } from './controller-D6A8BZsm.js';
import { ak as LayerSchemaDateTimeAttribute } from './controller-D6A8BZsm.js';
import { al as LayerSchemaNumericAttribute } from './controller-D6A8BZsm.js';
import { am as LayerSchemaTextAttribute } from './controller-D6A8BZsm.js';
import { aJ as LayersController } from './controller-D6A8BZsm.js';
import { a4 as LegendItem } from './controller-D6A8BZsm.js';
import { a5 as LegendItemChangeCallbackParams } from './controller-D6A8BZsm.js';
import { a6 as LegendItemIdentifier } from './controller-D6A8BZsm.js';
import { a7 as LegendItemsConstraint } from './controller-D6A8BZsm.js';
import { a_ as LineStringGeometry } from './controller-D6A8BZsm.js';
import { bc as LineToolSettings } from './controller-D6A8BZsm.js';
import { L as LinkElementRead } from './controller-D6A8BZsm.js';
import { a$ as LngLatTuple } from './controller-D6A8BZsm.js';
import { aK as MapDetails } from './controller-D6A8BZsm.js';
import { D as MapInteractionEvent } from './controller-D6A8BZsm.js';
import { M as MarkerElementCreate } from './controller-D6A8BZsm.js';
import { m as MarkerElementRead } from './controller-D6A8BZsm.js';
import { n as MarkerElementUpdate } from './controller-D6A8BZsm.js';
import { bd as MarkerToolSettings } from './controller-D6A8BZsm.js';
import { aL as MiscController } from './controller-D6A8BZsm.js';
import { aG as MultiAggregationConfig } from './controller-D6A8BZsm.js';
import { b0 as MultiLineStringGeometry } from './controller-D6A8BZsm.js';
import { b1 as MultiPointGeometry } from './controller-D6A8BZsm.js';
import { b2 as MultiPolygonGeometry } from './controller-D6A8BZsm.js';
import { N as NoteElementCreate } from './controller-D6A8BZsm.js';
import { o as NoteElementRead } from './controller-D6A8BZsm.js';
import { p as NoteElementUpdate } from './controller-D6A8BZsm.js';
import { be as NoteToolSettings } from './controller-D6A8BZsm.js';
import { bp as OnMapInteractionsOptions } from './controller-D6A8BZsm.js';
import { P as PathElementCreate } from './controller-D6A8BZsm.js';
import { q as PathElementRead } from './controller-D6A8BZsm.js';
import { r as PathElementUpdate } from './controller-D6A8BZsm.js';
import { bf as PinToolSettings } from './controller-D6A8BZsm.js';
import { s as PlaceElementCreate } from './controller-D6A8BZsm.js';
import { t as PlaceElementRead } from './controller-D6A8BZsm.js';
import { u as PlaceElementUpdate } from './controller-D6A8BZsm.js';
import { bg as PlaceFrame } from './controller-D6A8BZsm.js';
import { bh as PlaceSymbol } from './controller-D6A8BZsm.js';
import { b3 as PointGeometry } from './controller-D6A8BZsm.js';
import { v as PolygonElementCreate } from './controller-D6A8BZsm.js';
import { w as PolygonElementRead } from './controller-D6A8BZsm.js';
import { x as PolygonElementUpdate } from './controller-D6A8BZsm.js';
import { b4 as PolygonGeometry } from './controller-D6A8BZsm.js';
import { bi as PolygonToolSettings } from './controller-D6A8BZsm.js';
import { aH as PrecomputedAggregationMethod } from './controller-D6A8BZsm.js';
import { a8 as RasterBand } from './controller-D6A8BZsm.js';
import { a9 as RasterLayer } from './controller-D6A8BZsm.js';
import { aa as RasterLayerSource } from './controller-D6A8BZsm.js';
import { ae as RasterValue } from './controller-D6A8BZsm.js';
import { bj as RouteToolSettings } from './controller-D6A8BZsm.js';
import { aT as SelectionController } from './controller-D6A8BZsm.js';
import { br as SetViewportCenterZoomParams } from './controller-D6A8BZsm.js';
import { b5 as SetVisibilityRequest } from './controller-D6A8BZsm.js';
import { b6 as SortConfig } from './controller-D6A8BZsm.js';
import { b7 as SortDirection } from './controller-D6A8BZsm.js';
import { T as TextElementCreate } from './controller-D6A8BZsm.js';
import { y as TextElementRead } from './controller-D6A8BZsm.js';
import { A as TextElementUpdate } from './controller-D6A8BZsm.js';
import { bk as TextToolSettings } from './controller-D6A8BZsm.js';
import { bo as ToolsController } from './controller-D6A8BZsm.js';
import { bl as ToolSettingsChangeEvent } from './controller-D6A8BZsm.js';
import { bm as ToolSettingsMap } from './controller-D6A8BZsm.js';
import { bn as ToolType } from './controller-D6A8BZsm.js';
import { bq as UiController } from './controller-D6A8BZsm.js';
import { U as UiControlsOptions } from './controller-D6A8BZsm.js';
import { ab as UpdateLayerParams } from './controller-D6A8BZsm.js';
import { aI as ValueConfiguration } from './controller-D6A8BZsm.js';
import { ac as VectorLayer } from './controller-D6A8BZsm.js';
import { V as ViewportCenterZoom } from './controller-D6A8BZsm.js';
import { bs as ViewportConstraints } from './controller-D6A8BZsm.js';
import { bv as ViewportController } from './controller-D6A8BZsm.js';
import { bt as ViewportFitBoundsParams } from './controller-D6A8BZsm.js';
import { bu as ViewportState } from './controller-D6A8BZsm.js';
import { z } from './controller-D6A8BZsm.js';
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

export { CreateLayersFromGeoJsonParams }

export { DataOnlyLayer }

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

export { UiController }

export { UiControlsOptions }

export { UpdateLayerParams }

export { ValueConfiguration }

export { VectorLayer }

export { ViewportCenterZoom }

export { ViewportConstraints }

export { ViewportController }

export { ViewportFitBoundsParams }

export { ViewportState }

// (No @packageDocumentation comment for this package)

```
