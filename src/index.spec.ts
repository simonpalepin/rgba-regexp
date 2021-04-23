import { numRGBA, percentRGBA, numRGB, percentRGB, numRGBACss4, percentRGBACss4 } from './';

describe('Generated RGB/RGBA regexp', () => {
  it('should match rgb(<number>, <number>, <number>)', () => {
    expect(numRGB.test('rgb(100, 100.55, 255.0)')).toEqual(true);
    expect(numRGB.test('rgb(0.100, .55, 0)')).toEqual(true);
  });

  it('should match rgb(<percent>, <percent>, <percent>)', () => {
    expect(percentRGB.test('rgb(100%, 10.55%, 25%)')).toEqual(true);
    expect(percentRGB.test('rgb(0.100%, .55%, 0.1%)')).toEqual(true);
    expect(percentRGB.test('rgb(255, .55%, 0.1%)')).toEqual(false);
  });

  it('should match rgba(<number>, <number>, <number>, <alpha-value>)', () => {
    expect(numRGBA.test('rgba(0.100, .55, 0, .22)')).toEqual(true);
    expect(numRGBA.test('rgba(0.100, .55, 0, 1.00)')).toEqual(true);
    expect(numRGBA.test('rgba(0.100, .55, 0, 1.1)')).toBeFalsy();
  });

  it('should match rgba(<number>, <number>, <number>, <percent>)', () => {
    expect(numRGBA.test('rgba(100, 100.55, 255.0, 100.0%)')).toEqual(true);
    expect(numRGBA.test('rgba(0.100, .55, 0, 1.22%)')).toEqual(true);
    expect(numRGBA.test('rgba(0.100, .55, 0, .22%)')).toEqual(true);
    expect(numRGBA.test('rgba(0.100, .55, 0, 0%)')).toEqual(true);
    expect(numRGBA.test('rgba(0.100, .55, 0)')).toBeFalsy();
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
    expect(numRGBACss4.test('rgba(100 10.55 255 / 1)')).toEqual(true);
    expect(numRGBACss4.test('rgba(0.100 .55 0  /.22)')).toEqual(true);
  });

  it('should match css4 rgba(<number> <number> <number> / <percent>)', () => {
    expect(numRGBACss4.test('rgba(100 10.55 255 / 1%)')).toEqual(true);
    expect(numRGBACss4.test('rgba(0.100 .55 0  /.22%)')).toEqual(true);
  });

  it('should not match rgba without alpha', () => {
    expect(numRGBA.test('rgba(0.100, .55, 100.1)')).toBeFalsy();
  });

  it('should not match rgb with alpha', () => {
    expect(numRGB.test('rgb(0.100, .55, 100.1, 1)')).toBeFalsy();
  });
});
