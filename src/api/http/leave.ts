/*
 * @Author: your name
 * @Date: 2021-05-12 10:08:06
 * @LastEditTime: 2021-09-18 15:40:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\leave.ts
 */
import request from '@/utils/http/axios'
export class leave {

  static async GetAllAsync(): Promise<any> {
    return await request({
      url: "/api/Snleave/GetAllAsync",
      method: 'get',
    })
  }

}