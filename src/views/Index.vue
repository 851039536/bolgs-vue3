<template>
  <div>
    <!-- 左侧边栏 -->
    <Sidebarsn></Sidebarsn>
    <div class="flex sn-div">
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

export default {
  name: 'Index',
  components: {
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
    margin-top: 62px;

    .sn-div1 {
      width: 99%;
      margin: 0 auto;
    }
  }
</style>

