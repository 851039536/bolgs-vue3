/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-11-15 15:35:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from '@/utils/http/axios'
export class video {
  /**
   * 查询总数
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询参数
   * @param cache 缓存
   * @returns
   */
  static async GetCountAsync(identity: number, type: string, cache: boolean) {
    return await request({
      url: '/api/SnVideo/GetCountAsync?identity=' + identity + '&type=' + type + '&cache=' + cache,
      method: 'get'
    })
  }

  /**
   * 条件查询
   * @param identity 分类:1 || 用户:2
   * @param type 查询参数
   * @param cache 缓存
   * @returns
   */
  static async GetTypeAsync(identity: number, type: string, cache: boolean) {
    return await request({
      url: '/api/SnVideo/GetTypeAsync?identity=' + identity + '&type=' + type + '&cache=' + cache,
      method: 'get'
    })
  }

  static async AsyGestTest() {
    return await request({
      url: '/api/SnVideoType/AsyGestTest',
      method: 'get'
    })
  }

  /**
   * 主键查询
   * @param id 主键
   * @param cache 缓存
   * @returns
   */
  static async GetByIdAsync(id: any, cache: boolean) {
    return await request({
      url: '/api/SnVideo/GetByIdAsync?id=' + id + '&cache=' + cache,
      method: 'get'
    })
  }

  /**
   * 分页查询
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询参数
   * @param page 当前页码
   * @param pagesize 每页记录条数
   * @param ordering 排序条件[data:时间 按id排序]
   * @param isDesc 是否倒序[true/false]
   * @param cache 缓存
   * @returns
   */
  static async GetFyAsync(
    identity: number,
    type: string,
    page: number,
    pagesize: number,
    ordering: string,
    isDesc: boolean,
    cache: boolean
  ) {
    return await request({
      url:
        '/api/SnVideo/GetFyAsync?identity=' +
        identity +
        '&type=' +
        type +
        '&pageIndex=' +
        page +
        '&pageSize=' +
        pagesize +
        '&ordering=' +
        ordering +
        '&isDesc=' +
        isDesc +
        '&cache=' +
        cache,
      method: 'get'
    })
  }
}
