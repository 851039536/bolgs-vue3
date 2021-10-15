/*
 * @Author: your name
 * @Date: 2021-10-15 09:34:24
 * @LastEditTime: 2021-10-15 09:34:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\navigation\favorite\data.ts
 */

import { reactive } from "vue"

interface State {
  text: any
  type: any
  page: number
  pagesize: number
  count: number
  title: string
  current: number
}
const state: State = reactive({
  text: [],
  type: [],
  page: 1,
  pagesize: 12,
  count: 0,
  title: '',
  current: 1,
})

export {
  state
}