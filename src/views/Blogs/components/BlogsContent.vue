<!--
 * @Author: your name
 * @Date: 2021-09-14 11:42:20
 * @LastEditTime: 2021-11-16 10:44:34
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
    default: () => []
  }
})
async function skip(id: number) {
  await RouterId('/IndexText', id)
}
</script>
<template>
  <!-- 内容框 -->
  <div class="blogs_content" v-for="res in dataResult" :key="res.id">
    <div class="blogs_content_div">
      <div class="blogs_content_img">
        <!-- <img v-lazy="require(data.img)" /> -->
        <img v-lazy="require('/src/assets/img/' + res.img)" />
      </div>
      <div class="blogs_content__frame">
        <p class="blogs_content__frame-1">
          <a @click="skip(res.id)">{{ res.title }}</a>
        </p>
        <p class="blogs_content__frame-2">{{ res.sketch }}</p>
        <p class="blogs_content__frame-3">
          <span>文章</span>
          <span>{{ res.read }} ℃</span>
          <span>赞 {{ res.give }}</span>
          <span>{{ res.timeCreate.substring(0, 10) }}</span>
        </p>
      </div>
    </div>
  </div>
  <!-- end 内容框  -->
</template>

<style lang="scss" scoped>
@import '@/design/methodCss.scss';
@import '@/design/uitl';
.blogs_content {
  @apply m-2;

  .blogs_content_div {
    @apply flex;

    @include initialize(100%, 155px, 10px, null, null, null, #ffffff);

    @apply shadow rounded-sm cursor-pointer;

    .blogs_content_img {
      @include w-h(25%, 100%);

      @apply p-2;

      img {
        @include w-h;
      }
    }

    .blogs_content__frame {
      @include w-h(75%, 100%);

      .blogs_content__frame-1 {
        @apply m-1 px-1 text-base font-semibold;

        @include line-one;
      }

      .blogs_content__frame-2 {
        @apply px-2 m-1 p-1;

        height: 52%;

        @apply text-sm font-thin;

        @include line-numbers(4);
      }

      .blogs_content__frame-3 {
        @apply m-1 px-1 font-semibold;

        span {
          @apply p-1;
        }
      }
    }
  }
}
</style>
