/*
 * @Author: your name
 * @Date: 2021-09-14 17:21:23
 * @LastEditTime: 2021-09-14 17:48:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Blogs\index.ts
 */
import { article } from '@/api/index';
import { blogsList } from "./components/data";
export class blogs {

  static async GetFySortTitle() {
    await article.GetFySortTitleAsync(blogsList.page, blogsList.pagesize).then((result: any) => {
      blogsList.dataResult = result.data;
    });
  }

  static async ConutSort() {
    await article.ConutSort(7).then((result: any) => {
      blogsList.count = result.data;
    });
  }

}