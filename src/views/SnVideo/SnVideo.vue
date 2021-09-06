<!--
 * @Author: your name
 * @Date: 2020-12-17 08:21:57
 * @LastEditTime: 2021-09-06 15:00:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\SnVideo\SnVideo.vue
-->
<template>
  <div id="snvideo">
    <blog-sidebar></blog-sidebar>
    <video-sidebar></video-sidebar>
    <div class="snvideo_main animate__animated animate__fadeIn">
      <div class="flex flex-wrap snvideo_main_content">
        <div class="SnVideo-2-1" v-for="info in newtype" :key="info['vId']">
          <div class="SnVideo-2-1-1">
            <img src="../../assets/img/hy.jpg" />
          </div>
          <div class="SnVideo-2-1-2">
            <a @click="videos(info['vId'])">{{ info["vTitle"] }}</a>
          </div>
          <div class="SnVideo-2-1-3">
            {{
            info["vData"]
            }}
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <!--<div class="IndexTitle-page">
<a-pagination
size="small"
@change="currentchange"
:total="count"
:pageSize="pagesize"
show-quick-jumper
/>
      </div>-->
      <!-- end 分页 -->
    </div>
  </div>
</template>

<script lang="ts">

import { video } from '../../api/video';
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import VideoSidebar from './VideoSidebar.vue';
export default {
  name: "SnVideo",
  components: { VideoSidebar },
  setup() {
    // 加载路由
    const router = useRouter();
    // 数据定义
    const state = reactive({
      newtype: [],
      videotype: [],
    });

    const VideoAll = async (type: number) => {
      await video.AsyGestTest().then((res: any) => {
        state.videotype = res.data;
      })
      await video.GetTypeAllAsync(type).then((res: any) => {
        state.newtype = res.data;
      })

    };

    const videos = (id: number) => {
      // .带参数跳转
      router.push({
        path: "/SnVideoText",
        query: {
          id: id,
        },
      });
    };

    const cliname = async (type: number) => {
      await video.GetTypeAllAsync(type).then((res: any) => {
        state.newtype = res.data;
      })
    };

    onMounted(async () => {
      await VideoAll(2);
    });
    return { ...toRefs(state), VideoAll, videos, cliname };
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/SnVideo.scss";
</style>