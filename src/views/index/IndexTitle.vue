<template>
  <div class="IndexTitle animate__animated animate__fadeIn">
    <div class="IndexTitle-img"></div>
    <!----------------------加载article表内容---------------------------->
    <div
      class="IndexTitle-text"
      v-for="(info, index) in dataResult"
      :class="{ alt: index % 2 == 1 }"
      :key="info.articleId"
    >
      <div class="IndexTitle-text-div">
        <div class="IndexTitle-title-div">
          <div class="IndexTitle-title" v-on:click="jump(info.articleId)">
            <a>{{ info.title }}</a>
          </div>
          <div class="IndexTitle-title-text">摘要: {{ info.titleText }}</div>
          <div class="IndexTitle-user">
            <div>少年</div>
            <div>随笔</div>
            <div>{{ info.time }}</div>
            <!-- <div>
          <a>
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-chat" />
            </svg>
            {{ info.comment }}
          </a>
            </div>-->
            <div @click="jump(info.article_id)">
              <a>
                <!-- <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-liulan" />
                </svg>-->
                {{ info.read }} ℃
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
        </div>
      </div>
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
  import { useStore } from "vuex";
  import { article } from '../../api/article';
  // 组件导入
  export default {
    name: "IndexTitle",
    components: {},
    setup() {
      const router = useRouter();
      const stores = useStore();
      const state = reactive({
        dataResult: [], // 显示的数据
        page: 1, //页码
        pagesize: 8, //每页条数
        count: 0, //总数
      });
      async function GetCountAsync(): Promise<void> {
        await article.GetCountAsync().then((result: any) => {
          state.count = result.data;
        });
      }

      async function GetFyTitleAsync(): Promise<void> {
        await article.GetFyTitleAsync(state.page, state.pagesize).then((result: any) => {
          state.dataResult = result.data;
        });
      }

      async function jump(id: number): Promise<void> {
        if (stores.state.SetPage) {
          const { href } = await router.resolve({
            path: "/IndexText",
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

      async function currentchange(val: number): Promise<void> {
        state.page = val;
        GetFyTitleAsync();
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
  @import "./scss/indexTitle.scss";
</style>
