import ccax from '../index';

describe('Check WeakSet And Optional WeakSet Assertion Type', () => {
  /**
   * WeakSet Assertion Tests
   */
  test('WeakSet: WeakSet Valid Assertion', () => {
    let map = new WeakSet();
    map.add({ A: 1 });
    map.add({ B: 2 });
    expect(ccax.assertWeakSet(map, 'value')).toBeTruthy();
  });

  /**
   * Optional WeakSet Assertion Tests
   */
  test('OptionalWeakSet: Optional WeakSet Valid Assertion', () => {
    let map = new WeakSet();
    map.add({ A: 1 });
    map.add({ B: 2 });
    expect(ccax.assertOptionalWeakSet(map, 'value')).toBeTruthy();
  });
});
