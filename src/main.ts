/*
 * @Author: 程序入口
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-11-12 15:44:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\main.ts
 */
import {
  createApp
} from 'vue'

import App from './App.vue'
import animated from 'animate.css'
import 'nprogress/nprogress.css'
import './index.css'
import lazyPlugin from 'vue3-lazy'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// v-md
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// vuepress github 主题
//import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
//import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

//import Prism from 'prismjs';
//import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/core';
// 按需引入语言包
import csharp from 'highlight.js/lib/languages/csharp';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('css', css);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);


// 显示代码行数
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// 快速复制代码
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';


VueMarkdownEditor.use(githubTheme, {
  //Prism,
  Hljs: hljs,
  // extend(md) {
  //   // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
  //   // md.set(option).use(plugin);
  // },
});
VueMarkdownEditor.use(createLineNumbertPlugin());
VueMarkdownEditor.use(createCopyCodePlugin());


VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createCopyCodePlugin());
//  end v-md


//字体图标
import './assets/icon/fonts/iconfont.js'
import './assets/icon/icon.css'
import LuckDraw from 'vue-luck-draw/vue3'
import BlogHeader from "./components/header/Header.vue"
import IndexSidebar from "./views/index/components/sidebar/IndexSidebar.vue";
import BlogSidebar from "./components/raside/rAside.vue";
import router from './router/index'
import store from './store/index'
import axios from './utils/http/axios'


// use
const app = createApp(App);


// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$api = axios
app.component("BlogHeader", BlogHeader)
app.component("IndexSidebar", IndexSidebar)
app.component("BlogSidebar", BlogSidebar)

app.use(lazyPlugin, {
  loading: require('@/assets/img/sp.png'), // 图片加载时默认图片
  error: require('@/assets/img/sp.png')// 图片加载失败时默认图片
})
app.use(VueMarkdownEditor);
app.use(VMdPreview);
app.use(store);
app.use(Antd)
app.use(animated)
app.use(LuckDraw)
app.use(router)
app.mount("#app");