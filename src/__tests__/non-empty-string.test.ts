import { ParamError } from '../components/classes';
import ccax from '../index';

describe('Check NonEmptyString And Optional NonEmptyString Assertion Type', () => {
  /**
   * NonEmptyString Assertion Tests
   */
  test('NonEmptyString: NonEmptyString Valid Assertion', () => {
    expect(ccax.assertNonEmptyString('Code', 'name')).toBeTruthy();
  });

  /**
   * Optional NonEmptyString Assertion Tests
   */
  test('OptionalNonEmptyString: Optional NonEmptyString Valid Assertion', () => {
    expect(ccax.assertOptionalNonEmptyString('Code', 'name')).toBeTruthy();
  });
});
