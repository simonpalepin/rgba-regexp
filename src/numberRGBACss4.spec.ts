import { numberRGBACss4 } from "./numberRGBACss4";

describe('numberRGBACss4 regular expression with capture groups', () => {
  it('should match css4 rgba(<number> <number> <number> / <number>)', () => {
    expect(numberRGBACss4.test('rgba(100 10.55 255 / 1)')).toEqual(true);
    expect(numberRGBACss4.test('rgba(0.100 .55 0  /.22)')).toEqual(true);
  });
  
  it('should match css4 rgba(<number> <number> <number> / <percent>)', () => {
    expect(numberRGBACss4.test('rgba(100 10.55 255 / 1%)')).toEqual(true);
    expect(numberRGBACss4.test('rgba(0.100 .55 0  /.22%)')).toEqual(true);
  });
});
