# pkce-deno
PKCE code verifier and challenge generator for Deno.

## Usage

```js
import { create } from 'https://raw.githubusercontent.com/DiFronzo/pkce-deno/master/mod.ts';

const codePair = create();

// {
//   codeVerifier: 'tnsFvonDznrEvywCAryrzozCwmuAxEwDFtDzxnvzErCmumwqrAAEtrtvwCsEzBFvxFnmuvByDBqrnvwsEovtBEosBvtDEzABCDDCutEuwnFAomotrxFuolzwAsEvzBEs',
//   codeChallenge: '4BEE-zDiqCqq89S3rTimRMYZA-oVanxBqrhQ6TnZTZc'
// }
```
