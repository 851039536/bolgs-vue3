<!--
 * @Author: your name
 * @Date: 2021-07-19 10:04:36
 * @LastEditTime: 2021-11-01 10:34:41
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
import { methods, QueryAll } from './index'

import { api } from '../../utils/api/api'
import { tool } from '@/utils/common/tool'
async function currentchange(val: number) {
  blogsList.page = val
  await methods.GetFyAsync()
  await tool.BackTop()
}
async function aa() {
  await api.article.genre().then((res: any) => {
    console.log('测试=>' + res.data)
  })
}
onMounted(async () => {
  await QueryAll()
  await api.article.genre().then((res: any) => {
    console.log('1=>' + res.data)
  })
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
      <button @click="aa">测试</button>
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
