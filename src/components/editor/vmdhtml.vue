<!--
 * @Author: your name
 * @Date: 2021-09-18 16:37:23
 * @LastEditTime: 2021-10-23 09:18:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\editor\vmdhtml.vue
-->

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive, onMounted } from 'vue'
import { article } from '@/api/index'

const route = useRoute()
interface State {
  blog: string
  title: string
  id: any
}
const state: State = reactive({
  blog: '',
  title: '',
  id: route.query.id,
})

const GetAll = async () => {
  await article.GetByIdAsync(state.id, true).then((res: any) => {
    state.blog = res.data.text
    state.title = res.data.title
  })
}
onMounted(async () => {
  await GetAll()
})
</script>
<template>
  <a-back-top />
  <div class="vmd">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240);"
      :title="state.title"
    />
    <!-- <v-md-preview :text="state.blog"></v-md-preview> -->
    <v-md-editor v-model="state.blog" mode="preview"></v-md-editor>
  </div>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

.vmd {
  width: 94%;

  @apply bg-white m-auto mt-11;
}
</style>
