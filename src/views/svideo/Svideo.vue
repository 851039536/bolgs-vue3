<!--
 * @Author: your name
 * @Date: 2020-12-17 08:21:57
 * @LastEditTime: 2021-10-12 15:11:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\SnVideo\SnVideo.vue
-->
<script lang="ts" setup>
import { video } from '@/api'
import { reactive, onMounted } from 'vue'
import VideoSidebar from './VideoSidebar.vue'
import SvideoContent from './components/SvideoContent.vue'

interface State {
  resultData: any
}
const state: State = reactive({
  resultData: [],
})

onMounted(async () => {
  await video.GetTypeAllAsync(2).then((res: any) => {
    state.resultData = res.data
  })
})
</script>

<template>
  <div id="svideo">
    <blog-sidebar></blog-sidebar>
    <video-sidebar></video-sidebar>
    <SvideoContent :resultData="state.resultData"></SvideoContent>

    <!-- 分页 -->
    <div class="IndexTitle-page">
      <a-pagination size="small" />
      1111
    </div>
    <!-- end 分页 -->
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
