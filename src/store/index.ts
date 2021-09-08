/*
 * @Author: your name
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-09-08 09:58:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\store\index.ts
 */
import {
  createStore
} from 'vuex'

export default createStore({
  state: {

    token: "test",
    //设置页面是否新窗口打开
    SetPage: false,
  },

  mutations: {

  },
  actions: {},
  modules: {}
})