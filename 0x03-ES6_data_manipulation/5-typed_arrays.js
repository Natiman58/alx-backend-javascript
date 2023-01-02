export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  // throw error if the byteOffset position in >= length of the buffer
  if (position >= length) {
    throw new Error('Position outside range');
  }

  // else store 8 bit integer value in the specified byte array position
  dataView.setInt8(position, value);
  return dataView;
}
