## Goal
Provide bulletproof RGB/RGBA regexp with css4 syntax support

## Installation

```bash
npm i https://github.com/simonpalepin/rgba-regexp.git
```
OR
```bash
yarn add https://github.com/simonpalepin/rgba-regexp.git
```

### Usage
```bash
import { numRGBA, percentRGBA, numRGB, percentRGB, numRGBACss4, percentRGBACss4 } from 'rgba-regexp';

if(numRGBA.test('rgb(255, 100, 20.5)')) {
  ...
}
```

### Comments?
Please don't hesitate