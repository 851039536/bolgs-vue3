<template>
  <div class="snvideotext">
    <div class="flex snvideotext_main animate__animated animate__fadeIn">
      <div
        class="col-gap-4 SnVideoText-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="m-2 SnVideoText-2-1" v-for="info in newvideo" :key="info.vId">
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
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "")
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

  import { video } from '../../api/video';
  import {
    reactive,
    toRefs,
    onMounted
  } from "vue";
  import {
    useRoute
  } from "vue-router";
  export default {
    name: "SnVideoText",

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      // 加载路由
      const route = useRoute();
      // 数据定义
      const state = reactive({
        id: route.query.id,
        videourl: "",
        type: null,
        newvideo: [],
      });

      const getvideo = async () => {
        await video.GetByIdAsync(state.id).then((res: any) => {
          state.videourl = res.data.vUrl;
          state.type = res.data.vTypeid;
        })
        await video.GetTypeAllAsync(state.type).then((res: any) => {
          state.newvideo = res.data;
        })

      };

      const videos = async (id: number) => {

        await video.GetByIdAsync(id).then((res: any) => {
          state.videourl = res.data.vUrl;
        })


      };
      onMounted(async () => {
        await getvideo();
      });
      return {
        ...toRefs(state),
        getvideo,
        videos
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";

  .snvideotext {
    position: fixed;
    @include w-h(100%, 100%);

    .snvideotext_main {
      @include initialize(90%, 90%, $Text_height, null, 5%, null, #ffffff);
      @apply shadow-sm rounded-sm;

      .SnVideoText-1 {
        @include w-h(80%, 100%);
        /*background-color: #55a532;*/
        #if {
          margin: 0 auto;
          @include w-h(100%, 100%);
        }
      }

      .SnVideoText-2 {
        width: 19%;
        overflow: auto;
        @apply cursor-pointer;

        .SnVideoText-2-1 {
          @include w-h(90%, 170px);
          @apply shadow rounded-sm;

          .SnVideoText-2-1-1 {
            height: 65%;

            /*background-color: #55a532;*/
            img {
              @include w-h(185px, 100px);
            }
          }

          .SnVideoText-2-1-2 {
            height: 18%;
            @include line-ome;
          }

          .SnVideoText-2-1-3 {
            height: 17%;
          }
        }
      }
    }
  }

  @screen xp {
    .SnVideoText-2 {
      @apply hidden;
    }
    .snvideotext .snvideotext_main .SnVideoText-1 {
      width: 100%;
      height: 90%;
    }
  }
</style>
