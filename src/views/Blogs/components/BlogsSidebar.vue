<script lang="ts" setup>
import { getCurrentInstance, onMounted } from 'vue'
import { article, usertalk } from '@/api/index'
import { blogsSiList } from '../components/data'
import {} from '@/hooks/routers'
import BlogInformation from '@/components/sidebarModule/sstatistics/sStatistics.vue'
import BlogIco from '@/components/sidebarModule/sico/sIco.vue'
import SDescribe from '@/components/describe/sDescribe.vue'
import { resolve, winUrl } from '@/hooks/routers'

const SearchTitle = async (name: string) => {
  blogsSiList.searchData = await article.GetContainsAsync(1, '转载', name, true)
}
const skip = async (id: any) => {
  const { href } = await resolve('/VmdHtml', id)
  await winUrl(href)
}
const GetApi = async () => {
  await article.GetFyAsync(0, 'null', 1, 1, 'data', true, true).then(res => {
    blogsSiList.articledata = res.data[0].timeCreate
  })
  blogsSiList.talk = await (await usertalk.GetUserTalkFirst()).data
  blogsSiList.ArticleCount = await (await article.GetCountAsync(1, '转载', true)).data
  blogsSiList.textCount = await (await article.GetSumAsync(1, 1, '转载', true)).data
  blogsSiList.readCount = await (await article.GetSumAsync(1, 2, '转载', true)).data
}

onMounted(async () => {
  await GetApi()
})
</script>

<template>
  <div id="blogssidebar">
    <div class="blogssidebar_main">
      <blog-ico></blog-ico>
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
            @select="skip"
          >
            >
            <a-select-option v-for="res in blogsSiList.searchData.data" :key="res.id">{{ res.title }}</a-select-option>
          </a-select>
        </div>
      </div>
      <!-- end 内容搜索 -->

      <s-describe :UserTalk="blogsSiList.talk"></s-describe>

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
