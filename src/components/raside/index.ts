/*
 * @Author: header类及data
 * @Date: 2021-09-17 12:09:00
 * @LastEditTime: 2021-09-17 15:16:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\header\index.ts
 */
import { reactive } from 'vue'
import { interfaces } from '@/api/http/interfaces'
import { Routers } from "@/hooks/routers";

interface State {
  resultList: any
}
export const state: State = reactive({
  resultList: [],
})

/**
 * @description: 导出raside类
 */
export class raside {

  /**
   * @description: 读取侧边栏数据
   */
  static async GetType() {
    await interfaces.GetTypeAsync(4, 2).then((res: any) => {
      state.resultList = res.data
    })
  }
  /**
   * @description: 路由跳转
   * @param {string} path 路径
   */
  static async skip(path: string) {
    await Routers(path);
  }

}