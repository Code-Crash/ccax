import InstanceError from '../classes/instance-error';
import Assertor from './assertor';
import { PARAM_ERROR } from './constants';
import InstanceValidator from './instance-validator';

export default class InstanceAssertor {
  /**
   * This method assert instance by returning true or InstanceError exception
   * @param {any} value
   * @param {string} valueName
   * @param {any} instance
   * @param {string} instanceName
   * @returns {boolean}
   */
  static assertInstanceOf = (value: any, valueName: string, instance: any, instanceName: string): boolean => {
    // NOTE: First we can validate if the names are string only
    Assertor.assertNonEmptyString(valueName, 'valueName');
    Assertor.assertNonEmptyString(instanceName, 'instanceName');
    if (!InstanceValidator.isInstanceOf(value, instance)) {
      throw new InstanceError(PARAM_ERROR.instanceInvalid.format(valueName, instanceName));
    }
    return true;
  };
}
