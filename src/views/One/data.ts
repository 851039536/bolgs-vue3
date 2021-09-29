/*
 * @Author: your name
 * @Date: 2021-09-29 14:00:23
 * @LastEditTime: 2021-09-29 14:05:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\One\data.ts
 */
interface one {
  oneId: number
  oneTitle: string
  oneText: string
  oneImg: string
  oneTypeId: number
  oneAuthor: string
  oneData: string
  oneRead: number
  oneGive: number
  oneComment: number
}

interface oneType {
  id: number
  soTypeId: number
  soTypeTitle: string
}

export {
  one,
  oneType
}