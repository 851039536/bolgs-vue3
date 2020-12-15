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
        <a-timeline v-for="(activity, index) in items" :key="index">
          <div class="block-1">
            <a-timeline-item>
              <h4>
                <a>{{ activity.title }} </a>
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
    <a-spin :spinning="spinning" :delay="200">
      <div class=""></div>
    </a-spin>
  </div>
</template>

<script lang="ts">
//从 vue 中引入 多个生命周期函数
import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
export default {
  name: "TimeLine",
  components: {},
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    // 使用
    const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
    const state = reactive({
      items: [],
      reverse: true,
      spinning: true,
    });

    const asyGetTest = () => {
      proxy
        .$api({
          url:
            "/api/SnArticle/GetfyTest?label=00&pageIndex=1&pageSize=500&isDesc=true",
        })
        .then((res: any) => {
          state.items = res.data;
          // alert(state.items[1].time);
          // for (var i = 0; i < res.data.length; i++) {
          //   state.items[i].content = res.data[i].title;
          //   state.items[i].tag = res.data[i].time;
          //   // console.log(res.data[i].title);

          // }
          state.spinning = false;
        })
        .catch((e: any) => {
          console.log(e + "获取数据失败");
        });
    };
    onMounted(async () => {
      await asyGetTest();
    });
    return { ...toRefs(state), asyGetTest };
  },
  // data() {
  //   return {
  //     items: [],
  //     reverse: true,
  //     spinning: true,
  //   };
  // },
  // created() {
  //   this.AsyGetTest();
  // },
  //   methods: {
  //     //加载文章
  //     AsyGetTest() {
  //       this.$api({
  //         url:
  //           "/api/SnArticle/GetfyTest?label=00&pageIndex=1&pageSize=500&isDesc=true",
  //       })
  //         .then((res) => {
  //           this.items = res.data;
  //           for (var i = 0; i < res.data.length; i++) {
  //             this.items[i].content = res.data[i].title;
  //             this.items[i].tag = res.data[i].time;
  //             // console.log(res.data[i].title);
  //             this.spinning = false;
  //           }
  //         })
  //         .catch((e) => {
  //           console.log(e + "获取数据失败");
  //         });
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  .timeline {
    margin: 0 auto;
    @include initialize(49%, null, 60px, null, 23%, null, #ffffff);
    @apply text-base;
    .timeline-img {
      position: relative;
      @include w-h(100%, 100px);
      @include bg-img("../../assets/img/timebg.jpg");
      @include boxshow;
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
        @include boxshow;
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
      margin: 10px auto 0 auto;
      @include boxshow;
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
