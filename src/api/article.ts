/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-05-10 17:48:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'
//查询总数 (缓存)
const countUrl = "/api/SnArticle/GetCountAsync";
//条件查询总数 (缓存)
// const conutTypeUrl = "/api/SnArticle/ConutLabel";
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
      url: countUrl,
      method: 'get',
    })
  }


  //分页查询
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

  static async UpdatePortionAsync(datas: any, type: string): Promise<any> {
    return await
      request({
        // 更新
        url: "/api/SnArticle/UpdatePortionAsync?type=" + type,
        method: "put",
        data: datas,
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