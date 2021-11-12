/*
 * @Author: your name
 * @Date: 2021-09-22 10:47:16
 * @LastEditTime: 2021-11-12 15:06:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\common\tool.ts
 */

import moment from "moment"

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
        const osTop =
          document.documentElement.scrollTop || document.body.scrollTop
        const isPeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + isPeed
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }


  static MomentTime(time: any) {
    time = moment(time).format('YYYY-MM-DD- H:mm:ss')
  }

  static async MomentTimeList(time: any) {
    await time.data.forEach((res: any) => {
      res.timeCreate = moment(res.timeCreate).format('YYYY-MM-DD- H:mm:ss')
      res.timeModified = moment(res.timeModified).format('YYYY-MM-DD- H:mm:ss')
    })
  }




}

export {
  tool
}