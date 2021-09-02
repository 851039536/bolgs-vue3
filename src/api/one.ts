/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-09-02 16:42:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'
export class one {



  //查询文章总条数
  static async CountAsync(): Promise<any> {
    return await request({
      url:
        "/api/SnOne/CountAsync",
      method: 'get',
    })
  }

  //统计 text:内容字段数-read:阅读数量-give:点赞数量
  static async GetSumAsync(type: string): Promise<any> {
    return await request({
      url:
        "/api/SnOne/GetSumAsync?type=" + type,
      method: 'get',
    })
  }

  //更新部分列[give read]
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
  //分类条件分页查询
  static async GetFyTypeAsync(type: number, page: number, pagesize: number, read: string): Promise<any> {
    return await request({
      url:
        "/api/SnOne/GetFyTypeAsync?type=" + type + "&pageIndex=" + page + "&pageSize=" + pagesize + "&name=" + read + "&isDesc=true",
      method: 'get',
    })
  }

  //主键查询  
  static async GetByIdAsync(id: number): Promise<any> {
    return await request({
      url:
        "/api/SnOne/GetByIdAsync?id=" + id,
      method: 'get',
    })
  }

  //查询one副表
  //查询所有
  static async GetOneTypeAllAsync(): Promise<any> {
    return await request({
      url:
        "/api/SnOneType/GetAllAsync",
      method: 'get',
    })
  }

}

