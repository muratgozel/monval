# monval
Precise and simple money utility.

![NPM](https://img.shields.io/npm/l/monval)
[![npm version](https://badge.fury.io/js/monval.svg)](https://badge.fury.io/js/monval)
![npm bundle size](https://img.shields.io/bundlephobia/min/monval)
![npm](https://img.shields.io/npm/dy/monval)

Apart from the basic methods like adding, subtracting, multiplying and dividing, **monval** uses **[Gaussian rounding](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even)** when exporting values in a fixed length. Currently, the gaussian method is the only supported rounding method but library flexible enough to provide more rounding methods in future releases.

## Install
```sh
npm i monval
```

## Import
There are different types of distributions depending on your use case. Essentially, the package can be imported via require:
```js
const {Monval} = require('monval')
```
or via script tag:
```html
<script src="https://unpkg.com/monval@1/dist/monval.iife.js" crossorigin type="text/javascript"></script>
```
but there are lots of other options. See distribution report below.

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

## Contributions Are Welcome
1. Clone the repository
2. Make changes.
3. `npm run build && npm run gen-babel-report && gen-dist-report`
4. `npm run commit -- -l patch -m "Commit message."`

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "monval.amd.js (7.85 KB)",
  "monval.amd.polyfilled.js (24.62 KB)",
  "monval.cjs.js (7.84 KB)",
  "monval.cjs.polyfilled.js (24.61 KB)",
  "monval.es.js (7.67 KB)",
  "monval.es.polyfilled.js (24.44 KB)",
  "monval.iife.js (7.85 KB)",
  "monval.iife.polyfilled.js (24.62 KB)",
  "monval.umd.js (8.07 KB)",
  "monval.umd.polyfilled.js (24.84 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.array.filter",
  "es.array.index-of",
  "es.function.name",
  "es.number.to-fixed",
  "es.object.assign",
  "es.object.to-string",
  "es.parse-float",
  "es.parse-int",
  "es.regexp.exec",
  "es.regexp.to-string",
  "es.string.replace"
]
// based on the targets:
{
  "android": "85",
  "chrome": "49",
  "edge": "18",
  "firefox": "78",
  "ie": "9",
  "ios": "9.3",
  "opera": "70",
  "safari": "5.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

---

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
