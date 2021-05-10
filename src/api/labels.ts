/*
 * @Author: your name
 * @Date: 2021-05-10 14:09:51
 * @LastEditTime: 2021-05-10 17:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\labels.ts
 */
import request from './axios'
//主键查询
const ByIdUrl = "/api/SnLabels/GetByIdAsync?id=";
//条件查询总数 (缓存)
// const conutTypeUrl = "/api/SnArticle/ConutLabel";
export class labels {

  //查询总条数
  static async GetByIdAsync(id: number): Promise<any> {
    return await request({
      url: ByIdUrl + id,
      method: 'get',
    })
  }


}
