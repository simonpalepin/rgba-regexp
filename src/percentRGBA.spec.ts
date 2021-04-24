import { percentRGBA } from "./percentRGBA";

describe('percentRGBA regular expression with capture groups', () => {
  it('should match rgba(<percent>, <percent>, <percent>, <percent>)', () => {
    expect(percentRGBA.test('rgba(100%, 10.55%, 0%, 100.0%)')).toEqual(true);
    expect(percentRGBA.test('rgba(0.100%, .55%, 0%, 1.22%)')).toEqual(true);
    expect(percentRGBA.test('rgba(255, .55%, 0%, 1.22%)')).toEqual(false);
  });

  it('should match rgba(<percent>, <percent>, <percent>, <number>)', () => {
    expect(percentRGBA.test('rgba(100%, 10.55%, 0%, 1)')).toEqual(true);
    expect(percentRGBA.test('rgba(0.100%, .55%, 0%, .22)')).toEqual(true);
    expect(percentRGBA.test('rgba(0.100%, .55%, 0, .22)')).toEqual(false);
  });
});
