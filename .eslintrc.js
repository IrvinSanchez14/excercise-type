const OFF = 'off'
module.exports = {
  root: true,
  extends: [
    '@ravn-dev/eslint-config-ravn/react',
    '@ravn-dev/eslint-config-ravn/base',
    '@ravn-dev/eslint-config-ravn/jest',
    '@ravn-dev/eslint-config-ravn/typescript',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/camelcase': OFF,
    '@typescript-eslint/no-loss-of-precision': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'react/display-name': OFF,
    '@typescript-eslint/no-floating-promises': OFF,
  },
}
