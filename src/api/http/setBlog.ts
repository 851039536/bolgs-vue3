/*
 * @Author: your name
 * @Date: 2021-08-09 14:39:40
 * @LastEditTime: 2021-10-21 12:00:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\http\setBlog.ts
 */

import request from '@/utils/http/axios'

export class setBlog {
  static async GetByIdAsync(id: number, cache: boolean): Promise<any> {
    return await request({
      url: '/api/SnSetBlog/GetByIdAsync?id=' + id + '&cache=' + cache,
      method: 'get'
    })
  }
}
