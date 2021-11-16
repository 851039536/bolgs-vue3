/*
 * @Author: your name
 * @Date: 2021-09-17 16:34:12
 * @LastEditTime: 2021-11-16 11:06:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\index\components\sidebar\index.ts
 */
import { dataList } from "./data";
import { article } from '@/api/index'

export class indexSidebar {

  /**
   * @description: 搜素框模糊查询
   * @param {string} name 名称
   */
  static async SearchTitle(name: string) {
    await article.GetContainsAsync(0, "null", name, false).then((res) => {
      dataList.article1 = res.data
    })
  }


}