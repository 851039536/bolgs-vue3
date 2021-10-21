<!--
 * @Author: 博客侧边栏
 * @Date: 2020-12-08 11:27:26
 * @LastEditTime: 2021-10-21 09:59:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Sidebarsn.vue
-->

<script lang="ts" setup>
import { state, raside } from './index'
import { onMounted, reactive } from 'vue'

onMounted(async () => {
  await raside.GetType()
})
</script>
<template>
  <div id="blogSidebar">
    <div class="si_scroll">
      <div class="si_img">
        <img src="@/assets/img/si.jpg" />
      </div>
      <div
        class="si_text"
        v-for="(item, index) in state.resultList"
        :key="index"
      >
        <p @click="raside.skip(item.path)" v-if="item.identity">
          {{ item.title }}
        </p>
      </div>

      <div class="si_website">
        <a href="http://oykperson.xyz">http://www.oykperson.xyz</a>
      </div>
      <div class="si_described">
        <p class="si_described_text">
          SN © 2021.Rights Reserved. 备案 :
          <a href="https://beian.miit.gov.cn/">粤ICP备19130826号-1</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
