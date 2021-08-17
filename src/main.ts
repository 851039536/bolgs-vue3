/*
 * @Author: 程序入口
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-08-17 15:16:11
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


//字体图标
import './assets/icon/fonts/iconfont.js'
import './assets/icon/icon.css'
// import './assets/css/font.css'
//动画css
import './index.css'
import router from './router/index'
import store from './store/index'
import axios from './api/axios'
// Vue.prototype.$api = ajax; // 将api挂载到vue的原型上复制代码
// 完整加载
import LuckDraw from 'vue-luck-draw/vue3'
import BlogHeader from "./views/common/BlogHeader.vue"
import IndexSidebar from "./views/index/IndexSidebar.vue";
import BlogSidebar from "./views/common/BlogSidebar.vue";

// use
const app = createApp(App);


app.use(store);
app.use(router)
app.use(Antd)
app.use(animated)
app.use(LuckDraw)
// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$api = axios
app.component("BlogHeader", BlogHeader)
app.component("IndexSidebar", IndexSidebar)
app.component("BlogSidebar", BlogSidebar)
app.mount("#app");