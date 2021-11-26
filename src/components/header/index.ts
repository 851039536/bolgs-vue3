/*
 * @Author: header类及data
 * @Date: 2021-09-17 12:09:00
 * @LastEditTime: 2021-11-24 13:59:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\header\index.ts
 */
import { interfaces } from '@/api/index'
import { Routers, winUrl } from '@/hooks/routers'
import { resData } from './data/header'

/**
 * @description: 导出header类
 */
export class method {
  static async GetType() {
    await interfaces.GetTypeAsync(0, 'kai', 'header', true).then((res: any) => {
      resData.resultData = res.data
    })
  }
  static async skip(num: any) {
    switch (num) {
      case 13:
        winUrl('https://www.cnblogs.com/ouyangkai/')
        break
      case 14:
        winUrl('https://gitee.com/kaiouyang-sn')
        break
      default:
        await Routers(num)
        break
    }
  }
}
