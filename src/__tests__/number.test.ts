import ParamError from '../classes/param-error';
import ccax from '../index';

describe('Check Number And Optional Number Assertion Type', () => {
  /**
   * Number Assertion Tests
   */
  test('Number: Number Valid Assertion', () => {
    expect(ccax.assertNumber(10, 'value')).toBeTruthy();
  });

  /**
   * Optional Number Assertion Tests
   */
  test('OptionalNumber: Optional Number Valid Assertion', () => {
    expect(ccax.assertOptionalNumber(20, 'value')).toBeTruthy();
  });
});
