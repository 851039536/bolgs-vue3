/*
 * @Author: your name
 * @Date: 2021-08-04 16:11:32
 * @LastEditTime: 2021-10-15 11:33:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\interfaces.ts
 */

import request from '@/utils/http/axios'
export class interfaces {

  //
  /**
   * @description: 查询分类总条数
   * @param {number} userId
   * @param {number} type
   * @return {*}
   */
  static async GetTypeAsync(userId: number, type: number): Promise<any> {
    return await request({
      url: "/api/SnInterface/GetTypeAsync?userId=" + userId + "&type=" + type,
      method: 'get',
    })
  }



}


// export default article;


// export function fetchArticle(id) {
//   return request({
//     url: '/vue-element-admin/article/detail',
//     method: 'get',
//     params: {
//       id
//     }
//   })
// }

// export function fetchPv(pv) {
//   return request({
//     url: '/vue-element-admin/article/pv',
//     method: 'get',
//     params: {
//       pv
//     }
//   })
// }

// export function createArticle(data) {
//   return request({
//     url: '/vue-element-admin/article/create',
//     method: 'post',
//     data
//   })
// }

// export function updateArticle(data) {
//   return request({
//     url: '/vue-element-admin/article/update',
//     method: 'post',
//     data
//   })
// }