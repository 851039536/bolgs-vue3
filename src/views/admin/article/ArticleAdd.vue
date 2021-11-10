<!--
 * @Author: your name
 * @Date: 2021-10-19 16:42:48
 * @LastEditTime: 2021-11-10 15:01:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\ArticleForm.vue
-->
<script lang="ts" setup>
import { onMounted } from 'vue'
import { labels, article, sort, TOKEN } from '@/api'
import { message } from 'ant-design-vue'
import { formState, stateArray } from './data'
import { Routers, go, reloads } from '@/hooks/routers'
import { time } from '../utils/tool'
import { navname } from '../utils/data'

const onSubmit = async () => {
  formState.timeModified = formState.timeCreate = time.timeCreate
  await article.AddAsync(formState).then(() => {
    message.info('添加成功')
    Routers('/Admin-index/ArticleTable')
  })
}

async function GetAll() {
  labels.GetAllAsync(true).then((res) => {
    stateArray.labelResult = res.data
  })
  sort.GetAllAsync(true).then((res) => {
    stateArray.sortResult = res.data
  })
}

onMounted(async () => {
  await GetAll()
  await TOKEN()
  navname.name = '文章展示'
  navname.name2 = '新增文章'
})
</script>

<template>
  <div class="form">
    <div class="form_content">
      <a-form
        :model="formState"
        :label-col="{ span: 2 }"
        :wrapper-col="{ span: 21 }"
      >
        <div class="form_content_1">
          <a-form-item label="标题" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.title" />
          </a-form-item>
          <a-form-item label="内容简述">
            <a-textarea v-model:value="formState.sketch" />
          </a-form-item>

          <a-form-item label="发表人" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.userId" />
          </a-form-item>
          <!-- <a-form-item label="创建时间" :wrapper-col="{ span: 6, offset: 0 }">
            <a-date-picker v-model:value="time.timeCreate" />
          </a-form-item> -->
          <a-form-item label="标签" :wrapper-col="{ span: 6, offset: 0 }">
            <a-select
              v-model:value="formState.labelId"
              placeholder="please select your zone"
            >
              <a-select-option
                v-for="item in stateArray.labelResult"
                :key="item.id"
                :label="item.id"
                :value="item.id"
                >{{ item.name }}</a-select-option
              >
            </a-select>
          </a-form-item>

          <a-form-item label="类别" :wrapper-col="{ span: 6, offset: 0 }">
            <a-select
              v-model:value="formState.sortId"
              placeholder="please select your zone"
            >
              <a-select-option
                v-for="item in stateArray.sortResult"
                :key="item.id"
                :label="item.id"
                :value="item.id"
                >{{ item.name }}</a-select-option
              >
            </a-select>
          </a-form-item>

          <a-form-item label="内容">
            <v-md-editor v-model="formState.text"></v-md-editor>
          </a-form-item>
        </div>
      </a-form>
    </div>
    <div>
      <a-button type="primary" @click="onSubmit">添加</a-button>
      <a-button style="margin-left: 10px;" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px;" @click="reloads">刷新</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  @apply w-full h-full;

  .form_content {
    height: 480px;

    @apply bg-white overflow-auto;

    .form_content_1 {
      @apply mt-3;
    }
  }
}
</style>
