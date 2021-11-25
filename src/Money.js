import util from './util'

function Money(monval, value, currencyCode) {
  this.monval = monval
  this.value = value
  this.currencyCode = currencyCode

  const data = this.monval.currencyData.filter(o => o.code == this.currencyCode)[0]
  this.number = data.num
  this.decilen = util.isNumber(this.monval.config.decilen)
    ? this.monval.config.decilen
    : parseFloat(data.deciLen)
  this.nativeName = data.name
}

Money.prototype.add = function add(numberOrRate, currencyCode=null) {
  currencyCode = !currencyCode ? this.currencyCode : currencyCode

  const isRate = util.isString(numberOrRate) && numberOrRate.indexOf('%') !== -1
  if (isRate) {
    const rate = parseFloat(numberOrRate.replace('%', ''))
    if (util.isNan(rate)) {
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
  currencyCode = !currencyCode ? this.currencyCode : currencyCode

  const isRate = util.isString(numberOrRate) && numberOrRate.indexOf('%') !== -1
  if (isRate) {
    const rate = parseFloat(numberOrRate.replace('%', ''))
    if (util.isNan(rate)) {
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
  if (!util.isObject(this.monval.exchangeRates)) {
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

Money.prototype.toFixed = function toFixed(decilen=null) {
  const dlen = Number.isInteger(decilen) ? decilen : this.decilen
  const str = this.monval.round(this.value, dlen).toString()
  if (dlen > 0) {
    if (str.indexOf('.') === -1) {
      return str + '.' + Array.apply(null, Array(dlen)).map(Number.prototype.valueOf, 0).join('')
    }
    const outputlen = str.split('.')[1].length
    if (dlen > outputlen) {
      return str + Array.apply(null, Array(dlen - outputlen)).map(Number.prototype.valueOf, 0).join('')
    }
  }
  return str
}

Money.prototype.toFloat = function toFloat() {
  return this.value
}

Money.prototype.toObject = function toObject() {
  return {
    float: this.toFloat(),
    currency: this.currencyCode
  }
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

export default Money