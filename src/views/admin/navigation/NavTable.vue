<!--
 * @Author: your name
 * @Date: 2021-10-18 17:30:43
 * @LastEditTime: 2021-11-10 17:50:33
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
import { navname } from '../utils/data'
import moment from 'moment'

async function GetFy() {
  await navigation
    .GetFyAsync(0, '0', 1, 1000, 'id', true, false)
    .then((result: any) => {
      momentData(result)
      state.dataResult = result.data
    })
}
const reload: any = inject('reload')
const confirm = async (data: any) => {
  await navigation.DeleteAsync(data.id).then(() => {
    message.success('删除成功')
    reload()
  })
}
const cancel = () => {
  message.info('已取消')
}

async function SelectNav() {
  message.info(state.navStr)
}
/**
 * @description: 搜素框模糊查询
 * @param {string} name 名称
 */
async function SearchTitle(name: string) {
  if (name === '') {
    return
  }
  if (state.navStr === 'ALL') {
    await navigation.GetContainsAsync(0, 'null', name, false).then((res) => {
      state.dataResult = res.data
    })
  } else {
    console.log(
      '%c [ state.navStr ]',
      'font-size:13px; background:pink; color:#bf2c9f;',
      state.navStr
    )
    await navigation
      .GetContainsAsync(1, state.navStr, name, false)

      .then((res) => {
        state.dataResult = res.data
      })
  }
}
function momentData(result: any) {
  moment.locale()
  result.data.forEach((res: any) => {
    res.timeCreate = moment(res.timeCreate).format('YYYY-MM-DD- H:mm:ss')
    res.timeModified = moment(res.timeModified).format('YYYY-MM-DD- H:mm:ss')
  })
}

onMounted(async () => {
  await TOKEN()
  await GetFy()
  await navigation.GetSnNavigationTypeSAllAsync(false).then((res) => {
    state.navTypeData = res.data
  })
  navname.name = '内容分享'
  navname.name2 = '导航列表'
})
</script>
<template>
  <div>
    <div class="table-operations">
      <a-space>
        <a-button @click="Routers('/Admin-index/NavAdd')">添加</a-button>
        <a-button @click="reload()">刷新</a-button>
        <!--   v-model:value="stateStr.labelStr" -->
        <a-select
          style="width: 100px;"
          v-model:value="state.navStr"
          @change="SelectNav"
        >
          <a-select-option value="ALL">ALL</a-select-option>
          <a-select-option
            :value="item.title"
            v-for="item in state.navTypeData"
            :key="item.id"
            >{{ item.title }}</a-select-option
          >
        </a-select>

        <!-- 搜索  -->
        <a-select
          show-search
          placeholder="标题搜索"
          style="width: 150px;"
          :default-active-first-option="false"
          :show-arrow="false"
          :not-found-content="null"
          @search="SearchTitle"
        >
        </a-select>
      </a-space>
      <!-- end 搜索 -->
    </div>
    <a-table
      size="small"
      :bordered="true"
      :columns="columns"
      rowKey="id"
      :data-source="state.dataResult"
      :pagination="{ pageSize: 15 }"
      :scroll="{ x: 1500, y: 360 }"
    >
      <template #ed="{ record }">
        <a @click="RouterId('/Admin-index/NavEdit', record.id)">Edit</a>
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
  </div>
</template>

<style lang="scss" scoped>
//@import "./index.scss";
.table-operations {
  @apply mb-2;
}
</style>
