/*
 * @Author: your name
 * @Date: 2021-10-18 16:19:58
 * @LastEditTime: 2021-11-13 11:18:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\index\data.ts
 */

import { reactive } from "vue"
import { IntArticle } from '@/api/data/interData'
interface State {
  dataResult: any
  labelResult: any
  sortResult: any
  labelStr: string
  order: boolean
}
const state: State = reactive({
  dataResult: [],
  labelResult: [],
  sortResult: [],
  labelStr: "ALL",
  order: true
})

const columns = [
  { title: '标题', width: 200, dataIndex: 'title', key: 'title', fixed: 'left', ellipsis: true, },
  {
    title: '主键',
    dataIndex: 'id',
    width: 55,
    align: "center"  //	设置列内容的对齐方式
  },
  {
    title: '标签',
    dataIndex: 'label.name',
    width: 90,
    align: "center"
  },
  {
    title: '分类',
    dataIndex: 'sort.name',
    width: 80,
    align: "center"
  },
  {
    title: '更新时间',
    dataIndex: 'timeModified',
    width: 100,
    align: "center"
  },
  {
    title: '创建时间',
    dataIndex: 'timeCreate',
    width: 100,
    align: "center"
  },

  {
    title: '阅读量',
    dataIndex: 'read',
    width: 60,
    align: "center"
  },

  {
    title: '操作',
    key: '编辑',
    width: 60,
    fixed: 'right',
    align: "center",
    slots: { customRender: 'ed' },//绑定插槽
  },
  {
    title: '操作',
    key: '删除',
    width: 60,
    fixed: 'right',
    align: "center",
    slots: { customRender: 'de' },//绑定插槽
  },
]

const formState: IntArticle = reactive({
  labelId: 1,
  sortId: 1,
  userId: 1,
  id: 0,
  title: '标题',
  sketch: '简述',
  text: "",
  read: 0,
  img: "img",
  commentId: 0,
  give: 0,
  timeCreate: "2021-11-13T03:18:19.821Z",
  timeModified: "2021-11-13T03:18:19.821Z"

})


export {
  columns,
  state,
  formState,
}