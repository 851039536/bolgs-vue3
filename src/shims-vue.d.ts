/*
 * @Author: your name
 * @Date: 2020-12-14 17:22:05
 * @LastEditTime: 2021-11-24 12:28:57
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
declare module 'vue-luck-draw/vue3';
declare module '*.scss';
declare module '@kangc/v-md-editor';
declare module 'prismjs';
declare module '@kangc/v-md-editor/lib/theme/hljs';
declare module '@kangc/v-md-editor/lib/plugins/line-number/index';
declare module '@kangc/v-md-editor/lib/preview';
declare module '@kangc/v-md-editor/lib/plugins/copy-code/index';
declare module 'highlight.js/lib/core';
declare module 'highlight.js/lib/languages/csharp';
declare module 'highlight.js/lib/languages/css';
declare module '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
declare module 'highlight.js/lib/languages/javascript';
declare module 'highlight.js/lib/languages/typescript';
declare module '@/api/index';
declare module '@/api';
declare module '@/hooks/routers';
declare module '@/utils/http/axios';