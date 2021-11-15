<script lang="ts" setup>
import { onMounted } from 'vue'
import BlogCirclesSidebar from './components/Sidebar.vue'
import BlogSidebar from '@/components/raside/rAside.vue'
import { method, state } from './index'

onMounted(async () => {
  await method.GetTypeOrder()
})
</script>
<template>
  <div class="blogcircles">
    <blog-sidebar></blog-sidebar>
    <blog-circles-sidebar></blog-circles-sidebar>
    <div class="blogcircles_main animate__animated animate__fadeIn">
      <div class="grid blogcircles_content 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div class="BlogCircles-1" v-for="res in state.resultData" :key="res.id">
          <div class="BlogCircles-1-1">
            <img v-lazy="res.img" onerror="this.style.display='none'" />
          </div>
          <div class="BlogCircles-1-2">
            <div class="BlogCircles-1-2-1">
              <a @click="method.UrlSkip(res.url)">{{ res.title }}</a>
            </div>
            <div class="BlogCircles-1-2-2">{{ res.describe }}</div>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="blogcircles_page">
        <a-pagination
          size="small"
          @change="method.currentchange"
          :total="state.count"
          :pageSize="state.pagesize"
          show-quick-jumper
        />
      </div>
      <!-- end 分页-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

.blogcircles {
  position: fixed;

  @include w-h(100%, 100%);

  .blogcircles_main {
    @include initialize($w, 86%, 3.6%, null, $ml, null, #ffffff);

    @apply rounded-sm shadow;

    // 导航窗体小
    .BlogCircles-1 {
      @include w-h(210px, 110px);

      @apply m-2 mt-4 shadow rounded hover:bg-gray-200;

      .BlogCircles-1-1 {
        @include w-h(40%, 99%);

        @apply p-1 float-left;

        img {
          @include w-h(100%, 100%);

          @apply rounded-full  bg-gray-300;
        }
      }

      .BlogCircles-1-2 {
        @apply float-right;

        @include w-h(60%, 100%);

        .BlogCircles-1-2-1 {
          @apply text-base font-semibold p-1 pt-2;

          @include line-one;

          /* 动态下划线 */
          position: relative;
          text-decoration: none;

          &:hover {
            cursor: pointer;
          }

          &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #7f828f;
            transform: scaleX(0);
            visibility: hidden;
            transition: all 0.3s ease-in-out 0s;
            content: '';
          }

          &:hover::before {
            transform: scaleX(1);
            visibility: visible;
          }
        }

        .BlogCircles-1-2-2 {
          /* background-color: #00FFFF; */
          @apply px-1 pt-3;

          @include line-one;
        }
      }
    }

    .blogcircles_content {
      @include w-h(100%, 100%);

      overflow: auto;
    }

    .blogcircles_content::-webkit-scrollbar {
      display: none;
    }

    .blogcircles_page {
      @apply bg-white  p-1 shadow;
    }
  }
}
</style>
