/*
 * @Author: your name
 * @Date: 2021-09-13 16:33:41
 * @LastEditTime: 2021-09-14 17:52:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Blogs\blogs.ts
 */
import { reactive } from "vue";
interface BlogsList {
  dataResult: any, // 显示的数据
  page: number, //页码
  pagesize: number, //每页条数
  count: number, //总数
}
interface BlogsSiList {
  article: any,
  article2: any,
  UserTalk: string,
  User: any,
  ArticleCount: number,
  SortCount: number,
  LabelsCount: number,
  textCount: number,
  readCount: number,
  articledata: string,
  sntitle: string
}
const blogsList: BlogsList = reactive({
  dataResult: [],
  page: 1,
  pagesize: 8,
  count: 0,
})

const blogsSiList: BlogsSiList = reactive({
  article: [],
  article2: [],
  UserTalk: "",
  User: [],
  ArticleCount: 0,
  SortCount: 0,
  LabelsCount: 0,
  textCount: 0,
  readCount: 0,
  articledata: "",
  sntitle: ""
});

export {
  blogsList,
  blogsSiList,
}

