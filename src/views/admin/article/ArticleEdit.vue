<!--
 * @Author: your name
 * @Date: 2021-10-19 16:42:48
 * @LastEditTime: 2021-10-22 14:24:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\ArticleForm.vue
-->
<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { labels, article, sort, TOKEN } from '@/api'
import { message } from 'ant-design-vue'
import { formState, stateArray } from './data'
import { useRoute } from 'vue-router'
import { Routers, go } from '@/hooks/routers'
import { time } from '../utils/tool'
const route = useRoute()
const Rid = reactive({
  id: route.query.id,
})

const onSubmit = async () => {
  formState.timeModified = time.timeModified
  await article.UpdateAsync(formState).then(() => {
    message.info('更新完成')
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

  article.GetByIdAsync(Rid.id, false).then((res) => {
    formState.articleId = res.data.articleId
    formState.comment = res.data.comment
    formState.give = res.data.give
    formState.html = res.data.html
    formState.labelId = res.data.labelId
    formState.read = res.data.read
    formState.sortId = res.data.sortId
    formState.text = res.data.text
    formState.timeCreate = res.data.timeCreate
    time.timeModified = res.data.timeModified
    formState.title = res.data.title
    formState.titleText = res.data.titleText
    formState.typeTitle = res.data.typeTitle
    formState.urlImg = res.data.urlImg
    formState.userId = res.data.userId
  })
}
onMounted(async () => {
  await GetAll()
  await TOKEN()
})
</script>

<template>
  <div class="form" style="padding: 0 24px 24px;">
    <div class="form_title">
      <a-breadcrumb style="margin: 16px 0;">
        <a-breadcrumb-item>文章展示</a-breadcrumb-item>
        <a-breadcrumb-item>新增文章</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
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
            <a-input v-model:value="formState.titleText" />
          </a-form-item>

          <a-form-item label="发表人" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.userId" />
          </a-form-item>
          <a-form-item label="更新时间" :wrapper-col="{ span: 6, offset: 0 }">
            <a-date-picker v-model:value="time.timeModified" />
          </a-form-item>

          <a-form-item label="标签" :wrapper-col="{ span: 6, offset: 0 }">
            <a-select
              v-model:value="formState.labelId"
              placeholder="please select your zone"
            >
              <a-select-option
                v-for="item in stateArray.labelResult"
                :key="item.labelId"
                :label="item.labelName"
                :value="item.labelId"
                >{{ item.labelName }}</a-select-option
              >
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="类别" :wrapper-col="{ span: 6, offset: 0 }">
            <a-select
              v-model:value="formState.sortId"
              placeholder="please select your zone"
            >
              <a-select-option
                v-for="item in stateArray.sortResult"
                :key="item.sortId"
                :label="item.sortName"
                :value="item.sortId"
                >{{ item.sortName }}</a-select-option
              >
            </a-select>
          </a-form-item>

          <a-form-item label="内容">
            <v-md-editor v-model="formState.text"></v-md-editor>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">更新</a-button>
            <a-button style="margin-left: 10px;" @click="go(-1)">返回</a-button>
          </a-form-item>
        </div>
      </a-form>
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
