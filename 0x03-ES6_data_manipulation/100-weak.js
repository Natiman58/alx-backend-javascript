export const weakMap = new WeakMap();

export function queryAPI(obj) {
  let count = 0;
  if (weakMap.get(obj)) { count = weakMap.get(obj); }

  weakMap.set(obj, count + 1);

  if (count >= 5) throw new Error('Endpoint load is high');
}
