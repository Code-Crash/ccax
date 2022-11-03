import ccax from '../index';

describe('Check Date And Optional Date Assertion Type', () => {
  /**
   * Date Assertion Tests
   */
  test('Date: Date Valid Assertion', () => {
    expect(ccax.assertDate(new Date('10/19/2022'), 'name')).toBeTruthy();
  });

  /**
   * Optional Date Assertion Tests
   */
  test('OptionalDate: Optional Date Valid Assertion', () => {
    expect(ccax.assertOptionalDate(new Date('10/19/2022'), 'name')).toBeTruthy();
  });
});
