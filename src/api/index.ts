/*
 * @Author: Axios封装
 * @Date: 2020-12-08 10:39:03
 * @LastEditTime: 2021-03-30 14:34:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\index.ts
 */
import axios from 'axios';
//'http://129.204.92.64:8081/' 腾讯服务器
axios.defaults.baseURL = 'https://localhost:44367/',
  axios.defaults.timeout = 12000;
axios.interceptors.request.use(function (config) {

  // alert("加载中");
  // if (config.methods.toLowerCase() == "post") {
  //     config.data = qs.string(config.data)
  // }
  return config;
}, function (error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(function (config) {

  return config;
}, function (error) {
  return Promise.reject(error)
})



export default axios
