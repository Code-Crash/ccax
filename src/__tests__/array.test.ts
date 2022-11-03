import ccax from '../index';

describe('Check Array And Optional Array Assertion Type', () => {
  /**
   * Array Assertion Tests
   */
  test('Array: Array Valid Assertion', () => {
    expect(ccax.assertArray([1, 2, 3], 'name')).toBeTruthy();
  });

  /**
   * Optional Array Assertion Tests
   */
  test('OptionalArray: Optional Array Valid Assertion', () => {
    expect(ccax.assertOptionalArray([1, 2, 3], 'name')).toBeTruthy();
  });
});
