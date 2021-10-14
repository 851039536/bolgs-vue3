/*
 * @Author: your name
 * @Date: 2021-09-15 10:39:08
 * @LastEditTime: 2021-09-15 11:12:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\index\data.ts
 */
import { reactive } from 'vue'

interface DataList {
  Labels: any,
  Sort: any,
  article: any,
  article1: any,
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
const dataList: DataList = reactive({
  Labels: [],
  Sort: [],
  article: [],
  article1: [],
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
  dataList
}