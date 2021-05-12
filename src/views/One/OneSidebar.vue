<!--
 * @Author: One侧边栏
 * @Date: 2020-12-21 16:14:58
 * @LastEditTime: 2021-05-12 10:15:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\One\OneSidebar.vue
-->
<template>
  <div class="OneSidebar" id="sn-list" :class="{ isFixed: barFixed }">
    <div class="TalkSidebar-text">
      <div class="sn-list4">
        <div class="sn-list4-1">
          <p class>{{ UserTalk }}</p>
        </div>
      </div>
      <!--内容框-->
      <div class="TalkSidebar-text-4">
        <div class="p-1 m-1 text-sm font-semibold bg-gray-200 TalkSidebar-text-4-1">推荐内容</div>

        <div class="TalkSidebar-text-4-2" v-for="articles in article" :key="articles.oneId">
          <div class="p-1 pl-2 text-base TalkSidebar-text-4-2-1">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-liulan
" />
            </svg>
            <a @click="setModal1Visible(true, articles.oneId)">{{ articles.oneTitle }}</a>
          </div>
        </div>
      </div>
      <div class="sn-list5">
        <div class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list5-1">分类</div>

        <div class="inline-flex cursor-pointer" v-for="Sorts in Sort" :key="Sorts.id">
          <div
            class="flex-1 px-1 m-1 text-xs text-center text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(Sorts.id)"
          >{{ Sorts.soTypeTitle }}</div>
        </div>
      </div>

      <div class="sn-list8">
        <div class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list8-1">站点信息</div>
        <div class="sn-list8-2">
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">文章数量:</div>
            <div class="sn-list8-2-1-2">{{ Count }}篇</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">总字数:</div>
            <div class="sn-list8-2-1-2">{{ textNum }}字</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">访问量:</div>
            <div class="sn-list8-2-1-2">{{ readCount }}次</div>
          </div>
        </div>
      </div>
    </div>
    <div id="components-modal-demo-position">
      <a-modal
        v-model:visible="modal2Visible"
        :title="text.oneTitle"
        centered
        cancelText="赞"
        :closable="false"
        okText="不了"
        @ok="modal2Visible = false"
      >
        <p>{{ text.oneText }}</p>
      </a-modal>
    </div>
  </div>
</template>


<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  export default {
    name: "TalkSidebar",
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
      const router = useRouter();
      // 加载路由
      // const route = useRoute();
      const state = reactive({
        Sort: [],
        article: [],
        //当前默认页
        barFixed: false,
        UserTalk: "",
        modal2Visible: false,
        text: [],
        Count: 0,
        textNum: 0,
        readCount: 0
      });

      const getall = () => {
        //     //加载文章
        proxy.$api
          .all([
            //查询分类
            proxy.$api.get("/api/SnOneType/GetAllAsync"),
            //查询点赞前十文章
            proxy.$api.get(
              "/api/SnOne/GetFyTypeAsync?type=999&pageIndex=1&pageSize=10&name=give&isDesc=true"
            ),
            // 查询当前用户的说说
            proxy.$api.get(
              "/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true"
            ),
            // 查询文章数量
            proxy.$api.get(
              "/api/SnOne/CountAsync"
            ),
            // 查询字段
            proxy.$api.get(
              "/api/SnOne/GetSumAsync?type=text"
            ),
            proxy.$api.get(
              "/api/SnOne/GetSumAsync?type=read"
            ),
          ])
          .then(
            proxy.$api.spread((Sort: any, article: any, UserTalk: any, Count: any, textNum: any, readCount: any) => {
              state.Sort = Sort.data;
              state.article = article.data;
              state.UserTalk = UserTalk.data;
              state.Count = Count.data;
              state.textNum = textNum.data;
              state.readCount = readCount.data;
            })
          )

      };
      const setModal1Visible = (modal2Visible: boolean, id: number) => {
        state.modal2Visible = modal2Visible;
        proxy
          .$api({
            url: "/api/SnOne/GetOneIdAsync?id=" + id,
          })
          .then((res: any) => {
            state.text = res.data;
          })

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
        await getall();
      });
      return { ...toRefs(state), getall, AsyGetTestID, setModal1Visible };
    },
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .OneSidebar {
    position: fixed;
    @include excursion($Text_height, null, null, $sidebar_r_r);
    @include w-h(20%, 90%);
    font-size: 17px;
    color: #888888;
    /*background-color: #4d4f91;*/
    @apply ml-3;
    .TalkSidebar-text {
      /*background-color: #55a532;*/
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
      .el-calendar-table .el-calendar-day {
        height: 44px !important;
      }
      .sn-list4 {
        width: 100%;
        margin: 0 auto;
        background-color: #ffffff;
        text-align: center;
        @apply mb-2;
        @apply shadow rounded;
        //@include gradient-text;

        h4 {
          height: 2rem;
          color: #1b1e21;
          font-size: 15px;
          line-height: 2.5rem;
        }

        .sn-list4-1 {
          p {
            @apply text-sm px-2 py-4 m-1 cursor-pointer;
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

      .TalkSidebar-text-4 {
        width: 100%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2 cursor-pointer;
        @apply shadow rounded;

        .TalkSidebar-text-4-1 {
          color: #1b1e21;
        }

        .TalkSidebar-text-4-2 {
          background-color: white;
          border-bottom: 1px dashed #f1f1f1;
        }
      }
    }

    .TalkSidebar-text::-webkit-scrollbar {
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
</style>
