import axios from 'axios'

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map()
/**
 * 添加请求
 * @param {Object} config
 */
export const addPending = (config: any) => {
  const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&')
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel)
        // console.log('[ 添加请求 ]=>', url)
      }
    })
}
/**
 * 移除请求
 * @param {Object} config
 */
export const removePending = (config: any) => {
  const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&')
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url)
    cancel(url)
    pending.delete(url)
    console.log('[ 移除请求 ]=>', url)
  }
}
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
  for (const [url, cancel] of pending) {
    if (url !== 'get&/api/SnInterface/GetTypeAsync?identity=0&users=kai&type=header&cache=true&&') {
      cancel(url)
      console.log('[ 清空请求 ]=>', url)
    }
  }
  pending.clear()
}
