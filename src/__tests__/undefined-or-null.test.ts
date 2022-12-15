import { ParamError } from '../components/classes';
import ccax from '../index';

describe('Check UndefinedOrNull And Optional UndefinedOrNull Assertion Type', () => {
  /**
   * UndefinedOrNull Assertion Tests
   */
  test('UndefinedOrNull: UndefinedOrNull Valid Assertion', () => {
    expect(ccax.assertUndefinedOrNull(null, 'value')).toBeTruthy();
  });

  /**
   * Optional UndefinedOrNull Assertion Tests
   */
  test('OptionalUndefinedOrNull: Optional UndefinedOrNull Valid Assertion', () => {
    expect(ccax.assertOptionalUndefinedOrNull(null, 'value')).toBeTruthy();
  });
});
