import {getTsconfig, createPathsMatcher} from 'get-tsconfig';

const tsconfigCurrent = getTsconfig('.', 'tsconfig.json');
const tsconfigNuxt3_5 = getTsconfig('.', 'tsconfig.nuxt35.json');
const tsconfigNuxt3_6 = getTsconfig('.', 'tsconfig.nuxt36.json');
const tsconfigNuxt3_7 = getTsconfig('.', 'tsconfig.nuxt37.json');

const PATH_TO_RESOLVE = '#imports';

console.log({
  // current: {
  //   baseUrl: tsconfigCurrent.config.compilerOptions.baseUrl,
  //   [pathToResolve]: createPathsMatcher(tsconfigCurrent)(pathToResolve),
  // },
  tsconfigNuxt3_5: {
    baseUrl: tsconfigNuxt3_5.config.compilerOptions.baseUrl,
    [PATH_TO_RESOLVE]: createPathsMatcher(tsconfigNuxt3_5)(PATH_TO_RESOLVE),
  },
  // tsconfigNuxt3_6: {
  //   baseUrl: tsconfigNuxt3_6.config.compilerOptions.baseUrl,
  //   [pathToResolve]: createPathsMatcher(tsconfigNuxt3_6)(pathToResolve),
  // },
  tsconfigNuxt3_7: {
    baseUrl: tsconfigNuxt3_7.config.compilerOptions.baseUrl,
    [PATH_TO_RESOLVE]: createPathsMatcher(tsconfigNuxt3_7)(PATH_TO_RESOLVE),
  },
});
