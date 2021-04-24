import { percentRGBACss4 } from "./percentRGBACss4";

describe('percentRGBACss4 regular expression with capture groups', () => {
  it('should match css4 rgba(<percent> <percent> <percent> / <number>)', () => {
    expect(percentRGBACss4.test('rgba(100% 10.55% 0% / 1)')).toEqual(true);
    expect(percentRGBACss4.test('rgba(0.100% .55% 0%  /.22)')).toEqual(true);
    expect(percentRGBACss4.test('rgba(0.100% .55% 0%  .22)')).toEqual(false);
  });
  
  it('should match css4 rgba(<percent> <percent> <percent> / <percent>)', () => {
    expect(percentRGBACss4.test('rgba(100% 10.55% 0% / 1%)')).toEqual(true);
    expect(percentRGBACss4.test('rgba(0.100% .55% 0%  /.22%)')).toEqual(true);
    expect(percentRGBACss4.test('rgba(0.100% .55% 0% .22%)')).toEqual(false);
  });
});
