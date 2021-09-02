<template>
  <div id="index_sidebar">
    <div class="index_s_main">
      <!-- qq 微信  知乎图标导航 -->
      <blog-ico></blog-ico>
      <!-- 搜索 -->
      <div class="index_si_input">
        <a-select
          show-search
          v-model:value="sntitle"
          placeholder="input search text"
          style="width: 200px"
          :show-arrow="false"
          :filter-option="false"
          @search="SearchTitle"
          @select="tiaozhuan"
        >
          >
          <a-select-option v-for="d in article1" :key="d.articleId">{{ d.title }}</a-select-option>
        </a-select>
      </div>
      <!-- -------------------------------- -->
      <!-- 说说显示描述内容 -->
      <div class="index-si-describe">
        <div>
          <p>{{ UserTalk }}</p>
        </div>
      </div>
      <!-- ---------------------------------------- -->

      <!-- 标签框内容 -->
      <div class="index-si-tag">
        <div class="index-si-tag-title">标签</div>
        <blog-tag
          v-for="Labeslss in Labels"
          :key="Labeslss.labelId"
          :title=" Labeslss.labelName"
          @click="TagSkip(Labeslss.labelId)"
        ></blog-tag>
      </div>
      <!-- ----------------------------------------------- -->

      <!-- 分类内容框 -->
      <div class="index-si-type">
        <div class="index-si-type-title">分类</div>
        <div class="inline-flex cursor-pointer" v-for="Sorts in Sort" :key="Sorts.sortId">
          <div
            class="flex-1 px-1 m-1 text-sm text-center text-gray-700 transition duration-500 ease-in-out transform index-si-type-text hover: hover:scale-110 hover:text-red-600"
            @click="TagSkip(Labeslss.labelId)"
          >{{ Sorts.sortName }}</div>
        </div>
      </div>

      <!-- 站点统计框 -->
      <blog-information
        :ArticleCount="ArticleCount"
        :TextCount="textCount"
        :ReadCount="readCount"
        :Articledata="articledata.substring(0,10)"
      ></blog-information>

      <div class="index-si-count">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <!-- <div class="stat-title">Total Likes</div> -->
          <div class="stat-value text-primary">{{readCount}}</div>
          <!-- <div class="stat-desc">21% more than last month</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";
  import { article } from '../../api/article';
  import { labels } from '../../api/labels';
  import { sort } from '../../api/sort';
  import BlogInformation from '../common/SidebarModule/BlogInformation.vue';
  import BlogIco from '../common/SidebarModule/BlogIco.vue';
  import BlogTag from '../common/SidebarModule/BlogTag.vue';
  export default {
    name: "IndexSidebar",
    components: { BlogInformation, BlogIco, BlogTag },

    setup() {
      const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
      const router = useRouter();
      const store = useStore();

      // 加载路由
      // const route = useRoute();
      const state = reactive({
        Labels: [],
        Sort: [],
        article: [] as any,
        article1: [],
        UserTalk: "",
        User: [],
        ArticleCount: 0,
        SortCount: 0,
        LabelsCount: 0,
        textCount: 0,
        readCount: 0,
        articledata: "",
        sntitle: "" as string
      });

      const SearchTitle = async (title: string) => {

        await article.GetContainsAsync(title).then(res => {
          state.article1 = res.data;
        })

      };

      const tiaozhuan = async (title: string) => {

        const { href } = await router.resolve({
          path: "/Particulars",
          query: {
            id: title,
            t: +new Date()
          }
        });
        window.open(href, '_blank');
      }

      const GetAllasync = async () => {

        //查询标签
        await labels.GetAllAsync(true).then(res => {
          state.Labels = res.data;
        });
        //查询分类
        await sort.GetAllAsync(true).then(res => {
          state.Sort = res.data;
        });
        proxy.$api
          .all([
            //查询最新发布前十文章
            proxy.$api.get(
              "/api/SnArticle/GetFyTitleAsync?pageIndex=1&pageSize=10&isDesc=true&cache=true"
            ),
            // 查询当前用户的说说
            proxy.$api.get(
              "/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true"
            ),
            //查询当前用户信息
            proxy.$api.get("/api/SnUser/GetByIdAsync?id=4&cache=true"),
            //查询文章总数
            proxy.$api.get("/api/SnArticle/GetCountAsync"),
            //查询标签
            proxy.$api.get("/api/SnSort/GetCountAsync"),
            //查询分类
            proxy.$api.get("/api/SnLabels/GetCountAsync"),
            // 内容字段数
            proxy.$api.get("/api/SnArticle/GetSumAsync?type=text"),
            // 阅读量
            proxy.$api.get("/api/SnArticle/GetSumAsync?type=read"),
          ])
          .then(
            proxy.$api.spread(
              (

                res3: any,
                res4: any,
                res5: any,
                res6: any,
                res7: any,
                res8: any,
                res9: any,
                res10: any
              ) => {
                state.article = res3.data;
                state.articledata = res3.data[0].timeCreate;
                state.UserTalk = res4.data;
                state.User = res5.data;
                store.state.ArticleCount = state.ArticleCount = res6.data;
                store.state.SortCount = state.SortCount = res7.data;
                store.state.LabelsCount = state.LabelsCount = res8.data;
                store.state.textCount = state.textCount = res9.data;
                store.state.readCount = state.readCount = res10.data;
              }
            )
          )
          .catch((err: any) => {
            console.log(err);
          });
      };
      const TagSkip = (id: any) => {
        // .带参数跳转
        router.push({
          path: "/TagText",
          query: {
            id: id,
          },
        });
      };
      // 博客详情
      const SkipText = (id: number) => {
        // .带参数跳转
        router.push({
          path: "/Transfer",
          query: {
            id: id,
          },
        });
      };

      onMounted(async () => {
        await GetAllasync();
      });
      return {
        ...toRefs(state),
        TagSkip,
        GetAllasync,
        SkipText,
        SearchTitle,
        tiaozhuan
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import "./scss/indexSidebar.scss";
</style>