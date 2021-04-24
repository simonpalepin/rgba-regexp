import { comma, number, rgbaRegExp } from "./regexp";

export const numberRGB: RegExp = rgbaRegExp(number, comma);
