import { ParamError } from '../components/classes';
import Assertor from './assertor';
import { PARAM_ERROR } from './constants';
import InstanceValidator from './instance-validator';
import OptionalAssertor from './optional-assertor';

export default class InstanceAssertor extends OptionalAssertor {

  /**
   * This method assert instance by returning true or ParamError exception
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
      throw new ParamError(PARAM_ERROR.instanceInvalid.format(valueName, instanceName));
    }
    return true;
  };
}
