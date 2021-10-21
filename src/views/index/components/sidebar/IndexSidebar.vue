<script lang="ts" setup>
import { getCurrentInstance, onMounted } from 'vue'
import { labels, sort } from '@/api/index'
import BlogIco from '@/components/sidebarModule/sico/sIco.vue'
import BlogInformation from '@/components/sidebarModule/sstatistics/sStatistics.vue'
import BlogTag from '@/components/sidebarModule/stag/sTag.vue'
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
  //查询标签
  await labels.GetAllAsync(true).then((res) => {
    dataList.Labels = res.data
  })
  //查询分类
  await sort.GetAllAsync(true).then((res) => {
    dataList.Sort = res.data
  })
  proxy.$api
    .all([
      //查询最新发布前十文章
      proxy.$api.get(
        '/api/SnArticle/GetFyTitleAsync?pageIndex=1&pageSize=10&isDesc=true&cache=true'
      ),
      // 查询当前用户的说说
      proxy.$api.get('/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true'),
      //查询当前用户信息
      proxy.$api.get('/api/SnUser/GetByIdAsync?id=4&cache=true'),
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
          dataList.articledata = res3.data[0].timeCreate
          dataList.UserTalk = res4.data
          dataList.User = res5.data
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
          <a-select-option v-for="d in dataList.article1" :key="d.articleId">{{
            d.title
          }}</a-select-option>
        </a-select>
      </div>
      <!-- end 搜索 -->

      <!-- 描述内容 -->
      <s-describe :UserTalk="dataList.UserTalk"></s-describe>
      <!-- end 描述内容 -->

      <!-- 标签框内容 -->
      <blog-tag :result="dataList.Labels"></blog-tag>
      <!-- end 标签框内容 -->

      <!-- 分类内容框 -->
      <SCategory :result="dataList.Sort"></SCategory>
      <!-- end 分类内容框  -->

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
