export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length, position, value);
  const dataView = new DataView(buffer);
  return dataView;
}
