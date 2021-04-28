<template>
  <div class="sn-text animate__animated animate__fadeIn">
    <div class="sn-test-2"></div>
    <!--        加载article表内容-->
    <div
      class="sn-test-1"
      v-for="(info, index) in dataResult"
      :class="{ alt: index % 2 == 1 }"
      :key="info.article_id"
    >
      <div class="flex sn-text-1-1">
        <div class="sn-text-1-1-1">
          <div class="sn-text-1-1-1-1" v-on:click="jump(info.article_id)">
            <a>{{ info.title }}</a>
          </div>
          <div class="sn-text-1-1-1-2">{{ info.title_text }}</div>
        </div>
      </div>

      <!--发表用户-->
      <div class="flex sn-text-1-2">
        <div>Junior@</div>
        <div>{{ info.time }}</div>
        <div>
          <a>
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-chat"></use>
            </svg>
            {{ info.comment }}</a
          >
        </div>
        <div @click="jump(info.article_id)">
          <a>
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-liulan"></use>
            </svg>
            {{ info.read }}</a
          >
        </div>
        <div>
          <svg class="inline-block icon" aria-hidden="true">
            <use
              xlink:href="#icon-dianzan2
"
            ></use>
          </svg>
          {{ info.give }}
        </div>
      </div>
    </div>

    <!--分页-->
    <div class="sn-test-3">
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
</template>


<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";

  // 组件导入
  export default {
    name: "Index-Text",
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
      const router = useRouter();
      // 加载路由
      // const route = useRoute();
      const state = reactive({
        dataResult: [], // 当前显示的数据
        page: 1, //当前页码
        pagesize: 8, //每页的数据条数
        count: 0, //默认数据总数
      });

      const GetCountAsync = async () => {
        proxy
          .$api({
            url: "/api/SnArticle/GetCountAsync",
          })
          .then((res: any) => {
            state.count = res.data;
          })
          .catch((e: any) => {
            console.log(e + "获取数据失败");
          });
      };
      const GetFyTitleAsync = async () => {
        proxy
          .$api({
            url:
              "/api/SnArticle/GetFyTitleAsync?" +
              "&pageIndex=" +
              state.page +
              "&pageSize=" +
              state.pagesize +
              "&isDesc=true",

          })
          .then((res: any) => {
            state.dataResult = res.data;
          })
          .catch((e: any) => {
            console.log(e + "获取数据失败");
          });
      };

      const jump = async (id: any) => {
        // .带参数跳转
        await router.push({
          path: "/Indextext2",
          query: {
            id: id,
          },
        });
      };

      const currentchange = async (val: any) => {
        state.page = val;
        GetFyTitleAsync();
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
        await GetCountAsync();
        await GetFyTitleAsync();
      });

      return {
        ...toRefs(state),
        GetCountAsync,
        GetFyTitleAsync,
        jump,
        currentchange,
        backtop,
      };
    },
  };
</script>

<style lang="scss" >
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";

  .sn-text {
    @include initialize($w, null, $Text_height, null, $ml, null, null);

    // @include boxshow3;
    p {
      @apply mb-4 text-xs;
    }
    .sn-test-2 {
      @include w-h(null, 140px);

      background: no-repeat center/100% url("../../assets/img/bg.jpg");
      @include boxshow3;
    }
    .sn-test-1 {
      @include w-h(100%, 145px);
      @apply mb-3 mt-2 bg-white shadow rounded-md;
      // @include boxshow3;
      .sn-text-1-1 {
        /*background-color: #63a35c;*/
        height: 78%;
        @include w-h(null, 78%);
        .sn-text-1-1-1 {
          /*background-color: red;*/
          @include w-h(100%, 100%);
          .sn-text-1-1-1-1 {
            height: 35%;
            @include line-ome;
            //background-color: #4eb687;
            @apply px-3 pt-1 m-1 text-xl cursor-pointer font-medium antialiased;
          }

          .sn-text-1-1-1-2 {
            color: #888888;
            @include w-h(null, 44%);
            // background-color: #9a6e3a;
            @apply px-3 m-1 mt-2 pt-1 text-sm tracking-wide leading-relaxed font-light antialiased;
            @include line-number;
          }
        }
      }

      .sn-text-1-2 {
        // background-color: #95999c;
        @include w-h(100%, 25%);
        //   background-color: #795da3;
        @apply pl-3 antialiased;
        div {
          // background-color: #0086b3;
          @include w-h(null, 78%);
          @apply m-1;
        }
      }
    }

    .sn-test-3 {
      @apply p-1 m-1;
    }
  }

  @screen xp {
    .index_si_div {
      @apply hidden;
    }
    .sidebarsn {
      @apply hidden;
    }
    .sn-text {
      // @apply bg-gray-400;
      width: 100%;
      @apply ml-0;

      .sn-test-2 {
        @apply hidden;
      }
    }

    .sn-test-3 {
      height: 110px;
    }
  }
</style>
