/*
 * @Author: your name
 * @Date: 2021-05-08 11:33:56
 * @LastEditTime: 2021-07-19 14:01:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\article.js
 */
import request from './axios'
export class one {

  static async UpdatePortionAsync(datas: any, type: string): Promise<any> {
    return await
      request({
        // 更新
        url: "/api/SnOne/UpdatePortionAsync?type=" + type,
        method: "put",
        data: datas,
      })
  }

}

