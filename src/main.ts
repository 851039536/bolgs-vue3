/*
 * @Author: 程序入口
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-09-17 15:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\main.ts
 */
import {
  createApp
} from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import animated from 'animate.css'
import './index.css'

//字体图标
import './assets/icon/fonts/iconfont.js'
import './assets/icon/icon.css'
import LuckDraw from 'vue-luck-draw/vue3'
import BlogHeader from "./components/header/Header.vue"
import IndexSidebar from "./views/index/components/sidebar/IndexSidebar.vue";
import BlogSidebar from "./components/raside/rAside.vue";
import router from './router/index'
import store from './store/index'
import axios from './api/axios'

// use
const app = createApp(App);
// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$api = axios
app.component("BlogHeader", BlogHeader)
app.component("IndexSidebar", IndexSidebar)
app.component("BlogSidebar", BlogSidebar)
app.use(store);
app.use(Antd)
app.use(animated)
app.use(LuckDraw)
app.use(router)
app.mount("#app");