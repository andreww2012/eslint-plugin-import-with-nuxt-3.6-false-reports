# Reproduction

```shell
pnpm i
pnpm repro
```

## Expected output

```js
{
  tsconfigNuxt3_5: {
    baseUrl: './',
    '#imports': [
      'C:/Users/<PATH_TO_THE_REPO>/tsconfigs/imports'
    ]
  },
  tsconfigNuxt3_7: {
    baseUrl: undefined,
    '#imports': [
      'C:/Users/<PATH_TO_THE_REPO>/imports' // <-- wrong
    ]
  }
}

```

## Test TypeScript resolving

```shell
npx tsc --noEmit -p tsconfig.nuxt35.json 
npx tsc --noEmit -p tsconfig.nuxt37.json 
```