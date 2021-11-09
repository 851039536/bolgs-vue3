/*
 * @Author: your name
 * @Date: 2021-09-30 15:36:38
 * @LastEditTime: 2021-11-09 16:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\data\video.ts
 */

import { Data } from "ant-design-vue/lib/_util/type";

/**
 * @description: 视频接口
 */
interface IntVideo {
  vId: number
  vTitle: string
  vData: string
  vImg: string
  vTypeid: number
  vUrl: string
}

interface IntLabels {
  id: number
  name: string
  description: string
  snArticles: any
}
interface IntArticle {
  id: number
  title: string
  sketch: string
  text: string
  read: number
  img: string
  commentId: number
  give: number
  labelId: number
  sortId: number
  userId: number
  timeCreate: string
  timeModified: string
  // label: any
  // sort: any
  // user: any
}

interface IntNav {
  navId: number
  navTitle: string
  navText: string
  navImg: string
  navType: string
  navUrl: string
}

export {
  IntVideo,
  IntLabels,
  IntArticle,
  IntNav
}