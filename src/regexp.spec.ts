import { alpha, alphaCss4, comma, number, space } from "./regexp";

describe('Testing regex parts used to construct all rgba regexp', () => {
  it('should match alpha section of the rgba function`', () => {
    expect(alpha.test(' , 1')).toEqual(true);
    expect(alpha.test(' , 0')).toEqual(true);
    expect(alpha.test(' , 1.0')).toEqual(true);
    expect(alpha.test(' , .25')).toEqual(true);
    expect(alpha.test(' , 100%')).toEqual(true);
    expect(alpha.test(' 1.25')).toEqual(false);
    expect(alpha.test(' 100.25%')).toEqual(false);
  });

  it('should match css4 alpha section of the rgba function`', () => {
    expect(alphaCss4.test(' / 1')).toEqual(true);
    expect(alphaCss4.test(' / 0')).toEqual(true);
    expect(alphaCss4.test(' / 1.0')).toEqual(true);
    expect(alphaCss4.test(' / .25')).toEqual(true);
    expect(alphaCss4.test(' / 100%')).toEqual(true);
    expect(alphaCss4.test(' / 1.25')).toEqual(true);
    expect(alphaCss4.test(' / 100.25%')).toEqual(true);
    expect(alphaCss4.test(' 1.25')).toEqual(false);
    expect(alphaCss4.test(' 100.25%')).toEqual(false);
  });

  it('should match a valid rgb/rgba percent between `0` and `100` and allows `decimals`', () => {
    expect(number.test('100%')).toEqual(true);
    expect(number.test('100.0%')).toEqual(true);
    expect(number.test('25.5%')).toEqual(true);
    expect(number.test('0.5%')).toEqual(true);
    expect(number.test('.5%')).toEqual(true);
    expect(number.test('0.0%')).toEqual(true);
    expect(comma.test('100.01%')).toEqual(false);
  });

  it('should match a valid rgb/rgba number between `0` and `255` and allows `decimals`', () => {
    expect(number.test('255')).toEqual(true);
    expect(number.test('255.0')).toEqual(true);
    expect(number.test('25.5')).toEqual(true);
    expect(number.test('0.5')).toEqual(true);
    expect(number.test('.5')).toEqual(true);
    expect(number.test('0.0')).toEqual(true);
    expect(comma.test('255.01')).toEqual(false);
  });

  it('should match `0 or many spaces` followed by `comma` and `0 or many spaces`', () => {
    expect(comma.test('  , ')).toEqual(true);
    expect(comma.test(',')).toEqual(true);
    expect(comma.test(' ')).toEqual(false);
  });

  it('should match `0 or many spaces`', () => {
    expect(space.test('')).toEqual(true);
    expect(space.test(' ')).toEqual(true);
    expect(space.test('  ')).toEqual(true);
  });
});
