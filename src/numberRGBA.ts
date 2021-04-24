import { alpha, comma, number, rgbaRegExp } from "./regexp";

export const numberRGBA: RegExp = rgbaRegExp(number, comma, alpha);
