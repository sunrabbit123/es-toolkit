/**
 * Checks if the given argument is an array.
 *
 * This function uses the built-in `Array.isArray` method to determine if the provided argument
 * is an array. It returns `true` if the argument is an array, and `false` otherwise.
 *
 * @param {unknown} arg - The argument to check.
 * @returns {boolean} `true` if the argument is an array, `false` otherwise.
 *
 * @example
 * const result1 = isArray([1, 2, 3]);
 * // result1 will be true since the argument is an array.
 *
 * const result2 = isArray('not an array');
 * // result2 will be false since the argument is not an array.
 */
export const isArray = Array.isArray as (arg: unknown) => arg is unknown[];
