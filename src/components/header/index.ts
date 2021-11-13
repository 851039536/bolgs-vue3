/*
 * @Author: header类及data
 * @Date: 2021-09-17 12:09:00
 * @LastEditTime: 2021-11-13 10:06:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\header\index.ts
 */
import { reactive } from 'vue'
import { interfaces } from '@/api/index'


interface State {
  resultData: any
}
export const state: State = reactive({
  resultData: [],
})

/**
 * @description: 导出header类 
 */
export class header {

  static async GetType() {
    await interfaces.GetTypeAsync(0, "kai", "header", true).then((res: any) => {
      state.resultData = res.data
    })
  }

}