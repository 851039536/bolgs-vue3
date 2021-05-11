<!--
 * @Author: Index.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-05-11 10:11:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Index.vue
-->
<template>
  <div>
    <!-- 左侧边栏 -->
    <Sidebarsn></Sidebarsn>
    <!--侧边栏-->
    <IndexSidebar></IndexSidebar>
    <!-- 内容页面 -->
    <IndexTitle></IndexTitle>
    <!-- 回到顶部 -->
    <a-back-top />
  </div>
</template>

<script lang="ts">
  // 组件导入
  import IndexTitle from "./index/IndexTitle.vue";
  import { notification } from "ant-design-vue";
  import { onMounted } from "vue";
  export default {
    name: "Index",
    components: {
      IndexTitle,
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            '基于TailWindcss Vue3 NetCoreWebApi TypeScript AntDesignVue 开发搭建 项目地址: https://gitee.com/kaiouyang-sn"',
          onClick: () => {
            console.log('Notification Clicked!');
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
</style>

