<template>
  <div class="timeline animate__animated animate__fadeIn">
    <sidebarsn></sidebarsn>
    <div class="timeline-img">
      <h4>Archive</h4>
      <p>最后更新于2020年11月26日</p>
    </div>
    <div class="timeline-title">
      <div class="timeline-title-1">
        <ul>
          <li>分类 : 14+</li>
          <li>标签 : 76+</li>
          <li>文章 : 46+</li>
          <li>阅读 : 46+</li>
          <li>留言 : 100+</li>
        </ul>
      </div>
    </div>

    <div class="timeline-time">
      <div class="block">
        <!-- 骨架 -->
        <a-skeleton :loading="spinning" :paragraph="{ rows: 15 }" active />
        <a-timeline v-for="activity in items" :key="activity.articleId">
          <div class="block-1">
            <a-timeline-item>
              <h4>
                <a @click="onk(activity.articleId)">{{ activity.title }} </a>
              </h4>
            </a-timeline-item>
            <a-timeline-item color="green">
              <p>提交于 {{ activity.time }}</p>
            </a-timeline-item>
          </div>
        </a-timeline>
      </div>
      <IndexSidebar></IndexSidebar>

      <!-- 回到顶部 -->
      <a-back-top />
    </div>
  </div>
  <div>
    <!-- <a-spin :spinning="spinning" :delay="200">
      <div class=""></div>
    </a-spin> -->
  </div>
</template>

<script lang="ts">
//从 vue 中引入 多个生命周期函数
import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
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
    }

    const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
    const router = useRouter();
    const state: States = reactive({
      items: [],
      reverse: true,
      spinning: true,
    });

    //void 为 函数没有类型，一般用在没有返回值的函数 如果方法类型为any，则可以返回任意类型
    const asyGetTest = (): void => {
      proxy
        .$api({
          url:
            "/api/SnArticle/GetfyTest?label=00&pageIndex=1&pageSize=500&isDesc=true",
        })
        .then((res: any) => {
          state.items = res.data;
          state.spinning = false;
        })
        .catch((e: never) => {
          //never 代表不存在的值类型，常用作为 抛出异常或者 无限循环的函数返回类型
          console.log(e + "获取数据失败");
        });
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
    });
    return { ...toRefs(state), asyGetTest, onk };
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  .timeline {
    margin: 0 auto;
    @include initialize($w, null, 60px, null, $ml, null, #ffffff);
    @apply text-base;
    @apply shadow;
    .timeline-img {
      position: relative;
      @include w-h(100%, 100px);
      @include bg-img("../../assets/img/timebg.jpg");
      // @apply shadow;
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

    .timeline-title {
      margin-top: 10px;
      .timeline-title-1 {
        margin: 0 auto;
        @apply shadow;
        ul li {
          display: inline-block;
          padding-left: 6.8%;
          color: #666;
          text-align: center;
          height: 80px;
          line-height: 90px;
        }
      }
    }

    .timeline-time {
      position: relative;
      margin: 20px auto 0 auto;
      // @apply shadow;
      .block {
        @apply mx-4 mt-2;
        .block-1 {
          @apply m-2;
          h4 {
            @apply text-base;
          }
        }
      }
    }
  }
</style>
