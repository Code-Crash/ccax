import ccax from '../index';

describe('Check Function And Optional Function Assertion Type', () => {
  /**
   * Function Assertion Tests
   */
  test('Function: Function Valid Assertion', () => {
    expect(ccax.assertFunction(() => {}, 'name')).toBeTruthy();
  });

  /**
   * Optional Function Assertion Tests
   */
  test('OptionalFunction: Optional Function Valid Assertion', () => {
    expect(ccax.assertOptionalFunction(() => {}, 'name')).toBeTruthy();
  });
});
