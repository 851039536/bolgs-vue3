<!--
 * @Author: Index.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-08-10 13:40:48
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
    name: "index",
    components: {
      IndexTitle,
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            '基于TailWindcss,Vue3+TypeScript, NetCore3.1,AntDesignVue组件库 开发搭建 项目地址: https://gitee.com/kaiouyang-sn"',
          onClick: () => {
            console.log('基于TailWindcss,Vue3+TypeScript, NetCore3.1,AntDesignVue组件库 开发搭建 项目地址: https://gitee.com/kaiouyang-sn"');
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
</style>

