import { comma, percent, rgbaRegExp } from "./regexp";

export const percentRGB: RegExp = rgbaRegExp(percent, comma);
