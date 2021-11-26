/*
 * @Author: your name
 * @Date: 2021-09-13 17:58:04
 * @LastEditTime: 2021-11-18 08:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\data.ts
 */

import { reactive } from 'vue'
interface dataList {
  spinning: boolean
  show: boolean
}

const dataList: dataList = reactive({
  spinning: true,
  show: true
})

export { dataList }
