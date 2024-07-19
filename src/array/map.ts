export function map<T, R>(iterator: T[] | object, fn: ((arg: T, idx: number) => R) | string): R[] {
  const iteratee = typeof fn === 'function' ? fn : (v: T): R => v[fn];

  if (Array.isArray(iterator)) {
    return iterator.map(iteratee);
  }

  return Object.values(iterator).map((v, idx) => iteratee(v, idx));
}
