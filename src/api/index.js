import axios from 'axios';
// import qs from 'qs'

axios.defaults.baseURL = 'http://129.204.92.64:8081/',
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