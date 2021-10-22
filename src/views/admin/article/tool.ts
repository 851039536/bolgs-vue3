/*
 * @Author: your name
 * @Date: 2021-10-22 14:02:50
 * @LastEditTime: 2021-10-22 14:33:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\tool.ts
 */
import { reactive } from "vue";
import { formState } from "./data";
import moment from 'moment'


/**
 * @description:  //时间格式转化防止时间控件报错
 */
const time: any = reactive({
  timeCreate: moment(formState.timeCreate, 'YYYY-MM-DD'),
  timeModified: moment(formState.timeModified, 'YYYY-MM-DD'),
})

export {
  time,
}
