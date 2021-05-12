<template>
  <!--  :class="{ isFixed: barFixed }" -->
  <div class="index_si_div">
    <div class="index_si_text">
      <!-- <div class="font-mono sn-list0">
        <div class="sn-list0-img">
          <img class="sn-list0-img2" id="img1" :src="User.userPhoto" alt="" />
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
      </div>-->
      <div class="index_si_contact">
        <!-- qq 微信  知乎图标导航 -->
        <div class="flex items-center index-si-ioc">
          <div class="flex-1 sn-list2-1-1">
            <a href="tencent://message/?uin=851039536&Site=http://77ya.com/&Menu=yes">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ11" />
              </svg>
            </a>
          </div>
          <div class="flex-1 sn-list2-1-1">
            <a target="_blank" href="https://gitee.com/kaiouyang-sn">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gitee-fill-round" />
              </svg>
            </a>
          </div>
          <div class="flex-1 sn-list2-1-1">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin3" />
              </svg>
            </a>
          </div>
          <div class="flex-1 sn-list2-1-1">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liulan
" />
              </svg>
            </a>
          </div>
        </div>
        <!-- -------------------------------- -->
      </div>
      <!-- 说说显示描述内容 -->
      <div class="index-si-describe">
        <div class="index-si-describe-text">
          <p class>{{ UserTalk }}</p>
        </div>
      </div>
      <!-- ---------------------------------------- -->

      <!-- 标签框内容 -->
      <div class="index-si-tag">
        <div class="index-si-tag-title">标签</div>

        <div class="index-si-tag-div" v-for="Labeslss in Labels" :key="Labeslss.labelId">
          <div
            class="transition duration-500 ease-in-out transform index-si-tag-text hover: hover:scale-110 hover:text-red-600"
            @click="TagSkip(Labeslss.labelId)"
          >
            <svg class="inline-block icon" aria-hidden="true">
              <use :xlink:href="Labeslss.labelAlias" />
            </svg>
            <a>{{ Labeslss.labelName }}</a>
          </div>
        </div>
      </div>
      <!-- ----------------------------------------------- -->

      <!-- 分类内容框 -->
      <div class="index-si-type">
        <div class="index-si-type-title">分类</div>

        <div class="inline-flex cursor-pointer" v-for="Sorts in Sort" :key="Sorts.sortId">
          <div
            class="flex-1 px-1 m-1 text-sm text-center text-gray-700 transition duration-500 ease-in-out transform index-si-type-text hover: hover:scale-110 hover:text-red-600"
            @click="TagSkip(Labeslss.labelId)"
          >{{ Sorts.sortName }}</div>
        </div>
      </div>
      <!-- ------------------------------------------------- -->

      <!-- 文章内容框 -->
      <div class="index-si-article">
        <div class="index-si-article-title">最新内容</div>
        <div class="index-si-article-div" v-for="articles in article" :key="articles.article_id">
          <div class="index-si-article-text">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-liulan
" />
            </svg>
            <a @click="SkipText(articles.article_id)">
              {{
              articles.title
              }}
            </a>
          </div>
        </div>
      </div>
      <!-- ------------------------------------------------------ -->

      <!-- 站点统计框 -->
      <div class="index-si-statistics">
        <div class="index-si-statistics-title">站点信息</div>
        <div class="index-si-statistics-div">
          <div class="flex index-si-statistics-frame">
            <div class="sindex-si-statistics-frame-title">文章数量:</div>
            <div class="sindex-si-statistics-frame-text">{{ ArticleCount }}篇</div>
          </div>
          <div class="flex index-si-statistics-frame">
            <div class="sindex-si-statistics-frame-title">总字数:</div>
            <div class="sindex-si-statistics-frame-text">{{ textCount }} 字</div>
          </div>
          <div class="flex index-si-statistics-frame">
            <div class="sindex-si-statistics-frame-title">访问量:</div>
            <div class="sindex-si-statistics-frame-text">{{ readCount }}次</div>
          </div>
          <div class="flex index-si-statistics-frame">
            <div class="sindex-si-statistics-frame-title">最后更新:</div>
            <div class="sindex-si-statistics-frame-text">{{ articledata }}</div>
          </div>
        </div>
      </div>
      <!-- ------------------------------------------------------- -->
    </div>
  </div>
</template>

