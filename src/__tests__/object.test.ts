import { ParamError } from '../components/classes';
import ccax from '../index';

describe('Check Object And Optional Object Assertion Type', () => {
  /**
   * Object Assertion Tests
   */
  test('Object: Object Valid Assertion', () => {
    expect(ccax.assertObject(null, 'value')).toBeTruthy();
  });

  /**
   * Optional Object Assertion Tests
   */
  test('OptionalObject: Optional Object Valid Assertion', () => {
    expect(ccax.assertOptionalObject(null, 'value')).toBeTruthy();
  });

  /**
   * NotNullObject Assertion Tests
   */
  test('NotNullObject: NotNullObject Valid Assertion', () => {
    expect(ccax.assertNotNullObject({}, 'value')).toBeTruthy();
  });

  /**
   * Optional Object Assertion Tests
   */
  test('OptionalNotNullObject: Optional NotNullObject Valid Assertion', () => {
    expect(ccax.assertOptionalNotNullObject(null, 'value')).toBeTruthy();
  });

});
