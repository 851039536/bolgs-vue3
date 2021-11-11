/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-11-11 17:34:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import { article } from '../article';

export class articleApi {


  /**
   * @description: 分页查询
   * @param {number} identity 所有:0 || 分类:1 || 标签:2
   * @param {number} type 类别参数, identity 0 可不填
   * @param {number} pagesize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {string} ordering 排序条件[data:时间 read:阅读 give:点赞 按id排序]
   * @param {boolean} isDesc 升序/降序
   * @param {boolean} cache 是否开启缓存
   */
  static async GetFy(identity: number,
    type: string,
    pageIndex: number,
    pagesize: number,
    ordering: string,
    isDesc: boolean,
    cache: boolean) {
    return await article
      .GetFyAsync(identity, type, pageIndex, pagesize, ordering, isDesc, cache)
  }
}
