<!--
 * @Author: your name
 * @Date: 2020-12-17 08:21:57
 * @LastEditTime: 2021-09-30 15:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\SnVideo\SnVideo.vue
-->
<script lang="ts" setup>
import { video } from '@/api'
import { reactive, onMounted } from 'vue'
import VideoSidebar from './VideoSidebar.vue'
import { RouterId } from '@/hooks/routers'

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
    <div class="svideo_main animate__animated animate__fadeIn">
      <div class="flex flex-wrap svideo_main_content">
        <div
          class="svideo-2-1"
          v-for="info in state.resultData"
          :key="info['vId']"
        >
          <div class="svideo-2-1-1">
            <img src="../../assets/img/hy.jpg" />
          </div>
          <div class="svideo-2-1-2">
            <a @click="RouterId('/SnVideoText', info.vId)">{{
              info['vTitle']
            }}</a>
          </div>
          <div class="svideo-2-1-3">
            {{ info['vData'] }}
          </div>
        </div>

        <!-- 分页 -->
        <!-- <div class="IndexTitle-page">
          <a-pagination
            size="small"
            @change="currentchange"
            :total="count"
            :pageSize="pagesize"
            show-quick-jumper
          />
        </div> -->
        <!-- end 分页 -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './scss/SnVideo.scss';
</style>
