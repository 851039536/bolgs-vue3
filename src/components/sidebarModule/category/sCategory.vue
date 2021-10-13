<!--
 * @Author: your name
 * @Date: 2021-09-15 10:01:43
 * @LastEditTime: 2021-10-13 14:57:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\index\components\Category.vue
-->

<template>
  <div class="index_s_type">
    <div class="index_s_type_name">{{ name }}</div>
    <div class="inline-flex" v-for="Sorts in result" :key="Sorts.sortId">
      <div class="index-si-type-text" @click="TagSkip(Sorts.labelId)">
        {{ Sorts.sortName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterId } from '@/hooks/routers'
export default defineComponent({
  props: ['result', 'name'],

  setup() {
    const TagSkip = async (id: any) => {
      await RouterId('/Tag', id)
    }
    return {
      TagSkip,
    }
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
