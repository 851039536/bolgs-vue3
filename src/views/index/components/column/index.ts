/*
 * @Author: your name
 * @Date: 2021-09-18 11:31:05
 * @LastEditTime: 2021-11-16 10:53:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\index\components\column\index.ts
 */
import { reactive } from 'vue'
import { article } from '@/api/index'
import { tool } from "@/utils/common/tool";

interface State {
  dataResult: any
  page: number
  readonly pagesize: number
  count: number
}
const state: State = reactive({
  dataResult: [],
  page: 1,
  pagesize: 8,
  count: 0,
})

class column {

  static async GetCount() {
    state.count = await (await article.GetCountAsync(0, "da", true)).data
  }
  static async GetFy() {
    await article
      .GetFyAsync(0, "NULL", state.page, state.pagesize, "id", true, true)
      .then((result: any) => {
        state.dataResult = result.data
      })
  }

  static async CurrentChange(val: number) {
    state.page = val
    await column.GetFy()
    await tool.BackTop()
  }
}

export {
  state,
  column
}