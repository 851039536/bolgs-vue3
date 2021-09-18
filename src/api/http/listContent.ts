/*
 * @Author: your name
 * @Date: 2021-05-12 09:56:40
 * @LastEditTime: 2021-09-18 15:39:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\user.ts
 */
import request from '@/utils/http/axios'
export class listContent {

  static async Cnblogs(): Promise<any> {
    return await request({
      url: "/api/AngleSharp/Cnblogs",
      method: 'get',
    })
  }

}