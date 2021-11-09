/*
 * @Author: your name
 * @Date: 2021-09-14 17:21:23
 * @LastEditTime: 2021-11-09 17:07:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Blogs\index.ts
 */
import { article } from '@/api/index';
import { blogsList } from "./components/data";
import axios from '@/utils/http/axios'
class methods {
  static async GetFyAsync() {
    await article.GetFyAsync(1, "转载", blogsList.page, blogsList.pagesize, "id", true, true).then((res: any) => {
      blogsList.dataResult = res.data;
    });
  }
  static async ConutSort() {
    await article.GetCountAsync(1, 7, true).then((result: any) => {
      blogsList.count = result.data;
    });
  }
}
async function QueryAll() {
  axios.all([await methods.ConutSort(), await methods.GetFyAsync()])
}

export {
  methods,
  QueryAll
}