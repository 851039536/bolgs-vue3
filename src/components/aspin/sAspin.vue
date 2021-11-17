<!--
 * @Author: your name
 * @Date: 2021-09-13 17:56:54
 * @LastEditTime: 2021-11-17 17:29:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\aspin\Aspin.vue
-->
<script lang="ts" setup>
  import { h } from 'vue'
  import { LoadingOutlined } from '@ant-design/icons-vue'
  import { dataList } from './data'

  const indicator = h(LoadingOutlined, {
    style: {
      fontSize: '24px'
    },
    spin: true
  })
</script>
<template>
  <!-- animate__animated animate__fadeOut -->
  <div class="aspin_main " v-show="dataList.show">
    <div class="example">
      <a-spin :spinning="true" size="large" tip="......" :indicator="indicator" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .aspin_main {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 20;
    width: 200px;
  }
</style>
