<!--
 * @Author: your name
 * @Date: 2021-08-30 15:38:59
 * @LastEditTime: 2021-11-16 15:28:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\SidebarModule\BlogTag.vue
-->
<template>
  <div class="index_s_tag">
    <div class="index_s_tag_name">标签</div>
    <div class="index-si-tag-div" v-for="res in result" :key="res.id" :title="res.name">
      <div class="transition duration-500 ease-in-out transform index-si-tag-text hover: hover:scale-110 hover:text-red-600">
        <a @click="Skip(res.name)">{{ res.name }}</a>
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
    const Skip = async (name: string) => {
      await RouterId('/Tag', name)
    }
    return {
      Skip
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
