<!--
 * @Author: your name
 * @Date: 2020-12-17 08:21:57
 * @LastEditTime: 2021-11-15 15:22:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\SnVideo\SnVideo.vue
-->
<script lang="ts" setup>
import { video } from '@/api'
import { onMounted } from 'vue'
import VideoSidebar from './VideoSidebar.vue'
import SvideoContent from './components/SvideoContent.vue'
import { state } from './data'
import { method } from './index'

onMounted(async () => {
  await video.GetCountAsync(0, '0', true).then((res: any) => {
    state.count = res.data
  })
  await method.currentchange(1)
})
</script>

<template>
  <div id="svideo">
    <blog-sidebar></blog-sidebar>
    <video-sidebar></video-sidebar>
    <SvideoContent :resultData="state.resultData"></SvideoContent>
  </div>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

#svideo {
  @apply fixed w-full;

  height: 92%;
}

@screen xp {
  #svideo {
    .svideo_main {
      width: 100%;

      @apply m-0;

      .svideo_main_content {
        .svideo-2-1 {
          width: 97%;
          height: 65%;
        }
      }
    }
  }
}
</style>
