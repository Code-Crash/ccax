
/**
 * This class will contains the static methods which will help to validate the types (non-primitive types)
 * @class InstanceValidator
 */
export default class InstanceValidator {

  /**
   * This method will validate the value is instance of some other value.
   * @param {any} source which we have to check
   * @param {any} target on which we have to match the instance
   * @returns {boolean}
   */
  static isInstanceOf = (source, target): boolean => {
    return source instanceof target; // || value instanceof Object;
  };

}
