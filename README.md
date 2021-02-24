# baseproject

Config-files for my base-project

# Usage

Install the module with all peer dependencies

```
yarn add -D @partiellkorrekt/baseproject eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier typescript
```

In your package.json add:

```json
{
  "eslintConfig": {
    "extends": "./node_modules/@partiellkorrekt/baseproject/eslint"
  },
  "prettier": {
    "extends": "@partiellkorrekt/baseproject/prettier"
  },
  "babel": {
    "extends": "@partiellkorrekt/baseproject/babel"
  },
  "browserslist": ["defaults", "IE 11"]
}
```

Add a tsconfig.json like this:

```json
{
  "extends": "@partiellkorrekt/baseproject/ts/config"
}
```
