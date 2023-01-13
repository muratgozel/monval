export class Money {
  monval=null
  number=null
  currency=null

  constructor(monval, number, currency) {
    this.monval = monval
    this.number = number
    this.currency = currency
  }

  add(numberOrRate, currencyCode=null) {
    currencyCode = this.monval.isCurrency(currencyCode) ? currencyCode.toUpperCase() : this.currency
    const isRate = typeof numberOrRate === 'string' && numberOrRate.indexOf('%') !== -1

    if (isRate) {
      const rate = parseFloat(numberOrRate.replace('%', '').trim())

      if (this.monval.isNan(rate)) {
        throw new Error(`Couldn't read rate from "${numberOrRate.replace('%', '').trim()}".`)
      }

      this.number = this.number + (this.number * rate / 100)
    }
    else {
      const money2 = this.monval.create(numberOrRate, currencyCode)
      if (money2.currency === this.currency) {
        this.number += money2.number
      }
      else {
        money2.exchange(this.currency)
        this.number += money2.number
      }
    }

    return this
  }

  subtract(numberOrRate, currencyCode=null) {
    currencyCode = this.monval.isCurrency(currencyCode) ? currencyCode.toUpperCase() : this.currency
    const isRate = typeof numberOrRate === 'string' && numberOrRate.indexOf('%') !== -1

    if (isRate) {
      const rate = parseFloat(numberOrRate.replace('%', '').trim())

      if (this.monval.isNan(rate)) {
        throw new Error(`Couldn't read rate from "${numberOrRate.replace('%', '').trim()}".`)
      }

      this.number = this.number - (this.number * rate / 100)
    }
    else {
      const money2 = this.monval.create(numberOrRate, currencyCode)
      if (money2.currency === this.currency) {
        this.number -= money2.number
      }
      else {
        money2.exchange(this.currency)
        this.number -= money2.number
      }
    }

    return this
  }

  exchange(target) {
    target = target.toUpperCase()

    if (!this.monval.isCurrency(target)) {
      throw new Error(`Invalid currency.`)
    }

    if (!this.monval.isObject(this.monval.rates)) {
      throw new Error(`Exchange rates not found. Load the rates first by monval.rates = {}`)
    }

    if (!this.monval.rates.hasOwnProperty(target)) {
      throw new Error(`The currency you specified not found in the rates.`)
    }

    this.number = this.number * (this.monval.rates[target] / this.monval.rates[this.currency])
    this.currency = target

    return this
  }

  toFixed(decilen=null) {
    const dlen = Number.isInteger(decilen) ? decilen : this.monval.decilen
    const str = this.monval.round(this.number, dlen).toString()

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

  toFloat() {
    return this.number
  }

  toObject() {
    return {
      float: this.toFloat(),
      currency: this.currency
    }
  }

  pretty() {
    return this.monval.getCurrencySymbol(this.currency) + ' ' + this.toFixed()
  }

  pad(len, char='0') {
    let value = this.toFixed()
    while (value.length < len) value = char + value
    return value
  }
}