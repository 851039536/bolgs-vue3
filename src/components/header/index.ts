/*
 * @Author: header类及data
 * @Date: 2021-09-17 12:09:00
 * @LastEditTime: 2021-09-17 15:14:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\header\index.ts
 */
import { reactive } from 'vue'
import { interfaces } from '@/api/interfaces'


interface State {
  ResultList: any
}
export const state: State = reactive({
  ResultList: [],
})

/**
 * @description: 导出header类 
 */
export class header {

  static async GetType() {
    await interfaces.GetTypeAsync(4, 1).then((res: any) => {
      state.ResultList = res.data
    })
  }

}