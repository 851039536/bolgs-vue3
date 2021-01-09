<template>
  <div class="SnVideoTexts">
    <div class="flex SnVideoText animate__animated animate__fadeIn">
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
            <img src="../../assets/img/sp.png" alt="" />
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
  import {
    getCurrentInstance,
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
      //获取上下文实例，ctx=vue2的this
      const {
        proxy
      }: any = getCurrentInstance();
      // 加载路由
      const route = useRoute();
      // 数据定义
      const state = reactive({
        id: route.query.id,
        videourl: "",
        type: null,
        newvideo: [],
      });

      const getvideo = () => {
        proxy
          .$api({
            url: "/api/SnVideo/AsyGetTestId?id=" + state.id,
          })
          .then((res: any) => {
            state.videourl = res.data[0].vUrl;
            state.type = res.data[0].vTypeid;

            proxy
              .$api({
                url: "/api/SnVideo/GetTestWhere?type=" + state.type,
              })
              .then((res: any) => {
                state.newvideo = res.data;
              })
              .catch((e: never) => {
                console.log(e + "获取数据失败");
              });
          })
          .catch((e: never) => {
            console.log(e + "获取数据失败");
          });
      };

      const videos = (id: number) => {
        proxy
          .$api({
            url: "/api/SnVideo/AsyGetTestId?id=" + id,
          })
          .then((res: any) => {
            state.videourl = res.data[0].vUrl;
          })
          .catch((e: never) => {
            console.log(e + "获取数据失败");
          });
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

  .SnVideoTexts {
    position: fixed;
    @include w-h(100%, 100%);

    .SnVideoText {
      @include initialize(90%, 90%, 60px, null, 5%, null, #ffffff);
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
        /*background-color: #4eb687;*/
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
</style>
