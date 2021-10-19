/*
 * @Author: your name
 * @Date: 2021-10-18 16:19:58
 * @LastEditTime: 2021-10-19 09:26:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\index\data.ts
 */

import { reactive } from "vue"

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
    title: '点赞量',
    dataIndex: 'give',
  },
  {
    title: '创建时间',
    dataIndex: 'timeCreate',
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

export {
  columns,
  state
}