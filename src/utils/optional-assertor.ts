import ParamError from '../classes/param-error';
import { PARAM_ERROR } from './constants';
import OptionalValidator from './type-optional-validator';

export default class OptionalAssertor {
  /**
   * This method assert optional string by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalString = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalString(value)) {
      // TODO: Check if formatting works, remove this commented code.
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'String'));
    }
    return true;
  };

  /**
   * This method assert optional non empty string by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalNonEmptyString = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalNonEmptyString(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'non empty String'));
    }
    return true;
  };

  /**
   * This method assert optional Number by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalNumber = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalNumber(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Number'));
    }
    return true;
  };

  /**
   * This method assert optional Number by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalNumberAsString = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalNumberAsString(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Number'));
    }
    return true;
  };

  /**
   * This method assert optional BigInt numbers by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalBigInt = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalBigInt(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'BigInt'));
    }
    return true;
  };

  /**
   * This method assert optional Symbol by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalSymbol = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalSymbol(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Symbol'));
    }
    return true;
  };

  /**
   * This method assert optional Boolean by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalBoolean = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalBoolean(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Boolean'));
    }
    return true;
  };

  /**
   * This method assert optional Object by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalObject = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalObject(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Object'));
    }
    return true;
  };

  /**
   * This method assert optional not null Object by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalNotNullObject = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalNotNullObject(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'NotNullObject'));
    }
    return true;
  };

  /**
   * This method assert optional Array by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalArray = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalArray(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Array'));
    }
    return true;
  };

  /**
   * This method assert optional undefined by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalUndefined = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalUndefined(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Undefined'));
    }
    return true;
  };

  /**
   * This method assert optional Null by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalNull = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalNull(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Null'));
    }
    return true;
  };

  /**
   * This method assert optional Null or Undefined by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalUndefinedOrNull = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalUndefinedOrNull(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'null'));
    }
    return true;
  };

  /**
   * This method assert optional function by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalFunction = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalFunction(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Function'));
    }
    return true;
  };

  /**
   * This method assert optional Date by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalDate = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalDate(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Date'));
    }
    return true;
  };

  /**
   * This method assert optional Map by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalMap = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalMap(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Map'));
    }
    return true;
  };

  /**
   * This method assert optional WeakMap by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalWeakMap = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalWeakMap(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'WeakMap'));
    }
    return true;
  };

  /**
   * This method assert optional Set by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalSet = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalSet(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'Set'));
    }
    return true;
  };

  /**
   * This method assert optional WeakSet by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertOptionalWeakSet = (value: any, name: string): boolean => {
    if (!OptionalValidator.isOptionalWeakSet(value)) {
      throw new ParamError(PARAM_ERROR.optionalInvalid.format(name, 'WeakSet'));
    }
    return true;
  };
}
