/*
 * @Author:区分每个模块的 baseUrl 方便后期维护管理
 * @Date: 2021-10-30 11:15:53
 * @LastEditTime: 2021-10-30 16:19:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\api\base.ts
 */
// base.ts
export class Base {
  /* 公共模块 */
  static env =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8087' : 'https://produceCommon.com(生产线地址)'

  // /* 活动模块 */
  // static active = process.env.NODE_ENV === "development"
  //   ? "https://testActive.com(活动测试线地址)"
  //   : "https://produceActive.com(活动生产线地址)"
}
