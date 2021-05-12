<template>
  <div class="IndexTitle animate__animated animate__fadeIn">
    <div class="IndexTitle-img"></div>
    <!----------------------加载article表内容---------------------------->
    <div
      class="IndexTitle-text"
      v-for="(info, index) in dataResult"
      :class="{ alt: index % 2 == 1 }"
      :key="info.article_id"
    >
      <div class="flex IndexTitle-text-div">
        <div class="IndexTitle-title-div">
          <div class="IndexTitle-title" v-on:click="jump(info.article_id)">
            <a>{{ info.title }}</a>
          </div>
          <div class="IndexTitle-title-text">{{ info.title_text }}</div>
        </div>
      </div>
      <!---------------------------------------------------------------------------->
      <!--发表用户-->
      <div class="flex IndexTitle-user">
        <div>Junior@</div>
        <div>{{ info.time }}</div>
        <div>
          <a>
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-chat" />
            </svg>
            {{ info.comment }}
          </a>
        </div>
        <div @click="jump(info.article_id)">
          <a>
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-liulan" />
            </svg>
            {{ info.read }}
          </a>
        </div>
        <div>
          <svg class="inline-block icon" aria-hidden="true">
            <use xlink:href="#icon-dianzan2
" />
          </svg>
          {{ info.give }}
        </div>
      </div>

      <!---------------------------------------------------------------------------->
    </div>

    <!------------------------分页-------------->
    <div class="IndexTitle-page">
      <a-pagination
        size="small"
        @change="currentchange"
        :total="count"
        :pageSize="pagesize"
        show-quick-jumper
      />
    </div>
    <!---------------------------------------------------------------------------->
  </div>
</template>


<script lang="ts">
  import { reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { article } from '../../api/article';
  import utils from "@/utils/utils.js";
  // 组件导入
  export default {
    name: "IndexTitle",
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const router = useRouter();
      const state = reactive({
        dataResult: [], // 显示的数据
        page: 1, //页码
        pagesize: 8, //每页条数
        count: 0, //总数
      });
      const GetCountAsync = async () => {
        await article.GetCountAsync().then((result: any) => {
          state.count = result.data;
        })
      };

      const GetFyTitleAsync = async () => {
        await article.GetFyTitleAsync(state.page, state.pagesize).then((result: any) => {
          state.dataResult = result.data;
        });
      };

      const jump = async (id: number) => {
        await router.push({
          path: "/IndexText",
          query: {
            id: id,
          },
        });
      };

      const currentchange = async (val: number) => {
        state.page = val;
        GetFyTitleAsync();
        backtop(); //回到顶部
      };
      const backtop = async () => {
        {
          utils.backtop();
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

  .IndexTitle {
    @include initialize($w, null, $Text_height, null, $ml, null, null);
    p {
      @apply mb-4 text-xs;
    }
    .IndexTitle-img {
      @include w-h(null, 140px);
      background: no-repeat center/100% url("../../assets/img/bg.jpg");
      @include boxshow3;
    }
    .IndexTitle-text {
      @include w-h(100%, 145px);
      @apply mb-3 mt-2 bg-white shadow rounded-md;
      .IndexTitle-text-div {
        height: 78%;
        @include w-h(null, 78%);
        .IndexTitle-title-div {
          @include w-h(100%, 100%);
          .IndexTitle-title {
            height: 35%;
            @include line-ome;
            @apply px-3 pt-1 m-1 text-xl cursor-pointer font-medium antialiased;
          }

          .IndexTitle-title-text {
            color: #888888;
            @include w-h(null, 44%);
            @apply px-3 m-1 mt-2 pt-1 text-sm tracking-wide leading-relaxed font-light antialiased;
            @include line-number;
          }
        }
      }

      .IndexTitle-user {
        @include w-h(100%, 25%);
        @apply pl-3 antialiased;
        div {
          @include w-h(null, 78%);
          @apply m-1;
        }
      }
    }

    .IndexTitle-page {
      width: 100%;
      @apply py-5 bg-white shadow rounded;
    }
  }

  @screen xp {
    .index_si_div {
      @apply hidden;
    }
    .sidebarsn {
      @apply hidden;
    }
    .IndexTitle {
      // @apply bg-gray-400;
      width: 100%;
      @apply ml-0;

      .IndexTitle-img {
        @apply hidden;
      }
    }

    .IndexTitle-page {
      height: 110px;
    }
  }
</style>
