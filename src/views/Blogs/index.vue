<!--
 * @Author: your name
 * @Date: 2021-07-19 10:04:36
 * @LastEditTime: 2021-11-16 14:23:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Blogs\Blogs.vue
-->

<script lang="ts" setup>
import { onMounted } from 'vue'
import SAspin from '@/components/aspin/sAspin.vue'
import BlogsSidebar from './components/BlogsSidebar.vue'
import { blogsList } from './components/data'
import BlogsContent from './components/BlogsContent.vue'
import { method, GetApi } from './index'

import { tool } from '@/utils/common/tool'
async function currentchange(val: number) {
  blogsList.page = val
  await method.GetFyAsync()
  await tool.BackTop()
}
onMounted(async () => {
  await GetApi()
})
</script>

<template>
  <blogs-sidebar></blogs-sidebar>
  <blog-sidebar></blog-sidebar>
  <a-back-top />
  <s-aspin></s-aspin>
  <div id="blogs" class="animate__animated animate__fadeIn">
    <div class="blogs_main">
      <!-- 内容框 -->
      <blogs-content :dataResult="blogsList.dataResult"></blogs-content>
      <!-- end 内容框  -->
      <!-- 分页 -->
      <div class="blogs-page">
        <a-pagination
          size="small"
          @change="currentchange"
          :total="blogsList.count"
          :pageSize="blogsList.pagesize"
          show-quick-jumper
        ></a-pagination>
      </div>
      <!-- end 分页 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'index.scss';
</style>
