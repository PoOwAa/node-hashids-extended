[![Build Status](https://travis-ci.org/PoOwAa/node-hashids-extended.svg?branch=master)](https://travis-ci.org/PoOwAa/node-hashids-extended)
[![Coverage Status](https://coveralls.io/repos/github/PoOwAa/node-hashids-extended/badge.svg)](https://coveralls.io/github/PoOwAa/node-hashids-extended)

# node-hashids-extended
Extended hashids for feel comfortable. Sometimes you would like to encode/decode only 1 number, but you have to use the first element of decoded array, or write a wrapper to handle it. No more!

## Installation
```sh
npm install hashid-extended --save
```

## Usage

### Javascript
```javascript

```

### Typescript

```typescript
import HashidsExtended from 'hashids-extended';

const hash = new HashidsExtended('mysalt', 10, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');
const myHashedValue = hash.encode(1);
const myHashedArray = hash.encodeArray(2,3,4,5);

const decodedValue = hash.decode(myHashedValue);
const firstValue = hash.decode(myHashedArray);
const decodedArray = hash.decodeArray(myHashedArray);

console.log(decodedValue);
console.log(firstValue);
console.log(decodedArray);

// output:
// 1
// 2
// [2,3,4,5]
```

## Test
```sh
npm run test
```