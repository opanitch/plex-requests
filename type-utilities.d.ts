/**
 * Create an enum-like union of strings out of a traditional constant object
 *
 * @example
 * const EXAMPLE_OBJ = {
 *   EXAMPLE_A: 'example_a',
 *   EXAMPLE_B: 'example_b',
 * };
 *
 * type EXAMPLE_UNION = UnionOf<typeof EXAMPLE_OBJ>
 *
 * Results in
 * FORMS_UNION = 'example_a' | 'example_b';
 */
declare type UnionOf<T> = T[keyof T];
