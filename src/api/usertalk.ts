/*
 * @Author: your name
 * @Date: 2021-05-12 09:56:40
 * @LastEditTime: 2021-09-14 16:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\user.ts
 */
import request from './axios'
export class usertalk {

  static async GetUserTalkFirst(): Promise<any> {
    return await request({
      url: "/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true",
      method: 'get',
    })
  }
}
