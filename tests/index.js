const assert = require('assert')
const {Monval} = require('../dist/monval.cjs.js')
const sampleExchangeRates = require('./sampleExchangeRates.json')

const monval = new Monval()
assert.strictEqual(monval.config.singleCurrency, false)

const money = monval.create(10, 'usd')
assert.strictEqual(money.toFixed(), '10')

money.add(100.789)
assert.strictEqual(money.toFixed(), '110.79')

money.subtract(21.66)
assert.strictEqual(money.toFixed(), '89.13')
assert.strictEqual(money.pretty(), '$ 89.13')
assert.strictEqual(money.pad(7), '0089.13')

money.add('%10')
assert.strictEqual(money.toFloat(), 98.0419)

money.subtract('%20')
assert.strictEqual(money.toFloat(), 78.43352)
assert.strictEqual(money.toFixed(), '78.43')

monval.exchangeRates = sampleExchangeRates.rates
money.exchange('try')
assert.strictEqual(money.toFloat(), 478.16211132800004)
assert.strictEqual(money.currencyCode, 'TRY')

money.add(100, 'usd')
assert.strictEqual(money.toFixed(), '1087.8')
