/*
 * @Author: your name
 * @Date: 2021-05-10 15:51:19
 * @LastEditTime: 2021-08-12 09:02:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\sort.ts
 */
import request from './axios'
//主键查询

export class sort {

  //主键查询
  static async GetByIdAsync(id: number): Promise<any> {
    return await request({
      url: "/api/SnSort/GetByIdAsync?sortId=" + id,
      method: 'get',
    })
  }

  static async GetAllAsync(cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnSort/GetAllAsync?cache=" + cache,
      method: 'get',
    })
  }
}