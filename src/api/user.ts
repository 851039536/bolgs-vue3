/*
 * @Author: your name
 * @Date: 2021-05-12 09:56:40
 * @LastEditTime: 2021-08-04 11:39:02
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