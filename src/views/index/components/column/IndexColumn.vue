<!--
 * @Author: your name
 * @Date: 2020-12-08 11:17:02
 * @LastEditTime: 2021-11-17 12:10:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\index\components\column\IndexColumn.vue
-->

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { state, column } from './index'
  import BlogsContent from '@/views/blogs/components/BlogsContent.vue'

  onMounted(async () => {
    await column.GetCount()
    await column.GetFy()
  })
</script>

<template>
  <div class="indextitle animate__animated animate__fadeIn">
    <a-back-top />
    <!-- article表内容 -->
    <BlogsContent :data-result="state.dataResult"></BlogsContent>
    <!-- end article表内容 -->
    <a-button type="primary">Primary Button</a-button>
    <!-- 分页 -->
    <div class="indextitle_page">
      <a-pagination
        size="small"
        @change="column.CurrentChange"
        :total="state.count"
        :pageSize="state.pagesize"
        show-quick-jumper
      />
    </div>
    <!-- end 分页-->
  </div>
</template>

<style lang="scss">
  @import './index.scss';
  @import '@/views/blogs/index.scss';
</style>
