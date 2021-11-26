/*
 * @Author: your name
 * @Date: 2021-05-12 09:56:40
 * @LastEditTime: 2021-11-10 16:11:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\user.ts
 */
import request from '@/utils/http/axios'
export class user {
  static async GetByIdAsync(id: number) {
    return await request({
      url: '/api/SnUser/GetByIdAsync?id=' + id + '&cache=true',
      method: 'get'
    })
  }
  static async Login(user: string, pwd: string) {
    return await request({
      url: '/api/SnUser/Login?users=' + user + '&pwd=' + pwd,
      method: 'get'
    })
  }
}
