/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-09-15 15:47:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'

export class article {

  static async GetAll(state: number): Promise<any> {
    return request
      .all([
        // 读取详情页数据
        request.get("/api/SnArticle/AsyGetTestID?id=" + state),
      ])

  }
  //查询总条数
  static async GetCountAsync(): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetCountAsync",
      method: 'get',
    })
  }

  //查询分类总条数
  static async ConutSort(id: number): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetConutSortAsync?type=" + id + "&cache=true",
      method: 'get',
    })
  }
  //模糊查询
  static async GetContainsAsync(name: string): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetContainsAsync?name=" + name + "&cache=true",
      method: 'get',
    })
  }

  //主键查询
  static async GetByIdAsync(id: number, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetByIdAsync?id=" + id + "&cache=" + cache,
      method: 'get',
    })
  }
  //按标签条件查询
  static async GetTagtextAsync(id: number, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetTagAsync?labelId=" + id + "&isDesc=true&cache=" + cache,
      method: 'get',
    })
  }
  //标签分页查询
  static async GetFyTitleAsync(page: number, pagesize: number): Promise<any> {
    return await request({
      url:
        "/api/SnArticle/GetFyTitleAsync?" +
        "&pageIndex=" +
        page +
        "&pageSize=" +
        pagesize +
        "&isDesc=true",
      method: 'get',
    })
  }

  //分类分页查询
  static async GetFySortTitleAsync(page: number, pagesize: number): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetfySortTestAsync?type=7&pageIndex=" + page + "&pageSize=" + pagesize + "&isDesc=true&cache=true",
      method: 'get',
    })
  }

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