import {
  createApp
} from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

//字体图标
import './assets/icon/fonts/iconfont.js'
import './assets/icon/icon.css'
import './index.css'
import router from './router'
import store from './store'


// Vue.prototype.$api = ajax; // 将api挂载到vue的原型上复制代码

import Headers from "./views/common/Headers.vue"

const app = createApp(App);
app.use(store);
app.use(router)
app.use(Antd)
app.component("Headers", Headers)
app.mount("#app");