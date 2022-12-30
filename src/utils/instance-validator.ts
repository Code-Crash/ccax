import Validator from './type-validator';

/**
 * This class will contains the static methods which will help to validate the types (non-primitive types)
 * @class InstanceValidator
 */
export default class InstanceValidator {
  /**
   * This method will validate the value is instance of some other value.
   * @param {any} source which we have to check
   * @param {any} base on which we have to match the instance
   * @returns {boolean}
   */
  static isInstanceOf = (source, base): boolean => {
    if (typeof base !== 'object') {
      if (!Validator.isFunction(base)) {
        return false;
      }
    }
    return source instanceof base; // || value instanceof Object;
  };
}
