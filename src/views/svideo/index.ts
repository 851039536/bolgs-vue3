/*
 * @Author: your name
 * @Date: 2021-10-15 15:15:13
 * @LastEditTime: 2021-10-15 15:36:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\svideo\index.ts
 */

import { video } from '@/api'
import { state } from "./data";

class method {

  static async currentchange(val: number) {
    state.page = val
    await video.GetFyAsync('9999', state.page, state.pagesize, true, true).then((res: any) => {
      state.resultData = res.data
      console.log('%c [ resultData ]', 'font-size:13px; background:pink; color:#bf2c9f;', state.resultData)
    })
  }
}

export {
  method,
}