/*
 * @Author: your name
 * @Date: 2021-09-22 10:47:16
 * @LastEditTime: 2021-11-13 11:42:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\common\tool.ts
 */

import moment from 'moment'

/**
 * 常用工具类
 */
class tool {
  /**
   * 回到顶部
   */
  static async BackTop() {
    {
      const timer = setInterval(function () {
        const osTop = document.documentElement.scrollTop || document.body.scrollTop
        const isPeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + isPeed
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }

  /**
   * 日期格式化
   * @param time
   */
  static MomentTime(time: any) {
    time = moment(time).format('YYYY-MM-DD- H:mm:ss')
  }

  /**
   *  日期格式化
   * @param time
   */
  static async MomentTimeList(time: any) {
    await time.data.forEach((res: any) => {
      res.timeCreate = moment(res.timeCreate).format('YYYY-MM-DD- H:mm:ss')
      res.timeModified = moment(res.timeModified).format('YYYY-MM-DD- H:mm:ss')
    })
  }

  /**
   * 随机数
   * @param minNum 最小值
   * @param maxNum 最大值
   * @param counts 循环次数
   * @returns
   */
  static async Random(minNum: number, maxNum: number, counts: number): Promise<number> {
    let i = 0
    let count
    do {
      i++
      const value_a = Math.random() * (maxNum - minNum + 1) + minNum + ''
      count = parseInt(value_a)
    } while (i < counts)
    return count
  }
}

export { tool }
