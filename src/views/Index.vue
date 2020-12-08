<template>
  <div>
    <!-- 左侧边栏 -->
    <Sidebarsn></Sidebarsn>
    <div class="sn-div flex">
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
  created () {
    /*这里写需要执行的操作，执行完后loading关闭*/
    // this.ht.$emit('loading', true); // 关闭loading

  },
  methods: {

  }
}

</script>

<style lang="scss" scoped>
// @import "../../assets/sass/com";

.sn-div {
  /*background-color: #1e7e34;*/
  width: 100%;
  margin-top: 60px;

  .sn-div1 {
    width: 99%;
    margin: 0 auto;
  }
}
</style>

