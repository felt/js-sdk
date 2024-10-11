import * as z from "zod";
/**
 * The parameters for the methods that change the visibility of entities.
 *
 * @public
 * @category Visibility
 */
export interface SetVisibilityRequest
  extends z.infer<typeof SetVisibilityRequestSchema> {}
/**
 * @internal
 */
export const SetVisibilityRequestSchema = z.object({
  /**
   * The ids of the entities you want to change the visibility of.
   */
  show: z.array(z.string()).optional(),
  hide: z.array(z.string()).optional(),
});
