<template>
  <div>
    <!--侧边栏-->
    <Sidebarsn></Sidebarsn>
    <TalkSidebar></TalkSidebar>
    <div class="talk animate__animated animate__fadeIn">
      <!--文章内容-->
      <div class="talk-text">
        <div class="text-carousel">
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left: 10px; zindex: 1">
                <left-circle-outlined />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
              </div>
            </template>
            <div>
              <img src="../../assets/img/bg.jpg" alt />
            </div>
            <div>
              <img src="../../assets/img/bg.jpg" alt />
            </div>
            <div>
              <img src="../../assets/img/bg.jpg" alt />
            </div>
            <div>
              <img src="../../assets/img/bg.jpg" alt />
            </div>
          </a-carousel>

          <div class="text-carousel-1">
            <h4>Junior</h4>
          </div>
        </div>

        <!-- <div class="talk-text-2" v-for="data in dataShow" :key="data.id">
          <div class="flex talk-text-2-1">
            <div class="talk-text-2-1-2">
              <div class="flex talk-text-2-1-2-1">
                <div>
                  {{
                    data.talkTime
                      .toLocaleString()
                      .replace(/T/g, " ")
                      .replace(/\.[\d]{3}Z/, "")
                  }}
                </div>
                <div>
                  <a @click="GetTalkid(data.id)">《{{ data.talkTitle }}》</a>
                </div>
              </div>
              <div class="talk-text-2-1-2-2">{{ data.talkBrief }}</div>

              <div class="flex talk-text-2-1-2-3">
                <div>
                  <a>Junior@</a>
                </div>
                <div>
                  <svg class="inline-block icon" aria-hidden="true">
                    <use
                      xlink:href="#icon-dianzan2
