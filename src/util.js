export default {
  isObject: v => Object.prototype.toString.call(v) === '[object Object]',
  isNumber: v => typeof v == 'number' && Number.isFinite(v) === true,
  isString: v => typeof v == 'string',
  isNan: v => typeof v == 'number' && v != +v,
  isNull: v => v === null
}