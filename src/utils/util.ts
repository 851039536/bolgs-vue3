/*
 * @Author: your name
 * @Date: 2021-05-08 16:08:35
 * @LastEditTime: 2021-05-08 16:50:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\util.ts
 */

import { useRouter } from "vue-router";
const router = useRouter();
export class util {


  static pageSkip(id: number, name: string) {

    router.push({
      path: name,
      query: {
        id: id,
      },
    });
    console.log(id + "--" + name);
  }


}