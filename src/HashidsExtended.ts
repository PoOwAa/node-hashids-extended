import Hashids from 'hashids';

export class HashidsExtended {
  private hashids: Hashids;

  constructor(
    salt = '',
    minLength = 0,
    alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  ) {
    this.hashids = new Hashids(salt, minLength, alphabet);
  }

  public decode(hash: string): number {
    return this.hashids.decode(hash)[0];
  }

  public decodeArray(hash: string): number[] {
    return this.hashids.decode(hash);
  }

  public decodeHex(hash: string): string {
    return this.hashids.decodeHex(hash);
  }

  public encode(arg: number): string {
    return this.hashids.encode(arg);
  }

  public encodeArray(...args: number[]): string;
  public encodeArray(nums: number[]): string;

  public encodeArray(
    firstParam: number | number[],
    ...restParams: number[]
  ): string {
    // Accept array of numbers as well
    if (Array.isArray(firstParam)) {
      return this.hashids.encode(firstParam);
    } else {
      return this.hashids.encode(...[firstParam, ...restParams]);
    }
  }

  public encodeHex(arg: string): string {
    return this.hashids.encodeHex(arg);
  }
}
