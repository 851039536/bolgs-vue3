<template>
  <div class="sn-list" id="sn-list" :class="{ isFixed: barFixed }">
    <div class="sn-list-s">
      <div class="font-mono sn-list0">
        <div class="sn-list0-img">
          <img class="sn-list0-img2" id="img1" :src="User.userPhoto" alt="" />
          <!--                    <el-image-->
          <!--                            class="sn-list0-img2"-->
          <!--                            :src="User.userPhoto"-->
          <!--                            :fit="scale-down"></el-image>-->
        </div>
        <div class="sn-list0-name">
          <h3 class="sn-list0-name1">{{ User.userNickname }}</h3>
        </div>

        <div class="sn-list0-tag">
          <div class="flex sn-list0-tag-1">
            <div class="sn-list0-tag1">
              <div class="sn-list0-tag1-1-2">
                <a>{{ ArticleCount }}</a>
              </div>
              <div class="sn-list0-tag1-1-1">文章</div>
            </div>
            <div class="sn-list0-tag2">
              <div>
                <a>
                  {{ LabelsCount }}
                </a>
              </div>
              <div>标签</div>
            </div>
            <div class="sn-list0-tag3">
              <div>
                <a>
                  {{ SortCount }}
                </a>
              </div>
              <div>分类</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sn-list2">
        <div class="flex items-center sn-list2-1">
          <div class="flex-1 sn-list2-1-1">
            <a
              href="tencent://message/?uin=851039536&Site=http://77ya.com/&Menu=yes"
            >
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ11"></use>
              </svg>
            </a>
          </div>
          <div class="flex-1 sn-list2-1-1">
            <a target="_blank" href="https://gitee.com/kaiouyang-sn">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github1"></use>
              </svg>
            </a>
          </div>
          <div class="flex-1 sn-list2-1-1">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin3"></use>
              </svg>
            </a>
          </div>
          <div class="flex-1 sn-list2-1-1">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhihu"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="sn-list7">
        <div class="sn-list7-1"></div>
        <div class="sn-list7-2">
          <!-- <a-calendar
            v-model:value="value"
            :fullscreen="false"
            @panelChange="onPanelChange"
          /> -->
        </div>
      </div>
      <div class="sn-list4">
        <h4>最新动态</h4>
        <div class="sn-list4-1">
          <p class="">{{ UserTalk }}</p>
        </div>
      </div>

      <div class="sn-list3">
        <div class="sn-list3-1">标签</div>

        <div
          class="sn-list3-2"
          v-for="Labeslss in Labels"
          :key="Labeslss.labelId"
        >
          <div
            class="transition duration-500 ease-in-out transform sn-list3-2-1 hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(Labeslss.labelId)"
          >
            <svg class="inline-block icon" aria-hidden="true">
              <use :xlink:href="Labeslss.labelAlias"></use>
            </svg>
            <a>{{ Labeslss.labelName }}</a>
          </div>
        </div>
      </div>
      <div class="sn-list5">
        <div
          class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list5-1"
        >
          分类
        </div>

        <div
          class="inline-flex cursor-pointer"
          v-for="Sorts in Sort"
          :key="Sorts.sortId"
        >
          <div
            class="flex-1 px-1 m-1 text-sm text-center text-gray-700 transition duration-500 ease-in-out transform sn-list5-2 hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(Labeslss.labelId)"
          >
            {{ Sorts.sortName }}
          </div>
        </div>
      </div>
      <div class="sn-list6">
        <div class="p-1 m-1 text-base font-semibold bg-gray-200 sn-list6-1">
          最新内容
        </div>

        <div
          class="sn-list6-2"
          v-for="articles in article"
          :key="articles.articleId"
        >
          <div class="p-1 m-1 text-sm sn-list6-2-1">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-liulan
