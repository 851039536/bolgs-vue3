/*
 * @Author: your name
 * @Date: 2021-05-10 14:09:51
 * @LastEditTime: 2021-10-21 11:59:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\labels.ts
 */
import request from '@/utils/http/axios'

export class labels {

  static async GetByIdAsync(id: number) {
    return await request({
      url: "/api/SnLabels/GetByIdAsync?id=" + id + "&cache=true",
      method: 'get',
    })
  }

  static async GetAllAsync(cache: boolean) {
    return await request({
      url: "/api/SnLabels/GetAllAsync?cache=" + cache,
      method: 'get',
    })
  }
}
