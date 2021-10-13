<!--
 * @Author: 顶部导航栏
 * @Date: 2020-12-08 09:59:05
 * @LastEditTime: 2021-10-13 14:50:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\BlogHeader.vue
-->

<script lang="ts" setup>
import { onMounted } from 'vue'
import { state, header } from './index'
import { Routers } from '@/hooks/routers'

const skip = async (num: any) => {
  switch (num) {
    case 13:
      window.open('https://www.cnblogs.com/ouyangkai/')
      break
    case 14:
      window.open('https://gitee.com/kaiouyang-sn')
      break
    default:
      await Routers(num)
      break
  }
}
onMounted(async () => {
  await header.GetType()
})
</script>
<template>
  <nav class="header-sn">
    <div class="header-sn-1">
      <!--  -->
      <div class="header_main">
        <div class="header-title">
          <span class="text-2xl font-medium tracking-tight">少年</span>
        </div>
        <div class="header_text">
          <template v-for="(item, index) in state.ResultList" :key="index">
            <a @click="skip(item.path)" v-if="item.identity">{{
              item.title
            }}</a>
          </template>
        </div>
      </div>
      <!--  -->
      <div class="header_text_1">
        <div class="header-text-r-1">
          <a @click="skip(13)" v-once>博客园</a>
          <a @click="skip(14)" v-once>Gitee</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
