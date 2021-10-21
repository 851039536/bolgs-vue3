/*
 * @Author: Axios封装
 * @Date: 2020-12-08 10:39:03
 * @LastEditTime: 2021-10-21 10:29:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\index.ts
 */
import axios from 'axios';
import qs from "qs";
import store from "@/store/index";
import router from '@/router/index';
import { dataList } from '@/components/aspin/data';
import { message } from 'ant-design-vue';
import { storage } from '../storage/storage';

//数据请求字符
axios.defaults.baseURL = process.env.VUE_APP_API_URL,
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  axios.defaults.timeout = 5000;
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false;
// axios.defaults.headers.common['token'] =  AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 允许跨域
axios.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*";

// 请求拦截器
axios.interceptors.request.use(function (config) {
  if (
    config.method === "post" ||
    config.method === "put" ||
    config.method === "delete"
  ) {
    // qs序列化
    config.data = qs.parse(config.data);
  }
  // 若是有做鉴权token , 就给头部带上token
  if (storage.get(store.state.Roles)) {
    store.state.Roles
    config.headers.Authorization = storage.get(store.state.Roles);
  }
  return config;
}, error => {
  message.error(error.data.error.message);
  return Promise.reject(error.data.error.message);
})

// 响应拦截器
axios.interceptors.response.use(function (config) {


  dataList.show = true
  if (config.status === 200 || config.status === 204) {
    setTimeout(() => {
      dataList.show = false
    }, 400)
    return Promise.resolve(config);
  } else {
    return Promise.reject(config);
  }
},
  function (error) {

    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401: //重定向
          message.error("token:登录失效" + error.response.status + store.state.Roles)
          storage.remove(store.state.Roles)
          storage.get(store.state.Roles)
          console.log('%c [  storage.get("token") 401]', 'font-size:13px; background:pink; color:#bf2c9f;', storage.get('token'))
          router.replace({
            path: '/Login',
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面                
        case 403:
          message.error("token过期" + error.response.status)
          break;

        // 404请求不存在
        case 404:
          message.error("网络请求不存在" + error.response.status)
          break;
        // 其他错误，直接抛出错误提示
        default:
          message.error("错误" + error.response.status)
      }
      return Promise.reject(error.response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      store.commit('changeNetwork', false);
    }
  }
)
export default axios
