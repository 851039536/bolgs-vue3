<!--
 * @Author: your name
 * @Date: 2020-12-26 14:05:13
 * @LastEditTime: 2021-04-27 17:40:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Book\Index.vue
-->

<template>
  <div class="Book">
    <Sidebarsn></Sidebarsn>
    <index-sidebar></index-sidebar>
    <div class="Book_text">
      <div class="Book_title">
        <p><a>观影</a> / 总计 501 本月 5 今年 20</p>
      </div>
      <div class="Book_film">
        <span>全部</span><span>电影</span><span>纪录片</span><span>影视</span>
      </div>
      <div class="Book_film_text">
        <div class="Book_img">
          <img
            src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp"
          />
        </div>
        <div class="Book_film_title">小说家</div>
        <div>
          <div>类型</div>
          <div>评分</div>
          <div>主演</div>
          <div>时间</div>
        </div>
      </div>
    </div>

    <!-- <a-empty /> -->
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .Book {
    position: fixed;
    @include w-h(100%, 100%);
    .Book_text {
      @include initialize($w, 94%, $Text_height, null, $ml, null, #ffffff);
      @apply shadow-sm rounded-sm;

      .Book_title {
        @include underline;
        margin-bottom: 6px;
        p {
          @apply px-1 py-2 m-2 text-base font-medium;
        }
      }
      .Book_film {
        background-color: aqua;
        @apply py-2;
        span {
          @apply px-3 text-base;
        }
      }
      .Book_film_text {
        @apply m-1;
        background-color: blueviolet;
        width: 170px;
        .Book_film_title {
        }
      }
    }
  }
</style>