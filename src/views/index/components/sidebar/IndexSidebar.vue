<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { labels, sort, article, usertalk } from '@/api/index'
  import BlogIco from '@/components/sidebarModule/sico/sIco.vue'
  import BlogInformation from '@/components/sidebarModule/sstatistics/sStatistics.vue'
  import Stag from '@/components/sidebarModule/stag/sTag.vue'
  import SDescribe from '@/components/describe/sDescribe.vue'
  import SCategory from '@/components/sidebarModule/category/sCategory.vue'
  import { dataList } from './data'
  import { indexSidebar } from './index'
  import STime from '@/components/sidebarModule/stime/sTime.vue'
  import { winUrl } from '@/hooks/routers'

  const skip = async (id: number) => {
    winUrl('/VmdHtml?id=' + id)
  }
  const GetApi = async () => {
    dataList.labels = await (await labels.GetAllAsync(true)).data
    dataList.sort = await (await sort.GetAllAsync(true)).data
    dataList.articledata = await (await article.GetFyAsync(0, 'null', 1, 1, 'id', true, true)).data[0].timeCreate
    dataList.UserTalk = await (await usertalk.GetUserTalkFirst()).data
    dataList.ArticleCount = await (await article.GetCountAsync(0, 'null', true)).data
    dataList.textCount = await (await article.GetSumAsync(0, 1, 'null', true)).data
    dataList.readCount = await (await article.GetSumAsync(0, 2, 'null', true)).data
  }

  onMounted(async () => {
    await GetApi()
  })
</script>
<template>
  <div id="indexsidebar">
    <div class="index_s_main">
      <STime></STime>
      <blog-ico></blog-ico>

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
          @select="skip"
        >
          >
          <a-select-option v-for="res in dataList.article1" :key="res.id">{{ res.title }}</a-select-option>
        </a-select>

        <a-button class="a_but">搜一搜</a-button>
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
