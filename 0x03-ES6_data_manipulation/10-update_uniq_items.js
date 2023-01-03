export default function updateUniqueItems(mapObj) {
  if (mapObj instanceof Map) {
    for (const [key, val] of mapObj.entries()) {
      if (val === 1) {
        mapObj.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot Process');
  }
  return mapObj;
}
