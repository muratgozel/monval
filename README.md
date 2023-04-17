# monval
Precise and simple money utility with exchange rates support.

**monval** uses **[Gaussian rounding](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even)** when exporting values in a fixed length. Currently, the gaussian method is the only supported rounding method but the module flexible enough to provide more rounding methods in future releases.

## Install
```sh
npm i monval
```

## Import
There are exports for **es6**, **cjs** and **umd** environments:
```js
// cjs
const {monval} = require('monval')

// es
import {monval} from 'monval'

// script tag, window.monval
<script src="https://cdn.jsdelivr.net/npm/monval@2/dist/monval.iife.js" type="text/javascript"></script>
```

## Usage
```js
// start with ten dollars in a pocket
const account = monval.create(10, 'USD')

// incoming 100.789$
account.add(100.789)

// 21.66$ spent!
account.subtract(21.66)

// 10 percent increase!
account.add('%10')

// 20 percent discount!
account.subtract('%20')

// The value always stored as float.
assert.strictEqual(account.toFloat(), 78.43352)
// toFixed method rounds the value according to the rounding algorithm and
// the decimal length standart to the currency
assert.strictEqual(account.toFixed(), '78.43')

// pretty print
monval.create(123.4567, 'EUR').pretty() // € 123.46
monval.create(123.4567, 'EUR').pretty(4) // € 123.4567
```
Let's load exchange rates:
```js
const sampleExchangeRates = {/* EUR: 0.99, TRY: 1.11 ... */}
monval.exchangeRatesBaseCurrency = 'USD'
monval.exchangeRates = sampleExchangeRates.rates

// convert our usd to try
account.exchange('TRY')
// the pocket now has
assert.strictEqual(account.toFloat(), 478.16211132800004)
// turkish liras
assert.strictEqual(account.money.currency, 'TRY')

account.pretty() // ₺ 478.16

// add more dollars into the pocket!
account.add(100, 'usd')
// now we have 1087.8 try!
assert.strictEqual(acount.toFixed(), '1087.8')
```
Additional features:
```js
monval.isCurrency('XXX') // false
monval.isCurrency('EUR') // true
```

---

Version management of this repository done by [releaser](https://github.com/muratgozel/node-releaser) 🚀

---

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
