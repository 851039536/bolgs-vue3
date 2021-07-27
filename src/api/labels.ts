/*
 * @Author: your name
 * @Date: 2021-05-10 14:09:51
 * @LastEditTime: 2021-07-27 11:45:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\labels.ts
 */
import request from './axios'

export class labels {


  static async GetByIdAsync(id: number): Promise<any> {
    return await request({
      url: "/api/SnLabels/GetByIdAsync?id=" + id + "&cache=true",
      method: 'get',
    })
  }

  static async GetAllAsync(): Promise<any> {
    return await request({
      url: "/api/SnLabels/GetAllAsync",
      method: 'get',
    })
  }


}
