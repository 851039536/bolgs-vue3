/*
 * @Author: your name
 * @Date: 2021-05-10 14:09:51
 * @LastEditTime: 2021-11-11 17:28:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\labels.ts
 */
import { labels } from '../labels';

export class labelsApi {

  /**
   * 查询所有
   * @param cache 缓存
   * @returns 
   */
  static async GetAll(cache: boolean) {
    return await labels.GetAllAsync(cache)
  }
  /**
   * 主键查询
   * @param id 主键
   * @returns 
   */
  static async GetById(id: number) {
    return await labels.GetByIdAsync(id)
  }
}
