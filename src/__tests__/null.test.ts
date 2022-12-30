import ccax from '../index';

describe('Check Null And Optional Null Assertion Type', () => {
  /**
   * Null Assertion Tests
   */
  test('Null: Null Valid Assertion', () => {
    expect(ccax.assertNull(null, 'name')).toBeTruthy();
  });

  /**
   * Optional Null Assertion Tests
   */
  test('OptionalNull: Optional Null Valid Assertion', () => {
    expect(ccax.assertOptionalNull(null, 'name')).toBeTruthy();
  });
});
