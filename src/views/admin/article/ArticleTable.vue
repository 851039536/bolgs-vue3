<!--
 * @Author: your name
 * @Date: 2021-10-18 17:30:43
 * @LastEditTime: 2021-10-19 16:47:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\ArticleTable.vue
-->
<script lang="ts" setup>
import { columns, state } from './data'
import { article } from '@/api'
import { onMounted } from 'vue'
import { message } from 'ant-design-vue'
import { Routers } from '@/hooks/routers'

async function al(name: string) {
  message.info(name.articleId)
}
async function ed(name: string) {
  message.info(name.articleId)
  Routers('/Admin-index/ArticleForm')
}

async function GetFySortTitle() {
  await article.GetFyTitleAsync(1, 1000, false).then((result: any) => {
    state.dataResult = result.data
  })
}
onMounted(async () => {
  await GetFySortTitle()
})
</script>
<template>
  <a-layout style="padding: 0 24px 24px;">
    <a-breadcrumb style="margin: 16px 0;">
      <a-breadcrumb-item>文章展示</a-breadcrumb-item>
      <a-breadcrumb-item>文章列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        minHeight: '95%',
      }"
    >
      <div class="table-operations">
        <a-button @click="setAgeSort">刷新</a-button>
        <a-button @click="clearFilters">添加</a-button>
        <a-button @click="clearAll">Clear filters and sorters</a-button>
      </div>
      <a-table
        size="small"
        :columns="columns"
        rowKey="articleId"
        :data-source="state.dataResult"
        :pagination="{ pageSize: 7 }"
        :scroll="{
          y: 350,
        }"
      >
        <template #ed="{ record }">
          <a-button type="primary" ghost @click="ed(record)">编辑</a-button>
        </template>
        <template #de="{ record }">
          <a-button type="primary" ghost @click="al(record)">删除</a-button>
        </template>
      </a-table>
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss" scoped>
//@import "./index.scss";
</style>
