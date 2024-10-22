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

const FilterLogicGateSchema = z.enum(["and", "or"]);
export type FilterLogicGate = z.infer<typeof FilterLogicGateSchema>;

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

const FilterExpressionSchema = z.union([
  ArrayValueFilterExpressionSchema,
  ScalarValueFilterExpressionSchema,
]);
export type FilterExpression = z.infer<typeof FilterExpressionSchema>;

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

export type FilterTernary = [
  FilterTernary | FilterExpression | null | boolean,
  FilterLogicGate,
  FilterTernary | FilterExpression | null | boolean,
];

export const FiltersSchema = z.union([
  FilterTernarySchema,
  FilterExpressionSchema,
  z.null(),
  z.boolean(),
]);
export type Filters = z.infer<typeof FiltersSchema>;

const GetFiltersResponseSchema = z.object({
  style: FiltersSchema,
  components: FiltersSchema,
  ephemeral: FiltersSchema,

  combined: FiltersSchema,
});
export type GetFiltersResponse = z.infer<typeof GetFiltersResponseSchema>;
