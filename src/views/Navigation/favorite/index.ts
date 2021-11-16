/*
 * @Author: your name
 * @Date: 2021-10-15 09:37:45
 * @LastEditTime: 2021-11-16 16:24:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\navigation\favorite\index.ts
 */

import { navigation } from "@/api"
import { state } from "./data"

class method {

  static async currentchange(val: number) {
    state.current = val
    await navigation
      .GetFyAsync(1, state.name, val, state.pagesize, "id", true, true)
      .then((res: any) => {
        state.text = res.data
      })
  }

  static async GetApi(name: string) {
    state.current = 1
    state.name = name
    state.count = await (await navigation.GetCountAsync(1, state.name, true)).data
    state.type = await (await navigation.GetSnNavigationTypeSAllAsync(true)).data
    state.text = await (await navigation
      .GetFyAsync(1, name, state.page, state.pagesize, "id", true, true)).data

  }


}
export {
  method
}