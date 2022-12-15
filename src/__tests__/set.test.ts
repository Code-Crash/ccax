import ParamError from '../classes/param-error';
import ccax from '../index';

describe('Check Set And Optional Set Assertion Type', () => {
  /**
   * Set Assertion Tests
   */
  test('Set: Set Valid Assertion', () => {
    let set = new Set();
    set.add(10);
    set.add('string');
    expect(ccax.assertSet(set, 'value')).toBeTruthy();
  });

  /**
   * Optional Set Assertion Tests
   */
  test('OptionalSet: Optional Set Valid Assertion', () => {
    let set = new Set();
    set.add(10);
    set.add('string');
    expect(ccax.assertOptionalSet(set, 'value')).toBeTruthy();
  });
});
