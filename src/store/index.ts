/*
 * @Author: your name
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-10-19 14:15:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\store\index.ts
 */


import {
  createStore
} from 'vuex'

export default createStore({
  state: {

    //设置页面是否新窗口打开
    SetPage: false,

  },

  mutations: {
    // 修改token，并将token存入localStorage
  },
  actions: {},
  modules: {}
})