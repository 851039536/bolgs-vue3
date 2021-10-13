<!--
 * @Author: your name
 * @Date: 2021-10-11 15:46:19
 * @LastEditTime: 2021-10-12 14:07:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\svideo\components\SvideoContent.vue
-->
<script setup lang="ts">
import { RouterId } from '@/hooks/routers'
import { IntVideo } from '@/api/data/interData'

defineProps({
  resultData: {
    type: Array as () => Array<IntVideo>,
    required: true,
    default: () => [],
  },
})
</script>

<template>
  <div class="svideo_main animate__animated animate__fadeIn">
    <div class="flex flex-wrap svideo_main_content">
      <div class="svideo-2-1" v-for="info in resultData" :key="info['vId']">
        <div class="svideo-2-1-1">
          <img src="@/assets/img/hy.jpg" />
        </div>
        <div class="svideo-2-1-2">
          <a @click="RouterId('/VideoPlay', info.vId)">{{ info.vTitle }}</a>
        </div>
        <div class="svideo-2-1-3">
          {{ info.vData }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

.svideo_main {
  @include initialize($w, 99%, 3.6%, null, $ml, null, #ffffff);

  @apply relative shadow rounded-sm;

  .svideo_main_content {
    @include w-h(100%, 88%);

    @apply overflow-auto absolute top-2;

    .svideo-2-1 {
      @include w-h(31%, 50%);

      @apply shadow m-auto mt-4;

      .svideo-2-1-1 {
        height: 65%;

        img {
          @include w-h(100%, 100%);
        }
      }

      .svideo-2-1-2 {
        height: 18%;

        @apply text-sm p-1;

        @include line-one;
      }

      .svideo-2-1-3 {
        height: 17%;

        @apply p-1;
      }
    }
  }
}
</style>
