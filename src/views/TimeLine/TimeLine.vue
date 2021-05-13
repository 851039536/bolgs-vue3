<!--
 * @Author: 时间线
 * @Date: 2020-12-10 10:40:17
 * @LastEditTime: 2021-05-12 14:52:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\TimeLine\TimeLine.vue
-->
<template>
  <div class="timeline animate__animated animate__fadeIn">
    <sidebarsn></sidebarsn>
    <IndexSidebar></IndexSidebar>
    <div class="timeline_img">
      <h4>Archive</h4>
      <p>最后更新于2020年11月26日</p>
    </div>
    <div class="timeline-type">
      <div class="timeline-type-name">
        <ul>
          <li>分类 : {{ SortCount }}</li>
          <li>标签 : {{ LabelsCount }}</li>
          <li>文章 : {{ ArticleCount }}</li>
          <li>阅读 :{{ readCount }}+</li>
          <li>字段数 : {{ textCount }}+</li>
        </ul>
      </div>
    </div>

    <div class="timeline-time">
      <div class="block">
        <!-- 骨架 -->
        <a-skeleton :loading="spinning" :paragraph="{ rows: 15 }" active />
        <!-- <a-timeline v-for="activity in items" :key="activity.article_id">
          <div class="block-1">
            <a-timeline-item>
              <h4>
                <a @click="onk(activity.article_id)">{{ activity.title }}</a>
              </h4>
            </a-timeline-item>
            <a-timeline-item color="green">
              <p>提交于 {{ activity.time }}</p>
            </a-timeline-item>
          </div>
        </a-timeline>-->

        <section class="text-gray-600 body-font">
          <div class="container flex flex-wrap px-5 py-24 mx-auto">
            <div
              class="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3"
              v-for="activity in items"
              :key="activity.article_id"
            >
              <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>

              <div
                class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font"
              >{{ activity.article_id }}</div>

              <div
                class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
              >
                <!-- <div
                  class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>-->
                <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
                  <h2 class="mb-1 text-xl font-medium text-gray-900 title-font">{{ activity.title }}</h2>
                  <p
                    class="leading-relaxed"
                  >VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- 回到顶部 -->
      <a-back-top />
    </div>
  </div>
  <div></div>
</template>

<script lang="ts">
  //从 vue 中引入 多个生命周期函数
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";
  export default {
    name: "TimeLine",
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      // 简单的来说，它是类型约束的定义，当你使用这个定义接口时，它会一一匹对接口中定义的类型。
      //只要不满足接口中的任何一个属性，都不会通过的。
      interface States {
        reverse: boolean;
        spinning: boolean;
        items: (number | string)[]; //数组类型
        textCount: number;
        ArticleCount: number;
        SortCount: number;
        LabelsCount: number;
        readCount: number;
      }

      const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
      const router = useRouter();
      const store = useStore();
      const state: States = reactive({
        items: [],
        reverse: true,
        spinning: true,
        textCount: 0, //文章字节数
        ArticleCount: 0, //文章总数
        SortCount: 0, //分类总数
        LabelsCount: 0, //标签总数
        readCount: 0, //阅读
      });

      const iniCount = () => {
        state.ArticleCount = store.state.ArticleCount;
        state.textCount = store.state.textCount;
        state.SortCount = store.state.SortCount;
        state.LabelsCount = store.state.LabelsCount;
        state.readCount = store.state.readCount;
      };
      //void 为 函数没有类型，一般用在没有返回值的函数 如果方法类型为any，则可以返回任意类型
      const asyGetTest = (): void => {
        proxy
          .$api({
            url:
              "/api/SnArticle/GetFyTitleAsync?pageIndex=1&pageSize=1150&isDesc=true",
          })
          .then((res: any) => {
            state.items = res.data;
            state.spinning = false;
          })

      };

      const onk = (id: number) => {
        // .带参数跳转
        router.push({
          path: "/Indextext2",
          query: {
            id: id,
          },
        });
      };
      onMounted(async () => {
        await asyGetTest();
        await iniCount();
      });
      return { ...toRefs(state), asyGetTest, onk, iniCount };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .timeline {
    @include initialize($w, null, $Text_height, null, $ml, null, #ffffff);
    @apply text-base;
    @apply shadow rounded;
    .timeline_img {
      position: relative;
      @include w-h(100%, 140px);
      @include bg-img("../../assets/img/si.jpg");
      @apply rounded;
      h4 {
        position: absolute;
        @include excursion(16%, null, 45%, null);
        color: white;
        font-weight: 300;
      }
      p {
        position: absolute;
        @include excursion(53%, null, 39%, null);
        color: #7f828f;
        font-weight: 300;
        font-size: 15px;
      }
    }

    .timeline-type {
      // background-color: antiquewhite;

      @apply shadow mt-1 rounded;
      .timeline-type-name {
        ul li {
          display: inline-block;
          @apply p-4  text-lg font-semibold;
        }
      }
    }

    .timeline-time {
      position: relative;
      @apply mt-4;
      .block {
        @apply mx-4 mt-2;
        .block-1 {
          @apply m-2;
          h4 {
            @apply text-lg;
          }
        }
      }
    }
  }
</style>