"
              ></use>
            </svg>
            <a @click="AsyGetTestID(articles.articleId)">{{
              articles.title
            }}</a>
          </div>
        </div>
      </div>

      <div class="sn-list8">
        <div
          class="p-1 m-1 text-base font-semibold bg-gray-200 cursor-pointer sn-list8-1"
        >
          站点信息
        </div>
        <div class="sn-list8-2">
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">文章数量:</div>
            <div class="sn-list8-2-1-2">{{ ArticleCount }}篇</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">总字数:</div>
            <div class="sn-list8-2-1-2">{{ textCount }} 字</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">访问量:</div>
            <div class="sn-list8-2-1-2">{{ readCount }}次</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">最后更新:</div>
            <div class="sn-list8-2-1-2">{{ articledata }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Index-Sidebar",
  components: {},

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
    const router = useRouter();
    const store = useStore();

    // 加载路由
    // const route = useRoute();
    const state = reactive({
      newinfo: [],
      Labels: [],
      Sort: [],
      article: [],
      //当前默认页
      barFixed: false,
      UserTalk: "",
      User: [],
      ArticleCount: 0,
      SortCount: 0,
      LabelsCount: 0,
      zhihu: [],
      value: "",
      textCount: 0,
      readCount: 0,
      articledata: "",
    });

    const AsyGetTest = async () => {
      proxy.$api
        .all([
          //查询标签
          proxy.$api.get("/api/SnLabels/GetLabels"),
          //查询分类
          proxy.$api.get("/api/SnSort/GetSort"),
          //查询最新发布前十文章
          proxy.$api.get(
            "/api/SnArticle/GetfyTest?label=00&pageIndex=1&pageSize=10&isDesc=true"
          ),
          // 查询当前用户的说说
          proxy.$api.get(
            "/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true"
          ),
          //查询当前用户信息
          proxy.$api.get("/api/SnUser/AsyGetUserId?UserId=4"),
          //查询文章总数
          proxy.$api.get("/api/SnArticle/GetArticleCount"),
          //查询标签
          proxy.$api.get("/api/SnSort/GetSortCount"),
          //查询分类
          proxy.$api.get("/api/SnLabels/GetLabelsCount"),
          // 内容字段数
          proxy.$api.get("/api/SnArticle/GetSumAsync?type=text"),
          // 阅读量
          proxy.$api.get("/api/SnArticle/GetSumAsync?type=read"),
        ])
        .then(
          proxy.$api.spread(
            (
              res1: any,
              res2: any,
              res3: any,
              res4: any,
              res5: any,
              res6: any,
              res7: any,
              res8: any,
              res9: any,
              res10: any
            ) => {
              state.Labels = res1.data;
              state.Sort = res2.data;
              state.article = res3.data;
              state.articledata = res3.data[0].time;
              state.UserTalk = res4.data;
              state.User = res5.data[0];
              store.state.ArticleCount = state.ArticleCount = res6.data;
              store.state.SortCount = state.SortCount = res7.data;
              store.state.LabelsCount = state.LabelsCount = res8.data;
              store.state.textCount = state.textCount = res9.data;
              store.state.readCount = state.readCount = res10.data;
            }
          )
        )
        .catch((err: any) => {
          console.log(err);
        });
    };
    const tagtest = (tagid: any) => {
      // .带参数跳转
      router.push({
        path: "/TagText",
        query: {
          id: tagid,
        },
      });
    };
    // 博客详情
    const AsyGetTestID = (id: number) => {
      // .带参数跳转
      router.push({
        path: "/Transfer",
        query: {
          id: id,
        },
      });
    };

    const onPanelChange = (value: string) => {
      console.log(value);
    };

    onMounted(async () => {
      await AsyGetTest();
    });

    // provide("count", state.textCount);

    return {
      ...toRefs(state),
      tagtest,
      AsyGetTest,
      AsyGetTestID,
      onPanelChange,
    };
  },
};
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/com";
  .sn-list {
    position: fixed;
    @include excursion(60px, null, null, 0);
    @include w-h(24%, 90%);
    //background-color: #4d4f91;
    @apply ml-3;
    .sn-list-s {
      // background-color: #55a532;
      @include w-h(100%, 100%);
      overflow: auto;

      .sn-list0 {
        @include initialize(95%, 250px, 0, 0, auto, auto, #ffffff);
        @apply mb-3 shadow rounded;
        .sn-list0-img {
          @include initialize(140px, 100px, auto, auto, auto, auto, null);
          img {
            @include w-h(100%, 100%);
            @apply p-3;
          }
        }
        .sn-list0-name {
          height: 30px;
          margin: 20px auto;
        }

        .sn-list0-name1 {
          text-align: center;
          @apply text-xl;
        }

        .sn-list0-tag {
          /*background-color: #9a6e3a;*/
          @include w-h(100%, 100%);
          @apply cursor-pointer;

          .sn-list0-tag-1 {
            /*background-color: #4eb687;*/
            width: 150px;
            margin: 0 auto;

            .sn-list0-tag1 {
              //background-color: #55a532;
              width: 34%;
              @apply text-lg;
              .sn-list0-tag1-1-1 {
                /*background-color: #dddddd;*/
                text-align: center;
              }

              .sn-list0-tag1-1-2 {
                /*background-color: #795da3;*/
                text-align: center;
              }
            }

            .sn-list0-tag2 {
              /*background-color: #0086b3;*/
              width: 33%;
              @apply text-lg;
              div {
                text-align: center;
              }
            }

            .sn-list0-tag3 {
              @apply text-lg;
              /*background-color: #8146b4;*/
              width: 33%;

              div {
                text-align: center;
              }
            }
          }
        }
      }

      .sn-list2 {
        @include w-h(95%, 50px);
        margin: 0 auto;
        @apply mb-3 shadow rounded bg-white;
        // @include boxshow;

        .sn-list2-1 {
          /*background-color: #95999c;*/
          @include w-h(60%, 100%);
          margin: 0 auto;

          .sn-list2-1-1 {
            /*background-color: #4eb687;*/
            @apply text-center py-2 m-1 cursor-pointer;
          }
        }
      }
      .sn-list4 {
        width: 95%;
        margin: 0 auto;
        text-align: center;
        @apply mb-3 shadow rounded bg-white;

        h4 {
          height: 2rem;
          @apply text-gray-900;
          font-size: 15px;
          line-height: 2.5rem;
        }

        .sn-list4-1 {
          p {
            @apply text-sm  px-1 py-2 m-1 cursor-pointer;
          }
        }
      }

      .sn-list7 {
        width: 95%;
        margin: 0 auto;
        @apply p-1 mb-2 cursor-pointer bg-white;
        @apply shadow rounded;

        // 公告
        .sn-list7-1 {
        }
      }

      .sn-list8 {
        width: 95%;
        margin: 0 auto;
        @apply p-1 mb-2 cursor-pointer bg-white;
        @apply shadow rounded;
        .sn-list8-1 {
          @apply text-gray-900;
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
        width: 95%;
        margin: 0 auto;
        @apply p-1 mb-2 cursor-pointer bg-white;
        @apply shadow rounded;

        // 标签
        .sn-list3-1 {
          @apply m-1 p-1 text-base font-semibold bg-gray-200 text-gray-900;
        }

        .sn-list3-2 {
          @apply inline-flex;
          .sn-list3-2-1 {
            @apply flex-1;
            @apply text-gray-700 text-sm text-center px-1 m-1 bg-blue-100 rounded-sm;
          }
        }
      }

      // 分类
      .sn-list5 {
        width: 95%;
        margin: 0 auto;
        @apply p-1 mb-2 bg-white;
        @apply shadow rounded;

        .sn-list5-1 {
          @apply text-gray-900 text-base;
        }
        .sn-list5-2 {
          @apply bg-red-100 rounded-sm;
        }
      }

      .sn-list6 {
        width: 95%;
        margin: 0 auto;
        @apply p-1 mb-2 cursor-pointer bg-white;
        @apply shadow rounded;

        .sn-list6-1 {
          @apply text-gray-900;
        }
        .sn-list6-2 {
          background-color: white;
          border-bottom: 1px dashed #f1f1f1;
        }
      }
    }

    .sn-list-s::-webkit-scrollbar {
      display: none;
    }
  }

  .isFixed {
    position: fixed;
    @include excursion(0, null, null, 7%);
    z-index: 999;
  }

  .icon {
    @include w-h(1em, 1em);
    vertical-align: -0.1em;
    fill: currentColor;
    overflow: hidden;
  }
</style>