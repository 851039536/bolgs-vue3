<!--
 * @Author: your name
 * @Date: 2021-09-15 10:01:43
 * @LastEditTime: 2021-09-17 17:33:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\index\components\Category.vue
-->

<template>
  <div class="index_s_type">
    <div class="index_s_type_name">分类</div>
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
  props: ['result'],

  setup() {
    const TagSkip = async (id: any) => {
      await RouterId('/TagText', id)
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
