'use strict';

var _slicedToArray = require('@babel/runtime-corejs3/helpers/slicedToArray');
var _classCallCheck = require('@babel/runtime-corejs3/helpers/classCallCheck');
var _createClass = require('@babel/runtime-corejs3/helpers/createClass');
var _defineProperty = require('@babel/runtime-corejs3/helpers/defineProperty');
var _includesInstanceProperty = require('@babel/runtime-corejs3/core-js/instance/includes');
var _parseFloat = require('@babel/runtime-corejs3/core-js/parse-float');
var _parseInt = require('@babel/runtime-corejs3/core-js/parse-int');
var _Number$isFinite = require('@babel/runtime-corejs3/core-js/number/is-finite');
var _sliceInstanceProperty = require('@babel/runtime-corejs3/core-js/instance/slice');
var _mapInstanceProperty = require('@babel/runtime-corejs3/core-js/instance/map');

var currencies = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNH", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "YER", "ZAR", "ZMW", "ZWL"];

var withTuple = function withTuple(list) {
  return function (prop) {
    return _includesInstanceProperty(list).call(list, prop);
  };
};
var Monval = /*#__PURE__*/function () {
  function Monval() {
    _classCallCheck(this, Monval);
    _defineProperty(this, "currencies", currencies);
    _defineProperty(this, "defaultCurrency", 'EUR');
    _defineProperty(this, "exchangeRates", {});
    _defineProperty(this, "exchangeRatesBaseCurrency", 'EUR');
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
    _defineProperty(this, "reNumberWithCurrency", /[a-zA-Z]{3}\s[0-9]+((.|,)[0-9]+)?((.|,)[0-9]+)?/);
    _defineProperty(this, "reOnlyNumbers", /^[0-9]+((.|,)[0-9]+)?((.|,)[0-9]+)?/);
    _defineProperty(this, "reRate", /%[0-9]+((.|,)[0-9]+)?/);
  }
  _createClass(Monval, [{
    key: "create",
    value: function create(input, currency) {
      var cur = currency || this.defaultCurrency;
      if (this.isNumber(input)) {
        var money = {
          currency: cur,
          number: input
        };
        return new Account(this, money);
      }
      if (this.reOnlyNumbers.test(input)) {
        var _money2 = {
          currency: cur,
          number: _parseFloat(input)
        };
        return new Account(this, _money2);
      }
      if (this.reNumberWithCurrency.test(input)) {
        var _input$split = input.split(' '),
          _input$split2 = _slicedToArray(_input$split, 2),
          _currency = _input$split2[0],
          num = _input$split2[1];
        var _money3 = {
          currency: _currency,
          number: _parseFloat(num)
        };
        return new Account(this, _money3);
      }
      throw new Error("Bad input. Valid kinds of input are create(\"USD 1.23\"), create(\"1.23\", \"EUR\") or create(\"1.23\").");
    }
  }, {
    key: "exchange",
    value: function exchange(money, target) {
      if (!Object.hasOwn(this.exchangeRates, this.exchangeRatesBaseCurrency)) {
        throw new Error("Exchange rates not found.");
      }
      if (!Object.hasOwn(this.exchangeRates, money.currency)) {
        throw new Error("Exchange rate for ".concat(money.currency, " not found."));
      }
      if (!Object.hasOwn(this.exchangeRates, target)) {
        throw new Error("Exchange rate for ".concat(target, " not found."));
      }
      money.number = money.number * ((this.exchangeRates[target] || 0) / (this.exchangeRates[money.currency] || 1));
      money.currency = target;
      return money;
    }
  }, {
    key: "getCurrencySymbol",
    value: function getCurrencySymbol(currency) {
      if (Object.hasOwn(this.currencySymbolUnicodeMap, currency)) {
        return String.fromCharCode(_parseInt(this.currencySymbolUnicodeMap[currency] || '', 16));
      }
      return currency;
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
    key: "isRate",
    value: function isRate(v) {
      return typeof v === 'string' && this.reRate.test(v);
    }
  }, {
    key: "isNumber",
    value: function isNumber(v) {
      return typeof v === 'number' && _Number$isFinite(v);
    }
  }, {
    key: "isCurrency",
    value: function isCurrency(v) {
      return typeof v === 'string' ? withTuple(currencies)(v) : false;
    }
  }]);
  return Monval;
}();
var Account = /*#__PURE__*/function () {
  function Account(monval, money) {
    _classCallCheck(this, Account);
    _defineProperty(this, "monval", void 0);
    _defineProperty(this, "money", void 0);
    this.monval = monval;
    this.money = money;
  }
  _createClass(Account, [{
    key: "add",
    value: function add(numberOrRate, currency) {
      var cur = currency || this.money.currency;
      if (this.monval.isNumber(numberOrRate)) {
        var money = {
          number: numberOrRate,
          currency: cur
        };
        return this.addMoney(money);
      }
      if (this.monval.isRate(numberOrRate)) {
        return this.addRate(_parseFloat(_sliceInstanceProperty(numberOrRate).call(numberOrRate, 1)));
      }
      if (this.monval.reOnlyNumbers.test(numberOrRate)) {
        var _money4 = {
          number: numberOrRate,
          currency: cur
        };
        return this.addMoney(_money4);
      }
      throw new Error("Bad input. You should specify either number or rate such as \"%1.23\"");
    }
  }, {
    key: "addRate",
    value: function addRate(rate) {
      this.money.number = this.money.number + this.money.number * rate / 100;
      return this;
    }
  }, {
    key: "addMoney",
    value: function addMoney(money) {
      if (this.money.currency !== money.currency) {
        var _money = this.monval.exchange(money, this.money.currency);
        this.money.number += _money.number;
        return this;
      }
      this.money.number += money.number;
      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(numberOrRate, currency) {
      var cur = currency || this.money.currency;
      if (this.monval.isNumber(numberOrRate)) {
        var money = {
          number: numberOrRate,
          currency: cur
        };
        return this.subtractMoney(money);
      }
      if (this.monval.isRate(numberOrRate)) {
        return this.subtractRate(_parseFloat(_sliceInstanceProperty(numberOrRate).call(numberOrRate, 1)));
      }
      if (this.monval.reOnlyNumbers.test(numberOrRate)) {
        var _money5 = {
          number: numberOrRate,
          currency: cur
        };
        return this.subtractMoney(_money5);
      }
      throw new Error("Bad input. You should specify either number or rate such as \"%1.23\"");
    }
  }, {
    key: "subtractRate",
    value: function subtractRate(rate) {
      this.money.number = this.money.number - this.money.number * rate / 100;
      return this;
    }
  }, {
    key: "subtractMoney",
    value: function subtractMoney(money) {
      if (this.money.currency !== money.currency) {
        var _money = this.monval.exchange(money, this.money.currency);
        this.money.number -= _money.number;
        return this;
      }
      this.money.number -= money.number;
      return this;
    }
  }, {
    key: "exchange",
    value: function exchange(target) {
      if (!Object.hasOwn(this.monval.exchangeRates, this.monval.exchangeRatesBaseCurrency)) {
        throw new Error("Exchange rates not found.");
      }
      if (!Object.hasOwn(this.monval.exchangeRates, target)) {
        throw new Error("Exchange rate for ".concat(target, " not found."));
      }
      this.money.number = this.money.number * ((this.monval.exchangeRates[target] || 0) / (this.monval.exchangeRates[this.money.currency] || 1));
      this.money.currency = target;
      return this;
    }
  }, {
    key: "toFixed",
    value: function toFixed(decilen) {
      var _decilen = decilen || this.monval.decilen;
      var str = this.monval.round(this.money.number, _decilen).toString();
      if (_decilen < 1) {
        return str;
      }
      if (!_includesInstanceProperty(str).call(str, '.')) {
        var _context;
        return str + '.' + _mapInstanceProperty(_context = Array.apply(null, Array(_decilen))).call(_context, Number.prototype.valueOf, 0).join('');
      }
      var existingDecimalsLen = (str.split('.')[1] || []).length;
      if (_decilen > existingDecimalsLen) {
        var _context2;
        return str + _mapInstanceProperty(_context2 = Array.apply(null, Array(_decilen - existingDecimalsLen))).call(_context2, Number.prototype.valueOf, 0).join('');
      }
      return str;
    }
  }, {
    key: "toFloat",
    value: function toFloat() {
      return this.money.number;
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return this.money;
    }
  }, {
    key: "pretty",
    value: function pretty(decilen) {
      var _decilen = decilen || this.monval.decilen;
      return this.monval.getCurrencySymbol(this.money.currency) + ' ' + this.toFixed(_decilen);
    }
  }]);
  return Account;
}();
var monval = new Monval();

exports.Account = Account;
exports.Monval = Monval;
exports.currencies = currencies;
exports.monval = monval;
//# sourceMappingURL=index.js.map
