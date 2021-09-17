<!--
 * @Author: your name
 * @Date: 2021-09-14 13:43:14
 * @LastEditTime: 2021-09-17 15:14:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\describe\index.vue
-->

<template>
  <!-- 描述内容 -->
  <div class="sDescribe">
    <div>
      <p>{{ UserTalk }}</p>
    </div>
  </div>
  <!-- end  描述内容-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['UserTalk'],
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
