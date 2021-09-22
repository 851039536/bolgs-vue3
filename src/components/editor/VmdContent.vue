<!--
 * @Author: your name
 * @Date: 2021-09-22 13:52:06
 * @LastEditTime: 2021-09-22 14:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\editor\VmdContent.vue
-->

<template>
  <div class="indextest_text">
    <a-skeleton :loading="loading" :paragraph="{ rows: 15 }" active />
    <v-md-preview :text="result"></v-md-preview>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['result', 'loading'],
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.indextest_text {
  @apply bg-white mt-6;
}
</style>
