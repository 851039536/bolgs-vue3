/*
 * @Author: your name
 * @Date: 2020-12-08 09:43:09
 * @LastEditTime: 2021-09-14 08:08:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\tailwind.config.js
 */
module.exports = {
  // purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'], //删除未使用的CSS
  purge: {
    enabled: true,
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {

      'cx': {
        'max': '575px'
      },
      'xp': {
        'min': '375px',
        'max': '667px'
      },
      'dp': {
        'min': '414px',
        'max': '736px'
      },
      'sm': {
        'min': '640px',
        'max': '767px'
      },
      'md': {
        'min': '768px',
        'max': '1023px'
      },
      'lg': {
        'min': '1024px',
        'max': '1279px'
      },
      'xl': {
        'min': '1280px',
        'max': '1535px'
      },
      '2xl': {
        'min': '1536px'
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  // add DaisyUI plugin
  plugins: [
    require('daisyui'),
  ],

  // config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
  },
}