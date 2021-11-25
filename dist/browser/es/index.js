import currencies from 'locale-util/data/core/currencies.json';
export { default as currencies } from 'locale-util/data/core/currencies.json';
import _Object$assign from '@babel/runtime-corejs3/core-js/object/assign';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js/instance/filter';
import _parseFloat from '@babel/runtime-corejs3/core-js/parse-float';
import _indexOfInstanceProperty from '@babel/runtime-corejs3/core-js/instance/index-of';
import _Number$isInteger from '@babel/runtime-corejs3/core-js/number/is-integer';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js/instance/map';
import _parseInt from '@babel/runtime-corejs3/core-js/parse-int';
import _Number$isFinite from '@babel/runtime-corejs3/core-js/number/is-finite';

var util = {
  isObject: function isObject(v) {
    return Object.prototype.toString.call(v) === '[object Object]';
  },
  isNumber: function isNumber(v) {
    return typeof v == 'number' && _Number$isFinite(v) === true;
  },
  isString: function isString(v) {
    return typeof v == 'string';
  },
  isNan: function isNan(v) {
    return typeof v == 'number' && v != +v;
  },
  isNull: function isNull(v) {
    return v === null;
  }
};

function Money(monval, value, currencyCode) {
  var _context,
      _this = this;

  this.monval = monval;
  this.value = value;
  this.currencyCode = currencyCode;

  var data = _filterInstanceProperty(_context = this.monval.currencyData).call(_context, function (o) {
    return o.code == _this.currencyCode;
  })[0];

  this.number = data.num;
  this.decilen = util.isNumber(this.monval.config.decilen) ? this.monval.config.decilen : _parseFloat(data.deciLen);
  this.nativeName = data.name;
}

Money.prototype.add = function add(numberOrRate) {
  var currencyCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  currencyCode = !currencyCode ? this.currencyCode : currencyCode;
  var isRate = util.isString(numberOrRate) && _indexOfInstanceProperty(numberOrRate).call(numberOrRate, '%') !== -1;

  if (isRate) {
    var rate = _parseFloat(numberOrRate.replace('%', ''));

    if (util.isNan(rate)) {
      throw new Error('Invalid rate.');
    }

    this.value = this.value + this.value * rate / 100;
  } else {
    var money2 = this.monval.create(numberOrRate, currencyCode);

    if (money2.currencyCode == this.currencyCode) {
      this.value += money2.value;
    } else {
      money2.exchange(this.currencyCode);
      this.value += money2.value;
    }
  }

  return this;
};

Money.prototype.subtract = function subtract(numberOrRate) {
  var currencyCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  currencyCode = !currencyCode ? this.currencyCode : currencyCode;
  var isRate = util.isString(numberOrRate) && _indexOfInstanceProperty(numberOrRate).call(numberOrRate, '%') !== -1;

  if (isRate) {
    var rate = _parseFloat(numberOrRate.replace('%', ''));

    if (util.isNan(rate)) {
      throw new Error('Invalid rate.');
    }

    this.value = this.value - this.value * rate / 100;
  } else {
    var money2 = this.monval.create(numberOrRate, currencyCode);

    if (money2.currencyCode == this.currencyCode) {
      this.value -= money2.value;
    } else {
      money2.exchange(this.currencyCode);
      this.value -= money2.value;
    }
  }

  return this;
};

Money.prototype.exchange = function exchange(target) {
  target = target.toUpperCase();
  this.value = this.exchangePure(this.value, target);
  this.currencyCode = target;
  return this;
};

Money.prototype.exchangePure = function exchangePure(amount, target) {
  if (!util.isObject(this.monval.exchangeRates)) {
    throw new Error('No exchange rate data found.');
  }

  if (!this.monval.exchangeRates.hasOwnProperty(target)) {
    throw new Error('No exchange rate found for "' + target + '"');
  }

  if (!this.monval.exchangeRates.hasOwnProperty(this.currencyCode)) {
    throw new Error('No exchange rate found for "' + this.currencyCode + '"');
  }

  return amount * (this.monval.exchangeRates[target] / this.monval.exchangeRates[this.currencyCode]);
};

Money.prototype.toFixed = function toFixed() {
  var decilen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var dlen = _Number$isInteger(decilen) ? decilen : this.decilen;
  var str = this.monval.round(this.value, dlen).toString();

  if (dlen > 0) {
    if (_indexOfInstanceProperty(str).call(str, '.') === -1) {
      var _context2;

      return str + '.' + _mapInstanceProperty(_context2 = Array.apply(null, Array(dlen))).call(_context2, Number.prototype.valueOf, 0).join('');
    }

    var outputlen = str.split('.')[1].length;

    if (dlen > outputlen) {
      var _context3;

      return str + _mapInstanceProperty(_context3 = Array.apply(null, Array(dlen - outputlen))).call(_context3, Number.prototype.valueOf, 0).join('');
    }
  }

  return str;
};

Money.prototype.toFloat = function toFloat() {
  return this.value;
};

Money.prototype.toObject = function toObject() {
  return {
    float: this.toFloat(),
    currency: this.currencyCode
  };
};

Money.prototype.pretty = function pretty() {
  var currency = this.monval.currencySymbolUnicodeMap.hasOwnProperty(this.currencyCode) ? String.fromCharCode(_parseInt(this.monval.currencySymbolUnicodeMap[this.currencyCode], 16)) : this.currencyCode;
  return currency + ' ' + this.toFixed();
};

Money.prototype.pad = function pad(len) {
  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
  var value = this.toFixed();

  while (value.length < len) {
    value = char + value;
  }

  return value;
};

function Monval() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  this.exchangeRates = null;
  this.readConfig(config);
}

Monval.prototype.currencySymbolUnicodeMap = {
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
};
Monval.prototype.currencyData = currencies;

Monval.prototype.updateExchangeRates = function updateExchangeRates(obj) {
  this.exchangeRates = obj;
};

Monval.prototype.readConfig = function readConfig(config) {
  var _this = this;

  var defaultConfig = {
    singleCurrency: false,
    decilen: null
  };
  this.config = util.isObject(config) ? _Object$assign({}, defaultConfig, config) : defaultConfig;

  if (this.config.singleCurrency !== false) {
    var _context;

    this.config.singleCurrency = this.config.singleCurrency.toUpperCase();

    var matches = _filterInstanceProperty(_context = this.currencyData).call(_context, function (o) {
      return o.code == _this.config.singleCurrency;
    });

    if (!matches) {
      throw new Error('Invalid singleCurrency. Please provide a valid 3-letter currency code.');
    }
  }

  if (!util.isNull(this.config.decilen)) {
    if (!util.isNumber(this.config.decilen)) {
      throw new Error('Invalid decilen. Please provide a number.');
    }
  }
};

Monval.prototype.create = function create(value) {
  var currencyCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (util.isString(value)) value = _parseFloat(value);

  if (util.isNan(value) || !util.isNumber(value)) {
    throw new Error('The value should be a number or float parsable string.');
  }

  if (this.config.singleCurrency !== false) {
    currencyCode = this.config.singleCurrency;
  } else {
    var _context2;

    var matches = _filterInstanceProperty(_context2 = this.currencyData).call(_context2, function (o) {
      return o.code == currencyCode;
    });

    if (!matches) {
      throw new Error('Invalid currencyCode. Please provide a valid 3-letter currency code.');
    }
  }

  return new Money(this, value, currencyCode.toUpperCase());
};

Monval.prototype.round = function round(n, d) {
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
};

export { Monval };
//# sourceMappingURL=index.js.map
