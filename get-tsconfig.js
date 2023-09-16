import {getTsconfig, createPathsMatcher} from 'get-tsconfig';

const tsConfigNuxtInstalled = getTsconfig('./.nuxt');
const tsconfigNuxt3_5 = getTsconfig('.', 'tsconfig-nuxt-3.5.json');

console.log({
  baseUrl: {
    current: tsConfigNuxtInstalled.config.compilerOptions.baseUrl,
    old: tsconfigNuxt3_5.config.compilerOptions.baseUrl,
  },

  matcher: {
    current: createPathsMatcher(tsConfigNuxtInstalled)('#imports'),
    old: createPathsMatcher(tsconfigNuxt3_5)('#imports'),
  }
});
