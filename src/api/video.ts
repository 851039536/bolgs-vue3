/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-08-03 08:55:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'
export class video {




  //视频总数
  static async GetCountAsync(): Promise<any> {
    return await request({
      url:
        "/api/SnVideo/GetCountAsync?cache=true",
      method: 'get',
    })
  }
  //条件查询
  static async GetTypeAllAsync(type: any): Promise<any> {
    return await request({
      url:
        "/api/SnVideo/GetTypeAllAsync?type=" + type + "&cache=true",
      method: 'get',
    })
  }

  static async AsyGestTest(): Promise<any> {
    return await request({
      url:
        "/api/SnVideoType/AsyGestTest",
      method: 'get',
    })
  }

  //主键查询
  static async GetByIdAsync(id: any): Promise<any> {
    return await request({
      url:
        "/api/SnVideo/GetByIdAsync?id=" + id + "&cache=true",
      method: 'get',
    })
  }

  //分页查询
  // static async GetFyTitleAsync(page: number, pagesize: number): Promise<any> {
  //   return await request({
  //     url:
  //       "/api/SnArticle/GetFyTitleAsync?" +
  //       "&pageIndex=" +
  //       page +
  //       "&pageSize=" +
  //       pagesize +
  //       "&isDesc=true",
  //     method: 'get',
  //   })
}