<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";
  export default {
    name: "IndexSidebar",
    components: {},

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
      const router = useRouter();
      const store = useStore();

      // 加载路由
      // const route = useRoute();
      const state = reactive({
        Labels: [],
        Sort: [],
        article: [],
        UserTalk: "",
        User: [],
        ArticleCount: 0,
        SortCount: 0,
        LabelsCount: 0,
        textCount: 0,
        readCount: 0,
        articledata: "",
      });

      const GetAllasync = async () => {
        proxy.$api
          .all([
            //查询标签
            proxy.$api.get("/api/ReSnLabels/GetAllAsync"),
            //查询分类
            proxy.$api.get("/api/SnSort/GetAllAsync"),
            //查询最新发布前十文章
            proxy.$api.get(
              "/api/SnArticle/GetFyTitleAsync?pageIndex=1&pageSize=10&isDesc=true"
            ),
            // 查询当前用户的说说
            proxy.$api.get(
              "/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true"
            ),
            //查询当前用户信息
            proxy.$api.get("/api/SnUser/AsyGetUserId?UserId=4"),
            //查询文章总数
            proxy.$api.get("/api/SnArticle/GetCountAsync"),
            //查询标签
            proxy.$api.get("/api/SnSort/GetCountAsync"),
            //查询分类
            proxy.$api.get("/api/SnLabels/GetCountAsync"),
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
      const TagSkip = (id: any) => {
        // .带参数跳转
        router.push({
          path: "/TagText",
          query: {
            id: id,
          },
        });
      };
      // 博客详情
      const SkipText = (id: number) => {
        // .带参数跳转
        router.push({
          path: "/Transfer",
          query: {
            id: id,
          },
        });
      };

      onMounted(async () => {
        await GetAllasync();
      });
      return {
        ...toRefs(state),
        TagSkip,
        GetAllasync,
        SkipText,
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .index_si_div {
    position: fixed;
    @include excursion($Text_height, null, null, $sidebar_r_r);
    @include w-h(20%, 90%);
    @apply ml-3;
    .index_si_text {
      @include w-h(100%, 100%);
      overflow: auto;

      .sn-list0 {
        @include initialize(100%, 250px, 0, 0, auto, auto, #ffffff);
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

      .index_si_contact {
        @include w-h(100%, 50px);
        margin: 0 auto;
        @apply mb-2 shadow rounded bg-white;
        // @include boxshow;

        .index-si-ioc {
          @include w-h(60%, 100%);
          margin: 0 auto;

          .sn-list2-1-1 {
            /*background-color: #4eb687;*/
            @apply text-center py-2 m-1 cursor-pointer;
          }
        }
      }
      .index-si-describe {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        @apply mb-2 shadow rounded bg-white;
        h4 {
          height: 2rem;
          @apply text-gray-900;
          font-size: 15px;
          line-height: 2.5rem;
        }

        .index-si-describe-text {
          p {
            @apply text-sm  px-1 py-2 m-1 cursor-pointer;
          }
        }
      }

      .index-si-statistics {
        width: 100%;
        margin: 0 auto;
        @apply p-1 mb-2 cursor-pointer bg-white;
        @apply shadow rounded;
        .index-si-statistics-title {
          @apply text-gray-900 p-1 m-1 text-base font-semibold bg-gray-200 cursor-pointer;
        }
        .index-si-statistics-div {
          @apply text-sm m-2;
          .index-si-statistics-frame {
            .sindex-si-statistics-frame-title {
              @apply p-1;
              width: 35%;
            }
            .sindex-si-statistics-frame-text {
              width: 40%;
              @apply p-1;
            }
          }
        }
      }

      .index-si-tag {
        width: 100%;
        margin: 0 auto;
        @apply p-1 mb-2 cursor-pointer bg-white;
        @apply shadow rounded;

        .index-si-tag-title {
          @apply m-1 p-1 text-base font-semibold bg-gray-200 text-gray-900;
        }

        .index-si-tag-div {
          @apply inline-flex;
          .index-si-tag-text {
            @apply flex-1;
            @apply text-gray-700 text-sm text-center px-1 m-1 bg-blue-100 rounded-sm;
          }
        }
      }

      // 分类
      .index-si-type {
        width: 100%;
        margin: 0 auto;
        @apply p-1 mb-2 bg-white;
        @apply shadow rounded;

        .index-si-type-title {
          @apply text-gray-900 text-base p-1 m-1 font-semibold bg-gray-200 cursor-pointer;
        }
        .index-si-type-text {
          @apply bg-red-100 rounded-sm;
        }
      }

      .index-si-article {
        width: 100%;
        margin: 0 auto;
        @apply p-1 mb-2 cursor-pointer bg-white;
        @apply shadow rounded;

        .index-si-article-title {
          @apply text-gray-900 p-1 m-1 text-base font-semibold bg-gray-200;
        }
        .index-si-article-div {
          background-color: white;
          border-bottom: 1px dashed #f1f1f1;
          .index-si-article-text {
            @apply p-1 m-1 text-sm;
          }
        }
      }
    }

    .index_si_text::-webkit-scrollbar {
      display: none;
    }
  }

  .icon {
    @include w-h(1em, 1em);
    vertical-align: -0.1em;
    fill: currentColor;
    overflow: hidden;
  }
</style>