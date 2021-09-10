/*
 * @Author: your name
 * @Date: 2020-12-14 17:22:05
 * @LastEditTime: 2021-09-10 11:02:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\shims-vue.d.ts
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.js' {
  const contents: js;
  export default contents;
}
declare module 'nprogress';
declare module 'marked';
declare module 'vue-marquee-text-component';
declare module 'vue-lazyload';
// declare module 'vue-luck-draw';
declare module 'vue-luck-draw/vue3';
// declare module 'autoprefixer';
declare module '*.scss'