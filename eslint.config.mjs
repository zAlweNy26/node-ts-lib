import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: false,
  },
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  markdown: true,
  yaml: true,
  rules: {
    'unused-imports/no-unused-vars': 'warn',
    'style/max-statements-per-line': 'off',
    'regexp/no-super-linear-backtracking': 'warn',
    'curly': ['warn', 'multi-or-nest'],
    'antfu/curly': 'off',
    'antfu/no-top-level-await': 'off',
    'antfu/if-newline': 'off',
    'brace-style': 'off',
    'no-console': 'off',
    'one-var': 'off',
  },
}, oxlint.configs['flat/recommended'])
