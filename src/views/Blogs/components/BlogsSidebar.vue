<script lang="ts" setup>
import { getCurrentInstance, onMounted } from 'vue'
import { article, usertalk } from '@/api/index'
import { blogsSiList } from '../components/data'
import {} from '@/hooks/routers'
import BlogInformation from '@/components/sidebarModule/sstatistics/sStatistics.vue'
import BlogIco from '@/components/sidebarModule/sico/sIco.vue'
import SDescribe from '@/components/describe/sDescribe.vue'
import { resolve } from '@/hooks/routers'
const { proxy }: any = getCurrentInstance()

const SearchTitle = async (title: string) => {
  await article.GetContainsAsync(title).then((res) => {
    blogsSiList.article2 = res.data
  })
}
const tiaozhuan = async (id: any) => {
  const { href } = await resolve('/VmdHtml', id)
  window.open(href, '_blank')
}
const GetAllasync = async () => {
  //查询最新发布前十文章
  await article.GetFyTitleAsync(1, 1, true, true).then((res) => {
    blogsSiList.articledata = res.data[0].timeCreate
  })
  // 查询当前用户的说说
  await usertalk.GetUserTalkFirst().then((res) => {
    blogsSiList.UserTalk = res.data
  })
  proxy.$api
    .all([
      //查询文章总数
      proxy.$api.get('/api/SnArticle/GetCountAsync'),
      //查询标签
      proxy.$api.get('/api/SnSort/GetCountAsync'),
      //查询分类
      proxy.$api.get('/api/SnLabels/GetCountAsync'),
      // 内容字段数
      proxy.$api.get('/api/SnArticle/GetSumAsync?type=text'),
      // 阅读量
      proxy.$api.get('/api/SnArticle/GetSumAsync?type=read'),
    ])
    .then(
      proxy.$api.spread(
        (res6: any, res7: any, res8: any, res9: any, res10: any) => {
          blogsSiList.ArticleCount = res6.data
          blogsSiList.SortCount = res7.data
          blogsSiList.LabelsCount = res8.data
          blogsSiList.textCount = res9.data
          blogsSiList.readCount = res10.data
        }
      )
    )
    .catch((err: any) => {
      console.log(err)
    })
}

onMounted(async () => {
  await GetAllasync()
})
</script>

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
            style="width: 200px;"
            :show-arrow="false"
            :filter-option="false"
            @search="SearchTitle"
            @select="tiaozhuan"
          >
            >
            <a-select-option
              v-for="d in blogsSiList.article2"
              :key="d.articleId"
              >{{ d.title }}</a-select-option
            >
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../index.scss';
</style>
