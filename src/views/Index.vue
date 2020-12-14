<template>
  <div>
    <!-- 左侧边栏 -->
    <Sidebarsn></Sidebarsn>
    <div class="flex sn-div">
      <!-- 内容页面 -->
      <IndexText></IndexText>
      <!--侧边栏-->
      <IndexSidebar></IndexSidebar>

      <!-- 回到顶部 -->
      <a-back-top />
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
  }
}

</script>
<style lang="scss" scoped>
  @import "../assets/sass/com";
  .sn-div {
    @include initialize(100%, null, 62px, null, null, null, #f7f7f7);
  }
</style>

