/*
 * @Author: your name
 * @Date: 2021-07-12 11:07:20
 * @LastEditTime: 2021-10-25 15:09:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\navigation.ts
 */

import request from '@/utils/http/axios'
import { IntNav } from "@/api/data/interData";

export class navigation {


  //查询总条数
  static async GetCountAsync(): Promise<any> {
    return await request({
      url: "/api/SnNavigation/GetCountAsync",
      method: 'get',
    })
  }
  /**
   * @description: 分类查询总数
   * @param {string} type 分类
   * @return {*}
   */
  static async CountType(type: string, chche: boolean) {
    return await request({
      url: "/api/SnNavigation/CountTypeAsync?type=" + type + "&cache=" + chche,
      method: 'get',
    })
  }
  /**
   * @description: 模糊查询
   * @param {string} name
   * @param {boolean} chche
   * @return {*}
   */
  static async GetContainsAsync(name: string, chche: boolean): Promise<any> {
    return await request({
      url: "/api/SnNavigation/GetContainsAsync?name=" + name + "&cache=" + chche,
      method: 'get',
    })
  }
  static async GetTypeContainsAsync(type: string, name: string, chche: boolean): Promise<any> {
    return await request({
      url: "/api/SnNavigation/GetTypeContainsAsync?type=" + type + "&name=" + name + "&cache=" + chche,
      method: 'get',
    })
  }

  //条件查询
  static async GetTypeOrderAsync(name: string): Promise<any> {
    return await request({
      url: "api/SnNavigation/GetTypeOrderAsync?type=" + name + "&order=true",
      method: 'get',
    })
  }

  static async GetByIdAsync(id: any, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnNavigation/GetByIdAsync?id=" + id + "&cache=" + cache,
      method: 'get',
    })
  }


  /**
   * @description: 分页查询
   */
  static async GetFyAllAsync(type: string, page: number, pagesize: number, isDesc: boolean, cache: boolean) {
    return await request({
      url: "/api/SnNavigation/GetFyAllAsync?type=" + type + "&pageIndex=" + page + "&pageSize=" + pagesize + "&isDesc=" + isDesc + "&cache=" + cache,
      method: 'get',
    })
  }
  /**
   * @description: 新增数据
   * @param {any} dataResult
   */
  static async AddAsync(dataResult: IntNav) {
    return await
      request({
        url: "/api/SnNavigation/AddAsync",
        method: "post",
        data: dataResult,
      })
  }

  /**
 * @description: 更新数据
 * @param {IntArticle} resultData
 */
  static async UpdateAsync(resultData: IntNav) {
    return await
      request({
        url: "/api/SnNavigation/UpdateAsync",
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
        url: "/api/SnNavigation/DeleteAsync?id=" + id,
        method: "delete",
      })
  }

  // ==================分类===========================

  /**
   * @description: 查询分类内容
   */
  static async GetSnNavigationTypeSAllAsync(cache: boolean) {
    return await request({
      url: "/api/SnNavigationType/GetAllAsync?cache=" + cache,
      method: 'get',
    })
  }
}
