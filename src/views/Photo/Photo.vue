<!--
 * @Author: 图册
 * @Date: 2020-12-11 12:16:33
 * @LastEditTime: 2021-01-03 14:59:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Photo\Photo.vue
-->
<template>
  <div>
    <!-- 左侧边栏 -->
    <Sidebarsn></Sidebarsn>
    <PhoSidebar></PhoSidebar>
    <div class="photo animate__animated animate__fadeIn">
      <div class="photo-1">
        <p class="px-1 py-2 m-1">记忆</p>
      </div>
      <div
        class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>

        <div class="photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>
        <div class="photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>
        <div class="photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>
        <div class="photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PhoSidebar from './PhoSidebar.vue'
  export default {
    components: { PhoSidebar },
    name: "Photo",
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  .photo {
    @include initialize($w, null, 60px, null, $ml, null, #ffffff);
    @apply shadow rounded-sm;
    .photo-1 {
      @include underline;
      margin-bottom: 20px;
    }
    .photo-text {
      position: relative;
      @apply m-1;

      img {
        @include w-h(100%, 200px);
        margin: 3px auto;
        @apply shadow rounded-sm;
        transition: 0.3s linear;
      }
      /*图片模糊*/
      & :hover {
        @include img-dim;
      }
      p {
        position: absolute;
        @include excursion(84%, null, 5%, null);
      }
    }
  }
</style>