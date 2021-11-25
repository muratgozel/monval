import currencies from 'locale-util/data/core/currencies.json'
import Money from './Money'
import util from './util'

function Monval(config=null) {
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
  this.config = util.isObject(config)
    ? Object.assign({}, defaultConfig, config)
    : defaultConfig

  if (this.config.singleCurrency !== false) {
    this.config.singleCurrency = this.config.singleCurrency.toUpperCase()
    const matches = this.currencyData.filter(o => o.code == this.config.singleCurrency)
    if (!matches) {
      throw new Error('Invalid singleCurrency. Please provide a valid 3-letter currency code.')
    }
  }

  if (!util.isNull(this.config.decilen)) {
    if (!util.isNumber(this.config.decilen)) {
      throw new Error('Invalid decilen. Please provide a number.')
    }
  }
}

Monval.prototype.create = function create(value, currencyCode=null) {
  if (util.isString(value)) value = parseFloat(value)

  if (util.isNan(value) || !util.isNumber(value)) {
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

export default Monval