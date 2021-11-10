/*
 * @Author: your name
 * @Date: 2021-09-22 14:42:57
 * @LastEditTime: 2021-11-10 18:22:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\dethrottle.ts
 */

import { ref } from "vue"

/**
 * @description: 防抖
 * @param {any} fn
 * @param {number} delay
 * @return {*}
 */
function debounce(fn: any, delay: number) {
  let timer: any
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

/**
 * 节流
 * @param fn
 * @param delay
 * @returns
 */
function throttle(fn: any, delay: number) {
  const isThtottle = ref(true)
  return () => {
    if (!isThtottle.value) return
    isThtottle.value = false
    setTimeout(() => {
      fn()
      isThtottle.value = true
    }, delay)
  }
}


export {
  debounce,
  throttle
}