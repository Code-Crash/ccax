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
   * Number As String Assertion Tests
   */
  test('Number: Number As String Valid Assertion', () => {
    expect(ccax.assertNumberAsString('10', 'value')).toBeTruthy();
  });

  /**
   * Number As String Assertion Tests
   */
  test('Number: Number As String Invalid Assertion', () => {
    expect(() => {
      ccax.assertNumberAsString('A', 'value');
    }).toThrow(`Param 'value' must be a Number`);
  });

  /**
   * Optional Number Assertion Tests
   */
  test('OptionalNumber: Optional Number Valid Assertion', () => {
    expect(ccax.assertOptionalNumber(20, 'value')).toBeTruthy();
  });

  /**
   * Optional Number As String Assertion Tests
   */
  test('OptionalNumber: Optional Number As String Valid Assertion', () => {
    expect(ccax.assertOptionalNumberAsString('10', 'value')).toBeTruthy();
  });

  /**
   * Optional Number As String Assertion Tests
   */
  test('OptionalNumber: Optional Number As String Invalid Assertion', () => {
    expect(() => {
      ccax.assertOptionalNumberAsString('A', 'value');
    }).toThrow(`Param 'value' must be either undefined or Number`);
  });
});
