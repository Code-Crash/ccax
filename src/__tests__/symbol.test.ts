import { ParamError } from '../components/classes';
import ccax from '../index';

describe('Check Symbol And Optional Symbol Assertion Type', () => {
  /**
   * Symbol Assertion Tests
   */
  test('Symbol: Symbol Valid Assertion', () => {
    expect(ccax.assertSymbol(Symbol(10), 'value')).toBeTruthy();
  });

  /**
   * Optional Symbol Assertion Tests
   */
  test('OptionalSymbol: Optional Symbol Valid Assertion', () => {
    expect(ccax.assertOptionalSymbol(Symbol('code'), 'value')).toBeTruthy();
  });
});
