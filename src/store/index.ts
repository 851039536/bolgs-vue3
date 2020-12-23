/*
 * @Author: your name
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2020-12-22 16:29:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\store\index.ts
 */
import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    textCount: 0, //文章字节数
    ArticleCount: 0, //文章总数
    SortCount: 0, //分类总数
    LabelsCount: 0, //标签总数
    readCount: 0, //阅读
  },
  mutations: {

  },
  actions: {},
  modules: {}
})