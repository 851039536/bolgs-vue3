/*
 * @Author: your name
 * @Date: 2020-12-14 17:18:11
 * @LastEditTime: 2021-09-29 10:07:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\.eslintrc.js
 */
module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    // 允许非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 允许自定义模块和命名空间
    '@typescript-eslint/no-namespace': 'off',
    "@typescript-eslint/no-inferrable-types": "off", // 关闭类型推断
    // 允许对this设置alias
    '@typescript-eslint/no-this-alias': 'off',
    // 允许使用any类型
    '@typescript-eslint/no-explicit-any': ['off'],
    //Missing return type on function
    "@typescript-eslint/explicit-module-boundary-types": "off",


  },
  globals: {
    'defineProps': true
  }

}