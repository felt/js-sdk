/**
 * A selection of generic utility types
 */

import type { ZodRawShape, ZodTypeAny, objectOutputType } from "zod";

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export type PromiseOrNot<T> = T | Promise<T>;

/**
 * A better type inference for zod schemas that retains the TSDoc comments
 * from the members in the compiled output.
 */
export type zInfer<T extends { shape: ZodRawShape }> = objectOutputType<
  T["shape"],
  ZodTypeAny,
  "strip"
>;
