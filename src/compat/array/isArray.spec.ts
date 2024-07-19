import { describe, expect, it } from 'vitest';

import { isArray } from '../index';
import { toArgs } from '../_internal/toArgs';

const args = toArgs([1, 2]);

describe('isArray', () => {
  it('should return `true` for arrays', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it('should return `false` for non-arrays', () => {
    const expected = lodashStable.map(falsey, stubFalse);

    const actual = lodashStable.map(falsey, (value, index) => (index ? isArray(value) : isArray()));

    expect(actual).toEqual(expected);

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

  it('should work with an array from another realm', () => {
    if (realm.array) {
      expect(isArray(realm.array)).toBe(true);
    }
  });
});
