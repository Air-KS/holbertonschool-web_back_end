function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const int8View = new Int8Array(buffer, 0);

  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  int8View[position] = value;

  return buffer;
}

export default createInt8TypedArray;
