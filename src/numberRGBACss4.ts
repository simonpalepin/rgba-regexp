import { alphaCss4, number, rgbaRegExp, space } from "./regexp";

export const numberRGBACss4: RegExp = rgbaRegExp(number, space, alphaCss4);
