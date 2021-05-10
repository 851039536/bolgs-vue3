/*
 * @Author: your name
 * @Date: 2021-05-10 15:51:19
 * @LastEditTime: 2021-05-10 15:52:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\sort.ts
 */
import request from './axios'
//主键查询
const ByIdUrl = "/api/SnSort/GetByIdAsync?sortId=";

export class sort {


  // }
  //查询总条数
  static async GetByIdAsync(id: number): Promise<any> {
    return await request({
      url: ByIdUrl + id,
      method: 'get',
    })
  }
}