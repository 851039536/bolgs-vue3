<template>
  <div>
    <!-- 左侧边栏 -->
    <Sidebarsn></Sidebarsn>
    <div class="sn-div flex">
      <!-- 内容页面 -->
      <IndexText></IndexText>
      <!--侧边栏-->
      <IndexSidebar></IndexSidebar>
    </div>
  </div>
</template>

<script>
// 组件导入
import IndexText from "./index/Index-Text";
import IndexSidebar from "./index/Index-Sidebar";
import Sidebarsn from "./common/Sidebarsn";

export default {
  name: 'Index',
  components: {
    Sidebarsn,
    IndexSidebar,
    IndexText
  },

  data () {
    return {}
  },

}

</script>

<style lang="scss" scoped>
// @import "../../assets/sass/com";

.sn-div {
  /*background-color: #1e7e34;*/
  width: 100%;
  margin-top: 42px;

  .sn-div1 {
    width: 99%;
    margin: 0 auto;
  }
}
</style>

