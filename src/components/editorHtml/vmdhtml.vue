<!--
 * @Author: your name
 * @Date: 2021-09-18 16:37:23
 * @LastEditTime: 2021-09-18 16:51:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\editorHtml\vmdhtml.vue
-->
<template>
  <v-md-preview :text="state.blog"></v-md-preview>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import { article } from '@/api/index'
export default defineComponent({
  setup() {
    interface State {
      blog: string
    }
    const state: State = reactive({
      blog: '',
    })
    const GetAll = async () => {
      await article.GetByIdAsync(206, true).then((res: any) => {
        state.blog = res.data.text
      })
    }
    onMounted(async () => {
      await GetAll()
    })
    return { state }
  },
})
</script>

<style lang="scss" scoped>
//@import "./index.scss";
</style>
