/*
 * @Author: your name
 * @Date: 2021-10-15 09:37:45
 * @LastEditTime: 2021-11-10 08:58:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\navigation\favorite\index.ts
 */

import { navigation } from "@/api"
import { state } from "./data"

class methods {

  static async currentchange(val: number) {
    state.current = val
    await navigation
      .GetFyAsync(1, state.title, val, state.pagesize, "id", true, true)
      .then((res: any) => {
        state.text = res.data
      })
  }

  static async GetAll(name: string) {
    state.title = name
    state.current = 1
    await navigation.GetCountAsync(0, state.title, true).then((res: any) => {
      state.count = res.data
    })
    await navigation.GetSnNavigationTypeSAllAsync(true).then((res: any) => {
      state.type = res.data
    })
    await navigation
      .GetFyAsync(1, name, state.page, state.pagesize, "id", true, true)
      .then((res: any) => {
        state.text = res.data
      })
  }


}
export {
  methods
}