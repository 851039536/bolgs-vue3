/*
 * @Author:封装axios的get、post方法，其余关于接口调用的方法也可写入该文件中，便于管理。
 * @Date: 2021-10-30 11:16:57
 * @LastEditTime: 2021-11-12 17:36:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\api\request.ts
 */
// request.ts
import axios from './index'
import qs from 'qs'

export class Request {
  /**
   * get方法
   * @param {string} url 路径
   * @param {object} params 参数
   */
  static get = async (url: string, params?: any) => {
    return await new Promise((resolve, reject) => {
      axios
        .get(url, { params: params })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  static post = async (url: string, params?: any) => {
    return await new Promise((resolve, reject) => {
      axios
        .post(url, qs.stringify(params))
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
