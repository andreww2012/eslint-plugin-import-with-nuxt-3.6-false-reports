import {getTsconfig, createPathsMatcher} from 'get-tsconfig';

const tsConfigWithAbsPaths = getTsconfig('./.nuxt');
const tsconfigWithoutAbsPaths = getTsconfig('.', 'tsconfig-nuxt-old-versions.json');

console.log({
  baseUrl: {
    broken: tsConfigWithAbsPaths.config.compilerOptions.baseUrl,
    correct: tsconfigWithoutAbsPaths.config.compilerOptions.baseUrl,
  },

  matcher: {
    broken: createPathsMatcher(tsConfigWithAbsPaths)('#imports'),
    correct: createPathsMatcher(tsconfigWithoutAbsPaths)('#imports'),
  }
});
