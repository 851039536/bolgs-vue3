/*
 * @Author: your name
 * @Date: 2021-09-09 10:37:30
 * @LastEditTime: 2021-09-09 11:04:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\hooks\index.ts
 */
import router from '../router/index';

const Routers = async (path: string) => {
  await router.push({
    path: path,
    query: {
      t: +new Date()
    }
  })
};

export {
  Routers
}

