/*
 * @Author: your name
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-11-10 16:00:05
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
    //角色
    Roles: "Roles",
  },

  mutations: {
    // 修改token，并将token存入localStorage
  },
  actions: {},
  modules: {}
})