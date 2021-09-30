<!--
 * @Author: your name
 * @Date: 2020-12-17 08:49:57
 * @LastEditTime: 2021-09-30 15:27:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\SnVideo\SnVideoText.vue
-->
<template>
  <div class="snvideotext">
    <div class="flex snvideotext_main animate__animated animate__fadeIn">
      <div
        class="col-gap-4 SnVideoText-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div
          class="m-2 SnVideoText-2-1"
          v-for="info in newvideo"
          :key="info.vId"
        >
          <div class="SnVideoText-2-1-1">
            <!-- <img :src="info.vImg" alt="" /> -->
            <img src="../../assets/img/sp.png" alt />
          </div>
          <div class="p-1 text-sm SnVideoText-2-1-2">
            <a @click="videos(info.vId)">{{ info.vTitle }}</a>
          </div>
          <div class="p-1 SnVideoText-2-1-3">
            {{
              info.vData
                .toLocaleString()
                .replace(/T/g, ' ')
                .replace(/\.[\d]{3}Z/, '')
            }}
          </div>
        </div>
      </div>

      <div class="p-1 m-2 SnVideoText-1">
        <iframe
          id="if"
          :src="videourl"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { video } from '../../api/http/video'
import { reactive, toRefs, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'SnVideoText',
  setup() {
    // 加载路由
    const route = useRoute()
    // 数据定义
    const state = reactive({
      id: route.query.id,
      videourl: '',
      type: null,
      newvideo: [] as any,
    })

    const getvideo = async () => {
      await video.GetByIdAsync(state.id).then((res: any) => {
        state.videourl = res.data.vUrl
        state.type = res.data.vTypeid
      })
      await video.GetTypeAllAsync(state.type).then((res: any) => {
        state.newvideo = res.data
      })
    }

    const videos = async (id: number) => {
      await video.GetByIdAsync(id).then((res: any) => {
        state.videourl = res.data.vUrl
      })
    }
    onMounted(async () => {
      await getvideo()
    })
    return {
      ...toRefs(state),
      getvideo,
      videos,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './scss/SnVideoText.scss';
</style>
