/*
 * @Author: your name
 * @Date: 2021-10-12 16:20:00
 * @LastEditTime: 2021-11-09 14:17:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\tag\index.ts
 */

import { reactive } from "vue"

interface State {
  newinfo?: any
  labels?: any
  blog?: string
  fadeIn?: string
  tag?: string
  id?: any
}
const state: State = reactive({
  newinfo: [],
  newtext: [],
  labels: [],
  blog: '',
  fadeIn: 'animate__fadeIn',
  tag: 'tag',
})

export {
  state,
  State
}