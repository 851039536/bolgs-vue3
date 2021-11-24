// module.exports = {
//   extends: [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/typescript/recommended'
//   ],
//   plugins: [
//     'vue',
//     '@typescript-eslint'
//   ],
//   rules: {
//     '@typescript-eslint/no-var-requires': 0,
//     '@typescript-eslint/no-unused-vars': 'off',
//     // 允许非空断言
//     '@typescript-eslint/no-non-null-assertion': 'off',
//     // 允许自定义模块和命名空间
//     '@typescript-eslint/no-namespace': 'off',
//     "@typescript-eslint/no-inferrable-types": "off", // 关闭类型推断
//     // 允许对this设置alias
//     '@typescript-eslint/no-this-alias': 'off',
//     // 允许使用any类型
//     '@typescript-eslint/no-explicit-any': ['off'],
//     //Missing return type on function
//     "@typescript-eslint/explicit-module-boundary-types": "off",


//   },
//   globals: {
//     'defineProps': true,
//     'defineEmits': true,
//   }

// }
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    es6: true,
    browser: true
  },
  globals: {
    Markdown: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'space-before-function-paren': 'off',
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'vue/require-default-prop': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    'vue/comment-directive': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}