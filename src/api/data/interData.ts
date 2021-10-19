/*
 * @Author: your name
 * @Date: 2021-09-30 15:36:38
 * @LastEditTime: 2021-10-18 13:58:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\api\data\video.ts
 */

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
  timeCreate: string
  timeModified: string
  read: number
  give: number
  comment: number
  typeTitle: string
  urlImg: string
  labelId: number
  sortId: number
  userId: number
}

export {
  IntVideo,
  IntLabels,
  IntArticle
}