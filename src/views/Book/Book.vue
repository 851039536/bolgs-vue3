<!--
 * @Author: your name
 * @Date: 2020-12-26 14:05:13
 * @LastEditTime: 2021-08-03 09:02:17
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
        <p>
          <a>观影</a> / 总计 501 本月 5 今年 20
        </p>
      </div>
      <div class="Book_film">
        <span>
          <a>全部</a>
        </span>
        <span>
          <a>电影</a>
        </span>
        <span>
          <a>纪录片</a>
        </span>
        <span>
          <a>影视</a>
        </span>
        <span>
          <a>综艺</a>
        </span>
        <span>
          <a>美剧</a>
        </span>
      </div>
      <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div class="Book_film_text">
          <div class="Book_img">
            <img src="https://cdn.share-man.com/image/movie/141ab7d2481a9985cac80b5a299ae4df.webp" />
          </div>
          <div class="Book_film_title">小说家</div>
          <div class="Book_film_type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="Book_film_text">
          <div class="Book_img">
            <img src="https://cdn.share-man.com/image/movie/48bf012f0dfbfca9eaac51dee21f03d4.webp" />
          </div>
          <div class="Book_film_title">小说家</div>
          <div class="Book_film_type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="Book_film_text">
          <div class="Book_img">
            <img src="https://cdn.share-man.com/image/movie/922d59e9b95b1fad26ffa5e3d8013ef0.webp" />
          </div>
          <div class="Book_film_title">小说家</div>
          <div class="Book_film_type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>

        <div class="Book_film_text">
          <div class="Book_img">
            <img src="https://cdn.share-man.com/movie/hdzdy1.jpg" />
          </div>
          <div class="Book_film_title">小说家</div>
          <div class="Book_film_type">
            <div>类型</div>
            <div>评分:7.2</div>
            <div>主演 xxx xxx xxx</div>
            <div>2020-10-10 xxx</div>
          </div>
        </div>
      </div>
    </div>

    <!-- <a-empty /> -->
  </div>
</template>
<style lang="scss" scoped>
  @import "./Book.scss";
</style>