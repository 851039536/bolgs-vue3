/*
 * @Author: your name
 * @Date: 2021-09-22 10:47:16
 * @LastEditTime: 2021-11-10 18:19:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\common\tool.ts
 */

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
}

export {
  tool
}