<!--
 * @Author: your name
 * @Date: 2021-08-30 15:38:59
 * @LastEditTime: 2021-09-17 15:44:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\SidebarModule\BlogTag.vue
-->
<template>
  <div class="index_s_tag">
    <div class="index_s_tag_name">标签</div>
    <div
      class="index-si-tag-div"
      v-for="results in result"
      :key="results.labelId"
      :title="results.labelName"
    >
      <div
        class="transition duration-500 ease-in-out transform index-si-tag-text hover: hover:scale-110 hover:text-red-600"
      >
        <a @click="Skip(results.labelId)">{{ results.labelName }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { RouterId } from '@/hooks/routers'
export default defineComponent({
  props: ['result'],
  setup() {
    const Skip = async (id: any) => {
      await RouterId('/TagText', id)
    }
    onMounted(async () => {
      console.log('ico')
    })
    return {
      Skip,
    }
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
