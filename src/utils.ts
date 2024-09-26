/**
 * A stricter, more type-safe version of Object.entries that preserves the
 * type of the Object's keys instead of widening them to string.
 */
export const entries = Object.entries as <T extends object>(
  obj: T
) => Array<[Exclude<keyof T, number>, T[keyof T]]>;
