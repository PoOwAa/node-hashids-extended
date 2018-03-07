"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hashids = require('hashids');
class HashidsExtended {
    constructor(salt = '', minLength = 0, alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890') {
        this.hashids = new Hashids(salt, minLength, alphabet);
    }
    decode(hash) {
        return this.hashids.decode(hash)[0];
    }
    decodeArray(hash) {
        return this.hashids.decode(hash);
    }
    decodeHex(hash) {
        return this.hashids.decodeHex(hash);
    }
    encode(arg) {
        return this.hashids.encode(arg);
    }
    encodeArray(...args) {
        return this.hashids.encode(args);
    }
    encodeHex(arg) {
        return this.hashids.encodeHex(arg);
    }
}
exports.HashidsExtended = HashidsExtended;
