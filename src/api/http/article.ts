/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-10-22 10:36:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from '@/utils/http/axios'
import { IntArticle } from "@/api/data/interData";

export class article {

  /**
   * @description: 查询总条数
   */
  static async GetCountAsync() {
    return await request({
      url: "/api/SnArticle/GetCountAsync",
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
   * @description: 模糊查询
   * @param {string} name
   */
  static async GetContainsAsync(name: string) {
    return await request({
      url: "/api/SnArticle/GetContainsAsync?name=" + name + "&cache=true",
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
   * @return {*}
   */
  static async GetByIdAsync(id: any, cache: boolean): Promise<any> {
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
  static async GetFyTitleAsync(page: number, pagesize: number, isDesc: boolean, cache: boolean): Promise<any> {
    return await request({
      url:
        "/api/SnArticle/GetFyTitleAsync?" +
        "&pageIndex=" +
        page +
        "&pageSize=" +
        pagesize +
        "&isDesc=" + isDesc + "&cache=" + cache,
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
