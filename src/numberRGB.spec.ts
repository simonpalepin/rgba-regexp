import { numberRGB } from "./numberRGB";

describe('numberRGB regular expression with perfect capture groups', () => {
  it('should match rgb(<number>, <number>, <number>)', () => {
    expect(numberRGB.test('rgb(100, 100.55, 255.0)')).toEqual(true);
    expect(numberRGB.test('rgb(0.100, .55, 0)')).toEqual(true);
  });

  it('should not match rgb function with alpha argument', () => {
    expect(numberRGB.test('rgb(0.100, .55, 100.1, 1)')).toBeFalsy();
  });
});
