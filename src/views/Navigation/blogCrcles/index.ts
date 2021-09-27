/*
 * @Author: your name
 * @Date: 2021-09-27 14:23:15
 * @LastEditTime: 2021-09-27 14:30:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\navigation\blogCrcles\index.ts
 */
import { navigation } from '@/api/index'
import { reactive } from "vue";

interface State {
  Result: any
}
const state: State = reactive({
  Result: [],
})

class circles {

  static async GetTypeOrder() {
    await navigation.GetTypeOrderAsync('博客圈').then((res: any) => {
      state.Result = res.data
    })
  }

  static async urltest(url: string) {
    window.open(url)
  }
}

export {
  circles,
  state
}