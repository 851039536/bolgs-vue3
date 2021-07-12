/*
 * @Author: your name
 * @Date: 2021-07-12 11:07:20
 * @LastEditTime: 2021-07-12 11:17:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\navigation.ts
 */

import request from './axios'

export class navigation {


  //查询类别所有
  static async GetSnNavigationTypeSAllAsync(): Promise<any> {
    return await request({
      url: "/api/SnNavigationType/GetAllAsync",
      method: 'get',
    })
  }
  //条件查询
  static async GetTypeOrderAsync(name: string): Promise<any> {
    return await request({
      url: "api/SnNavigation/GetTypeOrderAsync?type=" + name + "&order=true",
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