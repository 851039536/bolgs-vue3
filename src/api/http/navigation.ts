/*
 * @Author: your name
 * @Date: 2021-07-12 11:07:20
 * @LastEditTime: 2021-10-15 11:35:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\navigation.ts
 */

import request from '@/utils/http/axios'

export class navigation {



  //查询总条数
  static async GetCountAsync(): Promise<any> {
    return await request({
      url: "/api/SnNavigation/GetCountAsync",
      method: 'get',
    })
  }
  /**
   * @description: 分类查询总数
   * @param {string} type 分类
   * @return {*}
   */
  static async CountType(type: string, chche: boolean) {
    return await request({
      url: "/api/SnNavigation/CountTypeAsync?type=" + type + "&cache=" + chche,
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

  /**
   * @description: 分页查询
   */
  static async GetFyAllAsync(type: string, page: number, pagesize: number, isDesc: boolean, cache: boolean) {
    return await request({
      url: "/api/SnNavigation/GetFyAllAsync?type=" + type + "&pageIndex=" + page + "&pageSize=" + pagesize + "&isDesc=" + isDesc + "&cache=" + cache,
      method: 'get',
    })
  }


  // ==================分类===========================


  /**
   * @description: 查询分类内容
   */
  static async GetSnNavigationTypeSAllAsync() {
    return await request({
      url: "/api/SnNavigationType/GetAllAsync?cache=true",
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