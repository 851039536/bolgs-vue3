<!--
 * @Author: your name
 * @Date: 2021-09-14 11:42:20
 * @LastEditTime: 2021-11-24 10:09:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Blogs\components\BlogsContent.vue
-->
<script lang="ts" setup>
  import { RouterId } from '@/hooks/routers'
  import { IntArticle } from '@/api/data/interData'

  defineProps({
    resultData: {
      type: Array as () => Array<IntArticle>,
      required: true,
      default: () => []
    }
  })
  function getImageUrl(name) {
    return new URL(`/src/assets/img/${name}`, import.meta.url).href
  }
</script>
<template>
  <!-- 内容框 -->
  <div class="blogs-content" v-for="res in resultData" :key="res.id">
    <div class="blogs-content_div">
      <div class="blogs-content_img">
        <img v-lazy="getImageUrl(res.img)" />
      </div>
      <div class="blogs-content__frame">
        <p class="blogs-content__frame-1">
          <a @click="RouterId('/index/content', res.id)">{{ res.title }}</a>
        </p>
        <p class="blogs-content__frame-2">{{ res.sketch }}</p>
        <p class="blogs-content__frame-3">
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
  .blogs-content {
    @apply m-2;

    .blogs-content_div {
      @apply flex;

      @include initialize(100%, 155px, 10px, null, null, null, #ffffff);

      @apply shadow rounded-sm cursor-pointer;

      .blogs-content_img {
        @include w-h(25%, 100%);

        @apply p-2;

        img {
          @include w-h;
        }
      }

      .blogs-content__frame {
        @include w-h(75%, 100%);

        .blogs-content__frame-1 {
          @apply m-1 px-1 text-base font-semibold;

          @include line-one;
        }

        .blogs-content__frame-2 {
          @apply px-2 m-1 p-1;

          height: 52%;

          @apply text-sm font-thin;

          @include line-numbers(4);
        }

        .blogs-content__frame-3 {
          @apply m-1 px-1 font-semibold;

          span {
            @apply p-1;
          }
        }
      }
    }
  }
</style>
