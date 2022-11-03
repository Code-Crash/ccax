import Validator from './type-validator';
import { isUndefined } from './utils';
/**
 * This class will contains the static methods which will help to validate the optional types
 * @class OptionalValidator
 */
export default class OptionalValidator {
  /**
   * This method return if given value is string or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalString = (value): boolean => {
    return isUndefined(value) || Validator.isString(value);
  };

  /**
   * This method return if given value is not empty string or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalNonEmptyString = (value): boolean => {
    return isUndefined(value) || (Validator.isString(value) && value) ? true : false;
  };

  /**
   * This method return if given value is number or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalNumber = (value): boolean => {
    return isUndefined(value) || Validator.isNumber(value);
  };

  /**
   * This method return if given value is bigint or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalBigInt = (value): boolean => {
    return isUndefined(value) || Validator.isBigInt(value);
  };

  /**
   * This method return if given value is Symbol or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalSymbol = (value): boolean => {
    return isUndefined(value) || Validator.isSymbol(value);
  };

  /**
   * This method return if given value is Boolean or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalBoolean = (value): boolean => {
    return isUndefined(value) || Validator.isBoolean(value);
  };

  /**
   * This method return if given value is Object or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalObject = (value): boolean => {
    return isUndefined(value) || Validator.isObject(value);
  };

  /**
   * This method return if given value is Object or not.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalNotNullObject = (value): boolean => {
    return isUndefined(value) || Validator.isNotNullObject(value);
  };

  /**
   * This method return if given value is Array or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalArray = (value): boolean => {
    return isUndefined(value) || Validator.isArray(value);
  };

  /**
   * This method return if given value is Undefined or not.
   * @param {any} value
   * @returns {boolean}
   * TODO: Remove this useless method, we don't need Optional Undefined check.
   */
  static isOptionalUndefined = (value): boolean => {
    return isUndefined(value) || Validator.isUndefined(value);
  };

  /**
   * This method return if given value is Null or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalNull = (value): boolean => {
    return isUndefined(value) || Validator.isNull(value);
  };

  /**
   * This method return if given value is Undefined or Null or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalUndefinedOrNull = (value): boolean => {
    return isUndefined(value) || typeof value === 'undefined' || value === null;
  };

  /**
   * This method return if given value is Function or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalFunction = (value): boolean => {
    return isUndefined(value) || Validator.isFunction(value);
  };

  /**
   * This method return if given value is Date or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalDate = (value): boolean => {
    return isUndefined(value) || Validator.isDate(value);
  };

  /**
   * This method return if given value is Map instance or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalMap = (value): boolean => {
    return isUndefined(value) || Validator.isMap(value);
  };
  /**
   * This method return if given value is WeakMap instance or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalWeakMap = (value): boolean => {
    return isUndefined(value) || Validator.isWeakMap(value);
  };

  /**
   * This method return if given value is Set instance or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalSet = (value): boolean => {
    return isUndefined(value) || Validator.isSet(value);
  };

  /**
   * This method return if given value is WeakSet instance or undefined.
   * @param {any} value
   * @returns {boolean}
   */
  static isOptionalWeakSet = (value): boolean => {
    return isUndefined(value) || Validator.isWeakSet(value);
  };
}
