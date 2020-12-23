<template>
  <div>
    <!--侧边栏-->
    <Sidebarsn></Sidebarsn>
    <div class="talk animate__animated animate__fadeIn">
      <!--文章内容-->
      <div class="talk-text">
        <div class="talk-text-1">
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
              <img src="../../assets/img/bg.jpg" alt="" />
            </div>
            <div>
              <img src="../../assets/img/bg.jpg" alt="" />
            </div>
            <div>
              <img src="../../assets/img/bg.jpg" alt="" />
            </div>
            <div>
              <img src="../../assets/img/bg.jpg" alt="" />
            </div>
          </a-carousel>

          <div class="talk-text-1-1">
            <h4>Junior</h4>
          </div>

          <div class="talk-text-1-2">
            <p>评论:22</p>
            <p>文章:162</p>
            <p>动态:11</p>
          </div>
        </div>

        <div class="talk-text-2" v-for="data in dataShow" :key="data.id">
          <div class="flex talk-text-2-1">
            <!-- <div class="talk-text-2-1-1">
             
            </div> -->

            <div class="talk-text-2-1-2">
              <div class="flex talk-text-2-1-2-1">
                <!-- <div><a>Junior@</a></div> -->
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
              <div class="talk-text-2-1-2-2">
                {{ data.talkBrief }}
              </div>

              <div class="flex talk-text-2-1-2-3">
                <div><a>Junior@</a></div>
                <div>
                  <svg class="inline-block icon" aria-hidden="true">
                    <use
                      xlink:href="#icon-dianzan2
"
                    ></use></svg
                  >{{ data.talkGive }}
                </div>
                <div>
                  <svg class="inline-block icon" aria-hidden="true">
                    <use xlink:href="#icon-liulan"></use></svg
                  >{{ data.talkRead }}
                </div>
                <div>
                  分类:
                  {{ data.talkTypeId }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--分页-->
        <div class="p-1 m-1">
          <div id="components-pagination-demo-mini">
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

      <TalkSidebar></TalkSidebar>
    </div>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import TalkSidebar from "./TalkSidebar.vue";
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
        })
        .catch((e: any) => {
          console.log(e + "获取数据失败");
        });
    };

    const GetTalkid = async (id: any) => {
      // .带参数跳转
      await router.push({
        path: "/TalkText",
        query: {
          id: id,
        },
      });
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

    return {
      ...toRefs(state),
      getCount,
      AsyGetTest,
      GetTalkid,
      currentchange,
      backtop,
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
      .talk-text-1 {
        /* For demo */
        .ant-carousel ::v-deep(.slick-slide) {
          text-align: center;
          height: 140px;
          line-height: 160px;
          background: #364d79;
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
        // height: 175px;
        // background: no-repeat center/100% url("../../assets/img/bg.jpg");
        // border-radius: 3px;
        @apply shadow rounded-sm;

        .talk-text-1-1 {
          /*绝对定位*/
          position: absolute;
          width: 100px;
          left: 7%;
          top: 40%;
          h4 {
            color: #ffffff;
          }
        }

        .talk-text-1-2 {
          position: absolute;
          left: 75%;
          top: 40%;

          p {
            color: #ffffff;
            display: inline-block;
            padding-right: 0.5rem;
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

      .asas {
        @apply bg-red-400;
      }
    }
  }
</style>