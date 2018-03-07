export declare class HashidsExtended {
    private hashids;
    constructor(salt?: string, minLength?: number, alphabet?: string);
    decode(hash: string): number;
    decodeArray(hash: string): number[];
    decodeHex(hash: string): string;
    encode(arg: number): string;
    encodeArray(...args: number[]): string;
    encodeHex(arg: string): string;
}
