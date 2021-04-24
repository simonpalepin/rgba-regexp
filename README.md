## Goal
Provide bulletproof RGB/RGBA regexp with css4 syntax support

| RegExp | Color Space | Matches | Css Color Value
| :------ | :------ | :------- | :------- |
| **numberRGB** | **`rgb`** | `rgb(255, 255, 255)` | `<number>, <number>, <number>` |
| **numberRGB** | **`rgb`** | `rgb(.5, 25.5, 255.0)` | "&nbsp;&nbsp;&nbsp;&nbsp;" |
| **numberRGBA** | **`rgba`** | `rgba(255, 25.5, 255, 1%)` | `<number>, <number>, <number>, <alpha-value>` |
| **numberRGBACss4** | **`rgba`** | `rgba(255, 25.5, 255, 1)` | "&nbsp;&nbsp;&nbsp;&nbsp;" |
| **percentRGB** | **`rgb`** | `rgb(100%, 100.0%, .2%)` | `<percent>, <percent>, <percent>, <alpha-value>` |
| **percentRGB** | **`rgb`** | `rgb(100%, 100.0%, .2)` | "&nbsp;&nbsp;&nbsp;&nbsp;" |
| **percentRGBA** | **`rgba`** | `rgba(100%, 100.0%, 10%, .2%)` | "&nbsp;&nbsp;&nbsp;&nbsp;" |
| **percentRGBACss4** | **`rgba`** | `rgba(255 100.0 35 /.2%)` | `<number> <number> <number> /<alpha-value>` |
| **percentRGBACss4** | **`rgba`** | `rgba(100% 100.0% / .2)` | `<percent> <percent> <percent> /<alpha-value>` |

## Installation

```bash
npm i https://github.com/simonpalepin/rgba-regexp.git
```
OR
```bash
yarn add https://github.com/simonpalepin/rgba-regexp.git
```

### Usage
```typescript
import { numRGBA, percentRGBA, numRGB, percentRGB, numRGBACss4, percentRGBACss4 } from '@simonpalepin/rgba-regexp';

if(numRGBA.test('rgb(255, 100, 20.5)')) {
  ...
}
```

### Comments?
Please don't hesitate