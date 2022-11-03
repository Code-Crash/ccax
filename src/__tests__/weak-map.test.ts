import { ParamError } from '../components/classes';
import ccax from '../index';

describe('Check WeakMap And Optional WeakMap Assertion Type', () => {
  /**
   * WeakMap Assertion Tests
   */
  test('WeakMap: WeakMap Valid Assertion', () => {
    let map = new WeakMap();
    map.set({ A: 1 }, 1);
    map.set({ B: 2 }, 2);
    expect(ccax.assertWeakMap(map, 'value')).toBeTruthy();
  });

  /**
   * Optional WeakMap Assertion Tests
   */
  test('OptionalWeakMap: Optional WeakMap Valid Assertion', () => {
    let map = new WeakMap();
    map.set({ A: 1 }, 1);
    map.set({ B: 2 }, 2);
    expect(ccax.assertOptionalWeakMap(map, 'value')).toBeTruthy();
  });

});
