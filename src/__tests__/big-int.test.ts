import ccax from '../index';

describe('Check BigInt And Optional BigInt Assertion Type', () => {
  /**
   * BigInt Assertion Tests
   */
  test('BigInt: BigInt Valid Assertion', () => {
    expect(ccax.assertBigInt(123123123124n, 'value')).toBeTruthy();
  });

  /**
   * Optional BigInt Assertion Tests
   */
  test('OptionalBigInt: Optional BigInt Valid Assertion', () => {
    expect(ccax.assertOptionalBigInt(123123123123n, 'value')).toBeTruthy();
  });
});
