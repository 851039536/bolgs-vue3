<!--
 * @Author: your name
 * @Date: 2020-12-17 08:21:57
 * @LastEditTime: 2021-08-03 09:16:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\SnVideo\SnVideo.vue
-->
<template>
  <div class="snvideo">
    <Sidebarsn></Sidebarsn>
    <video-sidebar></video-sidebar>
    <div class="snvideo_main animate__animated animate__fadeIn">
      <div
        class="grid shadow SnVideo-1 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4"
      >
        <div class="snvideo_main_top" v-for="info in videotype" :key="info.vId">
          <a @click="cliname(info.vId)">{{ info.vType }}</a>
        </div>
      </div>
      <div
        class="grid snvideo_main_content 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="SnVideo-2-1" v-for="info in newtype" :key="info.vId">
          <div class="SnVideo-2-1-1">
            <img src="../../assets/img/hy.jpg" />
          </div>
          <div class="SnVideo-2-1-2">
            <a @click="videos(info.vId)">{{ info.vTitle }}</a>
          </div>
          <div class="SnVideo-2-1-3">
            {{
            info.vData
            .toLocaleString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "")
            }}
          </div>
        </div>
      </div>
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

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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