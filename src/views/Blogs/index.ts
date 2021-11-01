/*
 * @Author: your name
 * @Date: 2021-09-14 17:21:23
 * @LastEditTime: 2021-11-01 16:11:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Blogs\index.ts
 */
import { article } from '@/api/index';
import { blogsList } from "./components/data";
import axios from '@/utils/http/axios'
class methods {
  static async GetFySortTitle() {
    await article.GetFySortTitleAsync(blogsList.page, blogsList.pagesize, true).then((res: any) => {
      blogsList.dataResult = res.data;
    });
  }
  static async ConutSort() {
    await article.ConutSort(7).then((result: any) => {
      blogsList.count = result.data;
    });
  }
}
async function QueryAll() {
  axios.all([await methods.ConutSort(), await methods.GetFySortTitle()])
}

export {
  methods,
  QueryAll
}