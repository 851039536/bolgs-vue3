<template>
  <div class="SnVideos">
    <Sidebarsn></Sidebarsn>
    <video-sidebar></video-sidebar>
    <div class="SnVideo animate__animated animate__fadeIn">
      <div class="SnVideo-1">
        <div class="SnVideo-1-1" v-for="info in videotype" :key="info.vId">
          <span class="SnVideo-1-1-1"
            ><a @click="cliname(info.vId)">{{ info.vType }}</a></span
          >
          <span class="SnVideo-1-1-2">13</span>
        </div>
      </div>
      <div
        class="inline-grid col-gap-3 SnVideo-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="SnVideo-2-1" v-for="info in newtype" :key="info.vId">
          <div class="SnVideo-2-1-1">
            <!-- <img :src="info.vImg" alt="" /> -->
            <img src="../../assets/img/hy.jpg" alt="" />
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
          .catch((e: never) => {
            console.log(e + "获取数据失败");
          });
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
          .catch((e: never) => {
            console.log(e + "获取数据失败");
          });
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

  .SnVideos {
    position: fixed;
    @include w-h(100%, 100%);
    .SnVideo {
      position: relative;
      @include initialize($w, 99%, 60px, null, $ml, null, #ffffff);
      @apply shadow rounded-sm;
      .SnVideo-1 {
        @include initialize(20%, 80%, 8px, null, 0%, null, null);
        @apply shadow-sm rounded-sm;
        overflow: auto;

        // 左侧边栏
        .SnVideo-1-1 {
          /*background-color: #795da3;*/
          @apply p-1 m-1 text-sm bg-gray-100 cursor-default;
          border-bottom: 1px dashed #f1f1f1;

          .SnVideo-1-1-2 {
            float: right;
            margin-right: 10%;
          }

          .SnVideo-1-1-1 {
            margin-left: 10%;
          }
        }
      }

      .SnVideo-2 {
        @include w-h(78%, 81%);
        overflow: auto;
        position: absolute;
        @include excursion(0, null, null, 0%);
        /*background-color: #4eb687;*/
        .SnVideo-2-1 {
          @include w-h(95%, 170px);

          @apply m-1 shadow;
          .SnVideo-2-1-1 {
            height: 65%;
            img {
              @include w-h(100%, 100%);
            }
          }

          .SnVideo-2-1-2 {
            /*background-color: #dddddd;*/
            height: 18%;
            @apply cursor-default text-sm p-1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .SnVideo-2-1-3 {
            height: 17%;
            /*background-color: #0086b3;*/
            @apply p-1;
          }
        }
      }
    }
  }
</style>