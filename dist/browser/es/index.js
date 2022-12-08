import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _classCallCheck from '@babel/runtime-corejs3/helpers/classCallCheck';
import _createClass from '@babel/runtime-corejs3/helpers/createClass';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _indexOfInstanceProperty from '@babel/runtime-corejs3/core-js/instance/index-of';
import _parseFloat from '@babel/runtime-corejs3/core-js/parse-float';
import _Number$isFinite from '@babel/runtime-corejs3/core-js/number/is-finite';
import _trimInstanceProperty from '@babel/runtime-corejs3/core-js/instance/trim';
import _Number$isInteger from '@babel/runtime-corejs3/core-js/number/is-integer';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js/instance/map';
import _parseInt from '@babel/runtime-corejs3/core-js/parse-int';

var Money = /*#__PURE__*/function () {
  function Money(monval, number, currency) {
    _classCallCheck(this, Money);
    _defineProperty(this, "monval", null);
    _defineProperty(this, "number", null);
    _defineProperty(this, "currency", null);
    this.monval = monval;
    this.number = number;
    this.currency = currency;
  }
  _createClass(Money, [{
    key: "add",
    value: function add(numberOrRate) {
      var currencyCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      currencyCode = this.monval.isCurrency(currencyCode) ? currencyCode.toUpperCase() : this.currency;
      var isRate = typeof numberOrRate === 'string' && _indexOfInstanceProperty(numberOrRate).call(numberOrRate, '%') !== -1;
      if (isRate) {
        var _context;
        var rate = _parseFloat(_trimInstanceProperty(_context = numberOrRate.replace('%', '')).call(_context));
        if (this.monval.isNan(rate)) {
          var _context2;
          throw new Error("Couldn't read rate from \"".concat(_trimInstanceProperty(_context2 = numberOrRate.replace('%', '')).call(_context2), "\"."));
        }
        this.number = this.number + this.number * rate / 100;
      } else {
        var money2 = this.monval.create(numberOrRate, currencyCode);
        if (money2.currency === this.currency) {
          this.number += money2.number;
        } else {
          money2.exchange(this.currency);
          this.number += money2.number;
        }
      }
      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(numberOrRate) {
      var currencyCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      currencyCode = this.monval.isCurrency(currencyCode) ? currencyCode.toUpperCase() : this.currency;
      var isRate = typeof numberOrRate === 'string' && _indexOfInstanceProperty(numberOrRate).call(numberOrRate, '%') !== -1;
      if (isRate) {
        var _context3;
        var rate = _parseFloat(_trimInstanceProperty(_context3 = numberOrRate.replace('%', '')).call(_context3));
        if (this.monval.isNan(rate)) {
          var _context4;
          throw new Error("Couldn't read rate from \"".concat(_trimInstanceProperty(_context4 = numberOrRate.replace('%', '')).call(_context4), "\"."));
        }
        this.number = this.number - this.number * rate / 100;
      } else {
        var money2 = this.monval.create(numberOrRate, currencyCode);
        if (money2.currency === this.currency) {
          this.number -= money2.number;
        } else {
          money2.exchange(this.currency);
          this.number -= money2.number;
        }
      }
      return this;
    }
  }, {
    key: "exchange",
    value: function exchange(target) {
      target = target.toUpperCase();
      if (!this.monval.isCurrency(target)) {
        throw new Error("Invalid currency.");
      }
      if (!this.monval.isObject(this.monval.rates)) {
        throw new Error("Exchange rates not found. Load the rates first by monval.rates = {}");
      }
      if (!this.monval.rates.hasOwnProperty(target)) {
        throw new Error("The currency you specified not found in the rates.");
      }
      this.number = this.number * (this.monval.rates[target] / this.monval.rates[this.currency]);
      this.currency = target;
      return this;
    }
  }, {
    key: "toFixed",
    value: function toFixed() {
      var decilen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var dlen = _Number$isInteger(decilen) ? decilen : this.monval.decilen;
      var str = this.monval.round(this.number, dlen).toString();
      if (dlen > 0) {
        if (_indexOfInstanceProperty(str).call(str, '.') === -1) {
          var _context5;
          return str + '.' + _mapInstanceProperty(_context5 = Array.apply(null, Array(dlen))).call(_context5, Number.prototype.valueOf, 0).join('');
        }
        var outputlen = str.split('.')[1].length;
        if (dlen > outputlen) {
          var _context6;
          return str + _mapInstanceProperty(_context6 = Array.apply(null, Array(dlen - outputlen))).call(_context6, Number.prototype.valueOf, 0).join('');
        }
      }
      return str;
    }
  }, {
    key: "toFloat",
    value: function toFloat() {
      return this.number;
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        float: this.toFloat(),
        currency: this.currency
      };
    }
  }, {
    key: "pretty",
    value: function pretty() {
      var currency = this.monval.currencySymbolUnicodeMap.hasOwnProperty(this.currency) ? String.fromCharCode(_parseInt(this.monval.currencySymbolUnicodeMap[this.currency], 16)) : this.currency;
      return currency + ' ' + this.toFixed();
    }
  }, {
    key: "pad",
    value: function pad(len) {
      var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
      var value = this.toFixed();
      while (value.length < len) {
        value = char + value;
      }
      return value;
    }
  }]);
  return Money;
}();

