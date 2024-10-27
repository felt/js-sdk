import { z } from "zod";

const InFilterOperatorSchema = z.enum(["in", "ni"]);
const ScalarFilterOperatorSchema = z.enum([
  "lt", // Less than
  "gt", // Greater than
  "le", // Less than or equal to
  "ge", // Greater than or equal to
  "eq", // Equal to
  "ne", // Not equal to
  "cn", // Contains
  "nc", // Does not contain
  "is", // Is
  "isnt", // Is not
]);

/**
 * @group Filters
 */
export type FilterLogicGate = z.infer<typeof FilterLogicGateSchema>;
const FilterLogicGateSchema = z.enum(["and", "or"]);

const AnyFilterValueSchema = z.union([
  z.number(),
  z.string(),
  z.boolean(),
  z.null(),
]);

const FilterAttributeSchema = z.string().or(z.null());

const ArrayValueFilterExpressionSchema = z.tuple([
  FilterAttributeSchema,
  InFilterOperatorSchema,
  z.array(AnyFilterValueSchema).or(z.null()),
]);

const ScalarValueFilterExpressionSchema = z.tuple([
  FilterAttributeSchema,
  ScalarFilterOperatorSchema,
  AnyFilterValueSchema,
]);

/**
 * @group Filters
 */
export type FilterExpression = z.infer<typeof FilterExpressionSchema>;
const FilterExpressionSchema = z.union([
  ArrayValueFilterExpressionSchema,
  ScalarValueFilterExpressionSchema,
]);

/**
 * @group Filters
 */
export type FilterTernary = [
  FilterTernary | FilterExpression | null | boolean,
  FilterLogicGate,
  FilterTernary | FilterExpression | null | boolean,
];
const FilterTernarySchema: z.ZodType<FilterTernary> = z.tuple([
  z.lazy(() =>
    z.union([
      FilterTernarySchema,
      FilterExpressionSchema,
      z.null(),
      z.boolean(),
    ]),
  ),
  z.enum(["and", "or"]),
  z.lazy(() =>
    z.union([
      FilterTernarySchema,
      FilterExpressionSchema,
      z.null(),
      z.boolean(),
    ]),
  ),
]);

/**
 * @group Filters
 *
 * Filters can be used to change which features in a layer are rendered. Filters can be
 * applied to a layer by the `setLayerFilters` method on the Felt controller.
 *
 * @remarks
 * The possible operators are:
 * - `lt`: Less than
 * - `gt`: Greater than
 * - `le`: Less than or equal to
 * - `ge`: Greater than or equal to
 * - `eq`: Equal to
 * - `ne`: Not equal to
 * - `cn`: Contains
 * - `nc`: Does not contain
 *
 * The allowed boolean operators are:
 * - `and`: Logical AND
 * - `or`: Logical OR
 *
 * @example
 * ```typescript
 * // a simple filter
 * felt.setLayerFilters({
 *   layerId: "layer-1",
 *   filters: ["AREA", "gt", 30_000],
 * });
 *
 * // compound filters can be constructed using boolean logic:
 * felt.setLayerFilters({
 *   layerId: "layer-1",
 *   filters: [["AREA", "gt", 30_000], "and", ["COLOR", "eq", "red"]]
 * })
 * ```
 */
export type Filters = FilterTernary | FilterExpression | null | boolean;
export const FiltersSchema = z.union([
  FilterTernarySchema,
  FilterExpressionSchema,
  z.null(),
  z.boolean(),
]);

/**
 * @group Filters
 *
 * The filters that are currently set on a layer.
 *
 * A layer's filters are the combination of various different places
 * in which filters can be applied.
 *
 */
export interface LayerFilters {
  /**
   * Filters that are set in the layer's style. These are the lowest level
   * of filters, and can only be set by editing the map.
   */
  style: Filters;

  /**
   * Filters that are set in the layer's components, which are interactive
   * elements in the legend. These can be set by viewers for their own session,
   * but their default value can be set by the map creator.
   */
  components: Filters;

  /**
   * Filters that are set ephemerally by viewers in their own session.
   *
   * These are the filters that are set when the `setLayerFilters` method is
   * called. There is no way to set these in the Felt UI - they can only be
   * set using the SDK.
   */
  ephemeral: Filters;

  /**
   * The combined result of all the filters set on the layer.
   */
  combined: Filters;
}
