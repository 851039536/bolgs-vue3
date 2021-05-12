<template>
  <div class="FavSidebar">
    <div class="FavSidebar-text">
      <div class="FavSidebar_describe">
        <p class>各式各样网站收集分享</p>
      </div>
      <!--内容框-->
      <div class="FavSidebar_itme">
        <div class="FavSidebar_itme_1">最近添加</div>
        <div class="FavSidebar_itme_2" v-for="result in Navigation" :key="result.navId">
          <div class="itme_1">
            {{ result.navTitle }}
            <span>{{ result.navType }}</span>
          </div>
        </div>
      </div>

      <div class="FavSidebar_statistics">
        <div class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list8-1">站点信息</div>
        <div class="sn-list8-2">
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">文章数量:</div>
            <div class="sn-list8-2-1-2">{{ resultCount }}篇</div>
          </div>
          <!-- <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">总字数:</div>
            <div class="sn-list8-2-1-2">1111k字</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">访问量:</div>
            <div class="sn-list8-2-1-2">12434次</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">最后更新:</div>
            <div class="sn-list8-2-1-2">2012-12-12</div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  export default {
    name: "FavSidebar",
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
      const router = useRouter();
      // 加载路由
      // const route = useRoute();
      const state = reactive({
        Sort: [],
        Navigation: [],
        //当前默认页
        barFixed: false,
        resultCount: "",
      });

      const GetAll = async () => {
        //     //加载文章
        await proxy.$api
          .all([
            //查询分类
            proxy.$api.get("/api/SnTalkType/GetAllAsync"),
            //查询最新发布前十
            proxy.$api.get(
              "/api/SnNavigation/GetFyAllAsync?type=all&pageIndex=1&pageSize=10&isDesc=true"
            ),
            // 查询总数
            proxy.$api.get(
              "/api/SnNavigation/GetCountAsync"
            ),
          ])
          .then(
            proxy.$api.spread((res2: any, res3: any, res4: any) => {
              state.Sort = res2.data;
              state.Navigation = res3.data;
              state.resultCount = res4.data;
            })
          )

      };

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
        await GetAll();
      });
      return { ...toRefs(state), GetAll, AsyGetTestID };
    },
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .FavSidebar {
    position: fixed;
    @include excursion($Text_height, null, null, $sidebar_r_r);
    @include w-h(20%, 90%);
    @apply ml-3;
    .FavSidebar-text {
      @include w-h(100%, 100%);
      overflow: auto;
      .el-calendar-table .el-calendar-day {
        height: 44px !important;
      }
      .FavSidebar_describe {
        @include initialize(100%, null, 0, auto, 0, auto, #ffffff);
        text-align: center;
        @apply mb-2 shadow rounded;
        p {
          @apply text-sm px-2 py-4 m-1 cursor-pointer;
        }
      }

      .FavSidebar_statistics {
        @include initialize(100%, null, 0, auto, 0, auto, #ffffff);
        @apply p-1 mb-2 cursor-pointer shadow rounded;

        .sn-list8-2 {
          @apply text-sm m-2;
          .sn-list8-2-1 {
            .sn-list8-2-1-1 {
              @apply p-1;
              width: 35%;
            }
            .sn-list8-2-1-2 {
              width: 40%;
              @apply p-1;
            }
          }
        }
      }

      .FavSidebar_itme {
        @include initialize(100%, null, 0, auto, null, auto, #ffffff);
        @apply p-1 mb-2  shadow rounded;

        .FavSidebar_itme_1 {
          color: #1b1e21;
          @apply p-1 m-1 text-sm font-semibold bg-gray-200;
        }

        .FavSidebar_itme_2 {
          @apply m-1 rounded-md shadow;
          div {
            @apply p-2;
          }
          .itme_1 {
            @apply text-base  rounded-md shadow;
          }
        }
      }
    }

    .TalkSidebar-text::-webkit-scrollbar {
      display: none;
    }
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.1em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
