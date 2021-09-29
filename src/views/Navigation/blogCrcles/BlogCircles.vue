<template>
  <div class="blogcircles">
    <blog-sidebar></blog-sidebar>
    <blog-circles-sidebar></blog-circles-sidebar>
    <div class="blogcircles_main animate__animated animate__fadeIn">
      <div
        class="grid blogcircles_content 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div
          class="BlogCircles-1"
          v-for="data in state.Result"
          :key="data.navId"
        >
          <div class="BlogCircles-1-1">
            <img :src="data.navImg" alt onerror="this.style.display='none'" />
            <!-- <img :src="data.navImg" onerror="this.src='../../assets/img/bb.jpg'" /> -->
          </div>
          <div class="BlogCircles-1-2">
            <div class="BlogCircles-1-2-1">
              <a @click="circles.urltest(data.navUrl)">{{ data.navTitle }}</a>
            </div>
            <div class="BlogCircles-1-2-2">{{ data.navText }}</div>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="">
        <a-pagination size="small" show-quick-jumper />
      </div>
      <!-- end 分页-->
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import BlogCirclesSidebar from './components/Sidebar.vue'
import BlogSidebar from '@/components/raside/rAside.vue'
import { circles, state } from './index'

export default defineComponent({
  components: {
    BlogCirclesSidebar,
  },
  setup() {
    onMounted(async () => {
      await circles.GetTypeOrder()
    })
    return {
      circles,
      state,
      BlogCirclesSidebar,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

.blogcircles {
  position: fixed;

  @include w-h(100%, 100%);

  .blogcircles_main {
    @include initialize($w, 99%, 3.6%, null, $ml, null, #ffffff);

    @apply rounded-sm shadow;

    // 导航窗体小
    .BlogCircles-1 {
      @include w-h(210px, 100px);

      @apply m-2 mt-4 shadow rounded hover:bg-gray-200;

      .BlogCircles-1-1 {
        @include w-h(40%, 99%);

        @apply p-1 float-left;

        img {
          @include w-h(100%, 100%);

          @apply rounded-full shadow;
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

    .BlogCircles-2 {
      @apply text-lg font-normal pl-2 bg-gray-50 shadow-sm;
    }

    .blogcircles_content {
      @include w-h(100%, 90%);

      overflow: auto;
    }

    .blogcircles_content::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
