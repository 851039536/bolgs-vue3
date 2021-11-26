/*
 * @Author:getCurrentInstance()方法
 * @Date: 2021-11-12 15:06:34
 * @LastEditTime: 2021-11-17 15:46:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blogs-s\src\utils\common\useCurrentInstance.ts
 */

import { ComponentInternalInstance, getCurrentInstance } from 'vue'
export default function useCurrentInstance() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance
  const proxy = appContext.config.globalProperties
  return {
    proxy
  }
}
