
<template>
  <div>
    <div class="ListContent animate__animated animate__fadeIn">
      <div class="ListContent_title">
        <p>最新内容 / 总计 10</p>
      </div>
      <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div class="ListContent_div">
          <div class="ListContent_text">
            <div>From 少年 To Jenny</div>
            <div>1111111111111111111111</div>
            <div>22222222222222222222222</div>
            <div>233333333333333333333333333</div>
            <div>222222222222222222222</div>
            <div>21111111111111</div>
            <div>23233333333333333</div>
            <div>22333333333333333333333333</div>
            <div>22222222222222222222222</div>
            <div>2222222222222222222222222</div>
            <div>2021-01-11</div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div>From 少年 To Jenny</div>
            <div>1111111111111111111111</div>
            <div>22222222222222222222222</div>
            <div>233333333333333333333333333</div>
            <div>222222222222222222222</div>
            <div>21111111111111</div>
            <div>23233333333333333</div>
            <div>22333333333333333333333333</div>
            <div>22222222222222222222222</div>
            <div>2222222222222222222222222</div>
            <div>2021-01-11</div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div>From 少年 To Jenny</div>
            <div>1111111111111111111111</div>
            <div>22222222222222222222222</div>
            <div>233333333333333333333333333</div>
            <div>222222222222222222222</div>
            <div>21111111111111</div>
            <div>23233333333333333</div>
            <div>22333333333333333333333333</div>
            <div>22222222222222222222222</div>
            <div>2222222222222222222222222</div>
            <div>2021-01-11</div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div>From 少年 To Jenny</div>
            <div>1111111111111111111111</div>
            <div>22222222222222222222222</div>
            <div>233333333333333333333333333</div>
            <div>222222222222222222222</div>
            <div>21111111111111</div>
            <div>23233333333333333</div>
            <div>22333333333333333333333333</div>
            <div>22222222222222222222222</div>
            <div>2222222222222222222222222</div>
            <div>2021-01-11</div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div>From 少年 To Jenny</div>
            <div>1111111111111111111111</div>
            <div>22222222222222222222222</div>
            <div>233333333333333333333333333</div>
            <div>222222222222222222222</div>
            <div>21111111111111</div>
            <div>23233333333333333</div>
            <div>22333333333333333333333333</div>
            <div>22222222222222222222222</div>
            <div>2222222222222222222222222</div>
            <div>2021-01-11</div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div>From 少年 To Jenny</div>
            <div>1111111111111111111111</div>
            <div>22222222222222222222222</div>
            <div>233333333333333333333333333</div>
            <div>222222222222222222222</div>
            <div>21111111111111</div>
            <div>23233333333333333</div>
            <div>22333333333333333333333333</div>
            <div>22222222222222222222222</div>
            <div>2222222222222222222222222</div>
            <div>2021-01-11</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: "ListContent",
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../styles/uitl.scss";

  .ListContent {
    @include initialize(94%, null, $Text_height, null, 3%, null, #f9f9f9);
    @apply shadow rounded-md;
    .ListContent_title {
      @include underline;
      margin-bottom: 6px;
      p {
        @apply px-1 py-2 m-2 text-lg font-medium;
      }
    }
    .ListContent_div {
      @apply m-3;
      @apply rounded-md shadow;
      background-color: #ffffff;
      .ListContent_text {
        color: #5f6c7b;
        @apply p-2 px-4 text-base;
      }
    }
  }
</style>