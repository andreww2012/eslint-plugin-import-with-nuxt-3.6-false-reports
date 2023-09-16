# Reproduction

This will install Nuxt 3.6. `repro` script will give the same results as for Nuxt 3.5 for `baseUrl` and `repro:eslint` won't fail. This is an expected, correct behaviour.

```shell
pnpm i
pnpm repro
pnpm repro:eslint
```

Then install Nuxt 3.7, make Nuxt generate its stuff and re-run the repro scripts:

```
pnpm i nuxt@3.7.3
npx nuxt prepare
pnpm repro
pnpm repro:eslint
```

You should see `baseUrl.current` set to `undefined` in the output of the `repro` script and `repro:eslint` is expected to find a false error.

Manually add `"baseUrl": ".",` to `.nuxt/tsconfig.json` and re-run the repro scripts. `repro:eslint` will function correctly now and won't find any errors.

By the way, adding `"baseUrl": "./.nuxt"` to `./tsconfig.json` is also enough for `repro:eslint` to work properly.