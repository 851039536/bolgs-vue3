<template>
  <div id="blogssidebar">
    <div class="blogssidebar_main">
      <!-- qq 微信  知乎图标导航 -->
      <blog-ico></blog-ico>
      <!-- end qq 微信  知乎图标导航  -->

      <!-- 内容搜索 -->
      <div class="blogssidebar_input">
        <div>
          <a-select
            show-search
            v-model:value="blogsSiList.sntitle"
            placeholder="input search text"
            style="width: 200px"
            :show-arrow="false"
            :filter-option="false"
            @search="SearchTitle"
            @select="tiaozhuan"
          >
            >
            <a-select-option v-for="d in blogsSiList.article2" :key="d.articleId">{{ d.title }}</a-select-option>
          </a-select>
        </div>
      </div>
      <!-- end 内容搜索 -->

      <!-- 描述内容 -->
      <s-describe :UserTalk="blogsSiList.UserTalk"></s-describe>
      <!-- end  描述内容-->

      <!-- 站点统计 -->
      <blog-information
        :ArticleCount="blogsSiList.ArticleCount"
        :TextCount="blogsSiList.textCount"
        :ReadCount="blogsSiList.readCount"
        :Articledata="blogsSiList.articledata.substring(0, 10)"
      ></blog-information>
      <!-- end 站点统计 -->

      <!-- <div class="blogssidebar_count">
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
      </div>-->
    </div>
  </div>
</template>


<script lang="ts">
import { getCurrentInstance, onMounted, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { article, usertalk } from '@/api/index';
import { blogsSiList } from "../components/data";

import BlogInformation from '../../../components/sidebarModule/sstatistics/sStatistics.vue';
import BlogIco from "../../../components/sidebarModule/sico/sIco.vue";
import SDescribe from "../../../components/describe/sDescribe.vue";

export default defineComponent({

  components: { BlogIco, BlogInformation, SDescribe },
  setup() {
    const { proxy }: any = getCurrentInstance();
    const router = useRouter();

    const SearchTitle = async (title: string) => {
      await article.GetContainsAsync(title).then(res => {
        blogsSiList.article2 = res.data;
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


      //查询最新发布前十文章
      await article.GetFyTitleAsync(1, 1).then(res => {
        blogsSiList.articledata = res.data[0].timeCreate;
      });

      // 查询当前用户的说说
      await usertalk.GetUserTalkFirst().then(res => {
        blogsSiList.UserTalk = res.data;
      });

      proxy.$api
        .all([
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
              res6: any,
              res7: any,
              res8: any,
              res9: any,
              res10: any
            ) => {

              blogsSiList.ArticleCount = res6.data;
              blogsSiList.SortCount = res7.data;
              blogsSiList.LabelsCount = res8.data;
              blogsSiList.textCount = res9.data;
              blogsSiList.readCount = res10.data;
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
    return {
      blogsSiList,
      SearchTitle,
      tiaozhuan,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../index.scss";
</style>