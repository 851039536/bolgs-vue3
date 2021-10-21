<!--
 * @Author: your name
 * @Date: 2021-10-18 17:30:43
 * @LastEditTime: 2021-10-21 17:09:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\ArticleTable.vue
-->
<script lang="ts" setup>
import { columns, state } from './data'
import { navigation, TOKEN } from '@/api'
import { inject, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import { Routers, RouterId } from '@/hooks/routers'

async function add() {
  Routers('/Admin-index/ArticleAdd')
}
async function edit(data: any) {
  message.info(data.articleId)
  RouterId('/Admin-index/ArticleEdit', data.articleId)
}
async function GetFySortTitle() {
  await navigation
    .GetFyAllAsync('all', 1, 1000, true, false)
    .then((result: any) => {
      state.dataResult = result.data
    })
}

const reload: any = inject('reload')
const confirm = async (data: any) => {
  // await navigation.DeleteAsync(data.articleId).then((res) => {
  //   message.success('删除成功')
  //   reload()
  // })
}
const cancel = () => {
  message.info('已取消')
}

/**
 * @description: 搜素框模糊查询
 * @param {string} name 名称
 */
async function SearchTitle(name: string) {
  // await article.GetContainsAsync(name).then((res) => {
  //   state.dataResult = res.data
  // })
}
onMounted(async () => {
  await GetFySortTitle()
  await TOKEN()
})
</script>
<template>
  <a-layout style="padding: 0 24px 24px;">
    <a-breadcrumb style="margin: 16px 0;">
      <a-breadcrumb-item>内容分享</a-breadcrumb-item>
      <a-breadcrumb-item>导航列表</a-breadcrumb-item>
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
        <a-button @click="add()">添加</a-button>
        <a-button @click="reload()">刷新</a-button>

        <a-select
          ref="select"
          v-model:value="value1"
          style="width: 120px;"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="jack">全部</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
        <!-- 搜索  -->
        <!-- <a-select
          show-search
          placeholder="标题搜索"
          style="width: 200px;"
          :show-arrow="false"
          :filter-option="false"
          @search="SearchTitle"
        >
          >
          <a-select-option v-for="d in state.dataResult" :key="d.articleId">{{
            d.title
          }}</a-select-option>
        </a-select> -->

        <a-select
          show-search
          placeholder="标题搜索"
          style="width: 200px;"
          :default-active-first-option="false"
          :show-arrow="false"
          :filter-option="false"
          :not-found-content="null"
          :options="state.dataResult.title"
          @search="SearchTitle"
        >
        </a-select>
        <!-- end 搜索 -->
      </div>
      <a-table
        size="small"
        bordered="true"
        :columns="columns"
        rowKey="articleId"
        :data-source="state.dataResult"
        :pagination="{ pageSize: 7 }"
        :scroll="{
          y: 350,
        }"
      >
        <template #ed="{ record }">
          <a-button type="primary" ghost @click="edit(record)">编辑</a-button>
        </template>
        <template #de="{ record }">
          <a-popconfirm
            title="确认删除?"
            ok-text="是"
            cancel-text="否"
            @confirm="confirm(record)"
            @cancel="cancel"
          >
            <a href="#">Delete</a>
          </a-popconfirm>
        </template>
      </a-table>
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss" scoped>
//@import "./index.scss";
.table-operations {
  @apply mb-2;
}
</style>
