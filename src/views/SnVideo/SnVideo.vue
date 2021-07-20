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
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import VideoSidebar from './VideoSidebar.vue';
  export default {
    name: "SnVideo",
    components: { VideoSidebar },

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      //获取上下文实例，ctx=vue2的this
      const { proxy }: any = getCurrentInstance();
      // 加载路由
      const router = useRouter();
      // 数据定义
      const state = reactive({
        newtype: [],
        videotype: [],
      });

      const VideoAll = (type: number) => {
        proxy
          .$api({
            url: "/api/SnVideoType/AsyGestTest",
          })
          .then((res: any) => {
            state.videotype = res.data;
          })
          .catch((e: never) => {
            console.log(e + "获取数据失败");
          });

        proxy
          .$api({
            url: "/api/SnVideo/GetTestWhere?type=" + type,
          })
          .then((res: any) => {
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

      const cliname = (vid: number) => {
        proxy
          .$api({
            url: "/api/SnVideo/GetTestWhere?type=" + vid,
          })
          .then((res: any) => {
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
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";

  .snvideo {
    position: fixed;
    @include w-h(100%, 100%);
    .snvideo_main {
      position: relative;
      @include initialize($w, 99%, $Text_height, null, $ml, null, #ffffff);
      @apply shadow rounded-sm;
      .SnVideo-1 {
        @include initialize(100%, null, 8px, null, 0%, null, null);
        @apply shadow-sm rounded-sm;
        overflow: auto;

        .snvideo_main_top {
          @apply py-1 m-2 text-base bg-gray-200 rounded text-center;
        }
      }

      .snvideo_main_content {
        @include w-h(100%, 80%);
        overflow: auto;
        position: absolute;
        @include excursion(8%, null, null, 0%);
        .SnVideo-2-1 {
          @include w-h(95%, 90%);
          @apply ml-1 shadow;
          .SnVideo-2-1-1 {
            height: 65%;
            img {
              @include w-h(100%, 100%);
            }
          }

          .SnVideo-2-1-2 {
            height: 18%;
            @apply text-sm p-1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .SnVideo-2-1-3 {
            height: 17%;
            @apply p-1;
          }
        }
      }
    }
  }

  @screen xp {
    .snvideo .snvideo_main {
      width: 100%;
      @apply ml-0;
    }
  }
</style>