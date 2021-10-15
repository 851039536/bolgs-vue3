/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-10-15 15:05:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from '@/utils/http/axios'
export class video {



  /**
   * @description:  视频总数
   */
  static async GetCountAsync() {
    return await request({
      url:
        "/api/SnVideo/GetCountAsync?cache=true",
      method: 'get',
    })
  }

  /**
   * @description:条件查询
   * @param {any} type
   */
  static async GetTypeAllAsync(type: any) {
    return await request({
      url:
        "/api/SnVideo/GetTypeAllAsync?type=" + type + "&cache=true",
      method: 'get',
    })
  }

  static async AsyGestTest() {
    return await request({
      url:
        "/api/SnVideoType/AsyGestTest",
      method: 'get',
    })
  }


  /**
   * @description: 主键查询
   * @param {any} id
   */
  static async GetByIdAsync(id: any) {
    return await request({
      url:
        "/api/SnVideo/GetByIdAsync?id=" + id + "&cache=true",
      method: 'get',
    })
  }

  /**
   * @description: 分页查询
   * @param {string} type 类型
   * @param {number} page 页码
   * @param {number} pagesize 页码
   * @param {boolean} isDesc 排序
   * @param {boolean} cache 缓存
   */
  static async GetFyAsync(type: string, page: number, pagesize: number, isDesc: boolean, cache: boolean) {
    return await request({
      url:
        "/api/SnVideo/GetFyAsync?type=" + type + "&pageIndex=" + page + "&pageSize=" + pagesize + "&isDesc=" + isDesc + "&cache=" + cache,
      method: 'get',
    })
  }
}







