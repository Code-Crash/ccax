import { ParamError } from '../components/classes';
import ccax from '../index';

describe('Check String And Optional String Assertion Type', () => {
  /**
   * String Assertion Tests
   */
  test('String: String Valid Assertion', () => {
    expect(ccax.assertString('Valid String', 'name')).toBeTruthy();
  });

  test('String: Empty Valid String Assertion', () => {
    expect(ccax.assertString('', 'name')).toBeTruthy();
  });

  test('String: Undefined Assertion, Should Throw ParamError Exception!', () => {
    expect(() => {
      ccax.assertString(undefined, 'name');
    }).toThrow(ParamError);
  });

  test('String: Null Assertion, Should Throw ParamError Exception!', () => {
    expect(() => {
      ccax.assertString(null, 'name');
    }).toThrow('Param name must be a String');
  });

  test('String: Object Assertion, Should Throw ParamError Exception!', () => {
    expect(() => {
      ccax.assertString({}, 'name');
    }).toThrow('Param name must be a String');
  });

  /**
   * Optional String Assertion Tests
   */
  test('OptionalString: Optional String Valid Assertion', () => {
    expect(ccax.assertOptionalString('Valid String', 'name')).toBeTruthy();
  });

  test('OptionalString: Empty Valid Optional String Assertion', () => {
    expect(ccax.assertOptionalString('', 'name')).toBeTruthy();
  });

  test('OptionalString: Undefined Assertion For Optional String, Should Throw ParamError Exception!', () => {
    expect(() => {
      ccax.assertOptionalString(undefined, 'name');
    }).toBeTruthy();
  });

  test('OptionalString: Null Assertion For Optional String, Should Throw ParamError Exception!', () => {
    expect(() => {
      ccax.assertOptionalString(null, 'name');
    }).toBeTruthy();
  });

  test('OptionalString: Object Assertion for Optional String, Should Throw ParamError Exception!', () => {
    expect(() => {
      ccax.assertOptionalString({}, 'name');
    }).toThrow('Param name must be either undefined or String');
  });
});
