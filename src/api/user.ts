/*
 * @Author: your name
 * @Date: 2021-05-12 09:56:40
 * @LastEditTime: 2021-09-09 16:34:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\user.ts
 */
import request from './axios'
export class user {

  static async GetByIdAsync(id: number): Promise<any> {
    return await request({
      url: "/api/SnUser/GetByIdAsync?id=" + id + "&cache=true",
      method: 'get',
    })
  }
}
