const num = /((?:255\.[0]+|255|(?:25[0-4]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])(?:\.\d+)?|\.\d+))/;
const percent = /((?:100\.[0]+|100|(?:[0-9]|[1-9][0-9])(?:\.\d+)?|\.\d+)%|[0]?\.\d+|1\.[0]+|1|0)/;
const comma = /\s*,\s*/;
const space = /\s*/;
const alpha = new RegExp(`(?:\\s*,\\s*${percent.source})`);
const alphaCss4 = new RegExp(`(?:\\s*\\/\\s*${percent.source})`);

export const numRGBA = rgbaRegExp(num, comma, alpha);
export const percentRGBA = rgbaRegExp(percent, comma, alpha);
export const numRGB = rgbaRegExp(num, comma);
export const percentRGB = rgbaRegExp(percent, comma);
export const numRGBACss4 = rgbaRegExp(num, space, alphaCss4);
export const percentRGBACss4 = rgbaRegExp(percent, space, alphaCss4);

function repeat(value: string, times: number) {
  if (!times || times < 0) return '';
  const values = [];
  while(values.length < times) {
    values.push(value);
  }
  return values.join('');
}

function rgbaRegExp(type: RegExp, join: RegExp, alpha?: RegExp) {
  const parts = 
    `^${alpha ? 'rgba' : 'rgb'}\\(` +
    type.source +
    repeat(`${join.source}${type.source}`, 2) +
    `${alpha ? alpha.source : ``}` +
    `\\)`
  ;
  return new RegExp(parts);
}
