
/*
 * @Author: your name
 * @Date: 2021-09-28 17:28:24
 * @LastEditTime: 2021-09-28 17:43:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\One\index.ts
 */

import { one } from "@/api"
import { message } from "ant-design-vue"
import { reactive } from "vue"
interface State {
  resultData: any
  dataOne: any
  text: any
  modal2Visible: boolean
  page: number
  pagesize: number
  count: number
}

const state: State = reactive({
  resultData: [],
  dataOne: [],
  text: [],
  modal2Visible: false,
  page: 1,
  pagesize: 6,
  count: 0,
})

class method {

  static async setModal1Visible(modal2Visible: boolean, id: number) {
    state.modal2Visible = modal2Visible
    await one.GetByIdAsync(id).then((res: any) => {
      state.text = res.data
      if (res.data == null) {
        return
      } else {
        res.data.oneRead++
        one.UpdatePortionAsync(state.text, 'read')
      }
    })
  }
  static async currentchange(val: number) {
    state.page = val
    await one.GetFyAllAsync(state.page, state.pagesize).then((res: any) => {
      state.resultData = res.data
    })
  }

  static async Count() {
    await one.CountAsync().then((result: any) => {
      state.count = result.data
    })
  }

  static async getOne() {
    await one.GetFyAllAsync(state.page, state.pagesize).then((res: any) => {
      state.resultData = res.data
    })
    await one.GetFyAllAsync(1, 1).then((res2: any) => {
      state.dataOne = res2.data[0]
    })
  }

  static async give(id: any) {
    message.info('已点赞')
    await one.GetByIdAsync(id).then((res: any) => {
      if (res.data == null) {
        return
      } else {
        res.data.oneGive++
        one.UpdatePortionAsync(res.data, 'give')
      }
    })
  }


}

export {
  state,
  method
}