"
                    />
                  </svg>
                  {{ data.talkGive }}
                </div>
                <div>
                  <svg class="inline-block icon" aria-hidden="true">
                    <use xlink:href="#icon-liulan" />
                  </svg>
                  {{ data.talkRead }}
                </div>
                <div>
                  分类:
                  {{ data.talkTypeId }}
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div class="text-title" v-for="data in dataShow" :key="data.id">
          <div class="text-title-1">
            {{
              data.talkTime
                .toLocaleString()
                .replace(/T/g, " ")
                .replace(/\.[\d]{3}Z/, "")
            }}
            <a @click="GetTalkid(data.id, data.userId)"
              >《{{ data.talkTitle }}》</a
            >
          </div>
          <div
            class="text-title-2"
            v-if="data.userId != 0"
            v-html="data.talkText"
          ></div>
        </div>

        <!--分页-->
        <div class="p-1 m-1">
          <div>
            <a-pagination
              size="small"
              @change="currentchange"
              :total="count"
              :pageSize="pagesize"
              show-quick-jumper
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import "highlight.js/styles/googlecode.css";
  import hljs from "highlight.js"; //导入代码高亮文件
  import marked from "marked"; //解析器
  import { getCurrentInstance, reactive, toRefs, onMounted, onUpdated } from "vue";
  import { useRouter } from "vue-router";
  import TalkSidebar from "./TalkSidebar.vue";
  import { message } from 'ant-design-vue';
  export default {
    name: "Talk",
    components: { TalkSidebar },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
      const router = useRouter();
      // 加载路由
      // const route = useRoute();
      const state = reactive({
        dataShow: [], // 当前显示的数据
        page: 1, //当前页码
        pagesize: 8, //每页的数据条数
        count: 0, //默认数据总数
        blog: [],
      });

      const getCount = async () => {
        proxy
          .$api({
            url: "/api/SnTalk/CountAsync",
          })
          .then((res: any) => {
            state.count = res.data;
          })
          .catch((e: any) => {
            console.log(e + "获取数据失败");
          });
      };
      const AsyGetTest = async () => {
        proxy
          .$api({
            url:
              "/api/SnTalk/GetFyAllAsync?pageIndex=" +
              state.page +
              "&pageSize=" +
              state.pagesize +
              "&isDesc=true",
          })
          .then((res: any) => {
            state.dataShow = res.data;
            state.dataShow = marked(res.data);
          })
          .catch((e: any) => {
            console.log(e + "获取数据失败");
          });
      };
      // 代码高亮
      const highlighthandle = async () => {
        await hljs;
        let highlight = document.querySelectorAll("code,pre");
        highlight.forEach((block: any) => {
          hljs.highlightBlock(block);
        });
      };
      const GetTalkid = async (id: number, userid: number) => {

        if (userid != 0) {
          // .带参数跳转
          await router.push({
            path: "/TalkText",
            query: {
              id: id,
            },
          });
        } else {
          message.info('无权限!');
        }
      };

      const currentchange = async (val: any) => {
        state.page = val;
        AsyGetTest();
        backtop(); //回到顶部
      };

      const backtop = async () => {
        {
          var timer = setInterval(function () {
            let osTop =
              document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop =
              osTop + ispeed;
            // this.isTop = true;
            if (osTop === 0) {
              clearInterval(timer);
            }
          }, 30);
        }
      };
      onMounted(async () => {
        await getCount();
        await AsyGetTest();
      });
      onUpdated(async () => {
        await highlighthandle();
      });
      return {
        ...toRefs(state),
        getCount,
        AsyGetTest,
        GetTalkid,
        currentchange,
        backtop,
        highlighthandle
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .talk {
    /*background-color: #dddddd;*/
    @include initialize($w, 100%, 60px, null, $ml, null, null);
    //@include boxshow;
    .talk-text {
      .text-carousel {
        /* For demo */
        .ant-carousel ::v-deep(.slick-slide) {
          text-align: center;
          height: 140px;
          line-height: 160px;
          // background: #364d79;
          overflow: hidden;
        }

        .ant-carousel ::v-deep(.slick-arrow.custom-slick-arrow) {
          width: 25px;
          height: 25px;
          font-size: 25px;
          color: #fff;
          background-color: rgba(31, 45, 61, 0.11);
          opacity: 0.3;
        }
        .ant-carousel ::v-deep(.custom-slick-arrow:before) {
          display: none;
        }
        .ant-carousel ::v-deep(.custom-slick-arrow:hover) {
          opacity: 0.5;
        }

        .ant-carousel ::v-deep(.slick-slide h3) {
          color: #fff;
        }

        div {
          img {
            @include w-h(100%, 100%);
          }
        }
        /*父元素*/
        position: relative;
        @apply shadow rounded-sm;

        .text-carousel-1 {
          /*绝对定位*/
          position: absolute;
          width: 100px;
          left: 7%;
          top: 36%;
          h4 {
            color: #ffffff;
            @apply text-2xl;
          }
        }
      }

      .talk-text-2 {
        @apply mt-3;
        // background-color: #6990f6;
        .talk-text-2-1 {
          background-color: #ffffff;
          @include w-h(100%, 120px);
          margin: auto;
          @apply mt-4;
          /*border-bottom: 1px dashed #f1f1f1;*/
          @apply shadow rounded;

          // 左边图片
          .talk-text-2-1-1 {
            /*background-color: #95999c;*/
            @include w-h(25%, 100%);
            @apply shadow-sm;
            img {
              @include w-h(100%, 100%);
            }
          }

          // 右边内容
          .talk-text-2-1-2 {
            // background-color: #55a532;
            @include w-h(100%, 100%);
            @apply text-justify;

            // 标题 作者 日期
            .talk-text-2-1-2-1 {
              // background-color: #0086b3;
              height: 30%;

              div {
                /*background-color: #dddddd;*/
                @apply p-1 px-4 pt-2 text-xl cursor-pointer font-normal antialiased;
              }
            }
            // 内容
            .talk-text-2-1-2-2 {
              height: 40%;
              // background-color: #d1bda4;
              @apply p-1 pt-2 px-4 text-sm font-light antialiased;
              @include line-number;
            }

            .talk-text-2-1-2-3 {
              height: 30%;
              @apply px-4 pt-2  text-sm cursor-pointer;
              // background-color: #9a6e3a;

              div {
                @include w-h(10%, 100%);
                // background-color: #d1bda4;
                @apply p-1;
              }
            }
          }
        }
      }
      .text-title {
        @apply mt-2;
        @apply bg-white  text-base  shadow-sm rounded p-2;
        width: 100%;
        .text-title-1 {
          @apply p-1 px-3 text-lg font-medium;
          @include line-ome;
          /* 边框下划线 */
          border-bottom: 1px solid #d5d9e0;
        }
        .text-title-2 {
          @apply p-1 px-3 text-base text-gray-500 font-light;
        }
      }
      .asas {
        @apply bg-red-400;
      }
    }
  }

  @screen xp {
    .TalkSidebar {
      @apply hidden;
    }
    .talk {
      width: 100%;
      @apply ml-0 mb-14;

      .talk-text-1 {
        @apply hidden;
      }
    }
  }
</style>