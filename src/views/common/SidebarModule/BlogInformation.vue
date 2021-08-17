<!--
 * @Author: 站点信息模块
 * @Date: 2021-08-17 11:54:18
 * @LastEditTime: 2021-08-17 14:18:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\SidebarModule\BlogInformation.vue
-->
<template>
  <div class="BlogInformation">
    <div class="index-si-count-title">站点信息</div>
    <div class="index-si-count-div">
      <div class="index-si-count-frame">
        <div class="index-si-count-frame-title">文章数量:</div>
        <div class="index-si-count-frame-text">{{ ArticleCount }} 篇</div>
      </div>
      <div class="index-si-count-frame">
        <div class="index-si-count-frame-title">总字段数:</div>
        <div class="index-si-count-frame-text">{{ TextCount }} 字</div>
      </div>
      <div class="index-si-count-frame">
        <div class="index-si-count-frame-title">总访问量:</div>
        <div class="index-si-count-frame-text">{{ ReadCount }} ℃</div>
      </div>
      <div class="index-si-count-frame">
        <div class="index-si-count-frame-title">最后更新:</div>
        <div class="index-si-count-frame-text">{{ Articledata }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['ArticleCount', 'TextCount', 'ReadCount', 'Articledata'],
  }
</script>

<style lang="scss" scoped>
  .BlogInformation {
    width: 97%;
    @apply p-1 mb-2 shadow rounded m-auto cursor-pointer;
    @apply bg-white;

    .index-si-count-title {
      @apply p-1 m-1;
      @apply text-gray-900 text-base font-semibold bg-gray-200;
    }

    .index-si-count-div {
      @apply m-2;

      .index-si-count-frame {
        @apply flex justify-between mt-1;

        .index-si-count-frame-title {
          @apply p-1;
        }

        .index-si-count-frame-text {
          @apply p-1 bg-gray-100 rounded;
        }
      }
    }
  }
</style>