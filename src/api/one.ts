/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-07-20 11:11:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'
export class one {

  static async UpdatePortionAsync(result: any, type: string): Promise<any> {
    return await
      request({
        // 更新
        url: "/api/SnOne/UpdatePortionAsync?type=" + type,
        method: "put",
        data: result,
      })
  }

  //标签分页查询
  static async GetFyAllAsync(page: number, pagesize: number): Promise<any> {
    return await request({
      url:
        "/api/SnOne/GetFyAllAsync?" +
        "&pageIndex=" +
        page +
        "&pageSize=" +
        pagesize +
        "&isDesc=true",
      method: 'get',
    })
  }

  static async GetByIdAsync(id: number): Promise<any> {
    return await request({
      url:
        "/api/SnOne/GetByIdAsync?id=" + id,
      method: 'get',
    })
  }

}

