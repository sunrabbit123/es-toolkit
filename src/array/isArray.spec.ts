import { describe, expect, it } from 'vitest';
import { isArray } from './isArray';

function toArgs<T>(array: T[]) {
  // eslint-disable-next-line prefer-spread, @typescript-eslint/no-unused-vars
  return function (...args: T[]) {
    // eslint-disable-next-line prefer-rest-params
    return arguments;
  }.apply(undefined, array);
}
const args = toArgs([1, 2]);

describe('isArray', () => {
  it('should return `true` for arrays', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it('should return `false` for non-arrays', () => {
    expect(isArray(args)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(new Error())).toBe(false);
    expect(isArray(Array.prototype.slice)).toBe(false);
    expect(isArray({ 0: 1, length: 1 })).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray(/x/)).toBe(false);
    expect(isArray('a')).toBe(false);
    expect(isArray(Symbol('a'))).toBe(false);
  });
});
