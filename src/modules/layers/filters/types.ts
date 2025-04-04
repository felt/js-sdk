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
 * A `FilterTernary` is a tree structure for combining expressions with logical operators.
 *
 * When combining three or more conditions, you must use proper nesting rather than a flat list.
 *
 * @example
 * ```typescript
 * // A simple filter with a single condition
 * const filter = [
 *   ["AREA", "gt", 30_000],
 *   "and",
 *   ["COLOR", "eq", "red"]
 * ]
 *
 * // A complex filter with multiple conditions
 * const filter = [
 *   ["AREA", "gt", 30_000],
 *   "and",
 *   [
 *     ["COLOR", "eq", "red"],
 *     "or",
 *     ["TYPE", "eq", "residential"]
 *   ]
 * ]
 * ```
 *
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
 *
 * Filters can be used to change which features in a layer are rendered. Filters can be
 * applied to a layer by the {@link LayersController.setLayerFilters | `setLayerFilters`} method on the Felt controller.
 *
 * Filters use a tree structure for combining expressions with logical operators, called a
 * {@link FilterTernary}. When combining three or more conditions, you must use proper nesting
 * rather than a flat list.
 *
 * See the examples below for the correct structure to use when building complex filters.
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
 * // 1. Simple filter: single condition
 * felt.setLayerFilters({
 *   layerId: "layer-1",
 *   filters: ["AREA", "gt", 30_000],
 * });
 *
 * // 2. Basic compound filter: two conditions with AND
 * felt.setLayerFilters({
 *   layerId: "layer-1",
 *   filters: [
 *     ["AREA", "gt", 30_000],  // First condition
 *     "and",                   // Logic operator
 *     ["COLOR", "eq", "red"]   // Second condition
 *   ]
 * });
 *
 * // 3. Complex filter: three or more conditions require nesting
 * // ⚠️ IMPORTANT: Filters use a tree structure, not a flat list
 * felt.setLayerFilters({
 *   layerId: "layer-1",
 *   filters: [
 *     ["AREA", "gt", 30_000],                // First condition
 *     "and",                                 // First logic operator
 *     [                                      // Nested group starts
 *       ["COLOR", "eq", "red"],              //   Second condition
 *       "and",                               //   Second logic operator
 *       ["TYPE", "eq", "residential"]        //   Third condition
 *     ]                                      // Nested group ends
 *   ]
 * });
 *
 * // 4. Even more complex: four conditions with proper nesting
 * // Visual structure:
 * //          AND
 * //         /   \
 * //    condition  AND
 * //              /   \
 * //        condition  AND
 * //                  /   \
 * //            condition  condition
 * felt.setLayerFilters({
 *   layerId: "layer-1",
 *   filters: [
 *     ["AREA", "gt", 30_000],                // First condition
 *     "and",
 *     [
 *       ["COLOR", "eq", "red"],              // Second condition
 *       "and",
 *       [
 *         ["TYPE", "eq", "residential"],     // Third condition
 *         "and",
 *         ["YEAR", "gt", 2000]               // Fourth condition
 *       ]
 *     ]
 *   ]
 * });
 *
 * // 5. Mixed operators: combining AND and OR
 * // Visual structure:
 * //          AND
 * //         /   \
 * //    condition  OR
 * //              /  \
 * //        condition condition
 * felt.setLayerFilters({
 *   layerId: "layer-1",
 *   filters: [
 *     ["AREA", "gt", 30_000],                // Must have large area
 *     "and",
 *     [
 *       ["COLOR", "eq", "red"],              // Must be either red
 *       "or",
 *       ["TYPE", "eq", "residential"]        // OR residential type
 *     ]
 *   ]
 * });
 * ```
 *
 * @group Filters
 */
export type Filters = FilterTernary | FilterExpression | null | boolean;
export const FiltersSchema = z.union([
  FilterTernarySchema,
  FilterExpressionSchema,
  z.null(),
  z.boolean(),
]);

/**
 * The filters that are currently set on a layer.
 *
 * A layer's filters are the combination of various different places
 * in which filters can be applied.
 *
 * @group Filters
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
   * These are the filters that are set when the {@link LayersController.setLayerFilters | `setLayerFilters`} method is
   * called. There is no way to set these in the Felt UI - they can only be
   * set using the SDK.
   */
  ephemeral: Filters;

  /**
   * The combined result of all the filters set on the layer.
   */
  combined: Filters;
}
