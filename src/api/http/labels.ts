/*
 * @Author: your name
 * @Date: 2021-05-10 14:09:51
 * @LastEditTime: 2021-10-16 08:46:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\labels.ts
 */
import request from '@/utils/http/axios'

export class labels {


  static async GetByIdAsync(id: number): Promise<any> {
    return await request({
      url: "/api/SnLabels/GetByIdAsync?id=" + id + "&cache=true",
      method: 'get',
    })
  }

  static async GetAllAsync(cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnLabels/GetAllAsync?cache=" + cache,
      method: 'get',
    })
  }


}
