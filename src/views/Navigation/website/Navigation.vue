<!--
 * @Author: 导航站
 * @Date: 2020-12-14 14:35:41
 * @LastEditTime: 2021-09-28 15:09:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Navigation\Navigation.vue
-->
<script setup lang="ts">
import { reactive, onMounted, defineComponent } from 'vue'
import { navigation } from '@/api/index'
import { winUrl } from '@/hooks/routers'

// export default defineComponent({
//   setup() {
interface State {
  resultData: any
}
const state: State = reactive({
  resultData: [],
})
onMounted(async () => {
  await navigation.GetTypeOrderAsync('网站').then((res: any) => {
    state.resultData = res.data
  })
})
// return { state, winUrl }
//   },
// })
</script>
<template>
  <div>
    <blog-sidebar></blog-sidebar>
    <IndexSidebar></IndexSidebar>
    <a-back-top />
    <div class="n-nav animate__animated animate__fadeIn">
      <h5 class="px-2 py-2 m-1">网站导航</h5>
      <div class="n-nav-text">
        <div v-for="info in state.resultData" :key="info.navId" class="n-nav-1">
          <div class="n-nav-1-1">
            <img v-bind:src="info.navImg" align="left" />
          </div>
          <div class="text-base font-semibold n-nav-1-2">
            <a @click="winUrl(info.navUrl)">{{ info.navTitle }}</a>
          </div>
          <div class="n-nav-1-3">
            <p>{{ info.navText }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

.n-nav {
  @include initialize($w, null, 3.6%, null, $ml, null, #ffffff);

  @apply shadow rounded-sm;

  .n-nav-text {
    @apply grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1;

    .n-nav-1 {
      @include w-h(null, 200px);

      @apply shadow rounded-sm m-2.5;

      .n-nav-1-1 {
        img {
          @include w-h(100%, 100%);
        }
      }

      .n-nav-1-2 {
        padding: 5px;
      }

      .n-nav-1-3 {
        padding: 5px;

        @include w-h(null, 42px);
        @include line-number;
      }
    }
  }
}
</style>
