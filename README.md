# monval
Precise and simple money utility.

![NPM](https://img.shields.io/npm/l/monval)
[![npm version](https://badge.fury.io/js/monval.svg)](https://badge.fury.io/js/monval)
![npm bundle size](https://img.shields.io/bundlephobia/min/monval)
![npm](https://img.shields.io/npm/dy/monval)

**monval** uses **[Gaussian rounding](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even)** when exporting values in a fixed length. Currently, the gaussian method is the only supported rounding method but it's flexible enough to provide more rounding methods in future releases.

## Install
```sh
npm i monval
```

## Import
There are exports for **es6**, **cjs** and **umd** environments:
```js
// cjs
const {Monval} = require('monval')

// or es
import {Monval} from 'monval'
```
or inject via script tag:
```html
<script src="https://cdn.jsdelivr.net/npm/monval@1/dist/browser/iife/index.js" type="text/javascript"></script>
```
You can access it via global `window.monval` when import it via script tag.

## Usage
All functionality aims to provide developers a practical and quick money operations.
```js
const monval = new Monval()

// ten dollars in the pocket
const pocket = monval.create(10, 'usd')

// 100.789$ income!
pocket.add(100.789)

// 21.66$ spent!
pocket.subtract(21.66)

// 10 percent increase!
pocket.add('%10')

// 20 percent discount!
pocket.subtract('%20')

// The value always stored as float.
assert.strictEqual(pocket.toFloat(), 78.43352)
// toFixed method rounds the value according to the rounding algorithm and
// the decimal length standart to the currency
assert.strictEqual(pocket.toFixed(), '78.43')
```
Let's load exchange rates:
```js
const sampleExchangeRates = require('./sampleExchangeRates.json')
pocket.exchangeRates = sampleExchangeRates.rates

// convert our usd to try
pocket.exchange('try')
// the pocket now has
assert.strictEqual(pocket.toFloat(), 478.16211132800004)
// turkish liras
assert.strictEqual(pocket.currencyCode, 'TRY')

// add more dollars into the pocket!
pocket.add(100, 'usd')
// now we have 1087.8 try!
assert.strictEqual(pocket.toFixed(), '1087.8')
```

---

Version management of this repository done by [releaser](https://github.com/muratgozel/node-releaser) 🚀

---

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
