<p align="center">
  <img src="https://raw.githubusercontent.com/DiFronzo/pkce-deno/master/logo/Deno_PKCE.png?token=AHJELDSAZXBUOZYY34Q35B27CXDJO" width="255">
</p>

# pkce-deno
PKCE code verifier and challenge generator for [Deno](https://github.com/denoland/deno). It requires Deno 1.0 or greater.

## Usage

```js
import { create } from 'https://raw.githubusercontent.com/DiFronzo/pkce-deno/master/mod.ts';

const codePair = create();

// {
//   codeVerifier: 'tnsFvonDznrEvywCAryrzozCwmuAxEwDFtDzxnvzErCmumwqrAAEtrtvwCsEzBFvxFnmuvByDBqrnvwsEovtBEosBvtDEzABCDDCutEuwnFAomotrxFuolzwAsEvzBEs',
//   codeChallenge: '4BEE-zDiqCqq89S3rTimRMYZA-oVanxBqrhQ6TnZTZc'
// }
```
