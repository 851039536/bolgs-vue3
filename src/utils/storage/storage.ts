/*
 * @Author: your name
 * @Date: 2021-10-19 11:09:23
 * @LastEditTime: 2021-10-19 11:09:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\storage\storage.ts
 */
/**
 * 封装操作localstorage本地存储的方法
 */
export const storage = {
  //存储
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  //取出数据
  get<T>(key: string) {
    const value = localStorage.getItem(key)
    if (value && value != "undefined" && value != "null") {
      return <T>JSON.parse(value)
    }
  },
  // 删除数据
  remove(key: string) {
    localStorage.removeItem(key)
  }
};

/**
 * 封装操作sessionStorage本地存储的方法
 */
export const sessionStorage = {
  //存储
  set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  },
  //取出数据
  get<T>(key: string) {
    const value = window.sessionStorage.getItem(key)
    if (value && value != "undefined" && value != "null") {
      return JSON.parse(value)
    }
    return null
  },
  // 删除数据
  remove(key: string) {
    window.sessionStorage.removeItem(key)
  }
}