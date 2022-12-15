/**
 * This class will contains the static methods which will help to validate the types (primitive types)
 * @class Validator
 */
export default class Validator {
  /**
   * This method return if given value is string or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isString = (value): boolean => {
    return typeof value === 'string';
  };

  /**
   * This method return if given value is string and non null
   * @param {any} value
   * @returns {boolean}
   */
  static isNonEmptyString = (value): boolean => {
    return Validator.isString(value) && value ? true : false;
  };

  /**
   * This method return if given value is number or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isNumber = (value): boolean => {
    return typeof value === 'number';
  };

  /**
   * This method return if given value is bigint or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isBigInt = (value): boolean => {
    return typeof value === 'bigint';
  };

  /**
   * This method return if given value is Symbol or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isSymbol = (value): boolean => {
    return typeof value === 'symbol';
  };

  /**
   * This method return if given value is Boolean or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isBoolean = (value): boolean => {
    return typeof value === 'boolean';
  };

  /**
   * This method return if given value is Object or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isObject = (value): boolean => {
    return typeof value === 'object';
  };

  /**
   * This method return if given value is Object or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isNotNullObject = (value): boolean => {
    return typeof value === 'object' && value != null;
  };

  /**
   * This method return if given value is Array or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isArray = (value): boolean => {
    return Validator.isObject(value) && value.constructor === Array;
  };

  /**
   * This method return if given value is Undefined or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isUndefined = (value): boolean => {
    return typeof value === 'undefined';
  };

  /**
   * This method return if given value is Undefined or Null or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isUndefinedOrNull = (value): boolean => {
    return typeof value === 'undefined' || value === null;
  };

  /**
   * This method return if given value is Null or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isNull = (value): boolean => {
    return Validator.isObject(value) && value === null;
  };

  /**
   * This method return if given value is Function or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isFunction = (value): boolean => {
    return typeof value === 'function';
  };

  /**
   * This method return if given value is Date or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isDate = (value): boolean => {
    return value && Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value);
  };

  /**
   * This method return if given value is Map instance or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isMap = (value): boolean => {
    return Validator.isObject(value) && value instanceof Map;
  };
  /**
   * This method return if given value is WeakMap instance or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isWeakMap = (value): boolean => {
    return Validator.isObject(value) && value instanceof WeakMap;
  };

  /**
   * This method return if given value is Set instance or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isSet = (value): boolean => {
    return Validator.isObject(value) && value instanceof Set;
  };

  /**
   * This method return if given value is WeakSet instance or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isWeakSet = (value): boolean => {
    return Validator.isObject(value) && value instanceof WeakSet;
  };
}
