<!--
 * @Author: Index.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-09-01 15:54:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Index.vue
-->
<template>
  <div>
    <blog-sidebar></blog-sidebar>
    <IndexSidebar></IndexSidebar>
    <IndexTitle></IndexTitle>
  </div>
</template>

<script lang="ts">
  // 组件导入
  import IndexTitle from "./IndexTitle.vue";
  import { notification } from "ant-design-vue";
  import { onMounted } from "vue";
  export default {
    name: "index",
    components: {
      IndexTitle,
    },
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
