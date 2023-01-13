import {Money} from './Money.js'

export const currencies = [
  "AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND",
  "BOB","BRL","BSD","BTC","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP","CNH","CNY","COP","CRC","CUC",
  "CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP",
  "GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD",
  "JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD",
  "MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR",
  "NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG",
  "SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY",
  "TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VES","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR",
  "XOF","XPD","XPF","XPT","YER","ZAR","ZMW","ZWL"
]

class Monval {
  rates={}
  currency='XXX'
  currencies=currencies
  currencySymbolUnicodeMap={
    TRY: '20BA', USD: '0024', EUR: '20ac', GBP: '00A3',
    JPY: '00A5', AMD: '058F', AFN: '060B', THB: '0E3F',
    SVC: '20A1', CRC: '20A1', INR: '20B9', BTC: '20BF'
  }
  decilen=2

  constructor() {
  }

  create(input, code=null) {
    let number = 0
    let currency = typeof code === 'string' && this.isCurrency(code) ? code.toUpperCase() : this.currency

    if (this.isNumber(input)) {
      number = input
    }

    if (typeof input === 'string' && input.indexOf(' ') === -1) {
      number = parseFloat(input)
    }

    if (typeof input === 'string' && input.indexOf(' ') !== -1) {
      const [part1, part2] = input.split(' ')

      if (this.isCurrency(part1)) {
        number = parseFloat(part2)
        currency = part1.toUpperCase()
      }
      else if (this.isCurrency(part2)) {
        number = parseFloat(part1)
        currency = part2.toUpperCase()
      }
      else {}
    }

    if (this.isNan(number) || !this.isNumber(number)) {
      throw new Error(`Couldn't recognize the input. ` +
        `Valid kind of inputs are .create("USD 1.23"), .create("1.23", "EUR"), .create("1.23")`)
    }

    return new Money(this, number, currency)
  }

  getCurrencySymbol(currency) {
    return this.currencySymbolUnicodeMap.hasOwnProperty(currency)
      ? String.fromCharCode( parseInt(this.currencySymbolUnicodeMap[currency], 16) )
      : currency
  }

  round(n, d, algorithm='GAUSSIAN') {
    switch (algorithm) {
      case 'GAUSSIAN':
        const x = n * Math.pow(10, d)
        const r = Math.round(x)
        const br = Math.abs(x) % 1 === 0.5 ? (r % 2 === 0 ? r : r-1) : r
        return br / Math.pow(10, d)
      default:
        throw new Error('Unsupported rounding algorithm.')
    }
  }

  isCurrency(v) {
    return typeof v === 'string' && this.currencies.indexOf(v.toUpperCase()) !== -1
  }

  isNumber(v) {
    return typeof v == 'number' && Number.isFinite(v) === true
  }

  isNan(v) {
    return typeof v == 'number' && v != +v
  }

  isObject(v) {
    return Object.prototype.toString.call(v) === '[object Object]'
  }
}

export const monval = new Monval()