/*
 * @Author: your name
 * @Date: 2021-05-12 09:56:40
 * @LastEditTime: 2021-07-29 11:07:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\user.ts
 */
import request from './axios'
export class listContent {

  static async Cnblogs(): Promise<any> {
    return await request({
      url: "/api/AngleSharp/Cnblogs",
      method: 'get',
    })
  }

}