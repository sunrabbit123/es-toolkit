export function toArgs<T>(array: T[]) {
  // eslint-disable-next-line prefer-spread, @typescript-eslint/no-unused-vars
  return function (...args: T[]) {
    // eslint-disable-next-line prefer-rest-params
    return arguments;
  }.apply(undefined, array);
}
