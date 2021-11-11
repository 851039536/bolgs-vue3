<script lang="ts" setup>
import { getCurrentInstance, onMounted } from 'vue'
import { labels, sort, article } from '@/api/index'
import BlogIco from '@/components/sidebarModule/sico/sIco.vue'
import BlogInformation from '@/components/sidebarModule/sstatistics/sStatistics.vue'
import Stag from '@/components/sidebarModule/stag/sTag.vue'
import SDescribe from '@/components/describe/sDescribe.vue'
import SCategory from '@/components/sidebarModule/category/sCategory.vue'
import { dataList } from './data'
import { indexSidebar } from './index'
import STime from '@/components/sidebarModule/stime/sTime.vue'
import { resolve } from '@/hooks/routers'

const { proxy }: any = getCurrentInstance() //获取上下文实例，ctx=vue2的this
const tiaozhuan = async (id: number) => {
  const { href } = await resolve('/VmdHtml', id)
  window.open(href, '_blank')
}

const GetAllasync = async () => {
  await labels.GetAllAsync(true).then((res) => {
    dataList.labels = res.data
  })
  await sort.GetAllAsync(true).then((res) => {
    dataList.sort = res.data
  })
  await article.GetFyAsync(0, 'null', 1, 1, 'id', true, true).then((res) => {
    dataList.articledata = res.data[0].timeCreate
  })
  proxy.$api
    .all([
      // 查询当前用户的说说
      proxy.$api.get('/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true'),

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
        (res4: any, res6: any, res7: any, res8: any, res9: any, res10: any) => {
          dataList.UserTalk = res4.data
          dataList.ArticleCount = res6.data
          dataList.SortCount = res7.data
          dataList.LabelsCount = res8.data
          dataList.textCount = res9.data
          dataList.readCount = res10.data
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
  <div id="indexsidebar">
    <div class="index_s_main">
      <STime></STime>

      <!-- qq 微信  知乎图标导航 -->
      <blog-ico></blog-ico>
      <!-- end qq 微信  知乎图标导航 -->

      <!-- 搜索 -->
      <div class="index_s_input">
        <a-select
          show-search
          v-model:value="dataList.sntitle"
          placeholder="input search text"
          style="width: 200px;"
          :show-arrow="false"
          :filter-option="false"
          @search="indexSidebar.SearchTitle"
          @select="tiaozhuan"
        >
          >
          <a-select-option v-for="res in dataList.article1" :key="res.id">{{
            res.title
          }}</a-select-option>
        </a-select>
      </div>
      <!-- end 搜索 -->

      <s-describe :UserTalk="dataList.UserTalk"></s-describe>
      <Stag :result="dataList.labels"></Stag>
      <SCategory :result="dataList.sort"></SCategory>

      <!-- 站点统计框 -->
      <BlogInformation
        :ArticleCount="dataList.ArticleCount"
        :TextCount="dataList.textCount"
        :ReadCount="dataList.readCount"
        :Articledata="dataList.articledata.substring(0, 10)"
      ></BlogInformation>
      <!-- end 站点统计框 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