var currencies = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNH", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "YER", "ZAR", "ZMW", "ZWL"];
var Monval = /*#__PURE__*/function () {
  function Monval() {
    _classCallCheck(this, Monval);
    _defineProperty(this, "rates", {});
    _defineProperty(this, "currency", 'XXX');
    _defineProperty(this, "currencies", currencies);
    _defineProperty(this, "currencySymbolUnicodeMap", {
      TRY: '20BA',
      USD: '0024',
      EUR: '20ac',
      GBP: '00A3',
      JPY: '00A5',
      AMD: '058F',
      AFN: '060B',
      THB: '0E3F',
      SVC: '20A1',
      CRC: '20A1',
      INR: '20B9',
      BTC: '20BF'
    });
    _defineProperty(this, "decilen", 2);
  }
  _createClass(Monval, [{
    key: "create",
    value: function create(input) {
      var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var number = 0;
      var currency = typeof code === 'string' && this.isCurrency(code) ? code.toUpperCase() : this.currency;
      if (this.isNumber(input)) {
        number = input;
      }
      if (typeof input === 'string' && _indexOfInstanceProperty(input).call(input, ' ') === -1) {
        number = _parseFloat(input);
      }
      if (typeof input === 'string' && _indexOfInstanceProperty(input).call(input, ' ') !== -1) {
        var _input$split = input.split(' '),
          _input$split2 = _slicedToArray(_input$split, 2),
          part1 = _input$split2[0],
          part2 = _input$split2[1];
        if (this.isCurrency(part1)) {
          number = _parseFloat(part2);
          currency = part1.toUpperCase();
        } else if (this.isCurrency(part2)) {
          number = _parseFloat(part1);
          currency = part2.toUpperCase();
        } else ;
      }
      if (this.isNan(number) || !this.isNumber(number)) {
        throw new Error("Couldn't recognize the input. " + "Valid kind of inputs are .create(\"USD 1.23\"), .create(\"1.23\", \"EUR\"), .create(\"1.23\")");
      }
      return new Money(this, number, currency);
    }
  }, {
    key: "round",
    value: function round(n, d) {
      var algorithm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GAUSSIAN';
      switch (algorithm) {
        case 'GAUSSIAN':
          var x = n * Math.pow(10, d);
          var r = Math.round(x);
          var br = Math.abs(x) % 1 === 0.5 ? r % 2 === 0 ? r : r - 1 : r;
          return br / Math.pow(10, d);
        default:
          throw new Error('Unsupported rounding algorithm.');
      }
    }
  }, {
    key: "isCurrency",
    value: function isCurrency(v) {
      var _context;
      return typeof v === 'string' && _indexOfInstanceProperty(_context = this.currencies).call(_context, v.toUpperCase()) !== -1;
    }
  }, {
    key: "isNumber",
    value: function isNumber(v) {
      return typeof v == 'number' && _Number$isFinite(v) === true;
    }
  }, {
    key: "isNan",
    value: function isNan(v) {
      return typeof v == 'number' && v != +v;
    }
  }, {
    key: "isObject",
    value: function isObject(v) {
      return Object.prototype.toString.call(v) === '[object Object]';
    }
  }]);
  return Monval;
}();
var monval = new Monval();

export { currencies, monval };
//# sourceMappingURL=index.js.map
