"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hashids = require('hashids');
var HashidsExtended = /** @class */ (function () {
    function HashidsExtended(salt, minLength, alphabet) {
        if (salt === void 0) { salt = ''; }
        if (minLength === void 0) { minLength = 0; }
        if (alphabet === void 0) { alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'; }
        this.hashids = new Hashids(salt, minLength, alphabet);
    }
    HashidsExtended.prototype.decode = function (hash) {
        return this.hashids.decode(hash)[0];
    };
    HashidsExtended.prototype.decodeArray = function (hash) {
        return this.hashids.decode(hash);
    };
    HashidsExtended.prototype.decodeHex = function (hash) {
        return this.hashids.decodeHex(hash);
    };
    HashidsExtended.prototype.encode = function (arg) {
        return this.hashids.encode(arg);
    };
    HashidsExtended.prototype.encodeArray = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.hashids.encode(args);
    };
    HashidsExtended.prototype.encodeHex = function (arg) {
        return this.hashids.encodeHex(arg);
    };
    return HashidsExtended;
}());
exports.HashidsExtended = HashidsExtended;
