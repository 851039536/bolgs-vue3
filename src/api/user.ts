/*
 * @Author: your name
 * @Date: 2021-05-12 09:56:40
 * @LastEditTime: 2021-05-12 10:09:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\user.ts
 */
import request from './axios'
export class user {

  static async GetAll(): Promise<any> {
    return await request({
      url: "/api/SnUser/AsyGetUserId?UserId=4",
      method: 'get',
    })
  }

}