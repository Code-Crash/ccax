import ParamError from '../classes/param-error';
import ccax from '../index';

describe('Check Undefined And Optional Undefined Assertion Type', () => {
  /**
   * Undefined Assertion Tests
   */
  test('Undefined: Undefined Valid Assertion', () => {
    expect(ccax.assertUndefined(undefined, 'value')).toBeTruthy();
  });

  /**
   * Optional Undefined Assertion Tests
   */
  test('OptionalUndefined: Optional Undefined Valid Assertion', () => {
    expect(ccax.assertOptionalUndefined(undefined, 'value')).toBeTruthy();
  });
});
