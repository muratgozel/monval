import {currencies} from 'locale-util/data/core'
import {typekit} from 'basekits'

function Money(monval, value, currencyCode) {
  this.monval = monval
  this.value = value
  this.currencyCode = currencyCode

  const data = this.monval.currencyData.filter(o => o.code == this.currencyCode)[0]
  this.number = data.num
  this.decilen = typekit.isNumber(this.monval.config.decilen)
    ? this.monval.config.decilen
    : data.deciLen
  this.nativeName = data.name
}

Money.prototype.add = function add(numberOrRate, currencyCode=null) {
  currencyCode = typekit.isEmpty(currencyCode) ? this.currencyCode : currencyCode

  const isRate = typekit.isString(numberOrRate) && numberOrRate.indexOf('%') !== -1
  if (isRate) {
    const rate = parseFloat(numberOrRate.replace('%', ''))
    if (typekit.isNan(rate)) {
      throw new Error('Invalid rate.')
    }
    this.value = this.value + (this.value * rate / 100)
  }
  else {
    const money2 = this.monval.create(numberOrRate, currencyCode)
    if (money2.currencyCode == this.currencyCode) {
      this.value += money2.value
    }
    else {
      money2.exchange(this.currencyCode)
      this.value += money2.value
    }
  }

  return this
}

Money.prototype.subtract = function subtract(numberOrRate, currencyCode=null) {
  currencyCode = typekit.isEmpty(currencyCode) ? this.currencyCode : currencyCode

  const isRate = typekit.isString(numberOrRate) && numberOrRate.indexOf('%') !== -1
  if (isRate) {
    const rate = parseFloat(numberOrRate.replace('%', ''))
    if (typekit.isNan(rate)) {
      throw new Error('Invalid rate.')
    }
    this.value = this.value - (this.value * rate / 100)
  }
  else {
    const money2 = this.monval.create(numberOrRate, currencyCode)
    if (money2.currencyCode == this.currencyCode) {
      this.value -= money2.value
    }
    else {
      money2.exchange(this.currencyCode)
      this.value -= money2.value
    }
  }

  return this
}

Money.prototype.exchange = function exchange(target) {
  target = target.toUpperCase()

  this.value = this.exchangePure(this.value, target)
  this.currencyCode = target

  return this
}

Money.prototype.exchangePure = function exchangePure(amount, target) {
  if (!typekit.isObject(this.monval.exchangeRates)) {
    throw new Error('No exchange rate data found.')
  }
  if (!this.monval.exchangeRates.hasOwnProperty(target)) {
    throw new Error('No exchange rate found for "' + target + '"')
  }
  if (!this.monval.exchangeRates.hasOwnProperty(this.currencyCode)) {
    throw new Error('No exchange rate found for "' + this.currencyCode + '"')
  }

  return amount * (
    this.monval.exchangeRates[target] / this.monval.exchangeRates[this.currencyCode])
}

Money.prototype.toFixed = function toFixed() {
  return this.monval.round(this.value, this.decilen).toString()
}

Money.prototype.toFloat = function toFloat() {
  return this.value
}

Money.prototype.pretty = function pretty() {
  const currency = this.monval.currencySymbolUnicodeMap.hasOwnProperty(this.currencyCode)
    ? String.fromCharCode( parseInt(this.monval.currencySymbolUnicodeMap[this.currencyCode], 16) )
    : this.currencyCode
  return currency + ' ' + this.toFixed()
}

Money.prototype.pad = function pad(len, char='0') {
  let value = this.toFixed()
  while (value.length < len) value = char + value
  return value
}

export function Monval(config=null) {
  this.exchangeRates = null
  this.readConfig(config)
}

Monval.prototype.currencySymbolUnicodeMap = {
  TRY: '20BA', USD: '0024', EUR: '20ac', GBP: '00A3',
  JPY: '00A5', AMD: '058F', AFN: '060B', THB: '0E3F',
  SVC: '20A1', CRC: '20A1', INR: '20B9', BTC: '20BF'
}

Monval.prototype.currencyData = currencies

Monval.prototype.updateExchangeRates = function updateExchangeRates(obj) {
  this.exchangeRates = obj
}

Monval.prototype.readConfig = function readConfig(config) {
  const defaultConfig = {
    singleCurrency: false,
    decilen: null
  }
  this.config = typekit.isObject(config)
    ? Object.assign({}, defaultConfig, config)
    : defaultConfig

  if (this.config.singleCurrency !== false) {
    this.config.singleCurrency = this.config.singleCurrency.toUpperCase()
    const matches = this.currencyData.filter(o => o.code == this.config.singleCurrency)
    if (!matches) {
      throw new Error('Invalid singleCurrency. Please provide a valid 3-letter currency code.')
    }
  }

  if (!typekit.isNull(this.config.decilen)) {
    if (!typekit.isNumber(this.config.decilen)) {
      throw new Error('Invalid decilen. Please provide a number.')
    }
  }
}

Monval.prototype.create = function create(value, currencyCode=null) {
  if (typekit.isString(value)) value = parseFloat(value)

  if (typekit.isNan(value) || !typekit.isNumber(value)) {
    throw new Error('The value should be a number or float parsable string.')
  }

  if (this.config.singleCurrency !== false) {
    currencyCode = this.config.singleCurrency
  }
  else {
    const matches = this.currencyData.filter(o => o.code == currencyCode)
    if (!matches) {
      throw new Error('Invalid currencyCode. Please provide a valid 3-letter currency code.')
    }
  }

  return new Money(this, value, currencyCode.toUpperCase())
}

Monval.prototype.round = function round(n, d, algorithm='GAUSSIAN') {
  switch (algorithm) {
    case 'GAUSSIAN':
      const x = n * Math.pow(10, d)
      const r = Math.round(x)
      const br = Math.abs(x) % 1 === 0.5 ? (r % 2 === 0 ? r : r-1) : r
      return br / Math.pow(10, d)
      break;
    default:
      throw new Error('Unsupported rounding algorithm.')
  }
}
