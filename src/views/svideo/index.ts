/*
 * @Author: your name
 * @Date: 2021-10-15 15:15:13
 * @LastEditTime: 2021-11-15 15:26:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\svideo\index.ts
 */

import { video } from '@/api'
import { state } from "./data";

class method {

  static async currentchange(val: number) {
    state.page = val
    await video.GetFyAsync(0, "0", state.page, state.pagesize, "id", true, true).then((res: any) => {
      state.resultData = res.data
    })
  }
}

export {
  method,
}