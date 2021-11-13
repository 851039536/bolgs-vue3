/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-11-13 08:46:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from '@/utils/http/axios'
import { IntArticle } from "@/api/data/interData";

export class article {


  /**
   * @description: 查询总数
   * @param {number} identity 所有:0 || 分类:1 || 标签:2
   * @param {string} type
   * @param {boolean} cache
   * @return {*}
   */
  static async GetCountAsync(identity: number, type: string, cache: boolean) {
    return await request({
      url: "/api/SnArticle/GetCountAsync?identity=" + identity + "&type=" + type + "&cache=" + cache,
      method: 'get',
    })
  }

  /**
   * @description: 查询分类总条数
   * @param {number} id
   */
  static async ConutSort(id: number) {
    return await request({
      url: "/api/SnArticle/GetConutSortAsync?type=" + id + "&cache=true",
      method: 'get',
    })
  }

  /**
   * 
   * @param identity 无条件:0 || 分类:1 || 标签:2
   * @param type 查询条件
   * @param name 查询字段
   * @param cache 缓存
   */
  static async GetContainsAsync(identity: number, type: string, name: string, cache: boolean) {
    return await request({
      url: "/api/SnArticle/GetContainsAsync?identity=" + identity + "&type=" + type + "&name=" + name + "&cache=" + cache,
      method: 'get',
    })
  }
  /**
   * @description: 按标签模糊查询
   * @param {string} name
   */
  static async GetTypeContainsAsync(tag: string, name: string, chache: boolean) {
    return await request({
      url: "/api/SnArticle/GetTypeContainsAsync?type=" + tag + "&name=" + name + "&cache=" + chache,
      method: 'get',
    })
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static async GetByIdAsync(id: any, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetByIdAsync?id=" + id + "&cache=" + cache,
      method: 'get',
    })
  }

  /**
   * 条件查询 GetTypeAsync
   * @param identity 分类:1 || 标签:2
   * @param type 查询条件
   * @param cache 缓存
   * @returns 
   */
  static async GetTypeAsync(identity: number, type: number, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnArticle/GetTypeAsync?identity=" + identity + "&type=" + type + "&cache=" + cache,
      method: 'get',
    })
  }

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
  static async GetFyAsync(identity: number, type: string, pageIndex: number, pagesize: number, ordering: string, isDesc: boolean, cache: boolean): Promise<any> {
    return await request({
      url:
        "/api/SnArticle/GetFyAsync?identity=" + identity + "&type=" + type + "&pageIndex=" + pageIndex + "&pageSize=" + pagesize + "&ordering=" + ordering + "&isDesc=" + isDesc + "&cache=" + cache,
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

  /**
   * @description: 新增数据
   * @param {any} resultData
   */
  static async AddAsync(resultData: IntArticle) {
    return await
      request({
        url: "/api/SnArticle/AddAsync",
        method: "post",
        data: resultData,
      })
  }
  /**
   * @description: 更新数据
   * @param {IntArticle} resultData
   */
  static async UpdateAsync(resultData: IntArticle) {
    return await
      request({
        url: "/api/SnArticle/UpdateAsync",
        method: "put",
        data: resultData,
      })
  }
  /**
   * @description: 删除
   * @param {number} id
   * @return {*}
   */
  static async DeleteAsync(id: number) {
    return await
      request({
        url: "/api/SnArticle/DeleteAsync?id=" + id,
        method: "delete",
      })
  }
}
