<!--
 * @Author: Index.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-09-17 16:13:49
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
import IndexTitle from './components/column/IndexColumn.vue'
import { notification } from 'ant-design-vue'
import { defineComponent, onBeforeMount, onMounted } from 'vue'

export default defineComponent({
  name: 'index',
  components: { IndexTitle },
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          '基于TailWindcss,Vue3+TypeScript, Net5,AntDesignVue组件库 开发搭建 项目地址: https://gitee.com/kaiouyang-sn',
        onClick: () => {
          console.log(
            '基于TailWindcss,Vue3+TypeScript, Net5,AntDesignVue组件库 开发搭建 项目地址: https://gitee.com/kaiouyang-sn'
          )
        },
      })
    }
    onBeforeMount(() => {
      console.log('index')
    })
    onMounted(async () => {
      await openNotification()
    })
    return {}
  },
})
</script>
