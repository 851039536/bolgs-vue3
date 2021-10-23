<!--
 * @Author: your name
 * @Date: 2021-09-22 13:52:06
 * @LastEditTime: 2021-10-23 11:33:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\editor\VmdContent.vue
-->
<script setup lang="ts">
import { onBeforeUpdate, reactive } from 'vue'

//v-model 不能直接修改
const props = defineProps<{
  result: string
  loading?: boolean
}>()

const state = reactive({
  result: props.result,
})
//在更新之前赋值
onBeforeUpdate(async () => {
  state.result = props.result
})
</script>
<template>
  <div class="indextest_text">
    <a-skeleton :loading="loading" :paragraph="{ rows: 15 }" active />
    <v-md-editor v-model="state.result" mode="preview"></v-md-editor>
  </div>
</template>

<style lang="scss" scoped>
.indextest_text {
  @apply bg-white mt-6;
}
</style>
