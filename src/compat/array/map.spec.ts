import { describe, expect, it } from 'vitest';
import { map } from '../../index';
import { identity } from '../_internal/identity';
import { falsey } from '../_internal/falsey';

describe('map', () => {
  const array = [1, 2];

  it('should map values in `collection` to a new array', () => {
    const object = { a: 1, b: 2 };
    const expected = ['1', '2'];

    expect(map(array, String)).toEqual(expected);
    expect(map(object, String)).toEqual(expected);
  });

  it('should work with `_.property` shorthands', () => {
    const objects = [{ a: 'x' }, { a: 'y' }];
    expect(map(objects, 'a')).toEqual(['x', 'y']);
  });

  it('should iterate over own string keyed properties of objects', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;

    const actual = map(new Foo(), identity);
    expect(actual).toEqual([1]);
  });

  it('should use `_.identity` when `iteratee` is nullish', () => {
    const object = { a: 1, b: 2 };
    const values = [, null, undefined];
    const expected = map(values, lodashStable.constant([1, 2]));

    [array, object].forEach(collection => {
      const actual = map(values, (value, index) => (index ? map(collection, value) : map(collection)));
      expect(actual).toEqual(expected);
    });
  });

  it('should accept a falsey `collection`', () => {
    const expected = map(falsey, function () {
      return [];
    });

    const actual = map(falsey, (collection, index) => {
      try {
        return index ? map(collection) : map();
      } catch {
        /* empty */
      }
    });

    expect(actual).toEqual(expected);
  });

  it('should treat number values for `collection` as empty', () => {
    expect(map(1)).toEqual([]);
  });

  it('should treat a nodelist as an array-like object', () => {
    if (document) {
      const actual = map(document.getElementsByTagName('body'), element => element.nodeName.toLowerCase());

      expect(actual).toEqual(['body']);
    }
  });

  it('should work with objects with non-number length properties', () => {
    const value = { value: 'x' };
    const object = { length: { value: 'x' } };

    expect(map(object, identity)).toEqual([value]);
  });
});
