<!--
 * @Author: your name
 * @Date: 2021-10-18 17:30:43
 * @LastEditTime: 2021-11-02 09:58:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\ArticleTable.vue
-->
<script lang="ts" setup>
  import { columns, state, stateArray, stateStr } from './data'
  import { article, TOKEN, labels, interfaces } from '@/api'
  import { inject, onMounted } from 'vue'
  import { message } from 'ant-design-vue'
  import { Routers, RouterId } from '@/hooks/routers'
  import moment from 'moment'
  import { navname } from '../utils/data'

  async function GetAllAsync() {
    await interfaces.GetAllAsync(false).then((result: any) => {
      state.dataResult = result.data
      console.log('%c [ state.dataResult ]', 'font-size:13px; background:pink; color:#bf2c9f;', state.dataResult)
    })
  }

  const reload: any = inject('reload')
  const confirm = async (data: any) => {
    await article.DeleteAsync(data.articleId).then(() => {
      message.success('删除成功')
      reload()
    })
  }
  const cancel = () => {
    message.info('已取消')
  }

  /**
   * @description: 搜素框模糊查询
   * @param {*} name
   */
  async function SearchTitle(name: string) {
    if (name === '') {
      return
    }
    if (stateStr.labelStr === 'ALL') {
      await article.GetContainsAsync(name).then((res) => {
        state.dataResult = res.data
      })
    } else {
      await article.GetTypeContainsAsync(stateStr.labelStr, name, false).then((res) => {
        state.dataResult = res.data
      })
    }
  }
  async function selectTag() {
    message.info(stateStr.labelStr)
  }
  onMounted(async () => {
    await TOKEN()
    await GetAllAsync()
    await labels.GetAllAsync(false).then((res) => {
      stateArray.labelResult = res.data
    })
    navname.name = '设置'
    navname.name2 = '参数列表'
  })
</script>
<template>
  <div>
    <div class="table-operations">
      <a-space>
        <a-button @click="Routers('/Admin-index/ArticleAdd')">添加</a-button>
        <a-button @click="reload()">刷新</a-button>
        <a-select style="width: 120px" v-model:value="stateStr.labelStr" @change="selectTag">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option :value="item.labelId" v-for="item in stateArray.labelResult" :key="item.labelId">{{
            item.labelName
          }}</a-select-option>
        </a-select>
        <!-- 搜索  -->
        <a-select
          show-search
          placeholder="标题搜索"
          style="width: 200px"
          :default-active-first-option="false"
          :show-arrow="false"
          :not-found-content="null"
          @search="SearchTitle"
        >
        </a-select>
      </a-space>
      <!-- end 搜索 -->
    </div>
    <div>
      <a-table
        size="small"
        :bordered="true"
        :columns="columns"
        rowKey="id"
        :data-source="state.dataResult"
        :pagination="{ pageSize: 8 }"
        :scroll="{
          y: 380
        }"
      >
        <template #identity="{ record }">
          <a>{{ record.identity }}</a>
        </template>
        <template #ed="{ record }">
          <a @click="RouterId('/Admin-index/ArticleEdit', record.articleId)">编辑</a>
        </template>
        <template #de="{ record }">
          <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="confirm(record)" @cancel="cancel">
            <a href="#">Delete</a>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .table-operations {
    @apply mb-2;
  }
</style>
