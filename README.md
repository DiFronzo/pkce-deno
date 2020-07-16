<p align="center">
  <img src="https://raw.githubusercontent.com/DiFronzo/pkce-deno/master/logo/Deno_PKCE.png" width="255">
</p>

[![Deno version](https://raw.githubusercontent.com/DiFronzo/pkce-deno/a36bcb627bba3ebd4e5a8e0cd97851fe043e7d05/logo/deno_1.svg)](https://deno.land/x/pkce_deno)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# pkce-deno
PKCE code verifier and challenge generator for [Deno](https://github.com/denoland/deno). It requires Deno 1.0 or greater.

## 🚀 Quick Start

```ts
import { create } from 'https://raw.githubusercontent.com/DiFronzo/pkce-deno/master/mod.ts';
// OR import { create } from 'https://deno.land/x/pkce_deno/mod.ts'

const codePair = create();

// {
//   codeVerifier: 'tnsFvonDznrEvywCAryrzozCwmuAxEwDFtDzxnvzErCmumwqrAAEtrtvwCsEzBFvxFnmuvByDBqrnvwsEovtBEosBvtDEzABCDDCutEuwnFAomotrxFuolzwAsEvzBEs',
//   codeChallenge: '4BEE-zDiqCqq89S3rTimRMYZA-oVanxBqrhQ6TnZTZc'
// }
```

## 🏗️ Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Make sure that `deno test` and `deno fmt` do not generate errors
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Licensing

Icon library by [Icons8](https://icons8.com/).

This project is under [MIT License](/LICENSE).
