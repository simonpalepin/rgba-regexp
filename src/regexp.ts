export const number: RegExp = /((?:255\.[0]+|255|(?:25[0-4]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])(?:\.\d+)?|\.\d+))/;
export const percent: RegExp = /((?:100\.[0]+|100|(?:[0-9]|[1-9][0-9])(?:\.\d+)?|\.\d+)%|[0]?\.\d+|1\.[0]+|1|0)/;
export const comma: RegExp = /\s*,\s*/;
export const space: RegExp = /\s*/;
export const alpha: RegExp = new RegExp(`(?:\\s*,\\s*${percent.source})`);
export const alphaCss4: RegExp = new RegExp(`(?:\\s*\\/\\s*${percent.source})`);

export function rgbaRegExp(type: RegExp, join: RegExp, alpha?: RegExp): RegExp {
  const parts = 
    `^${alpha ? 'rgba' : 'rgb'}\\(` +
    type.source +
    `${join.source}${type.source}`.repeat(2) +
    `${alpha ? alpha.source : ``}` +
    `\\)`
  ;
  return new RegExp(parts);
}
