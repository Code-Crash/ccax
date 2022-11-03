import ccax from '../index';

describe('Check Boolean And Optional Boolean Assertion Type', () => {
  /**
   * Boolean Assertion Tests
   */
  test('Boolean: Boolean Valid Assertion', () => {
    expect(ccax.assertBoolean(true, 'name')).toBeTruthy();
  });

  /**
   * Optional Boolean Assertion Tests
   */
  test('OptionalBoolean: Optional Boolean Valid Assertion', () => {
    expect(ccax.assertOptionalBoolean(true, 'name')).toBeTruthy();
  });
});
