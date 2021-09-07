<template>
  <div id="blogssidebar">
    <div class="blogssidebar_main">
      <!-- qq 微信  知乎图标导航 -->
      <blog-ico></blog-ico>
      <!-- 搜索 -->
      <div class="blogssidebar_input">
        <div>
          <a-select
            show-search
            v-model:value="state.sntitle"
            placeholder="input search text"
            style="width: 200px"
            :show-arrow="false"
            :filter-option="false"
            @search="SearchTitle"
            @select="tiaozhuan"
          >
            >
            <a-select-option v-for="d in state.article1" :key="d.articleId">{{ d.title }}</a-select-option>
          </a-select>
        </div>
        <div></div>
      </div>
      <!-- -------------------------------- -->
      <!-- 说说显示描述内容 -->
      <div class="blogssidebar_describe">
        <div>
          <p>{{ state.UserTalk }}</p>
        </div>
      </div>
      <!-- ---------------------------------------- -->

      <!-- 站点统计框 -->
      <blog-information
        :ArticleCount="state.ArticleCount"
        :TextCount="state.textCount"
        :ReadCount="state.readCount"
        :Articledata="state.articledata.substring(0, 10)"
      ></blog-information>

      <div class="blogssidebar_count">
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
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary">{{ state.readCount }}</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { getCurrentInstance, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { article } from '../../api/article';
import { labels } from '../../api/labels';
import { sort } from '../../api/sort';
import BlogInformation from '../common/SidebarModule/BlogInformation.vue';

const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
const router = useRouter();
const store = useStore();

interface State {
  Labels: any,
  Sort: any,
  article: any,
  article1: any,
  UserTalk: string,
  User: any,
  ArticleCount: number,
  SortCount: number,
  LabelsCount: number,
  textCount: number,
  readCount: number,
  articledata: string,
  sntitle: string
}
const state: State = reactive({
  Labels: [],
  Sort: [],
  article: [],
  article1: [],
  UserTalk: "",
  User: [],
  ArticleCount: 0,
  SortCount: 0,
  LabelsCount: 0,
  textCount: 0,
  readCount: 0,
  articledata: "",
  sntitle: ""
});

const SearchTitle = async (title: string) => {
  await article.GetContainsAsync(title).then(res => {
    state.article1 = res.data;
  })

};

const tiaozhuan = async (title: any) => {

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

onMounted(async () => {
  await GetAllasync();
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>