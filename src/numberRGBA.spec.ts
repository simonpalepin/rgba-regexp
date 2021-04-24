import { numberRGBA } from "./numberRGBA";

describe('numberRGBA regular expression with capture groups', () => {
  it('should match rgba(<number>, <number>, <number>, <alpha-value>)', () => {
    expect(numberRGBA.test('rgba(0.100, .55, 0, .22)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, 1.00)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, 1.1)')).toBeFalsy();
  });

  it('should match rgba(<number>, <number>, <number>, <alpha-value>)', () => {
    expect(numberRGBA.test('rgba(100, 100.55, 255.0, 100.0%)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, 1.22%)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, .22%)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, 0%)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0)')).toBeFalsy();
    expect(numberRGBA.test('rgb(0.100, .55, 0, 1)')).toEqual(false);
  });

  it('should not match rgba without alpha', () => {
    expect(numberRGBA.test('rgba(0.100, .55, 100.1)')).toBeFalsy();
  });
});
