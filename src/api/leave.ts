/*
 * @Author: your name
 * @Date: 2021-05-12 10:08:06
 * @LastEditTime: 2021-05-12 10:09:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\leave.ts
 */
import request from './axios'
export class leave {

  static async GetAllAsync(): Promise<any> {
    return await request({
      url: "/api/Snleave/GetAllAsync",
      method: 'get',
    })
  }

}