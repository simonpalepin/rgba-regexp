import { alpha, comma, percent, rgbaRegExp } from "./regexp";

export const percentRGBA: RegExp = rgbaRegExp(percent, comma, alpha);
