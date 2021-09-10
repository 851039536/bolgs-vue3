<template>
  <div class="blogcircles">
    <blog-sidebar></blog-sidebar>
    <blog-circles-sidebar></blog-circles-sidebar>
    <div class="blogcircles_main animate__animated animate__fadeIn">
      <!-- <div class="BlogCircles-2">博客圈</div> -->
      <div
        class="grid blogcircles_content 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="BlogCircles-1" v-for="data in tt" :key="data.navId">
          <div class="BlogCircles-1-1">
            <img :src="data.navImg" alt onerror="this.style.display='none'" />
            <!-- <img :src="data.navImg" onerror="this.src='../../assets/img/bb.jpg'" /> -->
          </div>
          <div class="BlogCircles-1-2">
            <div class="BlogCircles-1-2-1">
              <a @click="urltest(da.navUrl)">{{ data.navTitle }}</a>
            </div>
            <div class="BlogCircles-1-2-2">{{ data.navText }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { navigation } from '../../api/navigation';
import { reactive, toRefs, onMounted } from "vue";
import BlogCirclesSidebar from './BlogCirclesSidebar.vue';
import BlogSidebar from '../common/BlogSidebar.vue';
export default {
  components: { BlogCirclesSidebar, BlogSidebar },
  name: "BlogCircles",
  setup() {
    const state = reactive({
      text: [],
    });

    const GetTypeOrderAsync = async () => {

      await navigation.GetTypeOrderAsync("博客圈").then((res: any) => {
        state.text = res.data;
      })

    };
    const urltest = (url: string) => {
      window.open(url);
    };
    onMounted(async () => {
      await GetTypeOrderAsync();
    });
    return { ...toRefs(state), GetTypeOrderAsync, urltest };
  },


};
</script>

<style lang="scss" scoped>
@import "../../design/com";
@import "../../design/uitl";

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
          @include line-ome;
          /*动态下划线*/
          position: relative;
          text-decoration: none;

          &:hover {
            cursor: pointer;
          }

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #7f828f;
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out 0s;
          }

          &:hover::before {
            visibility: visible;
            transform: scaleX(1);
          }
        }

        .BlogCircles-1-2-2 {
          /*background-color: #00FFFF;*/
          @apply px-1 pt-3;
          @include line-ome;
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