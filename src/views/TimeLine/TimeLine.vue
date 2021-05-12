<!--
 * @Author: 时间线
 * @Date: 2020-12-10 10:40:17
 * @LastEditTime: 2021-05-12 10:17:22
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
        <a-timeline v-for="activity in items" :key="activity.article_id">
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
        </a-timeline>
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
