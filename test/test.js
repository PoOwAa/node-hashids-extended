'use strict';

const expect = require('chai').expect;
const {HashidsExtended} = require('../dist/index');
const hashidsExtended = new HashidsExtended();

describe('extended decode tests', () => {
    it('should create the instance with default params', (done) => {
        const tmphash = new HashidsExtended();
        expect(tmphash.constructor.name).to.equal('HashidsExtended');
        done();
    });

    it('should return with a simple number', (done) => {
        const encoded = hashidsExtended.encode(1);
        const decoded = hashidsExtended.decode(encoded);
        expect(decoded).to.equal(1);
        done();
    });

    it('should return with an array of numbers', (done) => {
        const encoded = hashidsExtended.encodeArray(1, 2, 3);
        const decoded = hashidsExtended.decodeArray(encoded);
        expect(decoded).to.include.members([1,2,3]);
        done();
    });

    it('should encode and decode HEX', (done) => {
        const encoded = hashidsExtended.encodeHex(1);
        const decoded = hashidsExtended.decodeHex(encoded);
        expect(decoded).to.equal('1');
        done();
    });
});