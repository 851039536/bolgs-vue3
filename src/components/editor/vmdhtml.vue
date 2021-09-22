<!--
 * @Author: your name
 * @Date: 2021-09-18 16:37:23
 * @LastEditTime: 2021-09-22 13:50:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\editor\vmdhtml.vue
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
      await article.GetByIdAsync(210, true).then((res: any) => {
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
