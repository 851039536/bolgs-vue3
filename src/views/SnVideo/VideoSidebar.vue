<template>
  <div class="video_sidebar">
    <div class="video_sidebar_main">
      <!-- 标签头部 -->
      <div class="video_s_m_top">
        <div class="video_s_m_top_title">
          <p class>燃向视频收集</p>
        </div>
      </div>

      <!-- 内容分类 -->
      <!-- <div class="sn-list5">
        <div class="sn-list5-1">分类</div>

        <div class="inline-flex" v-for="Sorts in Sort" :key="Sorts.id">
          <div
            class="flex-1 px-1 m-1 text-xs text-center text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(Sorts.id)"
          >{{ Sorts.soTypeTitle }}</div>
        </div>
      </div>-->

      <div class="sn-list8">
        <div class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list8-1">视频信息</div>
        <div class="sn-list8-2">
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">视频数量</div>
            <div class="sn-list8-2-1-2">{{count}}篇</div>
          </div>

          <!-- <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">总字数:</div>
            <div class="sn-list8-2-1-2">1111k字</div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

  import { video } from '../../api/video';
  import { reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  export default {
    name: "VideoSidebar",
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {

      const router = useRouter();
      // 加载路由
      // const route = useRoute();
      const state = reactive({
        Sort: [],
        article: [],
        //当前默认页
        barFixed: false,
        UserTalk: "",
        count: 0
      });


      const GetCountAsync = async () => {

        await video.GetCountAsync().then((res: any) => {
          state.count = res.data;
        })
      }
      const AsyGetTestID = (id: number) => {
        //       // .带参数跳转
        router.push({
          path: "/TalkText",
          query: {
            id: id,
          },
        });
      };
      onMounted(async () => {
        await GetCountAsync();
      });
      return { ...toRefs(state), AsyGetTestID, GetCountAsync };
    },
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .video_sidebar {
    position: fixed;
    @include excursion($Text_height, null, null, $sidebar_r_r);
    @include w-h(20%, 90%);
    font-size: 17px;
    color: #888888;
    /*background-color: #4d4f91;*/
    @apply ml-3;
    .video_sidebar_main {
      @include w-h(100%, 100%);
      overflow: auto;

      .TalkSidebar-text-1 {
        height: 50px;
        width: 100%;
        margin: 0 auto;
        @apply mb-3;
        @apply shadow rounded;
        .TalkSidebar-text-1-1 {
          /*background-color: #95999c;*/
          @include w-h(60%, 100%);
          margin: 0 auto;

          .TalkSidebar-text-1-2 {
            /*background-color: #4eb687;*/
            @apply text-center py-2 m-1 cursor-pointer;
          }
        }
      }

      .TalkSidebar-text-2 {
        width: 100%;
        margin: 0 auto;
        @apply mb-3;
        @apply shadow rounded;
        .TalkSidebar-text-2-1 {
        }
      }

      .TalkSidebar-text-3 {
        width: 100%;
        margin: 0 auto;
        @apply mb-3;
        @apply shadow rounded;
        #calendar {
          height: 200px;
        }
      }

      .sn-list5 {
        width: 100%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2  cursor-pointer;
        @apply shadow rounded;
        .sn-list5-1 {
          color: #1b1e21;
          @apply p-1 m-1 text-sm font-semibold bg-gray-200;
        }
      }
      .el-calendar-table .el-calendar-day {
        height: 44px !important;
      }
      .video_s_m_top {
        width: 100%;
        margin: 0 auto;
        @apply mb-2 text-center bg-white;
        @apply shadow rounded;

        .video_s_m_top_title {
          p {
            @apply text-sm px-2 py-4 m-1;
          }
        }
      }

      .sn-list7 {
        width: 100%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2 cursor-pointer;
        @apply shadow rounded;

        //@include gradient-text;

        .sn-list7-1 {
          color: #1b1e21;
          p {
            @apply text-sm px-2 py-2 cursor-pointer;
          }
        }
      }

      .sn-list8 {
        width: 100%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2 cursor-pointer;
        @apply shadow rounded;
        .sn-list8-1 {
          color: #1b1e21;
        }
        .sn-list8-2 {
          @apply text-sm m-2;
          .sn-list8-2-1 {
            /*background-color: #6990f6;*/
            .sn-list8-2-1-1 {
              /*background-color: #dddddd;*/
              @apply p-1;
              width: 35%;
            }
            .sn-list8-2-1-2 {
              width: 40%;
              @apply p-1;
              /*background-color: #55a532;*/
            }
          }
        }
      }

      .sn-list3 {
        width: 100%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2 cursor-pointer;
        @apply shadow rounded;

        .sn-list3-1 {
          @apply m-1 p-1 text-sm font-semibold bg-gray-200;
          color: #1b1e21;
        }

        .sn-list3-2 {
          @apply inline-flex;

          .sn-list3-2-1 {
            @apply flex-1;
            @apply text-gray-700 text-xs text-center px-1 m-1;
          }
        }
      }

      .sn-list5 {
        width: 100%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2;

        @apply shadow rounded;

        .sn-list5-1 {
          color: #1b1e21;
        }
      }

      .video_s_m_content {
        width: 100%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2 cursor-pointer;
        @apply shadow rounded;

        .video_s_m_content-1 {
          color: #1b1e21;
          @apply p-1 m-1 text-sm font-semibold bg-gray-200;
        }

        .video_s_m_content-2 {
          background-color: white;
          border-bottom: 1px dashed #f1f1f1;
        }
      }
    }

    .video_sidebar_main::-webkit-scrollbar {
      display: none;
    }
  }

  .isFixed {
    position: fixed;
    top: 0;
    right: 7%;
    z-index: 999;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.1em;
    fill: currentColor;
    overflow: hidden;
  }

  @screen xp {
    .video_sidebar {
      @apply hidden;
    }
  }
</style>
