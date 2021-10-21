/*
 * @Author: your name
 * @Date: 2021-09-18 11:31:05
 * @LastEditTime: 2021-10-20 10:56:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\index\components\column\index.ts
 */
import { reactive } from 'vue'
import { article } from '@/api/index'

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
    await article.GetCountAsync().then((result: any) => {
      state.count = result.data
    })
  }

  static async GetFyTitle() {
    await article
      .GetFyTitleAsync(state.page, state.pagesize, true, true)
      .then((result: any) => {
        state.dataResult = result.data
      })
  }

  static async BackTop() {
    {
      const timer = setInterval(function () {
        const osTop =
          document.documentElement.scrollTop || document.body.scrollTop
        const isPeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + isPeed
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }

  static async CurrentChange(val: number) {
    state.page = val
    await column.GetFyTitle()
    await column.BackTop() //回到顶部
  }
}

export {
  state,
  column
}