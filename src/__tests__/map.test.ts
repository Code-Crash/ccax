import ccax from '../index';

describe('Check Map And Optional Map Assertion Type', () => {
  /**
   * Map Assertion Tests
   */
  test('Map: Map Valid Assertion', () => {
    let map = new Map();
    map.set('A', 1);
    map.set('B', 2);
    expect(ccax.assertMap(map, 'name')).toBeTruthy();
  });

  /**
   * Optional Map Assertion Tests
   */
  test('OptionalMap: Optional Map Valid Assertion', () => {
    let map = new Map();
    map.set('A', 1);
    map.set('B', 2);
    expect(ccax.assertOptionalMap(map, 'name')).toBeTruthy();
  });
});
