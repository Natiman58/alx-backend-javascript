export const weakMap = new WeakMap();

export function queryAPI(obj) {
  let count = 0;
  const value = weakMap.get(obj);

  if (value) { count = value; }

  weakMap.set(obj, count + 1);

  if (count >= 5) throw new Error('Endpoint load is high');
}
