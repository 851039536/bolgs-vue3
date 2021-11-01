/*
 * @Author: your name
 * @Date: 2021-10-30 11:18:29
 * @LastEditTime: 2021-10-30 16:43:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\api\api.ts
 */
// 其中使用 install 的目的在于 ts在main.ts中 
// 不能通过Vue.prototype.$Api这个方式直接调用
//，在全局方法中会说到使用 插件的方式去挂载。
// api.ts
import { Base } from "./base";
import { Request } from "./request";

class api {

  /* api接口模块 */
  public static article = {
    genre: () => Request.get('/api/SnArticle/GetCountAsync'),
    genres: () => Request.get(`${Base.env}/api/SnArticle/GetCountAsync`),
  }
}
export {
  api
}
