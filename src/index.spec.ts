import { numberRGBA, percentRGBA, numberRGB, percentRGB, numberRGBACss4, percentRGBACss4 } from './';

describe('Generated RGB/RGBA regexp', () => {
  it('should match rgb(<number>, <number>, <number>)', () => {
    expect(numberRGB.test('rgb(100, 100.55, 255.0)')).toEqual(true);
    expect(numberRGB.test('rgb(0.100, .55, 0)')).toEqual(true);
  });

  it('should match rgb(<percent>, <percent>, <percent>)', () => {
    expect(percentRGB.test('rgb(100%, 10.55%, 25%)')).toEqual(true);
    expect(percentRGB.test('rgb(0.100%, .55%, 0.1%)')).toEqual(true);
    expect(percentRGB.test('rgb(255, .55%, 0.1%)')).toEqual(false);
  });

  it('should match rgba(<number>, <number>, <number>, <alpha-value>)', () => {
    expect(numberRGBA.test('rgba(0.100, .55, 0, .22)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, 1.00)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, 1.1)')).toBeFalsy();
  });

  it('should match rgba(<number>, <number>, <number>, <percent>)', () => {
    expect(numberRGBA.test('rgba(100, 100.55, 255.0, 100.0%)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, 1.22%)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, .22%)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0, 0%)')).toEqual(true);
    expect(numberRGBA.test('rgba(0.100, .55, 0)')).toBeFalsy();
  });

  it('should match rgba(<percent>, <percent>, <percent>, <percent>)', () => {
    expect(percentRGBA.test('rgba(100%, 10.55%, 0%, 100.0%)')).toEqual(true);
    expect(percentRGBA.test('rgba(0.100%, .55%, 0%, 1.22%)')).toEqual(true);
  });

  it('should match rgba(<percent>, <percent>, <percent>, <number>)', () => {
    expect(percentRGBA.test('rgba(100%, 10.55%, 0%, 1)')).toEqual(true);
    expect(percentRGBA.test('rgba(0.100%, .55%, 0%, .22)')).toEqual(true);
  });

  it('should match css4 rgba(<percent> <percent> <percent> / <number>)', () => {
    expect(percentRGBACss4.test('rgba(100% 10.55% 0% / 1)')).toEqual(true);
    expect(percentRGBACss4.test('rgba(0.100% .55% 0%  /.22)')).toEqual(true);
  });

  it('should match css4 rgba(<percent> <percent> <percent> / <percent>)', () => {
    expect(percentRGBACss4.test('rgba(100% 10.55% 0% / 1%)')).toEqual(true);
    expect(percentRGBACss4.test('rgba(0.100% .55% 0%  /.22%)')).toEqual(true);
  });

  it('should match css4 rgba(<number> <number> <number> / <number>)', () => {
    expect(numberRGBACss4.test('rgba(100 10.55 255 / 1)')).toEqual(true);
    expect(numberRGBACss4.test('rgba(0.100 .55 0  /.22)')).toEqual(true);
  });

  it('should match css4 rgba(<number> <number> <number> / <percent>)', () => {
    expect(numberRGBACss4.test('rgba(100 10.55 255 / 1%)')).toEqual(true);
    expect(numberRGBACss4.test('rgba(0.100 .55 0  /.22%)')).toEqual(true);
  });

  it('should not match rgba without alpha', () => {
    expect(numberRGBA.test('rgba(0.100, .55, 100.1)')).toBeFalsy();
  });

  it('should not match rgb with alpha', () => {
    expect(numberRGB.test('rgb(0.100, .55, 100.1, 1)')).toBeFalsy();
  });
});
