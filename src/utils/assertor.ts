import { ParamError } from '../components/classes';
import { PARAM_ERROR } from './constants';
import OptionalAssertor from './optional-assertor';
import Validator from './type-validator';

export default class Assertor extends OptionalAssertor {
  /**
   * This method assert string by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertString = (value: any, name: string): boolean => {
    if (!Validator.isString(value)) {
      // TODO: Check if formatting works, remove this commented code.
      // throw new ParamError(`Param ${name} must be a string`);
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'String'));
    }
    return true;
  };

  /**
   * This method assert non empty string by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertNonEmptyString = (value: any, name: string): boolean => {
    if (!Validator.isNonEmptyString(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'non empty String'));
    }
    return true;
  };

  /**
   * This method assert Number by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertNumber = (value: any, name: string): boolean => {
    if (!Validator.isNumber(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Number'));
    }
    return true;
  };

  /**
   * This method assert BigInt numbers by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertBigInt = (value: any, name: string): boolean => {
    if (!Validator.isBigInt(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'BigInt'));
    }
    return true;
  };

  /**
   * This method assert Symbol by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertSymbol = (value: any, name: string): boolean => {
    if (!Validator.isSymbol(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Symbol'));
    }
    return true;
  };

  /**
   * This method assert Boolean by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertBoolean = (value: any, name: string): boolean => {
    if (!Validator.isBoolean(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Boolean'));
    }
    return true;
  };

  /**
   * This method assert Object by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertObject = (value: any, name: string): boolean => {
    if (!Validator.isObject(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Object'));
    }
    return true;
  };

  /**
   * This method assert not null Object by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertNotNullObject = (value: any, name: string): boolean => {
    if (!Validator.isNotNullObject(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'NotNullObject'));
    }
    return true;
  };

  /**
   * This method assert Array by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertArray = (value: any, name: string): boolean => {
    if (!Validator.isArray(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Array'));
    }
    return true;
  };

  /**
   * This method assert undefined by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertUndefined = (value: any, name: string): boolean => {
    if (!Validator.isUndefined(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Undefined'));
    }
    return true;
  };

  /**
   * This method assert Null by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertNull = (value: any, name: string): boolean => {
    if (!Validator.isNull(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Null'));
    }
    return true;
  };

  /**
   * This method assert Null or Undefined by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertUndefinedOrNull = (value: any, name: string): boolean => {
    if (!Validator.isUndefinedOrNull(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'undefined or null'));
    }
    return true;
  };

  /**
   * This method assert function by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertFunction = (value: any, name: string): boolean => {
    if (!Validator.isFunction(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Function'));
    }
    return true;
  };

  /**
   * This method assert Date by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertDate = (value: any, name: string): boolean => {
    if (!Validator.isDate(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Date'));
    }
    return true;
  };

  /**
   * This method assert Map by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertMap = (value: any, name: string): boolean => {
    if (!Validator.isMap(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Map'));
    }
    return true;
  };

  /**
   * This method assert WeakMap by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertWeakMap = (value: any, name: string): boolean => {
    if (!Validator.isWeakMap(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'WeakMap'));
    }
    return true;
  };

  /**
   * This method assert Set by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertSet = (value: any, name: string): boolean => {
    if (!Validator.isSet(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'Set'));
    }
    return true;
  };

  /**
   * This method assert WeakSet by returning true or ParamError exception
   * @param {any} value
   * @param {string} name
   * @returns {boolean}
   * @throws {ParamError}
   */
  static assertWeakSet = (value: any, name: string): boolean => {
    if (!Validator.isWeakSet(value)) {
      throw new ParamError(PARAM_ERROR.invalid.format(name, 'WeakSet'));
    }
    return true;
  };
}
