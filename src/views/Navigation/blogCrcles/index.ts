/*
 * @Author: your name
 * @Date: 2021-09-27 14:23:15
 * @LastEditTime: 2021-11-10 08:59:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\navigation\blogCrcles\index.ts
 */
import { navigation } from '@/api/index'
import { reactive } from "vue";

interface State {
  resultData: any
  page: number
  pagesize: number
  count: number
  current: number
}
const state: State = reactive({
  resultData: [],
  page: 1,
  pagesize: 12,
  count: 0,
  current: 1,
})

class method {

  static async GetTypeOrder() {
    await navigation.GetFyAsync(1, "博客圈", state.page, state.pagesize, "id", true, true).then((res: any) => {
      state.resultData = res.data
    })
    await navigation.GetCountAsync(0, "博客圈", true).then((res: any) => {
      state.count = res.data
    })
  }

  static async UrlSkip(url: string) {
    window.open(url)
  }

  static async currentchange(val: number) {
    state.current = val
    await navigation
      .GetFyAsync(1, "博客圈", val, state.pagesize, "id", true, true)
      .then((res: any) => {
        state.resultData = res.data
      })
  }

}

export {
  method,
  state
}