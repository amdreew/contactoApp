// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {IEnvironment} from './environment.model';

export const environment: IEnvironment = {
  production: false,
  security: true,
  encriptionConfig: {
    encriptionKey: '9zgxN}Ca!:,#>tE#3{![KDV{r0uw+Fh',
    encriptionType: {
      base46: 'base64',
      aes: 'aes',
      des: 'des',
      rabbit: 'rabbit',
      rc4: 'rc4',
      empty: ''
    },
    encrypt: 'encrypt',
    decrypt: 'decrypt'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
