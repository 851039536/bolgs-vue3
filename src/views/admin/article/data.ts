/*
 * @Author: your name
 * @Date: 2021-10-18 16:19:58
 * @LastEditTime: 2021-10-22 14:57:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\index\data.ts
 */

import { reactive } from "vue"
import { IntArticle } from '@/api/data/interData'
interface State {
  dataResult: any
}
const state: State = reactive({
  dataResult: [],
})

const columns = [
  {
    title: '主键',
    dataIndex: 'articleId',
    width: 100,
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: 250,
  },

  {
    title: '创建时间',
    dataIndex: 'timeCreate',
  },
  {
    title: '更新时间',
    dataIndex: 'timeModified',
  },
  {
    title: '阅读量',
    dataIndex: 'read',
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

const formState: IntArticle = reactive({
  articleId: 0,
  comment: 0,
  give: 0,
  html: '1',
  labelId: 1,
  read: 0,
  sortId: 1,
  text: '内容',
  timeCreate: '2090-10-01',
  timeModified: '2090-10-01',
  title: '标题',
  titleText: '简述',
  typeTitle: '别名',
  urlImg: 'img',
  userId: 1,
})
const stateArray: any = reactive({
  labelResult: [],
  sortResult: [],
})
const stateStr: any = reactive({
  labelStr: "ALL"
})
export {
  columns,
  state,
  formState,
  stateArray,
  stateStr
}