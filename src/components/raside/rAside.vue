<!--
 * @Author: 博客侧边栏
 * @Date: 2020-12-08 11:27:26
 * @LastEditTime: 2021-09-17 16:23:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Sidebarsn.vue
-->
<template>
  <div id="blogSidebar">
    <div class="si_scroll">
      <div class="si_img">
        <img src="@/assets/img/si.jpg" alt />
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
        <a href="http://oykperson.xyz">http://oykperson.xyz</a>
      </div>
      <div class="si_described">
        <p class="si_described_text">
          SN © 2019. All Rights Reserved. 粤ICP备19130826号 2017 - 2020 Junior
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { state, raside } from './index'
import { onMounted, defineComponent } from 'vue'

export default defineComponent({
  name: 'Raside',
  setup() {
    onMounted(async () => {
      await raside.GetType()
    })
    return {
      state,
      raside,
    }
  },
})
</script>
<style lang="scss">
@import './index.scss';
</style>
