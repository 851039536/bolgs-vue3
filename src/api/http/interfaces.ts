/*
 * @Author: your name
 * @Date: 2021-08-04 16:11:32
 * @LastEditTime: 2021-10-15 16:49:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\interfaces.ts
 */

import request from '@/utils/http/axios'
export class interfaces {
  /**
   * @description: 查询分类总条数
   * @param {number} userId
   * @param {number} type
   */
  static async GetTypeAsync(userId: number, type: number): Promise<any> {
    return await request({
      url: "/api/SnInterface/GetTypeAsync?userId=" + userId + "&type=" + type,
      method: 'get',
    })
  }
}
