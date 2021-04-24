const number: RegExp = /((?:255\.[0]+|255|(?:25[0-4]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])(?:\.\d+)?|\.\d+))/;
const percent: RegExp = /((?:100\.[0]+|100|(?:[0-9]|[1-9][0-9])(?:\.\d+)?|\.\d+)%|[0]?\.\d+|1\.[0]+|1|0)/;
const comma: RegExp = /\s*,\s*/;
const space: RegExp = /\s*/;
const alpha: RegExp = new RegExp(`(?:\\s*,\\s*${percent.source})`);
const alphaCss4: RegExp = new RegExp(`(?:\\s*\\/\\s*${percent.source})`);

function rgbaRegExp(type: RegExp, join: RegExp, alpha?: RegExp): RegExp {
  const parts = 
    `^${alpha ? 'rgba' : 'rgb'}\\(` +
    type.source +
    `${join.source}${type.source}`.repeat(2) +
    `${alpha ? alpha.source : ``}` +
    `\\)`
  ;
  return new RegExp(parts);
}

export const numberRGBA: RegExp = rgbaRegExp(number, comma, alpha);
export const percentRGBA: RegExp = rgbaRegExp(percent, comma, alpha);
export const numberRGB: RegExp = rgbaRegExp(number, comma);
export const percentRGB: RegExp = rgbaRegExp(percent, comma);
export const numberRGBACss4: RegExp = rgbaRegExp(number, space, alphaCss4);
export const percentRGBACss4: RegExp = rgbaRegExp(percent, space, alphaCss4);
