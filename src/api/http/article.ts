/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-10-18 16:29:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from '@/utils/http/axios'

export class article {

  /**
   * @description: 读取详情页数据
   * @param {number} state
   */
  static async GetAll(state: number): Promise<any> {
    return request
      .all([
        // 读取详情页数据
        request.get("/api/SnArticle/AsyGetTestID?id=" + state),
      ])

  }
  /**
   * @description: 查询总条数
   */
  static async GetCountAsync(): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetCountAsync",
      method: 'get',
    })
  }

  /**
   * @description: 查询分类总条数
   * @param {number} id
   */
  static async ConutSort(id: number): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetConutSortAsync?type=" + id + "&cache=true",
      method: 'get',
    })
  }
  /**
   * @description: 模糊查询
   * @param {string} name
   */
  static async GetContainsAsync(name: string): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetContainsAsync?name=" + name + "&cache=true",
      method: 'get',
    })
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   * @return {*}
   */
  static async GetByIdAsync(id: number, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetByIdAsync?id=" + id + "&cache=" + cache,
      method: 'get',
    })
  }
  /**
   * @description: 按标签条件查询
   * @param {number} id
   * @param {boolean} cache
   * @return {*}
   */
  static async GetTagtextAsync(id: number, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetTagAsync?labelId=" + id + "&isDesc=true&cache=" + cache,
      method: 'get',
    })
  }
  /**
   * @description: 标签分页查询
   * @param {number} page
   * @param {number} pagesize
   * @return {*}
   */
  static async GetFyTitleAsync(page: number, pagesize: number, cache: boolean): Promise<any> {
    return await request({
      url:
        "/api/SnArticle/GetFyTitleAsync?" +
        "&pageIndex=" +
        page +
        "&pageSize=" +
        pagesize +
        "&isDesc=" + cache,
      method: 'get',
    })
  }

  /**
   * @description: 分类分页查询
   * @param {number} page
   * @param {number} pagesize
   */
  static async GetFySortTitleAsync(page: number, pagesize: number, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetfySortTestAsync?type=7&pageIndex=" + page + "&pageSize=" + pagesize + "&isDesc=true&cache=" + cache,
      method: 'get',
    })
  }

  /**
   * @description: 更新
   * @param {any} resultData
   * @param {string} type
   */
  static async UpdatePortionAsync(resultData: any, type: string): Promise<any> {
    return await
      request({
        // 更新
        url: "/api/SnArticle/UpdatePortionAsync?type=" + type,
        method: "put",
        data: resultData,
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