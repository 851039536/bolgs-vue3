<!--
 * @Author: your name
 * @Date: 2021-10-18 17:30:43
 * @LastEditTime: 2021-11-19 14:27:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\ArticleTable.vue
-->
<script lang="ts" setup>
  import { columns, state } from './data'
  import { article, TOKEN, labels } from '@/api'
  import { inject, onMounted } from 'vue'
  import { message } from 'ant-design-vue'
  import { Routers, RouterId } from '@/hooks/routers'
  import { navname } from '../utils/data'
  import { storage } from '@/utils/storage/storage'

  const reload: any = inject('reload')
  const confirm = async (data: any) => {
    await article.DeleteAsync(data.id).then(() => {
      message.success('删除成功')
      reload()
    })
  }
  const cancel = () => {
    message.info('已取消')
  }

  async function GetContains(name: string) {
    if (name === '' && state.labelStr === 'ALL') {
      state.dataResult = await article.GetFyAsync(3, storage.get('user'), 1, 1000, 'id', true, false)
      return
    } else if (state.labelStr === 'ALL') {
      state.dataResult = await article.GetContainsAsync(0, '0', name, true)
    } else {
      state.dataResult = await article.GetContainsAsync(2, state.labelStr, name, true)
    }
  }
  async function GetTag() {
    message.info(state.labelStr)
    if (state.labelStr === 'ALL') {
      state.dataResult = await article.GetFyAsync(3, storage.get('user'), 1, 1000, 'id', true, false)
    } else {
      state.dataResult = await article.GetFyAsync(
        4,
        state.labelStr + ',' + storage.get('user'),
        1,
        1000,
        'id',
        true,
        false
      )
    }
  }
  async function Ordering() {
    if (state.order) {
      state.dataResult = await article.GetFyAsync(3, storage.get('user'), 1, 1000, 'id', state.order, false)
      state.order = false
    } else {
      state.dataResult = await article.GetFyAsync(3, storage.get('user'), 1, 1000, 'id', state.order, false)
      state.order = true
    }
  }

  onMounted(async () => {
    await TOKEN()
    state.dataResult = await article.GetFyAsync(3, storage.get('user'), 1, 1000, 'id', true, false)
    state.labelResult = await labels.GetAllAsync(false)
    navname.name = '文章展示'
    navname.name2 = '文章列表'
  })
</script>
<template>
  <div>
    <div class="table-operations">
      <a-space>
        <a-button @click="Routers('/Admin-index/ArticleAdd')">添加</a-button>
        <a-button @click="reload()">刷新</a-button>
        <a-select style="width: 100px" v-model:value="state.labelStr" @change="GetTag">
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option :value="res.name" v-for="res in state.labelResult.data" :key="res.id">{{
            res.name
          }}</a-select-option>
        </a-select>
        <!-- 搜索  -->
        <a-select
          show-search
          placeholder="标题搜索"
          style="width: 150px"
          :default-active-first-option="false"
          :show-arrow="false"
          :not-found-content="null"
          @search="GetContains"
        >
        </a-select>
      </a-space>
      <!-- end 搜索 -->
      <a-button style="margin-left: 10px" @click="Ordering()">排序</a-button>
    </div>
    <div>
      <a-table
        size="small"
        :bordered="true"
        :columns="columns"
        rowKey="id"
        :data-source="state.dataResult.data"
        :pagination="{ pageSize: 15 }"
        :scroll="{ x: 1500, y: 360 }"
      >
        <template #ed="{ record }">
          <a type="primary" ghost @click="RouterId('/Admin-index/ArticleEdit', record.id)">Edit</a>
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
