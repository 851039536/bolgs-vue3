<!--
 * @Author: your name
 * @Date: 2021-09-14 11:42:20
 * @LastEditTime: 2021-10-21 14:58:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Blogs\components\BlogsContent.vue
-->
<script lang="ts" setup>
import { RouterId } from '@/hooks/routers'
import { IntArticle } from '@/api/data/interData'

defineProps({
  dataResult: {
    type: Array as () => Array<IntArticle>,
    required: true,
    default: () => [],
  },
})
async function jump(id: number) {
  await RouterId('/IndexText', id)
}
</script>
<template>
  <!-- 内容框 -->
  <div class="blogs_content" v-for="info in dataResult" :key="info.articleId">
    <div class="blogs_content_div">
      <div class="blogs_content_img">
        <img v-lazy="info.urlImg" />
      </div>
      <div class="blogs_content__frame">
        <p class="blogs_content__frame-1">
          <a @click="jump(info.articleId)">{{ info.title }}</a>
        </p>
        <p class="blogs_content__frame-2">{{ info.titleText }}</p>
        <p class="blogs_content__frame-3">
          <span>文章</span>
          <span>{{ info.read }} ℃</span>
          <span>赞 {{ info.give }}</span>
          <span>{{ info.timeCreate.substring(0, 10) }}</span>
        </p>
      </div>
    </div>
  </div>
  <!-- end 内容框  -->
</template>

<style lang="scss" scoped>
@import '../index.scss';
</style>
