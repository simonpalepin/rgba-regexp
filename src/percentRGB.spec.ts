import { percentRGB } from "./percentRGB";

describe('percentRGB regular expression with capture groups', () => {
  it('should match rgb(<percent>, <percent>, <percent>)', () => {
    expect(percentRGB.test('rgb(100%, 10.55%, 25%)')).toEqual(true);
    expect(percentRGB.test('rgb(0.100%, .55%, 0.1%)')).toEqual(true);
    expect(percentRGB.test('rgb(255, .55%, 0.1%)')).toEqual(false);
  });
});
