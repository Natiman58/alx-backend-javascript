export const weakMap = new WeakMap();
let count = 1;

export function queryAPI(obj) {
  weakMap.set(obj, count);
  count += 1;

  const qcount = weakMap.get(obj);

  if (qcount >= 5) { throw new Error('Endpoint load is high'); }
}
