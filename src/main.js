import {
  createApp
} from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

//字体图标
import './assets/icon/fonts/iconfont.js'
import './assets/icon/icon.css'
//动画css
import './index.css'
import router from './router'
import store from './store'
import ajax from './api/index'

// Vue.prototype.$api = ajax; // 将api挂载到vue的原型上复制代码

import Headers from "./views/common/Headers.vue"
import IndexSidebar from "./views/index/Index-Sidebar";
import Sidebarsn from "./views/common/Sidebarsn";

const app = createApp(App);
app.use(store);
app.use(router)
app.use(Antd)
app.config.globalProperties.$api = ajax
app.component("Headers", Headers)
app.component("IndexSidebar", IndexSidebar)
app.component("Sidebarsn", Sidebarsn)
app.mount("#app");