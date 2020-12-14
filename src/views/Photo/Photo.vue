<template>
  <div>
    <!-- 左侧边栏 -->
    <Sidebarsn></Sidebarsn>
    <div class="photo animate__animated animate__fadeIn">
      <div class="photo-1">
        <p class="px-1 py-2 m-1">记忆</p>
      </div>
      <div
        class="inline-grid col-gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="m-1 photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>

        <div class="m-1 photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>
        <div class="m-1 photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>
        <div class="m-1 photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>
        <div class="m-1 photo-text">
          <img src="@/assets/img/ab.jpg" alt="" />
          <p>安静与喧嚣</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Photo",
}
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  .photo {
    @include initialize(75%, null, 60px, null, 22%, null, #ffffff);
    @include boxshow;
    .photo-1 {
      @include underline;
      margin-bottom: 20px;
    }
    .photo-text {
      position: relative;

      img {
        @include w-h(100%, 200px);
        margin: 3px auto;
        border-radius: 3px;
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