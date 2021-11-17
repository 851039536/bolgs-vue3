<!--
 * @Author: Index.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-11-17 14:58:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Index.vue
-->
<script lang="ts" setup>
  import IndexTitle from './components/column/IndexColumn.vue'
  import { notification } from 'ant-design-vue'
  import { onMounted } from 'vue'

  const openNotification = async () => {
    notification.open({
      message: 'Title',
      description:
        '基于TailWindcss,Vue3+TypeScript, Net5,AntDesignVue组件库 开发搭建 项目地址: https://gitee.com/kaiouyang-sn',
      onClick: () => {
        console.log(
          '基于TailWindcss,Vue3+TypeScript, Net5,AntDesignVue组件库 开发搭建 项目地址: https://gitee.com/kaiouyang-sn'
        )
      }
    })
  }
  onMounted(async () => {
    await openNotification()
  })
</script>
<template>
  <div>
    <blog-sidebar></blog-sidebar>
    <IndexSidebar></IndexSidebar>
    <IndexTitle></IndexTitle>
  </div>
</template>
