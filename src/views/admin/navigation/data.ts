/*
 * @Author: your name
 * @Date: 2021-10-18 16:19:58
 * @LastEditTime: 2021-11-18 11:18:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\index\data.ts
 */

import { reactive } from 'vue'
import { IntNav } from '@/api/data/interData'
interface State {
  dataResult: any
  navTypeData: any
  navStr: string
}
const state: State = reactive({
  dataResult: [],
  navTypeData: [],
  navStr: 'ALL'
})

const columns = [
  { title: '标题', width: 100, dataIndex: 'title', key: 'title', fixed: 'left' },

  {
    title: '用户',
    dataIndex: 'user.name',
    width: 55,
    align: 'center'
  },
  {
    title: 'img',
    dataIndex: 'img',
    width: 50,
    ellipsis: true //超过宽度将自动省略
  },
  {
    title: '描述',
    dataIndex: 'describe',
    width: 150,
    ellipsis: true //超过宽度将自动省略
  },
  {
    title: '类别',
    dataIndex: 'type.title',
    width: 60,
    align: 'center'
  },

  {
    title: '创建',
    dataIndex: 'timeCreate',
    width: 80,
    align: 'center'
  },
  {
    title: '更新',
    dataIndex: 'timeModified',
    width: 80,
    align: 'center'
  },

  {
    title: '操作',
    key: '编辑',
    width: 40,
    fixed: 'right',
    align: 'center',
    slots: { customRender: 'ed' } //绑定插槽
  },
  {
    title: '操作',
    key: '删除',
    fixed: 'right',
    width: 40,
    align: 'center',
    slots: { customRender: 'de' } //绑定插槽
  }
]

const formState: IntNav = reactive({
  id: 0,
  title: '',
  describe: '',
  img: '',
  typeId: 0,
  userId: 0,
  url: 'www.xxx.com'
})
const stateArray: any = reactive({
  navResult: []
})
export { columns, state, formState, stateArray }
