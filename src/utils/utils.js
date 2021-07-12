/*
 * @Author: your name
 * @Date: 2021-05-08 16:41:51
 * @LastEditTime: 2021-07-09 14:08:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\utils.js
 */


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function backtop() {
  var timer = setInterval(function () {
    let osTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let ispeed = Math.floor(-osTop / 5);
    document.documentElement.scrollTop = document.body.scrollTop =
      osTop + ispeed;
    // this.isTop = true;
    if (osTop === 0) {
      clearInterval(timer);
    }
  }, 30);
}

export default backtop;