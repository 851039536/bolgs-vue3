import Vue from "vue";
/**
 * 回到顶部功能实现过程：
 * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
 * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
 * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
 * 4. 最后记得在移动到顶部时，清除定时器
 */
const backtops = {
  backtop: function () {

    {
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30)

    }
  }
}
Vue.prototype.backtops = backtops;

// this.backtops.backtop(); 调用
export default {};