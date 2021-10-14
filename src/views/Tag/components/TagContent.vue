<!--
 * @Author: your name
 * @Date: 2021-10-12 16:35:14
 * @LastEditTime: 2021-10-14 14:45:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\tag\components\TagContent.vue
-->
<script lang="ts" setup>
import { article } from '@/api'
import { state } from '../data'
import markdown from '@/utils/markdown.js'

async function getAll1(id: any) {
  await article.GetByIdAsync(id, true).then((res: any) => {
    const result = markdown.marked(res.data.text)
    result.then((response: any) => {
      state.blog = response.content
    })
  })
}
</script>
<template>
  <div class="tag_content">
    <div class="text-sidebar">
      <div
        class="text-sidebar-forms"
        v-for="label in state.newinfo"
        :key="label.articleId"
      >
        <div class="forms-1" @click="getAll1(label.articleId)">
          <a>{{ label.title }}</a>
        </div>
        <div class="forms-2">{{ label.timeCreate.substring(0, 10) }}</div>
      </div>
    </div>

    <div class="text-blog">
      <div class="blog" v-html="state.blog"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//@import "./index.scss";
</style>
