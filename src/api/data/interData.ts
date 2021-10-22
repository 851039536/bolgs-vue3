/*
 * @Author: your name
 * @Date: 2021-09-30 15:36:38
 * @LastEditTime: 2021-10-22 14:10:43
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
  labelId: number
  labelName: string
  labelAlias: string
  labelDescription: string
}
interface IntArticle {
  articleId: number
  title: string
  titleText: string
  text: string
  html: string
  timeCreate: any
  timeModified: any
  read: number
  give: number
  comment: number
  typeTitle: string
  urlImg: string
  labelId: number
  sortId: number
  userId: number
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