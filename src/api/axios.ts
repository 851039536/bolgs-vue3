/*
 * @Author: Axios封装
 * @Date: 2020-12-08 10:39:03
 * @LastEditTime: 2021-09-06 13:55:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\index.ts
 */
import axios from 'axios';
import qs from "qs";
import store from "../store/index";
import router from '../router';
axios.defaults.baseURL = process.env.VUE_APP_API_URL,
  axios.defaults.timeout = 12000;
// axios.defaults.headers.common['token'] =  AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*"; // 允许跨域

axios.interceptors.request.use(function (config) {

  // 在发送请求之前做某件事
  if (
    config.method === "post" ||
    config.method === "put" ||
    config.method === "delete"
  ) {
    // 序列化
    config.data = qs.parse(config.data);
    // console.log("qs:" + config.data);
  }
  // 若是有做鉴权token , 就给头部带上token
  if (store.state.token) {
    config.headers.Authorization = store.state.token;
    // console.log("token:" + store.state.token);
  }
  return config;
}, error => {
  // Message({
  //   //  饿了么的消息弹窗组件,类似toast
  //   showClose: true,
  //   message: error,
  //   type: "error.data.error.message"
  // });
  return Promise.reject(error.data.error.message);
})

axios.interceptors.response.use(function (config) {

  if (config.status === 200 || config.status === 204) {
    return Promise.resolve(config);
  } else {
    return Promise.reject(config);
  }

  // return config;
},
  function (error) {
    // return Promise.reject(error)

    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401:
          router.replace({
            path: '/login',
            query: {
              // redirect: router.currentRoute.fullPath
            }
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面                
        case 403:
          // Toast({
          //   message: '登录过期，请重新登录',
          //   duration: 1000,
          //   forbidClick: true
          // });
          // 清除token
          store.dispatch('FedLogOut').then(() => {
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
            router.replace({
              path: '/login',
              query: {
                // redirect: router.currentRoute.fullPath
              }
            })
          })
          break;

        // 404请求不存在
        case 404:
          // Toast({
          //   message: '网络请求不存在',
          //   duration: 1500,
          //   forbidClick: true
          // });
          break;
        // 其他错误，直接抛出错误提示
        default:
        // Toast({
        //   message: error.response.data.message,
        //   duration: 1500,
        //   forbidClick: true
        // });
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
