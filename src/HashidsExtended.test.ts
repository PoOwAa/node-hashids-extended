import { HashidsExtended } from './HashidsExtended';

describe('HashidsExtended tests', () => {
  test('should create the instance with default params', () => {
    const hashIds = new HashidsExtended();
    expect(hashIds).toBeInstanceOf(HashidsExtended);
  });

  test('should encode and decode a simple number', () => {
    const hashIds = new HashidsExtended();

    const encoded = hashIds.encode(1);
    const decoded = hashIds.decode(encoded);
    expect(decoded).toBe(1);
  });

  test('should encode and decode an array of numbers', () => {
    const hashIds = new HashidsExtended();

    const encoded = hashIds.encodeArray([1, 2, 3, 4, 5]);
    const decoded = hashIds.decodeArray(encoded);
    expect(decoded).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('should encode multiple numbers as parameter', () => {
    const hashIds = new HashidsExtended();

    const encoded = hashIds.encodeArray(10, 20, 30, 40, 50);
    const decoded = hashIds.decodeArray(encoded);
    expect(decoded).toStrictEqual([10, 20, 30, 40, 50]);
  });

  test('should encode and decode HEX', () => {
    const hashIds = new HashidsExtended();

    const encoded = hashIds.encodeHex('1');
    const decoded = hashIds.decodeHex(encoded);
    expect(decoded).toBe('1');
  });
});
