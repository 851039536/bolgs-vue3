
import request from './axios'

export class setBlog {


  static async GetByIdAsync(id: number, cache: boolean): Promise<any> {
    return await request({
      url: "/api/SnSetBlog/GetByIdAsync?id=" + id + "&cache=" + cache,
      method: 'get',
    })
  }




}
