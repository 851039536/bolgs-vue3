<template>
  <div class="indextitle animate__animated animate__fadeIn">
    <a-back-top />

    <!-- 首页图 -->
    <div class="indextitle_img"></div>
    <!-- end 首页图 -->

    <!-- article表内容 -->
    <div class="indextitle_content" v-for="info in state.dataResult" :key="info.articleId">
      <div class="indextitle_text_div">
        <div class="indextitle_title_div">
          <div class="indextitle_title" v-on:click="jump(info.articleId)">
            <a>{{ info.title }}</a>
          </div>
          <div class="indextitle_title_text">摘要: {{ info.titleText }}</div>
          <div class="indextitle_user">
            <div>少年</div>
            <div>随笔</div>
            <div>{{ info.timeCreate.substring(0, 10) }}</div>

            <div @click="jump(info.article_id)">
              <a>{{ info.read }} ℃</a>
            </div>
            <div>
              <svg class="inline-block icon" aria-hidden="true">
                <use xlink:href="#icon-dianzan2
" />
              </svg>
              {{ info.give }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end article表内容  -->

    <!-- 分页 -->
    <div class="indextitle_page">
      <a-pagination
        size="small"
        @change="currentchange"
        :total="state.count"
        :pageSize="state.pagesize"
        show-quick-jumper
      />
    </div>
    <!-- end 分页-->
  </div>
</template>


<script lang="ts">
import { reactive, onMounted, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { article } from '../../api/article';
import { setBlog } from '../../api/setBlog';

export default defineComponent({
  setup() {
    const router = useRouter();
    const stores = useStore();
    interface State {
      dataResult: any, // 显示的数据
      page: number,//页码
      readonly pagesize: number, //每页条数
      count: number, //总数
    }
    const state: State = reactive({
      dataResult: [],
      page: 1,
      pagesize: 8,
      count: 0,
    });

    async function GetCountAsync(): Promise<void> {

      await article.GetCountAsync().then((result: any) => {
        state.count = result.data;
        // console.log(state.count);
      });
    }

    async function GetFyTitleAsync(): Promise<void> {
      await article.GetFyTitleAsync(state.page, state.pagesize).then((result: any) => {
        state.dataResult = result.data;
        // console.log(state.dataResult[0].titleText, state.page, state.pagesize);
      });
    }

    async function jump(id: number): Promise<void> {
      await setBlog.GetByIdAsync(1, false).then(res => {
        stores.state.SetPage = res.data.setIsopen;
      })
      if (stores.state.SetPage) {
        const { href } = await router.resolve({
          path: "/Particulars",
          query: { id: id }
        });
        window.open(href, '_blank');
      } else {
        await router.push({
          path: "/IndexText",
          query: {
            id: id,
          },
        });
      }
    }

    const currentchange = async (val: number) => {
      state.page = val;
      await GetFyTitleAsync();
      await backtop(); //回到顶部
    }

    const backtop = async () => {
      {
        var timer = setInterval(function () {
          let osTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-osTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop =
            osTop + ispeed;
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
      state,
      jump,
      currentchange,
    };
  },
});
</script>

<style lang="scss" >
@import "./index.scss";
</style>
