/*
 * @Author: your name
 * @Date: 2021-10-18 16:19:58
 * @LastEditTime: 2021-10-25 14:51:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\index\data.ts
 */

import { reactive } from "vue"
import { IntNav } from '@/api/data/interData'
interface State {
  dataResult: any,
  navTypeData: any,
  navStr: string
}
const state: State = reactive({
  dataResult: [],
  navTypeData: [],
  navStr: "ALL"
})

const columns = [
  {
    title: '主键',
    dataIndex: 'navId',
    width: 100,
  },
  {
    title: '标题',
    dataIndex: 'navTitle',
    width: 250,
  },

  {
    title: '链接',
    dataIndex: 'navUrl',
  },
  {
    title: '类别',
    dataIndex: 'navType',
    width: 120,
  },
  {
    title: '操作',
    key: '编辑',
    width: 80,
    slots: { customRender: 'ed' },//绑定插槽
  },
  {
    title: '操作',
    key: '删除',
    width: 80,
    slots: { customRender: 'de' },//绑定插槽
  },
]

const formState: IntNav = reactive({
  navId: 0,
  navTitle: "导航标题",
  navText: "导航简述",
  navImg: "图片链接",
  navType: "网站",
  navUrl: "www.xxx.com"
})
const stateArray: any = reactive({
  navResult: [],
})
export {
  columns,
  state,
  formState,
  stateArray
}