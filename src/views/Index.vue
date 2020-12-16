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

<script lang="ts">
// 组件导入
import IndexText from "./index/Index-Text.vue";
import { notification } from "ant-design-vue";
import { onMounted } from "vue";
export default {
  name: "Index",
  components: {
    IndexText,
  },

  setup() {
    const openNotification = () => {
      notification.open({
        message: "哈喽!!!",
        description:
          "项目基于TailWindcss Vue3 NetCoreWebApi TypeScript AntDesignVue 开发搭建 项目地址: https://gitee.com/kaiouyang-sn",
        placement: "bottomRight",
        duration: 10,
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    };

    onMounted(async () => {
      await openNotification();
    });
    return {
      openNotification,
    };
  },
};
</script>
<style lang="scss" scoped>
  @import "../assets/sass/com";
  .sn-div {
    @include initialize(100%, null, 62px, null, null, null, #f7f7f7);
  }
</style>

